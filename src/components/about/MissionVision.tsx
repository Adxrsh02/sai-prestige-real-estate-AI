import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

export const MissionVision: React.FC = () => {
  return (
    <Section variant="white" spacing="default" id="mission-vision">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Panel 1: Vision */}
          <div className="flex flex-col justify-between p-8 sm:p-10 rounded-lg bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)]/70 shadow-[var(--shadow-subtle)]">
            <div>
              <span className="inline-block text-xs uppercase font-medium tracking-[0.24em] text-[var(--color-prestige-gold)] mb-3">
                Our Vision
              </span>
              <div className="pl-4 border-l-3 border-[var(--color-prestige-gold)] mb-6">
                <h2 className="text-xl sm:text-2xl font-light tracking-tight text-[var(--color-prestige-charcoal)]">
                  The Benchmark of Trust in Navi Mumbai
                </h2>
              </div>
              <p className="text-base leading-relaxed text-[var(--color-neutral-600)]">
                &ldquo;To become the most trusted real estate sales team in Navi Mumbai by
                understanding every buyer&apos;s needs, building genuine relationships, and helping
                clients make confident, informed property decisions.&rdquo;
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[var(--color-neutral-200)]/60 text-xs uppercase tracking-widest text-[var(--color-neutral-400)]">
              Long-Term Direction · Buyer Advocacy
            </div>
          </div>

          {/* Panel 2: Mission */}
          <div className="flex flex-col justify-between p-8 sm:p-10 rounded-lg bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)]/70 shadow-[var(--shadow-subtle)]">
            <div>
              <span className="inline-block text-xs uppercase font-medium tracking-[0.24em] text-[var(--color-prestige-gold)] mb-3">
                Our Mission
              </span>
              <div className="pl-4 border-l-3 border-[var(--color-prestige-gold)] mb-6">
                <h2 className="text-xl sm:text-2xl font-light tracking-tight text-[var(--color-prestige-charcoal)]">
                  A Disciplined, Buyer-Centric Process
                </h2>
              </div>
              <p className="text-base leading-relaxed text-[var(--color-neutral-600)]">
                &ldquo;To follow a structured, buyer-focused sales process—from the first conversation
                and requirement analysis to property presentation, site visits, negotiation, and
                final closure. Every interaction must build trust, deliver value, and move the buyer
                towards the right decision.&rdquo;
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[var(--color-neutral-200)]/60 text-xs uppercase tracking-widest text-[var(--color-neutral-400)]">
              Structured Execution · End-to-End Care
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
