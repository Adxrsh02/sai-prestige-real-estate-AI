import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryItem {
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
  ctaText: string;
  ctaHref: string;
  tag: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    number: '01',
    category: 'RESIDENTIAL PROPERTIES',
    title: 'Curated Luxury Flats, Duplexes & Penthouses',
    subtitle: 'Handpicked Living Spaces in Prime Navi Mumbai Corridors',
    description:
      'From spacious 2 and 3 BHK family residences in Ulwe and Sanpada to sprawling sea-facing penthouses along Palm Beach Road, our residential portfolio represents properties vetted for architectural quality, natural lighting, and verified documentation.',
    features: [
      '2, 3 & 4 BHK luxury residences & duplexes',
      'Verified Occupancy Certificates (OC) & clear titles',
      'Prime connectivity to transit, schools & healthcare',
    ],
    image:
      'https://res.cloudinary.com/qlxaljlj/image/upload/q_auto,f_auto/v1793430862/buy_1.jpg',
    alt: 'Luxury living room of modern residential apartment available to buy in Navi Mumbai',
    ctaText: 'Explore Residential Properties',
    ctaHref: '/properties?category=residential',
    tag: 'Premium Living',
  },
  {
    number: '02',
    category: 'COMMERCIAL SPACES',
    title: 'High-Yield Office Suites & Modern Retail',
    subtitle: 'Strategic Commercial Real Estate with Strong Rental Potential',
    description:
      'Expand your enterprise or build consistent cash flow with premier corporate offices and high-street retail spaces situated in established commercial centers like Vashi and emerging business corridors near the upcoming airport.',
    features: [
      'Grade-A corporate office suites & retail units',
      'High footfall retail corridors & corporate parks',
      'Attractive rental yield & capital appreciation outlook',
    ],
    image:
      'https://res.cloudinary.com/qlxaljlj/image/upload/q_auto,f_auto/v1793430974/buy_2.jpg',
    alt: 'Contemporary glass-facade commercial office building in Navi Mumbai business district',
    ctaText: 'Explore Commercial Spaces',
    ctaHref: '/properties?category=commercial',
    tag: 'High Yield',
  },
  {
    number: '03',
    category: 'LUXURY DEVELOPMENTS',
    title: 'Exclusive Gated Estates & Bespoke Residences',
    subtitle: 'Private Enclaves Crafted for Uncompromised Privacy and Prestige',
    description:
      'Curated for high-net-worth families and discerning investors, these exclusive residences feature expansive layouts, resort-style amenities, private elevator access, and panoramic vistas across coastal Navi Mumbai.',
    features: [
      'Low-density gated communities with private security',
      'Panoramic water & skyline views along Palm Beach corridor',
      'Bespoke architectural finishes & five-star amenities',
    ],
    image:
      'https://res.cloudinary.com/qlxaljlj/image/upload/q_auto,f_auto/v1793430975/buy_3.jpg',
    alt: 'Luxury private residential development with premium architectural finishes in Navi Mumbai',
    ctaText: 'Discover Luxury Developments',
    ctaHref: '/properties?category=luxury',
    tag: 'Exclusive Access',
  },
  {
    number: '04',
    category: 'NEW PROJECT LAUNCHES',
    title: 'Early-Stage Investment Opportunities',
    subtitle: 'Pre-Launch & Inaugural Releases with Maximum Growth Potential',
    description:
      'Secure early-bird pricing and flexible construction-linked payment plans on RERA-registered developments across fast-appreciating nodes like Ulwe and Pushpak Nagar, strategically located along the Atal Setu and airport corridors.',
    features: [
      'RERA-registered developments with verified approvals',
      'Early-entry pricing advantages & payment milestones',
      'Strategic infrastructure linkages (Atal Setu & NMIA)',
    ],
    image:
      'https://res.cloudinary.com/qlxaljlj/image/upload/q_auto,f_auto/v1793430977/buy_4.jpg',
    alt: 'Modern architectural rendering of upcoming residential project launch in Navi Mumbai',
    ctaText: 'Browse New Project Launches',
    ctaHref: '/properties?status=new-launch',
    tag: 'Early Entry',
  },
];

export const BuyCategories: React.FC = () => {
  return (
    <Section
      variant="neutral"
      spacing="none"
      className="py-16 md:py-24 lg:py-28 bg-[var(--color-neutral-50)] border-b border-[var(--color-neutral-200)]/70"
      id="acquisition-categories"
    >
      <Container size="wide">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-prestige-gold)]">
                CURATED PROPERTY PORTFOLIO
              </span>
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-[1.2]">
              Property Acquisition <span className="font-normal block sm:inline">Collections.</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-sm sm:text-base text-[var(--color-neutral-600)] font-light leading-relaxed">
              Explore four distinct property categories tailored to personal living aspirations,
              commercial growth, and strategic capital allocation in Navi Mumbai.
            </p>
          </div>
        </div>

        {/* ── Asymmetric Editorial Grid Showcase ─────────────────────────── */}
        <div className="space-y-10 lg:space-y-12">
          {/* Pair 1: 01 (Wide 7-cols) + 02 (5-cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
            {/* Category 01 — Residential Properties (Large Feature Showcase) */}
            <div className="lg:col-span-7 group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-[var(--color-neutral-200)] bg-white p-6 sm:p-8 lg:p-10 shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-md)] hover:border-[var(--color-prestige-gold)]/40 transition-all duration-300">
              <div className="space-y-6">
                {/* Header row: Number + Tag */}
                <div className="flex items-center justify-between border-b border-[var(--color-neutral-200)]/70 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold tracking-widest text-[var(--color-prestige-gold)] bg-[var(--color-prestige-gold)]/10 px-2.5 py-1 rounded-md">
                      {CATEGORIES[0].number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-neutral-500)]">
                      {CATEGORIES[0].category}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-prestige-charcoal)] bg-[var(--color-neutral-100)] px-3 py-1 rounded-full">
                    {CATEGORIES[0].tag}
                  </span>
                </div>

                {/* Image Frame */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-xl overflow-hidden bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)]/80">
                  <Image
                    src={CATEGORIES[0].image}
                    alt={CATEGORIES[0].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Typography */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-prestige-charcoal)] tracking-tight leading-snug">
                    {CATEGORIES[0].title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[var(--color-neutral-600)] leading-relaxed font-light">
                    {CATEGORIES[0].description}
                  </p>
                </div>

                {/* Features list */}
                <ul className="space-y-2 pt-2 border-t border-[var(--color-neutral-200)]/60">
                  {CATEGORIES[0].features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--color-neutral-600)]">
                      <span className="w-4 h-4 rounded-full bg-[var(--color-prestige-gold)]/15 flex items-center justify-center text-[var(--color-prestige-gold)] shrink-0">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[var(--color-neutral-200)]/70">
                <Link
                  href={CATEGORIES[0].ctaHref}
                  className="group/btn inline-flex items-center justify-between w-full text-sm font-semibold text-[var(--color-prestige-charcoal)] hover:text-[var(--color-prestige-gold)] transition-colors duration-200"
                >
                  <span>{CATEGORIES[0].ctaText}</span>
                  <div className="w-8 h-8 rounded-full border border-[var(--color-prestige-gold)]/30 bg-[var(--color-prestige-gold)]/5 flex items-center justify-center group-hover/btn:bg-[var(--color-prestige-gold)] group-hover/btn:text-white transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Category 02 — Commercial Spaces (Editorial Paired Column) */}
            <div className="lg:col-span-5 group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-[var(--color-neutral-200)] bg-white p-6 sm:p-8 lg:p-10 shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-md)] hover:border-[var(--color-prestige-gold)]/40 transition-all duration-300">
              <div className="space-y-6">
                {/* Header row */}
                <div className="flex items-center justify-between border-b border-[var(--color-neutral-200)]/70 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold tracking-widest text-[var(--color-prestige-gold)] bg-[var(--color-prestige-gold)]/10 px-2.5 py-1 rounded-md">
                      {CATEGORIES[1].number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-neutral-500)]">
                      {CATEGORIES[1].category}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-prestige-charcoal)] bg-[var(--color-neutral-100)] px-3 py-1 rounded-full">
                    {CATEGORIES[1].tag}
                  </span>
                </div>

                {/* Image Frame */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)]/80">
                  <Image
                    src={CATEGORIES[1].image}
                    alt={CATEGORIES[1].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Typography */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-prestige-charcoal)] tracking-tight leading-snug">
                    {CATEGORIES[1].title}
                  </h3>
                  <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed font-light">
                    {CATEGORIES[1].description}
                  </p>
                </div>

                {/* Features list */}
                <ul className="space-y-2 pt-2 border-t border-[var(--color-neutral-200)]/60">
                  {CATEGORIES[1].features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--color-neutral-600)]">
                      <span className="w-4 h-4 rounded-full bg-[var(--color-prestige-gold)]/15 flex items-center justify-center text-[var(--color-prestige-gold)] shrink-0">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[var(--color-neutral-200)]/70">
                <Link
                  href={CATEGORIES[1].ctaHref}
                  className="group/btn inline-flex items-center justify-between w-full text-sm font-semibold text-[var(--color-prestige-charcoal)] hover:text-[var(--color-prestige-gold)] transition-colors duration-200"
                >
                  <span>{CATEGORIES[1].ctaText}</span>
                  <div className="w-8 h-8 rounded-full border border-[var(--color-prestige-gold)]/30 bg-[var(--color-prestige-gold)]/5 flex items-center justify-center group-hover/btn:bg-[var(--color-prestige-gold)] group-hover/btn:text-white transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Pair 2: 03 (5-cols) + 04 (Wide 7-cols) Alternating */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
            {/* Category 03 — Luxury Developments (Editorial Column) */}
            <div className="lg:col-span-5 group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-[var(--color-neutral-200)] bg-white p-6 sm:p-8 lg:p-10 shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-md)] hover:border-[var(--color-prestige-gold)]/40 transition-all duration-300">
              <div className="space-y-6">
                {/* Header row */}
                <div className="flex items-center justify-between border-b border-[var(--color-neutral-200)]/70 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold tracking-widest text-[var(--color-prestige-gold)] bg-[var(--color-prestige-gold)]/10 px-2.5 py-1 rounded-md">
                      {CATEGORIES[2].number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-neutral-500)]">
                      {CATEGORIES[2].category}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-prestige-charcoal)] bg-[var(--color-neutral-100)] px-3 py-1 rounded-full">
                    {CATEGORIES[2].tag}
                  </span>
                </div>

                {/* Image Frame */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)]/80">
                  <Image
                    src={CATEGORIES[2].image}
                    alt={CATEGORIES[2].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Typography */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-prestige-charcoal)] tracking-tight leading-snug">
                    {CATEGORIES[2].title}
                  </h3>
                  <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed font-light">
                    {CATEGORIES[2].description}
                  </p>
                </div>

                {/* Features list */}
                <ul className="space-y-2 pt-2 border-t border-[var(--color-neutral-200)]/60">
                  {CATEGORIES[2].features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--color-neutral-600)]">
                      <span className="w-4 h-4 rounded-full bg-[var(--color-prestige-gold)]/15 flex items-center justify-center text-[var(--color-prestige-gold)] shrink-0">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[var(--color-neutral-200)]/70">
                <Link
                  href={CATEGORIES[2].ctaHref}
                  className="group/btn inline-flex items-center justify-between w-full text-sm font-semibold text-[var(--color-prestige-charcoal)] hover:text-[var(--color-prestige-gold)] transition-colors duration-200"
                >
                  <span>{CATEGORIES[2].ctaText}</span>
                  <div className="w-8 h-8 rounded-full border border-[var(--color-prestige-gold)]/30 bg-[var(--color-prestige-gold)]/5 flex items-center justify-center group-hover/btn:bg-[var(--color-prestige-gold)] group-hover/btn:text-white transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Category 04 — New Project Launches (Wide 7-cols Feature Showcase) */}
            <div className="lg:col-span-7 group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-[var(--color-neutral-200)] bg-white p-6 sm:p-8 lg:p-10 shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-md)] hover:border-[var(--color-prestige-gold)]/40 transition-all duration-300">
              <div className="space-y-6">
                {/* Header row */}
                <div className="flex items-center justify-between border-b border-[var(--color-neutral-200)]/70 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold tracking-widest text-[var(--color-prestige-gold)] bg-[var(--color-prestige-gold)]/10 px-2.5 py-1 rounded-md">
                      {CATEGORIES[3].number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-neutral-500)]">
                      {CATEGORIES[3].category}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-prestige-charcoal)] bg-[var(--color-neutral-100)] px-3 py-1 rounded-full">
                    {CATEGORIES[3].tag}
                  </span>
                </div>

                {/* Image Frame */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-xl overflow-hidden bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)]/80">
                  <Image
                    src={CATEGORIES[3].image}
                    alt={CATEGORIES[3].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Typography */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-prestige-charcoal)] tracking-tight leading-snug">
                    {CATEGORIES[3].title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[var(--color-neutral-600)] leading-relaxed font-light">
                    {CATEGORIES[3].description}
                  </p>
                </div>

                {/* Features list */}
                <ul className="space-y-2 pt-2 border-t border-[var(--color-neutral-200)]/60">
                  {CATEGORIES[3].features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--color-neutral-600)]">
                      <span className="w-4 h-4 rounded-full bg-[var(--color-prestige-gold)]/15 flex items-center justify-center text-[var(--color-prestige-gold)] shrink-0">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[var(--color-neutral-200)]/70">
                <Link
                  href={CATEGORIES[3].ctaHref}
                  className="group/btn inline-flex items-center justify-between w-full text-sm font-semibold text-[var(--color-prestige-charcoal)] hover:text-[var(--color-prestige-gold)] transition-colors duration-200"
                >
                  <span>{CATEGORIES[3].ctaText}</span>
                  <div className="w-8 h-8 rounded-full border border-[var(--color-prestige-gold)]/30 bg-[var(--color-prestige-gold)]/5 flex items-center justify-center group-hover/btn:bg-[var(--color-prestige-gold)] group-hover/btn:text-white transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

