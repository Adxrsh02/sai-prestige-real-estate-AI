import React from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import {
  Compass,
  Search,
  KeyRound,
  FileCheck2,
  Handshake,
  CheckCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const STEPS: TimelineStep[] = [
  {
    number: '01',
    title: 'Understand Requirements',
    subtitle: 'Clarifying Priorities & Budget',
    description:
      'We begin with a structured consultation to define your preferred location, configuration, lifestyle needs, timeline, and investment budget.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Research & Shortlisting',
    subtitle: 'Vetted Market Options',
    description:
      'Our advisory screens the market against strict title, CIDCO, and RERA benchmarks, shortlisting only verified developments and prime resale inventory.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Presentation & Visits',
    subtitle: 'Guided Inspections',
    description:
      'We coordinate personalized private site visits, evaluating construction quality, layout efficiency, natural light, carpet area, and surrounding amenities.',
    icon: KeyRound,
  },
  {
    number: '04',
    title: 'Evaluation & Negotiation',
    subtitle: 'Objective Valuation',
    description:
      'We benchmark current locality transaction rates to ensure competitive pricing, assisting in commercial terms negotiation with total transparency.',
    icon: Handshake,
  },
  {
    number: '05',
    title: 'Documentation & Booking',
    subtitle: 'Legal Due Diligence',
    description:
      'Comprehensive verification of title search reports, allotment letters, draft agreements, bank approvals, and statutory clearance checklists.',
    icon: FileCheck2,
  },
  {
    number: '06',
    title: 'Completion & Handover',
    subtitle: 'Seamless Possession',
    description:
      'Coordination through sub-registrar agreement registration, stamp duty documentation, key handover, and society membership transition.',
    icon: CheckCircle,
  },
];

export const BuyProcessTimeline: React.FC = () => {
  return (
    <Section
      variant="white"
      spacing="none"
      className="py-16 md:py-24 lg:py-28 border-b border-[var(--color-neutral-200)]/70 bg-white"
      id="buying-process"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-prestige-gold)]">
                ACQUISITION METHODOLOGY
              </span>
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-[1.2]">
              The Structured <span className="font-normal block sm:inline">Buying Journey.</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-sm sm:text-base text-[var(--color-neutral-600)] font-light leading-relaxed">
              A disciplined, step-by-step advisory framework engineered to eliminate uncertainty,
              protect your capital, and guide you confidently from requirement to possession.
            </p>
          </div>
        </div>

        {/* ── Desktop Horizontal Timeline (Hidden on small screens, shown xl+) ── */}
        <div className="hidden xl:block relative mb-6">
          {/* Continuous Gold Track Line */}
          <div className="absolute top-10 left-[4%] right-[4%] h-[2px] bg-gradient-to-r from-[var(--color-prestige-gold)]/20 via-[var(--color-prestige-gold)]/60 to-[var(--color-prestige-gold)]/20 z-0" />

          {/* 6 Step Columns */}
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="group flex flex-col items-center text-center">
                  {/* Step Node */}
                  <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[var(--color-neutral-200)] group-hover:border-[var(--color-prestige-gold)] group-hover:shadow-[0_6px_20px_rgba(188,154,79,0.25)] flex flex-col items-center justify-center transition-all duration-300 shadow-sm relative mb-6 bg-gradient-to-b from-white to-[var(--color-neutral-50)]">
                    <span className="text-[10px] font-mono font-bold text-[var(--color-prestige-gold)] leading-none mb-1">
                      {step.number}
                    </span>
                    <Icon className="w-5 h-5 text-[var(--color-prestige-charcoal)] group-hover:text-[var(--color-prestige-gold)] transition-colors duration-200" strokeWidth={1.8} />
                  </div>

                  {/* Card Content */}
                  <div className="p-4 rounded-2xl bg-[var(--color-neutral-50)]/70 border border-[var(--color-neutral-200)]/80 hover:bg-white hover:border-[var(--color-prestige-gold)]/40 hover:shadow-sm transition-all duration-300 w-full min-h-[220px] flex flex-col text-left">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-prestige-gold)] mb-1 block">
                      Stage {step.number}
                    </span>
                    <h3 className="font-heading text-sm font-bold text-[var(--color-prestige-charcoal)] leading-snug mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[var(--color-neutral-500)] leading-relaxed font-light mt-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Tablet & Mobile Timeline (Grid for md, Vertical Sequence for sm) ── */}
        <div className="block xl:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((step) => {
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
                    <span className="font-mono text-sm font-bold text-[var(--color-prestige-gold)] bg-[var(--color-neutral-100)] px-2.5 py-0.5 rounded-md">
                      STAGE {step.number}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-base font-bold text-[var(--color-prestige-charcoal)] leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs font-medium text-[var(--color-prestige-gold-dark)]">
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

