import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

interface PhilosophyStep {
  number: string;
  title: string;
  description: string;
}

const philosophySteps: PhilosophyStep[] = [
  {
    number: '01',
    title: 'Build Trust',
    description:
      'Establish clear communication and honest expectations from the first interaction.',
  },
  {
    number: '02',
    title: 'Understand Needs',
    description:
      "Understand the buyer's priorities, preferences, budget, and property requirements before recommending options.",
  },
  {
    number: '03',
    title: 'Present the Right Property',
    description:
      'Help buyers explore relevant property options based on their requirements rather than presenting irrelevant listings.',
  },
  {
    number: '04',
    title: 'Close With Confidence',
    description:
      'Support the buyer through property discussions, site visits, negotiations, and transaction coordination.',
  },
];

export const CompanyPhilosophy: React.FC = () => {
  return (
    <Section variant="neutral" spacing="default" id="philosophy">
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="inline-block text-xs uppercase font-medium tracking-[0.24em] text-[var(--color-prestige-gold)] mb-3">
            Our Approach
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[var(--color-prestige-charcoal)]">
            Understand First.{' '}
            <span className="font-normal">Recommend With Confidence.</span>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--color-neutral-600)]">
            <p>
              At SAI PRESTIGE, a successful sale begins with understanding the buyer. Our approach
              is built on trust, clear communication, and identifying the right property for every
              client&apos;s needs.
            </p>
            <p>
              From the first conversation to the final deal, every interaction should create more
              confidence, deliver value, and move the buyer one step closer to making an informed
              decision.
            </p>
          </div>
        </div>

        {/* Core Statement Banner */}
        <div className="mt-10 sm:mt-12 py-5 px-6 sm:px-8 rounded-lg bg-white border border-[var(--color-neutral-200)]/70 shadow-[var(--shadow-subtle)]">
          <p className="text-sm sm:text-base font-medium tracking-wide text-[var(--color-prestige-charcoal)] text-center sm:text-left">
            <span className="text-[var(--color-prestige-gold)] mr-2 font-normal">Core Principle —</span>
            Build trust. Understand needs. Present the right property. Close with confidence.
          </p>
        </div>

        {/* Four-Step Process Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div
            className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] bg-[var(--color-neutral-200)] -z-0"
            aria-hidden="true"
          />

          {philosophySteps.map((step) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col bg-white sm:bg-transparent p-6 sm:p-0 rounded-lg sm:rounded-none border border-[var(--color-neutral-200)]/60 sm:border-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white border border-[var(--color-prestige-gold)]/40 text-[var(--color-prestige-gold)] font-heading text-sm font-semibold tracking-wider shadow-xs">
                  {step.number}
                </span>
                <span className="lg:hidden text-xs uppercase tracking-widest text-[var(--color-neutral-400)]">
                  Step
                </span>
              </div>
              <h3 className="text-lg font-normal tracking-tight text-[var(--color-prestige-charcoal)] mb-2">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-neutral-600)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
