import { NextRequest, NextResponse } from 'next/server';
import {
  CONTACT_REQUIREMENTS,
  ContactApiResponse,
  ContactFormData,
  ContactRequirement,
} from '@/types/contact';
import { getResendClient, getFromAddress, getContactToEmail } from '@/lib/email/resend';
import {
  generateAdminNotificationHtml,
  generateAdminNotificationPlainText,
} from '@/lib/email/templates/adminNotification';
import {
  generateCustomerConfirmationHtml,
  generateCustomerConfirmationPlainText,
} from '@/lib/email/templates/customerConfirmation';

// In-memory sliding-window rate limit store (10 minutes, max 5 requests per IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

export async function POST(req: NextRequest): Promise<NextResponse<ContactApiResponse>> {
  try {
    // 1. Client IP Resolution for Rate Limiting & Audit
    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    // 2. Sliding Window Rate Limiting
    const now = Date.now();
    const rateLimit = rateLimitMap.get(clientIp);
    if (rateLimit) {
      if (now < rateLimit.resetTime) {
        if (rateLimit.count >= MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json(
            {
              success: false,
              message:
                'Too many submissions. Please wait a few minutes or contact us directly via phone or WhatsApp.',
            },
            { status: 429 }
          );
        }
        rateLimit.count += 1;
      } else {
        rateLimitMap.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
      }
    } else {
      rateLimitMap.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    }

    // 3. Parse JSON Body
    let body: Partial<ContactFormData & { budget?: string }>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, message: 'Invalid JSON request payload.' },
        { status: 400 }
      );
    }

    // 4. Honeypot Anti-Spam Trap
    if (body.website_url && body.website_url.trim().length > 0) {
      // Silently return success to bot without executing further actions
      return NextResponse.json(
        { success: true, message: 'Your message has been sent successfully.' },
        { status: 200 }
      );
    }

    const {
      fullName = '',
      email = '',
      phone = '',
      requirement = '',
      location = '',
      budget = '',
      message = '',
      turnstileToken = '',
    } = body;

    // 5. Cloudflare Turnstile Server-Side Verification
    if (!turnstileToken || typeof turnstileToken !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Security verification is required before sending.' },
        { status: 400 }
      );
    }

    const turnstileSecret =
      process.env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA';

    const turnstileFormData = new URLSearchParams();
    turnstileFormData.append('secret', turnstileSecret);
    turnstileFormData.append('response', turnstileToken);
    if (clientIp) {
      turnstileFormData.append('remoteip', clientIp);
    }

    try {
      const turnstileRes = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: turnstileFormData.toString(),
        }
      );

      const turnstileData = await turnstileRes.json();

      if (!turnstileData.success) {
        return NextResponse.json(
          {
            success: false,
            message: 'Security verification failed or expired. Please retry the security check.',
          },
          { status: 403 }
        );
      }
    } catch (err) {
      console.error('[Turnstile Verification Error]:', err);
      return NextResponse.json(
        {
          success: false,
          message: 'Unable to verify security challenge at this time. Please try again.',
        },
        { status: 502 }
      );
    }

    // 6. Server-Side Field Validation & Sanitization
    const errors: Record<string, string> = {};

    const cleanName = fullName.trim();
    if (!cleanName) {
      errors.fullName = 'Full name is required.';
    } else if (cleanName.length < 2 || cleanName.length > 80) {
      errors.fullName = 'Name must be between 2 and 80 characters.';
    }

    const cleanEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail) {
      errors.email = 'Email address is required.';
    } else if (!emailRegex.test(cleanEmail) || cleanEmail.length > 100) {
      errors.email = 'Please provide a valid email address.';
    } else if (/[\r\n]/.test(cleanEmail)) {
      errors.email = 'Invalid characters detected in email.';
    }

    const cleanPhone = phone.trim();
    const digitsOnly = cleanPhone.replace(/\D/g, '');
    if (!cleanPhone) {
      errors.phone = 'Phone number is required.';
    } else if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      errors.phone = 'Please enter a valid phone number (7 to 15 digits).';
    }

    if (!requirement) {
      errors.requirement = 'Please select a requirement.';
    } else if (!CONTACT_REQUIREMENTS.includes(requirement as ContactRequirement)) {
      errors.requirement = 'Invalid requirement category selected.';
    }

    const cleanMessage = message.trim();
    if (!cleanMessage) {
      errors.message = 'Please share a brief message about your requirement.';
    } else if (cleanMessage.length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    } else if (cleanMessage.length > 1000) {
      errors.message = 'Message cannot exceed 1000 characters.';
    }

    const cleanLocation = location ? location.trim().slice(0, 120) : '';
    const cleanBudget = budget ? budget.trim().slice(0, 80) : '';

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please resolve the highlighted form errors.',
          errors,
        },
        { status: 400 }
      );
    }

    // 7. Format Date for IST
    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const fromAddress = getFromAddress();
    const adminRecipient = getContactToEmail();

    // 8. Dispatch Email A: Admin Enquiry Notification
    const resend = getResendClient();
    let isCustomerEmailSent = false;

    if (resend) {
      const adminEmailPayload = {
        from: fromAddress,
        to: [adminRecipient],
        replyTo: cleanEmail,
        subject: `New Property Enquiry | SAI PRESTIGE`,
        html: generateAdminNotificationHtml({
          fullName: cleanName,
          email: cleanEmail,
          phone: cleanPhone,
          requirement,
          location: cleanLocation,
          budget: cleanBudget,
          message: cleanMessage,
          submittedAt,
        }),
        text: generateAdminNotificationPlainText({
          fullName: cleanName,
          email: cleanEmail,
          phone: cleanPhone,
          requirement,
          location: cleanLocation,
          budget: cleanBudget,
          message: cleanMessage,
          submittedAt,
        }),
      };

      const adminResult = await resend.emails.send(adminEmailPayload);

      if (adminResult.error) {
        console.error('[Resend Admin Send Error]:', {
          message: adminResult.error.message,
          name: adminResult.error.name,
        });
        return NextResponse.json(
          {
            success: false,
            message:
              "We couldn't process your enquiry email at this moment. Please reach out to us directly by phone or WhatsApp.",
          },
          { status: 500 }
        );
      }

      console.log('[Resend Admin Notification Dispatched]: ID', adminResult.data?.id);

      // 9. Dispatch Email B: Customer Enquiry Confirmation
      // Strict verification: recipient is ALWAYS the actual validated customer email
      try {
        const customerEmailPayload = {
          from: fromAddress,
          to: [cleanEmail],
          replyTo: adminRecipient,
          subject: "We've Received Your Enquiry | SAI PRESTIGE",
          html: generateCustomerConfirmationHtml({
            fullName: cleanName,
            email: cleanEmail,
            requirement,
            location: cleanLocation,
            message: cleanMessage,
            submittedAt,
          }),
          text: generateCustomerConfirmationPlainText({
            fullName: cleanName,
            email: cleanEmail,
            requirement,
            location: cleanLocation,
            message: cleanMessage,
            submittedAt,
          }),
        };

        const customerResult = await resend.emails.send(customerEmailPayload);

        if (customerResult.error) {
          console.error('[Resend Customer Confirmation Failed]:', {
            message: customerResult.error.message,
            name: customerResult.error.name,
          });
          // Do not fail the whole form if admin received the lead, but record status
          isCustomerEmailSent = false;
        } else if (customerResult.data?.id) {
          isCustomerEmailSent = true;
          console.log('[Resend Customer Confirmation Dispatched]: ID', customerResult.data.id);
        }
      } catch (custErr) {
        console.error('[Resend Customer Confirmation Exception]:', custErr);
        isCustomerEmailSent = false;
      }
    } else {
      console.warn(
        '[Resend Warning]: RESEND_API_KEY is not configured. Running in development dry-run mode.'
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting SAI PRESTIGE. Your enquiry has been received.',
        customerConfirmationSent: isCustomerEmailSent,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('[Contact API Unexpected Error]:', err);
    return NextResponse.json(
      {
        success: false,
        message:
          'An unexpected server error occurred. Please reach out to our advisory team by phone or WhatsApp.',
      },
      { status: 500 }
    );
  }
}
