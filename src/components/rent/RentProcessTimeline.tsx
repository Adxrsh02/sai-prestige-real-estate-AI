import React from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import {
  Compass,
  Calculator,
  Search,
  Eye,
  Handshake,
  FileText,
  KeyRound,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface RentalTimelineStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const RENTAL_STEPS: RentalTimelineStep[] = [
  {
    number: '01',
    title: 'Understand Requirements',
    subtitle: 'Preferences & Move-In Date',
    description:
      'We assess your preferred configuration, furnishing status (unfurnished, semi, or fully furnished), family/business space needs, and target occupancy date.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Budget & Location Assessment',
    subtitle: 'Commute & Operating Costs',
    description:
      'Detailed mapping of monthly rental budgets, society maintenance obligations, travel times to business hubs, and connectivity across Navi Mumbai nodes.',
    icon: Calculator,
  },
  {
    number: '03',
    title: 'Curated Property Shortlisting',
    subtitle: 'Pre-Vetted Options',
    description:
      'We filter available properties against verified landlord titles, society pet/community policies, and genuine physical condition—preventing wasted viewings.',
    icon: Search,
  },
  {
    number: '04',
    title: 'Property Visits & Evaluation',
    subtitle: 'Accompanied Inspections',
    description:
      'Guided walkthroughs to examine natural lighting, ventilation, building maintenance, parking allocations, lift reliability, and security infrastructure.',
    icon: Eye,
  },
  {
    number: '05',
    title: 'Terms & Negotiation',
    subtitle: 'Balanced Lease Terms',
    description:
      'Professional facilitation of monthly rent, security deposit terms, lock-in period, notice periods, annual escalation clauses, and maintenance splits.',
    icon: Handshake,
  },
  {
    number: '06',
    title: 'Agreement Coordination',
    subtitle: 'Statutory Registration',
    description:
      'Drafting compliant Leave & License agreements, coordinating digital or doorstep biometric registration with the Sub-Registrar, and police verification.',
    icon: FileText,
  },
  {
    number: '07',
    title: 'Move-In & Handover',
    subtitle: 'Inventory & Keys',
    description:
      'Detailed fixture inventory audit, meter reading verification, society NOC submission, key handover, and smooth transition into your new space.',
    icon: KeyRound,
  },
];

export const RentProcessTimeline: React.FC = () => {
  return (
    <Section
      variant="white"
      spacing="none"
      className="py-16 md:py-24 lg:py-28 border-b border-[var(--color-neutral-200)]/70 bg-white"
      id="rental-journey"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-prestige-gold)]">
                STEP-BY-STEP ADVISORY
              </span>
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-[1.2]">
              The Structured <span className="font-normal block sm:inline">Rental Journey.</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-sm sm:text-base text-[var(--color-neutral-600)] font-light leading-relaxed">
              A transparent, 7-stage leasing framework designed to safeguard both tenants and
              landlords from ambiguity, delays, and undocumented commitments.
            </p>
          </div>
        </div>

        {/* ── Desktop Horizontal Progression Track (Hidden on mobile/tablet, shown 2xl+) ── */}
        <div className="hidden 2xl:block relative mb-6">
          {/* Continuous Gold Track Line */}
          <div className="absolute top-10 left-[3%] right-[3%] h-[2px] bg-gradient-to-r from-[var(--color-prestige-gold)]/20 via-[var(--color-prestige-gold)]/60 to-[var(--color-prestige-gold)]/20 z-0" />

          {/* 7 Stage Nodes */}
          <div className="grid grid-cols-7 gap-3 relative z-10">
            {RENTAL_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="group flex flex-col items-center text-center">
                  {/* Step Node */}
                  <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] group-hover:border-[var(--color-prestige-gold)] group-hover:shadow-[0_6px_20px_rgba(188,154,79,0.25)] flex flex-col items-center justify-center transition-all duration-300 shadow-sm relative mb-5 bg-gradient-to-b from-white to-[var(--color-neutral-50)]">
                    <span className="text-[10px] font-mono font-bold text-[var(--color-prestige-gold)] leading-none mb-1">
                      {step.number}
                    </span>
                    <Icon className="w-5 h-5 text-[var(--color-prestige-charcoal)] group-hover:text-[var(--color-prestige-gold)] transition-colors duration-200" strokeWidth={1.8} />
                  </div>

                  {/* Step Card */}
                  <div className="p-3.5 rounded-2xl bg-[var(--color-neutral-50)]/70 border border-[var(--color-neutral-200)]/80 hover:bg-white hover:border-[var(--color-prestige-gold)]/40 hover:shadow-xs transition-all duration-300 w-full min-h-[210px] flex flex-col text-left">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-[var(--color-prestige-gold)] mb-1 block">
                      Stage {step.number}
                    </span>
                    <h3 className="font-heading text-xs font-bold text-[var(--color-prestige-charcoal)] leading-snug mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-[var(--color-neutral-500)] leading-relaxed font-light mt-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Responsive Grid for Screens Below 2xl (md to xl grid, mobile vertical stack) ── */}
        <div className="block 2xl:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {RENTAL_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative rounded-2xl p-6 bg-white border border-[var(--color-neutral-200)] hover:border-[var(--color-prestige-gold)]/50 hover:shadow-[var(--shadow-premium-sm)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-prestige-gold)]/10 border border-[var(--color-prestige-gold)]/25 flex items-center justify-center text-[var(--color-prestige-gold)] shrink-0">
                      <Icon className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <span className="font-mono text-xs font-bold text-[var(--color-prestige-gold)] bg-[var(--color-neutral-100)] px-2.5 py-1 rounded-md">
                      STAGE {step.number}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-heading text-base font-bold text-[var(--color-prestige-charcoal)] leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[var(--color-prestige-gold-dark)]">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed font-light pt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

