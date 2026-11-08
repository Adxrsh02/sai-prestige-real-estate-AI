'use client';

import React, { useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { CONTACT_REQUIREMENTS, ContactRequirement } from '@/types/contact';
import { TurnstileWidget, TurnstileWidgetRef } from './TurnstileWidget';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, AlertCircle, Send, Loader2 } from 'lucide-react';
import { trackEnquiryConversion } from '@/lib/analytics';

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  requirement: ContactRequirement | '';
  location: string;
  message: string;
  website_url: string; // Honeypot
}

const initialValues: FormValues = {
  fullName: '',
  email: '',
  phone: '',
  requirement: '',
  location: '',
  message: '',
  website_url: '',
};

export const ContactForm: React.FC = () => {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileError, setTurnstileError] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const turnstileRef = useRef<TurnstileWidgetRef>(null);

  // Validate a single field
  const validateField = (name: keyof FormValues, value: string): string => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Please enter your full name.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        if (value.trim().length > 80) return 'Name cannot exceed 80 characters.';
        return '';

      case 'email':
        if (!value.trim()) return 'Please enter your email address.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please provide a valid email address.';
        return '';

      case 'phone':
        if (!value.trim()) return 'Please enter your phone number.';
        const digits = value.replace(/\D/g, '');
        if (digits.length < 7 || digits.length > 15) {
          return 'Please enter a valid phone number (7 to 15 digits).';
        }
        return '';

      case 'requirement':
        if (!value) return 'Please choose a property requirement.';
        return '';

      case 'message':
        if (!value.trim()) return 'Please describe your property requirement or questions.';
        if (value.trim().length < 10) return 'Please enter at least 10 characters.';
        if (value.trim().length > 1000) return 'Message cannot exceed 1000 characters.';
        return '';

      default:
        return '';
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name as keyof FormValues, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormValues, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
    setTurnstileError(null);
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken(null);
    setTurnstileError('Verification expired. Please complete the security check again.');
  }, []);

  const handleTurnstileError = useCallback(() => {
    setTurnstileToken(null);
    setTurnstileError('Security verification failed. Please try again.');
  }, []);

  // Determine if form is valid for client-side enabling
  const isFormValid =
    values.fullName.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) &&
    values.phone.replace(/\D/g, '').length >= 7 &&
    values.requirement !== '' &&
    values.message.trim().length >= 10 &&
    turnstileToken !== null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger full validation across all fields
    const newErrors: Record<string, string> = {
      fullName: validateField('fullName', values.fullName),
      email: validateField('email', values.email),
      phone: validateField('phone', values.phone),
      requirement: validateField('requirement', values.requirement),
      message: validateField('message', values.message),
    };

    setTouched({
      fullName: true,
      email: true,
      phone: true,
      requirement: true,
      location: true,
      message: true,
    });

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => Boolean(err));

    if (hasErrors) {
      setStatus('error');
      setServerMessage('Please complete all required fields correctly before sending.');
      return;
    }

    if (!turnstileToken) {
      setStatus('error');
      setTurnstileError('Please complete the security verification challenge before submitting.');
      return;
    }

    setStatus('submitting');
    setServerMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          phone: values.phone,
          requirement: values.requirement,
          location: values.location,
          message: values.message,
          website_url: values.website_url, // Honeypot
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setServerMessage(data.message || 'Your message has been sent successfully.');
        const submittedReq = values.requirement || 'General Enquiry';
        trackEnquiryConversion(submittedReq);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('enquiry_submitted', 'true');
        }
        setValues(initialValues);
        setTouched({});
        setErrors({});
        setTurnstileToken(null);
        if (turnstileRef.current) {
          turnstileRef.current.reset();
        }
        // Smoothly transition customer to dedicated luxury confirmation experience
        setTimeout(() => {
          router.push('/contact/thank-you');
        }, 1200);
      } else {
        setStatus('error');
        setServerMessage(
          data.message ||
            "We couldn't send your message right now. Please try again or contact us directly by phone or WhatsApp."
        );
        if (data.errors) {
          setErrors(data.errors);
        }
        // Reset turnstile token to require a fresh verification token
        setTurnstileToken(null);
        if (turnstileRef.current) {
          turnstileRef.current.reset();
        }
      }
    } catch (err) {
      console.error('[Contact Submission Exception]:', err);
      setStatus('error');
      setServerMessage(
        "Network connection issue. Please verify your connection or reach out directly by phone or WhatsApp."
      );
      setTurnstileToken(null);
      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }
    }
  };

  return (
    <div className="bg-white rounded-xl border border-[var(--color-neutral-200)]/90 p-6 sm:p-8 lg:p-10 shadow-[var(--shadow-premium-sm)]">
      {/* Form Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-light text-[var(--color-prestige-charcoal)] tracking-tight">
          Tell Us What You&apos;re Looking For.
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[var(--color-neutral-600)] leading-relaxed">
          Share a few details about your property requirements. Our team will receive your enquiry
          and use the information to understand how we may assist you.
        </p>
      </div>

      {/* Submission Feedback Alert */}
      <div aria-live="polite" className="mb-6">
        {status === 'success' && (
          <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">Your message has been sent successfully.</p>
              <p className="text-xs sm:text-sm text-emerald-700 mt-1">
                {serverMessage ||
                  'Thank you for contacting SAI PRESTIGE. We have received your property requirements and will review them attentively.'}
              </p>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">Submission could not be completed.</p>
              <p className="text-xs sm:text-sm text-red-700 mt-1">
                {serverMessage ||
                  "Please resolve the issues highlighted below or contact our team directly at +91 93264 33965."}
              </p>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Anti-spam Honeypot Field (invisible to regular users) */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <label htmlFor="website_url">Website URL (leave blank)</label>
          <input
            type="text"
            id="website_url"
            name="website_url"
            value={values.website_url}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Full Name & Email Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs uppercase tracking-wider font-medium text-[var(--color-prestige-charcoal)] mb-2"
            >
              Full Name <span className="text-[var(--color-prestige-gold)]">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your full name"
              aria-required="true"
              aria-invalid={touched.fullName && Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              className={`w-full h-11 px-3.5 text-sm rounded-lg border bg-[var(--color-neutral-50)]/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-prestige-gold)] ${
                touched.fullName && errors.fullName
                  ? 'border-red-400 focus:ring-red-400'
                  : 'border-[var(--color-neutral-200)] hover:border-[var(--color-neutral-300)]'
              }`}
            />
            {touched.fullName && errors.fullName && (
              <p id="fullName-error" className="mt-1.5 text-xs text-red-600">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-wider font-medium text-[var(--color-prestige-charcoal)] mb-2"
            >
              Email Address <span className="text-[var(--color-prestige-gold)]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="you@example.com"
              aria-required="true"
              aria-invalid={touched.email && Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full h-11 px-3.5 text-sm rounded-lg border bg-[var(--color-neutral-50)]/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-prestige-gold)] ${
                touched.email && errors.email
                  ? 'border-red-400 focus:ring-red-400'
                  : 'border-[var(--color-neutral-200)] hover:border-[var(--color-neutral-300)]'
              }`}
            />
            {touched.email && errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-600">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Phone Number & Requirement */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs uppercase tracking-wider font-medium text-[var(--color-prestige-charcoal)] mb-2"
            >
              Phone Number <span className="text-[var(--color-prestige-gold)]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="+91 93264 33965"
              aria-required="true"
              aria-invalid={touched.phone && Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={`w-full h-11 px-3.5 text-sm rounded-lg border bg-[var(--color-neutral-50)]/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-prestige-gold)] ${
                touched.phone && errors.phone
                  ? 'border-red-400 focus:ring-red-400'
                  : 'border-[var(--color-neutral-200)] hover:border-[var(--color-neutral-300)]'
              }`}
            />
            {touched.phone && errors.phone && (
              <p id="phone-error" className="mt-1.5 text-xs text-red-600">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Property Requirement */}
          <div>
            <label
              htmlFor="requirement"
              className="block text-xs uppercase tracking-wider font-medium text-[var(--color-prestige-charcoal)] mb-2"
            >
              I&apos;m Interested In <span className="text-[var(--color-prestige-gold)]">*</span>
            </label>
            <div className="relative">
              <select
                id="requirement"
                name="requirement"
                value={values.requirement}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-required="true"
                aria-invalid={touched.requirement && Boolean(errors.requirement)}
                aria-describedby={errors.requirement ? 'requirement-error' : undefined}
                className={`w-full h-11 px-3.5 text-sm rounded-lg border bg-[var(--color-neutral-50)]/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-prestige-gold)] appearance-none cursor-pointer ${
                  touched.requirement && errors.requirement
                    ? 'border-red-400 focus:ring-red-400'
                    : 'border-[var(--color-neutral-200)] hover:border-[var(--color-neutral-300)]'
                }`}
              >
                <option value="" disabled>
                  Select a property requirement...
                </option>
                {CONTACT_REQUIREMENTS.map((req) => (
                  <option key={req} value={req}>
                    {req}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[var(--color-neutral-500)]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {touched.requirement && errors.requirement && (
              <p id="requirement-error" className="mt-1.5 text-xs text-red-600">
                {errors.requirement}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Preferred Location (Optional) */}
        <div>
          <label
            htmlFor="location"
            className="block text-xs uppercase tracking-wider font-medium text-[var(--color-prestige-charcoal)] mb-2"
          >
            Preferred Location <span className="text-[var(--color-neutral-400)] normal-case font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={values.location}
            onChange={handleChange}
            placeholder="e.g. Ulwe, Sanpada, Vashi, Pushpak Nagar"
            className="w-full h-11 px-3.5 text-sm rounded-lg border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)]/50 hover:border-[var(--color-neutral-300)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-prestige-gold)] transition-colors"
          />
        </div>

        {/* Row 4: Message Textarea */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-wider font-medium text-[var(--color-prestige-charcoal)]"
            >
              Tell Us About Your Requirements <span className="text-[var(--color-prestige-gold)]">*</span>
            </label>
            <span className="text-[11px] text-[var(--color-neutral-400)]">
              {values.message.length}/1000
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={1000}
            placeholder="Describe the property you're looking for, your preferred budget, configuration (e.g. 2 BHK, 3 BHK), or specific questions..."
            aria-required="true"
            aria-invalid={touched.message && Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`w-full p-3.5 text-sm rounded-lg border bg-[var(--color-neutral-50)]/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-prestige-gold)] resize-y ${
              touched.message && errors.message
                ? 'border-red-400 focus:ring-red-400'
                : 'border-[var(--color-neutral-200)] hover:border-[var(--color-neutral-300)]'
            }`}
          />
          {touched.message && errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-red-600">
              {errors.message}
            </p>
          )}
        </div>

        {/* Cloudflare Turnstile Widget (Directly above the Send Message button) */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs uppercase tracking-wider font-medium text-[var(--color-neutral-600)]">
              Security Verification
            </span>
            {turnstileToken && (
              <span className="text-xs text-emerald-600 flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verified
              </span>
            )}
          </div>
          
          <TurnstileWidget
            ref={turnstileRef}
            onVerify={handleTurnstileVerify}
            onExpire={handleTurnstileExpire}
            onError={handleTurnstileError}
          />

          {turnstileError && (
            <p className="mt-1 text-xs text-red-600">
              {turnstileError}
            </p>
          )}
        </div>

        {/* Submit Action Button */}
        <div className="pt-3">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={!isFormValid || status === 'submitting'}
            className="font-medium tracking-wide"
          >
            {status === 'submitting' ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Message...</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </span>
            )}
          </Button>

          <p className="mt-3 text-[11px] text-center text-[var(--color-neutral-500)] leading-relaxed">
            By submitting this form, you acknowledge that your contact details will be used solely by
            SAI PRESTIGE to respond to your real estate enquiry.
          </p>
        </div>
      </form>
    </div>
  );
};
