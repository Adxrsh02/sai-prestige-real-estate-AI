import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ArrowRight, Check, Building2, Home, Shield, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export const RentCategories: React.FC = () => {
  return (
    <Section
      variant="neutral"
      spacing="none"
      className="py-16 md:py-24 lg:py-28 bg-[var(--color-neutral-50)] border-b border-[var(--color-neutral-200)]/70"
      id="rental-categories"
    >
      <Container size="wide">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-prestige-gold)]">
                CURATED LEASING PORTFOLIO
              </span>
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-[1.2]">
              Residential Rentals &amp;{' '}
              <span className="font-normal block sm:inline">Commercial Leases.</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-sm sm:text-base text-[var(--color-neutral-600)] font-light leading-relaxed">
              Two bespoke leasing specializations tailored for corporate tenants, relocating
              families, and property owners seeking responsible tenancy management.
            </p>
          </div>
        </div>

        {/* ── Two Distinctive Editorial Showcases ──────────────────────── */}
        <div className="space-y-12 lg:space-y-16">
          {/* ═════════════════════════════════════════════════════════════
              CATEGORY 01 — RESIDENTIAL RENTALS
              Editorial Portrait Composition (respecting 825x1024 ratio)
             ═════════════════════════════════════════════════════════════ */}
          <div className="group rounded-2xl sm:rounded-3xl border border-[var(--color-neutral-200)] bg-white p-6 sm:p-8 lg:p-12 shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-md)] hover:border-[var(--color-prestige-gold)]/40 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Portrait Image Frame (825x1024 native ratio, no distortion) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-2xl overflow-hidden border border-[var(--color-neutral-200)]/90 bg-white p-2.5 sm:p-3 shadow-[var(--shadow-premium-md)] group/photo">
                  {/* Portrait aspect ratio container (approx 4:5 matching 825:1024) */}
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[var(--color-neutral-100)]">
                    <Image
                      src="https://res.cloudinary.com/qlxaljlj/image/upload/q_auto,f_auto/v1793432299/rent_1.jpg"
                      alt="Curated residential luxury flat available for rent in Navi Mumbai"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 380px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover/photo:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Accent Badge */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
                      <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[var(--color-neutral-200)]/80 shadow-xs">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-prestige-charcoal)] flex items-center gap-1.5">
                          <Home className="w-3 h-3 text-[var(--color-prestige-gold)]" />
                          Managed Residences
                        </span>
                      </div>
                      <span className="bg-[var(--color-prestige-deep)]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] uppercase tracking-wider font-semibold text-[var(--color-prestige-gold-light)] border border-white/10">
                        Ulwe &bull; Vashi
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Narrative & Specifications */}
              <div className="lg:col-span-7 space-y-6">
                {/* Header row */}
                <div className="flex items-center justify-between border-b border-[var(--color-neutral-200)]/70 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold tracking-widest text-[var(--color-prestige-gold)] bg-[var(--color-prestige-gold)]/10 px-2.5 py-1 rounded-md">
                      01
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-neutral-500)]">
                      RESIDENTIAL RENTALS
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-prestige-charcoal)] bg-[var(--color-neutral-100)] px-3 py-1 rounded-full">
                    Gated Societies
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-prestige-charcoal)] tracking-tight leading-snug">
                    Premium Homes &amp; Managed Residences
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--color-neutral-600)] leading-relaxed font-light">
                    Finding the ideal rental home should be an unhurried, reassuring experience. We
                    curate verified, high-specification 1, 2, 3, and 4 BHK residences across gated
                    cooperative societies in Ulwe, Sanpada, Vashi, and Nerul—ensuring transparent
                    deposit terms, direct landlord coordination, and fully registered Leave &amp; License
                    paperwork.
                  </p>
                </div>

                {/* Key Checklist Attributes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'Furnished, semi-furnished & unfurnished options',
                    'Transparent security deposits & 11-month lock-in clarity',
                    'Society NOC & police verification assistance',
                    'Direct communication with verified title landlords',
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--color-neutral-700)]">
                      <span className="w-4 h-4 rounded-full bg-[var(--color-prestige-gold)]/15 flex items-center justify-center text-[var(--color-prestige-gold)] shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Actions Bar */}
                <div className="pt-4 border-t border-[var(--color-neutral-200)]/70 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/rent"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-prestige-gold)] text-white hover:bg-[var(--color-prestige-gold-dark)] text-sm font-semibold transition-all shadow-xs"
                  >
                    <span>Enquire for Residential Rentals</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/properties?category=residential"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[var(--color-neutral-300)] text-sm font-semibold text-[var(--color-prestige-charcoal)] hover:border-[var(--color-prestige-gold)] hover:text-[var(--color-prestige-gold)] transition-colors"
                  >
                    <span>View Available Listings</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════
              CATEGORY 02 — COMMERCIAL LEASES
              Sophisticated Corporate Leasing Showcase (Existing asset buy_2)
             ═════════════════════════════════════════════════════════════ */}
          <div className="group rounded-2xl sm:rounded-3xl border border-[var(--color-neutral-200)] bg-white p-6 sm:p-8 lg:p-12 shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-md)] hover:border-[var(--color-prestige-gold)]/40 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Narrative & Corporate Checklist */}
              <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
                {/* Header row */}
                <div className="flex items-center justify-between border-b border-[var(--color-neutral-200)]/70 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold tracking-widest text-[var(--color-prestige-gold)] bg-[var(--color-prestige-gold)]/10 px-2.5 py-1 rounded-md">
                      02
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-neutral-500)]">
                      COMMERCIAL LEASING
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-prestige-charcoal)] bg-[var(--color-neutral-100)] px-3 py-1 rounded-full">
                    Corporate &amp; Retail
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-prestige-charcoal)] tracking-tight leading-snug">
                    Strategic Corporate Office Spaces &amp; Retail
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--color-neutral-600)] leading-relaxed font-light">
                    Elevate your business footprint with Grade-A corporate towers, flexible office suites,
                    and high-visibility retail spaces across Vashi’s Sector 17 business core, Palm Beach
                    corridors, and upcoming commercial corridors in Ulwe. We negotiate competitive lease
                    structures, fit-out periods, and statutory compliances.
                  </p>
                </div>

                {/* Key Checklist Attributes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'Bare-shell, warm-shell & fully furnished office suites',
                    'High footfall retail high-streets & corporate business parks',
                    'Structured multi-year lease agreements with defined escalations',
                    'Clear commercial trade licensing & electrical load checks',
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--color-neutral-700)]">
                      <span className="w-4 h-4 rounded-full bg-[var(--color-prestige-gold)]/15 flex items-center justify-center text-[var(--color-prestige-gold)] shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Actions Bar */}
                <div className="pt-4 border-t border-[var(--color-neutral-200)]/70 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/rent?type=commercial"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-prestige-charcoal)] text-white hover:bg-black text-sm font-semibold transition-all shadow-xs"
                  >
                    <span>Enquire for Commercial Spaces</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/properties?category=commercial"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[var(--color-neutral-300)] text-sm font-semibold text-[var(--color-prestige-charcoal)] hover:border-[var(--color-prestige-gold)] hover:text-[var(--color-prestige-gold)] transition-colors"
                  >
                    <span>Browse Commercial Spaces</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Architectural Photography Frame (Existing asset buy_2) */}
              <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
                <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-2xl overflow-hidden border border-[var(--color-neutral-200)]/90 bg-white p-2.5 sm:p-3 shadow-[var(--shadow-premium-md)] group/photo">
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[var(--color-neutral-100)]">
                    <Image
                      src="https://res.cloudinary.com/qlxaljlj/image/upload/q_auto,f_auto/v1793430974/buy_2.jpg"
                      alt="Modern Grade-A commercial office space in Navi Mumbai available for corporate lease"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 380px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover/photo:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Accent Badge */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
                      <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[var(--color-neutral-200)]/80 shadow-xs">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-prestige-charcoal)] flex items-center gap-1.5">
                          <Building2 className="w-3 h-3 text-[var(--color-prestige-gold)]" />
                          Corporate Leasing
                        </span>
                      </div>
                      <span className="bg-[var(--color-prestige-deep)]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] uppercase tracking-wider font-semibold text-[var(--color-prestige-gold-light)] border border-white/10">
                        Grade-A Towers
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

