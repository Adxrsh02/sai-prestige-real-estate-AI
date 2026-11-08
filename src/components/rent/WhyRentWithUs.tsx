import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const RENT_PILLARS = [
  {
    number: '01',
    title: 'Curated Rental Options',
    description:
      'Every residential flat and commercial office space in our rental portfolio is physically inspected and pre-screened for genuine landlord ownership, clean upkeep, and accurate specifications.',
  },
  {
    number: '02',
    title: 'Local Navi Mumbai Expertise',
    description:
      'Hyperlocal intelligence across Ulwe, Sanpada, Vashi, Nerul, Seawoods, Kharghar, and Pushpak Nagar ensures optimal commute planning, lifestyle convenience, and commercial transit access.',
  },
  {
    number: '03',
    title: 'Transparent Rental Guidance',
    description:
      'Clear, upfront itemization of monthly rent, security deposit terms, society maintenance charges, municipal taxes, and annual escalation rates—ensuring zero unexpected overheads.',
  },
  {
    number: '04',
    title: 'Professional Communication',
    description:
      'Prompt, organized liaison between property owners, tenants, and cooperative housing society managements for stress-free inspection schedules, society NOCs, and smooth approvals.',
  },
  {
    number: '05',
    title: 'Tenant & Property Matching',
    description:
      'Meticulous requirement matching aligning family lifestyles, furnishing preferences, pet policies, and commercial footfall demands with the most compatible properties.',
  },
  {
    number: '06',
    title: 'Structured Leasing Assistance',
    description:
      'Comprehensive handholding through statutory Leave & License drafting, tenant biometric verification, digital registration with the government portal, and documented key handover.',
  },
];

export const WhyRentWithUs: React.FC = () => {
  return (
    <Section
      variant="neutral"
      spacing="none"
      className="py-16 md:py-24 lg:py-28 bg-[var(--color-neutral-50)] border-b border-[var(--color-neutral-200)]/70"
      id="why-rent-with-us"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Manifesto & Trust Anchor */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-prestige-gold)]">
                RENTAL EXCELLENCE & INTEGRITY
              </span>
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-[1.2]">
                Why Discerning Tenants &amp; Landlords Choose{' '}
                <span className="font-normal block text-[var(--color-prestige-charcoal)]">
                  SAI PRESTIGE.
                </span>
              </h2>
              <div className="w-16 h-[2px] bg-[var(--color-prestige-gold)]" aria-hidden="true" />
            </div>

            <p className="text-base text-[var(--color-neutral-600)] leading-relaxed font-light">
              Renting a residential home or securing commercial premises shouldn&apos;t feel stressful or uncertain. At SAI PRESTIGE, we bridge owners and tenants with verified property listings, transparent documentation, and professional advisory.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-4 border-t border-[var(--color-neutral-200)] grid grid-cols-2 gap-6">
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-[var(--color-prestige-charcoal)] font-mono block">
                  8+ Years
                </span>
                <span className="text-xs uppercase tracking-wider text-[var(--color-neutral-500)] mt-1 block">
                  Navi Mumbai Experience
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-[var(--color-prestige-gold)] font-mono block">
                  85+ Clients
                </span>
                <span className="text-xs uppercase tracking-wider text-[var(--color-neutral-500)] mt-1 block">
                  Satisfied Clients
                </span>
              </div>
            </div>

            {/* Micro Trust Bullet Points */}
            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-[var(--color-neutral-700)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-prestige-gold)] shrink-0" />
                <span>Government-registered e-Leave &amp; License agreements</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[var(--color-neutral-700)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-prestige-gold)] shrink-0" />
                <span>Zero false promises; verified inventories only</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[var(--color-neutral-700)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-prestige-gold)] shrink-0" />
                <span>Dedicated support for relocation and corporate leases</span>
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--color-prestige-charcoal)] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[var(--color-prestige-gold)] hover:text-black transition-all duration-300 rounded shadow-sm group"
              >
                <span>Discuss Your Rental Requirement</span>
                <ArrowRight className="w-4 h-4 text-[var(--color-prestige-gold)] group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Column: 6 Editorial Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {RENT_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="group relative p-6 sm:p-7 bg-white rounded-lg border border-[var(--color-neutral-200)]/80 hover:border-[var(--color-prestige-gold)]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-widest text-[var(--color-prestige-gold)]">
                      {pillar.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[var(--color-prestige-gold)]/30 group-hover:bg-[var(--color-prestige-gold)] transition-colors duration-300" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-[var(--color-prestige-charcoal)] group-hover:text-[var(--color-prestige-gold-dark)] transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-neutral-600)] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[var(--color-neutral-100)] flex items-center justify-between text-[11px] text-[var(--color-neutral-400)] group-hover:text-[var(--color-prestige-charcoal)] transition-colors duration-300">
                  <span className="uppercase tracking-wider font-semibold">Sai Prestige Standard</span>
                  <span className="font-mono text-[var(--color-prestige-gold)]">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

