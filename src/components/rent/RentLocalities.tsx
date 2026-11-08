import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { MapPin, ArrowRight, Building, Train, ShieldCheck } from 'lucide-react';

interface RentLocality {
  name: string;
  badge: string;
  tagline: string;
  connectivity: string;
  highlights: string[];
  suitedFor: string;
  href: string;
}

const RENT_LOCALITIES: RentLocality[] = [
  {
    name: 'Ulwe',
    badge: 'PRIORITY SERVICE NODE',
    tagline: 'Modern Coastal Living with Direct South Mumbai Connectivity',
    connectivity: 'Atal Setu (MTHL), Kharkopar & Bamandongri Railway Stations, Coastal Road',
    highlights: [
      'Abundant modern 1, 2 & 3 BHK flats across well-planned CIDCO sectors with wide avenues',
      'Under 20 minutes to South Mumbai via Atal Setu and minutes from upcoming NMIA',
      'Proximity to sports complexes, sector markets, and growing community conveniences',
    ],
    suitedFor: 'Young professionals, airport & port staff, and families wanting modern, spacious flats.',
    href: '/locations/ulwe',
  },
  {
    name: 'Sanpada',
    badge: 'CENTRAL TRANSIT HUB',
    tagline: 'Mature Residential Pocket with Immediate Station Proximity',
    connectivity: 'Sanpada Railway Station, Sion-Panvel Highway & Palm Beach Road',
    highlights: [
      'Walk-to-station residential sectors offering rapid suburban transit across Mumbai & Panvel',
      'Established cooperative housing societies with strong community security and maintenance',
      'Minutes from Vashi commercial centres, corporate towers, and specialty healthcare',
    ],
    suitedFor: 'Corporate executives and nuclear families prioritizing quick daily commutes.',
    href: '/locations/sanpada',
  },
  {
    name: 'Vashi',
    badge: 'COMMERCIAL CAPITAL',
    tagline: 'Grade-A Office Leases & Premier Urban Conveniences',
    connectivity: 'Vashi Station Complex, Sion-Panvel Expressway & Creek Bridge Corridor',
    highlights: [
      'Navi Mumbai’s primary commercial district with Grade-A offices and high-street showrooms',
      'Premium shopping avenues, international schools, and multispecialty medical infrastructure',
      'Consistent demand for executive residential rentals and turnkey commercial spaces',
    ],
    suitedFor: 'Corporate office branches, IT/BFSI firms, retailers, and executive residences.',
    href: '/locations/vashi',
  },
  {
    name: 'Nerul',
    badge: 'PALM BEACH RESIDENTIAL BELT',
    tagline: 'Scenic Green Avenues & Reputed Educational Hub',
    connectivity: 'Palm Beach Road, Nerul Railway Junction & Uran Phata Interchange',
    highlights: [
      'Prestigious Palm Beach Road residential towers offering sea-view luxury rental residences',
      'Home to reputed medical universities, engineering colleges, and international academies',
      'Tranquil tree-lined sectors, recreational sports clubs, and expansive neighborhood parks',
    ],
    suitedFor: 'Faculty, healthcare specialists, student families, and luxury rental seekers.',
    href: '/locations/nerul',
  },
  {
    name: 'Seawoods',
    badge: 'TRANSIT-ORIENTED LIFESTYLE',
    tagline: 'Mall-Integrated Living & Scenic Coastal Enclaves',
    connectivity: 'Seawoods Grand Central TOD, Harbour Line & Palm Beach Road',
    highlights: [
      'Direct indoor access to Grand Central Mall, multiplexes, and prime corporate offices',
      'Exclusive residential enclaves including Seawoods Estate and tranquil waterfront sectors',
      'Full-amenity gated societies with dedicated clubhouses, pools, and 24/7 security teams',
    ],
    suitedFor: 'Corporate tenants, expatriates, and lifestyle-focused families.',
    href: '/locations/seawoods',
  },
  {
    name: 'Kharghar',
    badge: 'METRO-CONNECTED TOWNSHIP',
    tagline: 'Scenic Valley Backdrops & Broad Sector Avenues',
    connectivity: 'Navi Mumbai Metro Line 1, Central Park & Sion-Panvel Highway',
    highlights: [
      'Metro Line 1 connectivity providing smooth transit between Belapur CBD and residential sectors',
      'Near Central Park, Kharghar Golf Course, ISKCON Temple, and prestigious campuses',
      'Wide spectrum of rental options from practical family flats to golf-facing luxury residences',
    ],
    suitedFor: 'Students, academic staff, and families desiring green, peaceful surroundings.',
    href: '/locations/kharghar',
  },
  {
    name: 'Pushpak Nagar',
    badge: 'AEROTROPOLIS CORRIDOR',
    tagline: 'Strategic Node Beside Navi Mumbai International Airport',
    connectivity: 'Immediate NMIA Terminals, JNPA Highway & Multimodal Corridor',
    highlights: [
      'CIDCO master-planned layout directly adjacent to the upcoming international airport',
      'Brand-new residential buildings and commercial complexes nearing lease availability',
      'Strategic gateway position connecting Panvel, Ulwe, and upcoming logistics hubs',
    ],
    suitedFor: 'Aviation vendors, logistics service providers, and forward-thinking tenants.',
    href: '/locations/pushpak-nagar',
  },
];

export const RentLocalities: React.FC = () => {
  return (
    <Section
      variant="neutral"
      spacing="none"
      className="py-16 md:py-24 lg:py-28 bg-white border-b border-[var(--color-neutral-200)]/70"
      id="rental-localities"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-3.5">
            <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-prestige-gold)]">
              LOCALITY INTELLIGENCE
            </span>
            <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-[1.2]">
            Navi Mumbai Rental &amp; Leasing{' '}
            <span className="font-normal block text-[var(--color-prestige-charcoal)]">
              Market Intelligence.
            </span>
          </h2>
          <div className="w-16 h-[2px] bg-[var(--color-prestige-gold)] my-4" aria-hidden="true" />

          <p className="text-base text-[var(--color-neutral-600)] leading-relaxed font-light">
            Navi Mumbai offers distinctly unique residential and commercial leasing hubs. From the high-speed connectivity of Ulwe and mature transit of Sanpada to the corporate ecosystem of Vashi, explore where your lifestyle or business thrives.
          </p>
        </div>

        {/* 7 Locality Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {RENT_LOCALITIES.map((loc) => (
            <div
              key={loc.name}
              className="group relative bg-[var(--color-neutral-50)] rounded-lg p-6 sm:p-7 border border-[var(--color-neutral-200)] hover:border-[var(--color-prestige-gold)]/70 hover:shadow-lg hover:shadow-black/[0.04] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Name + Badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="inline-block text-[9px] font-bold tracking-widest text-[var(--color-prestige-gold)] uppercase bg-[var(--color-prestige-gold)]/10 px-2 py-0.5 rounded mb-1.5">
                      {loc.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-light text-[var(--color-prestige-charcoal)] group-hover:text-[var(--color-prestige-gold-dark)] transition-colors duration-300">
                      {loc.name}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white border border-[var(--color-neutral-200)] flex items-center justify-center text-[var(--color-neutral-500)] group-hover:border-[var(--color-prestige-gold)] group-hover:text-[var(--color-prestige-gold)] transition-colors duration-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs font-medium text-[var(--color-neutral-500)] mb-4">
                  {loc.tagline}
                </p>

                {/* Connectivity */}
                <div className="mb-4 pb-3 border-b border-[var(--color-neutral-200)]/70 flex items-center gap-2 text-xs text-[var(--color-neutral-700)]">
                  <Train className="w-3.5 h-3.5 text-[var(--color-prestige-gold)] shrink-0" />
                  <span className="line-clamp-1">{loc.connectivity}</span>
                </div>

                {/* Rental Highlights */}
                <ul className="space-y-2 mb-5">
                  {loc.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[var(--color-neutral-600)] font-light leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-prestige-gold)] mt-1.5 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer: Suited For + Locality Page Link */}
              <div className="pt-4 border-t border-[var(--color-neutral-200)]/70">
                <p className="text-[11px] text-[var(--color-neutral-500)] mb-3 leading-snug">
                  <strong className="font-semibold text-[var(--color-neutral-700)]">Ideal for: </strong>
                  {loc.suitedFor}
                </p>
                <Link
                  href={loc.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-prestige-gold-dark)] hover:text-black uppercase tracking-wider transition-colors duration-200 group/link"
                >
                  <span>Explore {loc.name} Properties</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

