import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const PILLARS = [
  {
    number: '01',
    title: 'Buyer-First Fiduciary Advisory',
    description:
      'We do not push developer quotas or high-commission inventory. Our recommendations are driven strictly by your specific configuration, budget, possession timeline, and lifestyle priorities.',
  },
  {
    number: '02',
    title: 'Deep Navi Mumbai Market Knowledge',
    description:
      'Decades of collective insight across Ulwe, Sanpada, Vashi, and Pushpak Nagar enable us to evaluate micro-market pricing trends, transit infrastructure, and realistic livability factors.',
  },
  {
    number: '03',
    title: 'Transparent Communication & Zero Hidden Fees',
    description:
      'Every quote includes an itemized breakdown of base agreement cost, stamp duty, registration fees, CIDCO transfer charges, society maintenance, and corpus fund commitments.',
  },
  {
    number: '04',
    title: 'Carefully Selected & Vetted Properties',
    description:
      'We physically inspect and legally cross-verify all properties against statutory RERA registrations, sanctioned plans, Commencements Certificates (CC), and Occupancy Certificates (OC).',
  },
  {
    number: '05',
    title: 'Commercial Negotiation Assistance',
    description:
      'We negotiate with developers and property sellers from a position of data-backed market benchmarking, securing optimal pricing, favorable payment milestones, and inclusive amenities.',
  },
  {
    number: '06',
    title: 'End-to-End Handholding Till Handover',
    description:
      'From bank loan sanction and drafting sale deeds to registration at the Sub-Registrar office and key handover, our dedicated advisor remains by your side at every milestone.',
  },
];

export const WhyBuyWithUs: React.FC = () => {
  return (
    <Section
      variant="neutral"
      spacing="none"
      className="py-16 md:py-24 lg:py-28 bg-[var(--color-neutral-50)] border-b border-[var(--color-neutral-200)]/70"
      id="why-sai-prestige"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Manifesto & Trust Anchor */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-prestige-gold)]">
                FIDUCIARY INTEGRITY
              </span>
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-[1.2]">
                Why Discerning Buyers Choose{' '}
                <span className="font-normal block text-[var(--color-prestige-charcoal)]">
                  SAI PRESTIGE.
                </span>
              </h2>
              <div className="w-16 h-[2px] bg-[var(--color-prestige-gold)]" aria-hidden="true" />
            </div>

            <p className="text-base text-[var(--color-neutral-600)] leading-relaxed font-light">
              Acquiring a home or commercial property is not merely a legal transaction—it shapes
              your financial future and family lifestyle. We combine independent advisory,
              exhaustive due diligence, and verified local inventory to deliver total peace of mind.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-4 border-t border-[var(--color-neutral-200)] grid grid-cols-2 gap-6">
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-[var(--color-prestige-charcoal)] font-mono block">
                  8+ Years
                </span>
                <span className="text-xs uppercase tracking-wider text-[var(--color-neutral-500)] mt-1 block">
                  Industry Advisory
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-[var(--color-prestige-gold)] font-mono block">
                  85+ Clients
                </span>
                <span className="text-xs uppercase tracking-wider text-[var(--color-neutral-500)] mt-1 block">
                  Guided to Ownership
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-prestige-charcoal)] hover:text-[var(--color-prestige-gold)] transition-colors duration-200"
              >
                <span>Discover our firm&apos;s history &amp; leadership</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 6 Distinct Editorial Trust Pillars */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="group rounded-2xl bg-white border border-[var(--color-neutral-200)]/80 p-6 sm:p-7 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-premium-sm)] hover:border-[var(--color-prestige-gold)]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-[var(--color-neutral-100)] pb-3">
                      <span className="font-mono text-xs font-bold text-[var(--color-prestige-gold)] tracking-widest">
                        {pillar.number}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-prestige-gold)] opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-[var(--color-prestige-charcoal)] leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-neutral-600)] leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

