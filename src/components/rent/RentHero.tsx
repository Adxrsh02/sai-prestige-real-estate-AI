import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, PhoneCall, Key, ShieldCheck, Clock, FileCheck } from 'lucide-react';

const RENT_HERO_IMAGE =
  'https://res.cloudinary.com/qlxaljlj/image/upload/q_auto,f_auto/v1793432299/rent_1.jpg';

export const RentHero: React.FC = () => {
  return (
    <Section
      variant="white"
      spacing="none"
      className="pt-4 sm:pt-6 md:pt-8 pb-14 md:pb-20 lg:pb-24 border-b border-[var(--color-neutral-200)]/70 bg-gradient-to-b from-white via-white to-[var(--color-neutral-50)]/40"
    >
      <Container size="wide">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
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
            <li aria-current="page" className="text-[var(--color-prestige-charcoal)] font-semibold">
              Rent &amp; Lease
            </li>
          </ol>
        </nav>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2.5">
              <Badge variant="gold" size="md">
                PROPERTY RENTAL &amp; LEASING ADVISORY
              </Badge>
              <span className="text-xs font-medium text-[var(--color-neutral-500)] hidden sm:inline">
                Navi Mumbai &bull; Residential &amp; Commercial
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-[1.18]">
                Premium Residential Rentals &amp;{' '}
                <span className="font-normal block sm:inline text-[var(--color-prestige-charcoal)]">
                  Commercial Leasing in Navi Mumbai.
                </span>
              </h1>

              <div className="w-16 h-[2px] bg-[var(--color-prestige-gold)]" aria-hidden="true" />
            </div>

            <p className="text-base sm:text-lg text-[var(--color-neutral-600)] max-w-2xl leading-relaxed font-light">
              Securing the right rental residence or strategic commercial office space demands
              verified documentation, clear tenancy terms, and dedicated local coordination.
              SAI PRESTIGE assists discerning tenants, corporate occupiers, and property owners
              with curated listings, registered Leave &amp; License agreements, and transparent
              leasing advisory across Ulwe, Sanpada, Vashi, and Nerul.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                href="#rental-categories"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Rental Options
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                leftIcon={<PhoneCall className="w-4 h-4 text-[var(--color-prestige-gold)]" />}
              >
                Speak With Our Leasing Advisor
              </Button>
            </div>

            {/* Trust Signals Strip */}
            <div className="pt-6 sm:pt-8 border-t border-[var(--color-neutral-200)] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
              <div className="flex items-start gap-2.5">
                <Key className="w-4 h-4 text-[var(--color-prestige-gold)] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-prestige-charcoal)] block">
                    Curated Properties
                  </span>
                  <p className="text-xs text-[var(--color-neutral-500)] mt-0.5">
                    Gated societies &amp; Grade-A offices
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <FileCheck className="w-4 h-4 text-[var(--color-prestige-gold)] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-prestige-charcoal)] block">
                    Registered Agreements
                  </span>
                  <p className="text-xs text-[var(--color-neutral-500)] mt-0.5">
                    Compliant e-registration &amp; verification
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[var(--color-prestige-gold)] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-prestige-charcoal)] block">
                    Zero Ambiguity
                  </span>
                  <p className="text-xs text-[var(--color-neutral-500)] mt-0.5">
                    Transparent deposit &amp; escalation terms
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Hero Visual Frame (Portrait 825x1024 friendly) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="group relative w-full max-w-sm lg:max-w-none rounded-2xl overflow-hidden border border-[var(--color-neutral-200)] shadow-[var(--shadow-premium-md)] bg-white p-2.5 sm:p-3 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] flex flex-col justify-between">
              {/* Image Container */}
              <div className="absolute inset-2.5 sm:inset-3 rounded-xl overflow-hidden bg-[var(--color-neutral-100)]">
                <Image
                  src={RENT_HERO_IMAGE}
                  alt="Curated luxury rental apartment in Navi Mumbai by SAI PRESTIGE"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                {/* Gradient Vignette for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />
              </div>

              {/* Floating Top Badge */}
              <div className="relative z-10 self-start bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[var(--color-neutral-200)] shadow-xs">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-prestige-gold)] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-prestige-gold)] animate-pulse" />
                  Navi Mumbai Leasing
                </span>
              </div>

              {/* Bottom Architectural Card */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[var(--color-neutral-200)] shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[var(--color-neutral-500)] block">
                    Prime Leasing Hubs
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-prestige-charcoal)]">
                    Vashi &bull; Sanpada &bull; Ulwe &bull; Nerul
                  </span>
                </div>
                <div className="text-right pl-3 border-l border-[var(--color-neutral-200)]">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--color-neutral-400)] block">
                    Tenancy
                  </span>
                  <span className="text-xs font-bold text-[var(--color-prestige-gold)]">
                    Verified Owners
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

