import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

interface PrincipleItem {
  index: string;
  title: string;
  description: string;
}

const principles: PrincipleItem[] = [
  {
    index: '01',
    title: 'Buyer First',
    description: "Understand the buyer's actual requirements before recommending a property.",
  },
  {
    index: '02',
    title: 'Transparent Communication',
    description:
      'Explain property information and transaction steps clearly, without creating unrealistic expectations.',
  },
  {
    index: '03',
    title: 'Relevant Recommendations',
    description:
      "Focus on property options that align with the buyer's stated needs and preferences.",
  },
  {
    index: '04',
    title: 'Coordinated Execution',
    description:
      'Maintain clear responsibilities and coordination throughout the buyer journey.',
  },
  {
    index: '05',
    title: 'Informed Decisions',
    description:
      'Help buyers understand the information available to them so they can evaluate their options carefully.',
  },
  {
    index: '06',
    title: 'Relationship Beyond the Enquiry',
    description:
      'Treat every conversation professionally and prioritize long-term trust over unnecessary sales pressure.',
  },
];

export const CorePrinciples: React.FC = () => {
  return (
    <Section variant="neutral" spacing="default" id="core-principles">
      <Container size="default">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="inline-block text-xs uppercase font-medium tracking-[0.24em] text-[var(--color-prestige-gold)] mb-3">
            Guiding Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[var(--color-prestige-charcoal)]">
            The Principles Behind Every Property Decision
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-neutral-600)]">
            Every successful property journey depends on understanding, communication,
            coordination, and confidence. These principles guide how SAI PRESTIGE approaches buyer
            relationships and property transactions.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {principles.map((principle) => (
            <div
              key={principle.index}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-lg bg-white border border-[var(--color-neutral-200)]/70 transition-all duration-200 hover:border-[var(--color-prestige-gold)]/50"
            >
              <div>
                <span className="font-heading text-xs font-semibold tracking-wider text-[var(--color-prestige-gold)] block mb-3">
                  {principle.index}
                </span>
                <h3 className="text-lg font-normal tracking-tight text-[var(--color-prestige-charcoal)] mb-2.5">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-neutral-600)]">
                  {principle.description}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[var(--color-neutral-100)] flex items-center justify-between text-[11px] uppercase tracking-wider text-[var(--color-neutral-400)]">
                <span>Standard</span>
                <span className="text-[var(--color-prestige-gold)]">SAI PRESTIGE</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
