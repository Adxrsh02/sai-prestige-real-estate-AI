'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, ArrowRight, Home, Phone, MessageCircle, Clock, ShieldCheck, MailCheck } from 'lucide-react';

export const ThankYouContent: React.FC = () => {
  const [isVerifiedSubmission, setIsVerifiedSubmission] = useState<boolean | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        const submittedFlag = sessionStorage.getItem('enquiry_submitted');
        if (submittedFlag === 'true') {
          setIsVerifiedSubmission(true);
          // Clear flag after verification to prevent duplicate conversion triggers on manual refresh
          sessionStorage.removeItem('enquiry_submitted');
        } else {
          setIsVerifiedSubmission(false);
        }
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Avoid flash before client hydration
  if (isVerifiedSubmission === null) {
    return (
      <Section spacing="spacious" className="flex-1 flex items-center justify-center min-h-[60vh] bg-white">
        <Container size="narrow" className="text-center">
          <div className="w-8 h-8 mx-auto border-2 border-[var(--color-prestige-gold)] border-t-transparent rounded-full animate-spin" />
        </Container>
      </Section>
    );
  }

  // 1. Direct Visit without submission
  if (!isVerifiedSubmission) {
    return (
      <Section spacing="spacious" className="flex-1 flex items-center justify-center min-h-[65vh] bg-white">
        <Container size="narrow" className="text-center">
          <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-[var(--color-neutral-100)] text-[var(--color-neutral-600)]">
            <Clock className="w-7 h-7" />
          </div>
          <Badge variant="neutral" size="sm" className="mb-3">
            CONSULTATION PORTAL
          </Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[var(--color-prestige-charcoal)] mb-3">
            No Active Submission Found
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-neutral-600)] max-w-md mx-auto mb-8 leading-relaxed font-light">
            If you recently submitted an enquiry, your request has already been recorded in our system. To submit a new enquiry or consult with our advisory desk, please use the contact form.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="md">
              Go to Contact Form
            </Button>
            <Button href="/" variant="secondary" size="md" leftIcon={<Home className="w-4 h-4" />}>
              Return to Home
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  // 2. Genuine Successful Enquiry Confirmation
  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="w-full bg-[var(--color-prestige-white)] pt-6 sm:pt-8 border-b border-[var(--color-neutral-200)]/40">
        <Container size="default">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--color-neutral-500)]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[var(--color-prestige-gold)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)] rounded-xs"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-[var(--color-prestige-gold)] select-none">
                /
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[var(--color-prestige-gold)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)] rounded-xs"
                >
                  Contact
                </Link>
              </li>
              <li aria-hidden="true" className="text-[var(--color-prestige-gold)] select-none">
                /
              </li>
              <li aria-current="page" className="text-[var(--color-prestige-charcoal)] font-medium">
                Enquiry Confirmation
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Main Confirmation Content */}
      <Section spacing="default" className="flex-1 bg-gradient-to-b from-white via-[var(--color-neutral-50)]/40 to-white">
        <Container size="narrow">
          <div className="bg-white rounded-2xl border border-[var(--color-neutral-200)] p-8 sm:p-12 lg:p-14 shadow-[var(--shadow-premium-md)] text-center relative overflow-hidden">
            {/* Architectural Gold Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--color-prestige-gold-light)] via-[var(--color-prestige-gold)] to-[var(--color-prestige-gold-dark)]" />

            {/* Checkmark Crest */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shadow-xs">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={2} />
            </div>

            <Badge variant="gold" size="md" className="mb-4">
              ENQUIRY CONFIRMED &bull; SAI PRESTIGE
            </Badge>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[var(--color-prestige-charcoal)] mb-4">
              Thank You for Reaching Out.
            </h1>

            <p className="text-base sm:text-lg text-[var(--color-neutral-600)] font-light leading-relaxed max-w-xl mx-auto mb-8">
              We have successfully received your property requirements. Our senior advisory desk in Ulwe Sector 17 will review the details and connect with you shortly.
            </p>

            {/* Trust Assurance Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10 max-w-xl mx-auto">
              <div className="p-4 rounded-xl bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)]/70 flex items-start gap-3">
                <MailCheck className="w-5 h-5 text-[var(--color-prestige-gold)] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-prestige-charcoal)] mb-0.5">
                    Email Acknowledgment
                  </h2>
                  <p className="text-xs text-[var(--color-neutral-600)] leading-relaxed">
                    A branded receipt and summary have been dispatched to your email address.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)]/70 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[var(--color-prestige-gold)] shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-prestige-charcoal)] mb-0.5">
                    Fiduciary Privacy
                  </h2>
                  <p className="text-xs text-[var(--color-neutral-600)] leading-relaxed">
                    Your contact information remains strictly confidential and is never shared.
                  </p>
                </div>
              </div>
            </div>

            {/* Immediate Direct Action Channels */}
            <div className="p-5 sm:p-6 rounded-xl bg-[var(--color-prestige-deep)] text-white text-left max-w-xl mx-auto mb-8">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[var(--color-prestige-gold-light)] block mb-1">
                NEED IMMEDIATE ADVISORY?
              </span>
              <p className="text-xs sm:text-sm text-neutral-300 mb-4 leading-relaxed font-light">
                For time-sensitive property acquisitions or immediate site-visit arrangements, speak with our advisors directly:
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+919326433965"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--color-prestige-gold)] text-[var(--color-prestige-deep)] hover:bg-[var(--color-prestige-gold-light)] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call +91 93264 33965</span>
                </a>
                <a
                  href="https://wa.me/919326433965?text=Hello%20SAI%20PRESTIGE%2C%20I%20just%20submitted%20an%20enquiry%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-white hover:bg-[#20bc5a] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Return Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/" variant="secondary" size="lg" leftIcon={<Home className="w-4 h-4" />}>
                Return to Home
              </Button>
              <Button href="/properties" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore Properties
              </Button>
              <Button href="/emi-calculator" variant="ghost" size="lg">
                EMI Calculator
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

