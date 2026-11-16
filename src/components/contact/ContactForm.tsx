'use client';

import React, { useState } from 'react';
import { CONTACT_REQUIREMENTS, ContactRequirement } from '@/types/contact';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { AlertCircle, ExternalLink } from 'lucide-react';
import { trackEnquiryConversion } from '@/lib/analytics';

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  requirement: ContactRequirement | '';
  location: string;
  message: string;
}

const initialValues: FormValues = {
  fullName: '',
  email: '',
  phone: '',
  requirement: '',
  location: '',
  message: '',
};

export const ContactForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [whatsappStatus, setWhatsappStatus] = useState<'idle' | 'opened' | 'error'>('idle');
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);

  // Validate a single field
  const validateField = (name: keyof FormValues, value: string): string => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Please enter your full name.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        if (value.trim().length > 80) return 'Name cannot exceed 80 characters.';
        return '';

      case 'email': {
        if (!value.trim()) return 'Please enter your email address.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please provide a valid email address.';
        return '';
      }

      case 'phone': {
        if (!value.trim()) return 'Please enter your phone number.';
        const digits = value.replace(/\D/g, '');
        if (digits.length < 7 || digits.length > 15) {
          return 'Please enter a valid phone number (7 to 15 digits).';
        }
        return '';
      }

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

  // Determine if form is client-side valid
  const isFormValid =
    values.fullName.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) &&
    values.phone.replace(/\D/g, '').length >= 7 &&
    values.requirement !== '' &&
    values.message.trim().length >= 10;

  // Build the formatted WhatsApp message
  const createWhatsAppUrl = (formValues: FormValues): string => {
    const lines: string[] = [
      'Hello SAI PRESTIGE Team!',
      '',
      'I would like to enquire about your real estate services.',
      '',
      '*CUSTOMER DETAILS*',
      '',
      `Full Name: ${formValues.fullName.trim()}`,
      `Email Address: ${formValues.email.trim()}`,
      `Phone Number: ${formValues.phone.trim()}`,
      '',
      '*PROPERTY REQUIREMENTS*',
      '',
      `Interested In: ${formValues.requirement.trim()}`,
    ];

    if (formValues.location && formValues.location.trim()) {
      lines.push(`Preferred Location: ${formValues.location.trim()}`);
    }

    lines.push(
      `Additional Requirements: ${formValues.message.trim()}`,
      '',
      'I look forward to hearing from your team.',
      '',
      'Thank you!',
      formValues.fullName.trim()
    );

    const fullMessage = lines.join('\n');
    return `https://wa.me/919326433965?text=${encodeURIComponent(fullMessage)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
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
      setWhatsappStatus('error');
      return;
    }

    const url = createWhatsAppUrl(values);
    setGeneratedUrl(url);
    setWhatsappStatus('opened');

    // Telemetry conversion tracking (non-blocking, PII-free)
    try {
      trackEnquiryConversion(values.requirement || 'General Enquiry');
    } catch {
      // Ignore telemetry failure
    }

    // Launch WhatsApp Click-to-Chat in a new window/tab
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
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
          Share your property requirements below. When you click Continue, WhatsApp will open with your complete enquiry ready to review and send directly to our senior advisory team.
        </p>
      </div>

      {/* WhatsApp Opened Status Notification */}
      <div aria-live="polite" className="mb-6">
        {whatsappStatus === 'opened' && generatedUrl && (
          <div className="p-4 rounded-xl bg-emerald-50/90 border border-emerald-200/90 text-emerald-950 flex flex-col gap-2.5 transition-all">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-600/15 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <WhatsAppIcon className="w-4 h-4 fill-emerald-700" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-emerald-950 leading-snug">
                  WhatsApp is opening with your enquiry details. Please review and tap Send to contact SAI PRESTIGE.
                </p>
                <p className="text-xs text-emerald-800/80 mt-1.5 leading-relaxed">
                  If WhatsApp didn&apos;t open automatically,{' '}
                  <a
                    href={generatedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline underline-offset-2 text-emerald-900 hover:text-emerald-700 inline-flex items-center gap-1"
                  >
                    <span>tap here to open WhatsApp directly</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        {whatsappStatus === 'error' && (
          <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <p className="text-sm font-medium">
              Please complete all required fields correctly before continuing to WhatsApp.
            </p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Row 1: Full Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
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
              required
              aria-required="true"
              aria-invalid={touched.fullName && Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              placeholder="e.g. Rajesh Sharma"
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
              required
              aria-required="true"
              aria-invalid={touched.email && Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              placeholder="e.g. rajesh@example.com"
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

        {/* Row 2: Phone Number & Requirement Dropdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
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
              required
              aria-required="true"
              aria-invalid={touched.phone && Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              placeholder="e.g. +91 98200 12345"
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

          {/* Requirement Dropdown */}
          <div>
            <label
              htmlFor="requirement"
              className="block text-xs uppercase tracking-wider font-medium text-[var(--color-prestige-charcoal)] mb-2"
            >
              Interested In <span className="text-[var(--color-prestige-gold)]">*</span>
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

        {/* Action Button: Continue on WhatsApp */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={!isFormValid}
            className="font-medium tracking-wide flex items-center justify-center gap-2.5 bg-[var(--color-prestige-gold)] hover:bg-[var(--color-prestige-gold-light)] text-[var(--color-prestige-charcoal)] shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-md)] transition-all duration-200 active:scale-[0.99] cursor-pointer"
          >
            <WhatsAppIcon className="w-5 h-5 text-emerald-800 shrink-0" />
            <span className="font-semibold text-sm sm:text-base">Continue on WhatsApp</span>
          </Button>

          <p className="mt-3 text-[11px] text-center text-[var(--color-neutral-500)] leading-relaxed">
            Your enquiry details will be pre-filled in WhatsApp so you can review and chat directly with our senior advisory team at +91 93264 33965.
          </p>
        </div>
      </form>
    </div>
  );
};
