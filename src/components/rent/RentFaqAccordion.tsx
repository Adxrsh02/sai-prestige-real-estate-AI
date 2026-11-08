'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface RentFaqItem {
  question: string;
  answer: string;
  category: string;
}

const RENT_FAQS: RentFaqItem[] = [
  {
    category: 'RESIDENTIAL RENTALS',
    question: 'What is the typical process for renting a residential apartment in Navi Mumbai?',
    answer:
      'Renting through Sai Prestige follows a structured 7-step process: 1) Defining your configuration (1, 2, or 3 BHK), budget, and location preferences; 2) Reviewing curated, verified listings; 3) Private accompanied property walkthroughs; 4) Negotiating monthly rent, security deposit, and move-in terms; 5) Biometric Aadhaar-based e-registration of the Leave & License Agreement; 6) Local police intimation and housing society NOC processing; and 7) Key handover with documented inventory verification.',
  },
  {
    category: 'COMMERCIAL LEASING',
    question: 'How does Sai Prestige assist businesses with commercial office and retail leasing?',
    answer:
      'For commercial tenants, we evaluate company headcount, client footfall parameters, employee transit corridors, and technical needs (power backup, floor loading, HVAC capacity, parking allocations). We coordinate walkthroughs of Grade-A office towers, IT parks, and retail avenues across Vashi, Sanpada, and Ulwe. Our team assists with letter of intent (LOI) terms, fit-out rent-free periods, CAM verification, and registered lease deed drafting.',
  },
  {
    category: 'PROPERTY VISITS',
    question: 'How are property visits scheduled, and is there any charge for tenant walkthroughs?',
    answer:
      'Accompanied property visits are scheduled according to your timetable, including weekends. There is zero charge for visiting rental properties or reviewing shortlisted options with our advisors. During visits, our advisor provides objective details regarding carpet area efficiency, natural lighting, water supply schedules, building amenities, parking allocations, and society rules.',
  },
  {
    category: 'RENTAL AGREEMENTS',
    question: 'What legal agreement is executed for residential rentals in Maharashtra?',
    answer:
      'In Maharashtra, residential rentals are legally governed by the Maharashtra Rent Control Act through an official Leave & License Agreement. Typical tenures are 11, 22, or 33 months, with an agreed lock-in period (commonly 6 months) and 1 to 2 months notice period for termination. We assist both licensor (landlord) and licensee (tenant) with government e-registration and stamp duty compliance.',
  },
  {
    category: 'DOCUMENTATION & VERIFICATION',
    question: 'What documents are required from tenants to finalize a rental property?',
    answer:
      'Tenants typically need to provide: 1) Government photo ID (Aadhaar Card, Passport, or PAN Card); 2) Proof of employment or business (company ID card, appointment letter, or GST certificate); 3) Passport-size photographs; 4) Contact details of 2 references; and 5) Completed police verification intimation form. For corporate leases, company Board Resolutions and authorized signatory credentials are also required.',
  },
  {
    category: 'SECURITY DEPOSITS',
    question: 'How are security deposits calculated and refunded in Navi Mumbai?',
    answer:
      'Security deposits typically range between 3 to 6 months of the monthly rent for residential flats, depending on society standards and furnishing level (higher for fully furnished units). For commercial premises, deposits generally range from 6 to 12 months. Deposits are 100% refundable at the end of the tenancy upon peaceful handover, after deducting any pending utility bills, damages beyond normal wear and tear, or unpaid maintenance.',
  },
  {
    category: 'LOCATION SELECTION',
    question: 'Which Navi Mumbai node is ideal for my rental requirement?',
    answer:
      'Selection depends on your daily commute and lifestyle: Ulwe is ideal for modern, spacious apartments with direct South Mumbai transit via Atal Setu and proximity to the new airport. Sanpada and Vashi are established transit and commercial hubs with walkable local railway stations and high-street amenities. Seawoods and Nerul offer upscale coastal living, renowned educational institutes, and integrated shopping hubs. We assess your exact daily routine to recommend the most suitable node.',
  },
  {
    category: 'RENTAL ENQUIRY PROCESS',
    question: 'How do I initiate a rental or leasing enquiry with Sai Prestige?',
    answer:
      'You can initiate an enquiry directly through our website by submitting your configuration and preferred locality on our Contact or Rent page, or by calling our advisory desk at +91 93264 33965 or messaging our WhatsApp line (+91 93264 33965). A dedicated property advisor will contact you within 24 hours to understand your specific timeline and share vetted options.',
  },
];

export const RentFaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <Section
      variant="neutral"
      spacing="none"
      className="py-16 md:py-24 lg:py-28 bg-white border-b border-[var(--color-neutral-200)]/70"
      id="rent-faqs"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-prestige-gold)]">
              RENTAL &amp; LEASING CLARITY
            </span>
            <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-[1.2]">
            Frequently Asked <span className="font-normal block sm:inline">Questions.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--color-neutral-600)] font-light leading-relaxed">
            Statutory regulations, documentation norms, and practical guidance for renting residential flats and leasing commercial spaces in Navi Mumbai.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-3.5">
          {RENT_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={cn(
                  'rounded-lg border transition-all duration-300 overflow-hidden bg-[var(--color-neutral-50)]',
                  isOpen
                    ? 'border-[var(--color-prestige-gold)]/60 bg-white shadow-sm'
                    : 'border-[var(--color-neutral-200)] hover:border-[var(--color-neutral-300)]'
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-5 sm:px-7 py-4 sm:py-5 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)]"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1.5 pr-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-prestige-gold)] block">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-medium text-[var(--color-prestige-charcoal)] leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={cn(
                      'w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 mt-0.5',
                      isOpen
                        ? 'bg-[var(--color-prestige-gold)] text-black border-[var(--color-prestige-gold)] rotate-180'
                        : 'bg-white text-[var(--color-neutral-500)] border-[var(--color-neutral-200)]'
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-7 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-[var(--color-neutral-600)] font-light leading-relaxed border-t border-[var(--color-neutral-100)]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[var(--color-neutral-500)] font-light">
            Have a specific requirement or lease query not answered here?{' '}
            <a
              href="tel:+919326433965"
              className="font-medium text-[var(--color-prestige-gold-dark)] hover:underline inline-flex items-center gap-1 ml-1"
            >
              <span>Call our leasing desk directly at +91 93264 33965</span>
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
};

