import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { MapPin, ArrowRight, Building2, Train, Car } from 'lucide-react';

interface LocalityItem {
  name: string;
  badge: string;
  tagline: string;
  connectivity: string;
  highlights: string[];
  suitedFor: string;
  href: string;
}

const LOCALITIES: LocalityItem[] = [
  {
    name: 'Ulwe',
    badge: 'PRIORITY SERVICE NODE',
    tagline: 'High-Connectivity Growth Corridor',
    connectivity: 'Atal Setu (MTHL), Coastal Road & Kharkopar Railway',
    highlights: [
      'Direct arterial connection to South Mumbai via Atal Setu',
      'Rapid proximity to upcoming Navi Mumbai International Airport (NMIA)',
      'Modern, planned CIDCO sectors with wide roads and coastal breeze',
    ],
    suitedFor: 'First-time homebuyers, young professionals, and long-term asset builders.',
    href: '/locations/ulwe',
  },
  {
    name: 'Sanpada',
    badge: 'ESTABLISHED PRIME NODE',
    tagline: 'Central Transit Hub & Mature Living',
    connectivity: 'Palm Beach Road, Sion–Panvel Highway & Sanpada Station',
    highlights: [
      'Strategic position adjacent to Vashi commercial district',
      'Established cooperative housing societies with vibrant communities',
      'Instant access to premier healthcare, dining, and transit',
    ],
    suitedFor: 'Families upgrading to prime central Navi Mumbai with short commutes.',
    href: '/locations/sanpada',
  },
  {
    name: 'Vashi',
    badge: 'COMMERCIAL CAPITAL',
    tagline: 'Corporate, Retail & Residential Hub',
    connectivity: 'Vashi Creek Bridge, Harbour Line & Highway Corridors',
    highlights: [
      'Navi Mumbai’s premier business district and high-street shopping hubs',
      'Grade-A corporate office towers and commercial spaces',
      'Prestigious educational institutions and premium residential pockets',
    ],
    suitedFor: 'Commercial property buyers, business owners, and prime residential seekers.',
    href: '/locations/vashi',
  },
  {
    name: 'Pushpak Nagar',
    badge: 'EMERGING AEROTROPOLIS',
    tagline: 'CIDCO-Planned Airport Growth Node',
    connectivity: 'Immediate NMIA Terminals, Panvel Highway & Metro Corridor',
    highlights: [
      'CIDCO-master-planned layout directly adjoining the new airport',
      'Early-entry pricing advantages on upcoming residential releases',
      'Strategic nexus connecting Panvel, Ulwe, and multimodal transit hubs',
    ],
    suitedFor: 'Early-stage investors and buyers planning for long-term airport growth.',
    href: '/locations/pushpak-nagar',
  },
  {
    name: 'Nerul',
    badge: 'COASTAL LUXURY CORRIDOR',
    tagline: 'Prestigious Educational & Green Enclave',
    connectivity: 'Palm Beach Road, Nerul Junction & LP Flyover',
    highlights: [
      'Iconic Palm Beach Road luxury apartment towers and sea-facing flats',
      'Reputed medical universities, engineering colleges, and international schools',
      'Abundant green recreation including DY Patil Stadium and sector parks',
    ],
    suitedFor: 'Luxury apartment buyers seeking prestige, open green spaces, and schools.',
    href: '/locations/nerul',
  },
  {
    name: 'Seawoods',
    badge: 'PREMIER LIFESTYLE NODE',
    tagline: 'Station-Integrated Luxury Living',
    connectivity: 'Seawoods Grand Central, Harbour Line & Palm Beach Road',
    highlights: [
      'Seawoods Grand Central transit-oriented development and retail mall',
      'Sought-after residential enclaves including the iconic NRI Complex belt',
      'Tranquil coastal living with modern urban convenience',
    ],
    suitedFor: 'NRI property buyers, luxury homebuyers, and lifestyle-focused families.',
    href: '/locations/seawoods',
  },
  {
    name: 'Kharghar',
    badge: 'CULTURAL & EDUCATIONAL NODE',
    tagline: 'Spacious Planning & Scenic Backdrops',
    connectivity: 'Navi Mumbai Metro Line 1, Sion–Panvel Highway',
    highlights: [
      'Panoramic 290-acre Central Park, Golf Course, and Pandavkada waterfalls',
      'Wide master-planned sectors with high-rise residential townships',
      'Premier management colleges, international schools, and metro stations',
    ],
    suitedFor: 'Families prioritizing expansive green parks, sports, and educational access.',
    href: '/locations/kharghar',
  },
];

export const BuyLocalities: React.FC = () => {
  return (
    <Section
      variant="white"
      spacing="none"
      className="py-16 md:py-24 lg:py-28 border-b border-[var(--color-neutral-200)]/70 bg-white"
      id="local-market-expertise"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-prestige-gold)]">
                REGIONAL MARKET EXPERTISE
              </span>
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-[1.2]">
              Prime Navi Mumbai <span className="font-normal block sm:inline">Buying Destinations.</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-sm sm:text-base text-[var(--color-neutral-600)] font-light leading-relaxed">
              Every node in Navi Mumbai offers distinct transit infrastructure, residential
              characteristics, and lifestyle benefits. Compare verified insights across our service locations.
            </p>
          </div>
        </div>

        {/* ── Locality Cards Grid ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {LOCALITIES.map((loc) => (
            <div
              key={loc.name}
              className="group rounded-2xl border border-[var(--color-neutral-200)] bg-white p-6 sm:p-7 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-premium-md)] hover:border-[var(--color-prestige-gold)]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header: Name + Badge */}
                <div className="flex items-start justify-between gap-3 border-b border-[var(--color-neutral-200)]/70 pb-3.5">
                  <div>
                    <div className="flex items-center gap-1.5 text-[var(--color-prestige-gold)] mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                        {loc.badge}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[var(--color-prestige-charcoal)]">
                      {loc.name}
                    </h3>
                  </div>
                </div>

                {/* Subtitle / Connectivity Pill */}
                <div className="flex items-center gap-2 text-xs text-[var(--color-prestige-charcoal)] font-medium bg-[var(--color-neutral-100)] px-3 py-1.5 rounded-lg">
                  <Car className="w-3.5 h-3.5 text-[var(--color-prestige-gold)] shrink-0" />
                  <span className="truncate">{loc.connectivity}</span>
                </div>

                {/* Bullet Highlights */}
                <ul className="space-y-2 pt-1 text-xs sm:text-sm text-[var(--color-neutral-600)] leading-relaxed font-light">
                  {loc.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-prestige-gold)] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Suited For note */}
                <div className="pt-2 border-t border-[var(--color-neutral-100)]">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-neutral-400)] block mb-1">
                    Ideal For
                  </span>
                  <p className="text-xs text-[var(--color-neutral-700)] font-medium">
                    {loc.suitedFor}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 mt-4 border-t border-[var(--color-neutral-200)]/70">
                <Link
                  href={loc.href}
                  className="group/link inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-prestige-charcoal)] hover:text-[var(--color-prestige-gold)] transition-colors"
                >
                  <span>Explore {loc.name} Property Options</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

