'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import {
  ArrowRight,
  ShieldCheck,
  Building,
  Home,
  Crown,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  Compass,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/constants';

interface BuyServicePillar {
  number: string;
  badge: string;
  title: string;
  focus: string;
  description: string;
  icon: React.ElementType;
  highlights: string[];
  nodes: string;
}

const BUY_PILLARS: BuyServicePillar[] = [
  {
    number: '01',
    badge: 'VERIFIED FAMILY LIVING',
    title: 'Residential Properties',
    focus: '1, 2 & 3 BHK Flats · Gated Townships · CIDCO Planned Sectors',
    description:
      'Curated high-specification apartments and family residences physically inspected and vetted for clear title chains, high carpet-area efficiency, natural cross-ventilation, and ready Occupancy Certificates.',
    icon: Home,
    highlights: [
      'Zero buyer advisory fee on new builder developments',
      'Direct arterial transit via Atal Setu & suburban railway',
      'Complete society maintenance & amenities inspection',
    ],
    nodes: 'Ulwe · Sanpada · Kharghar',
  },
  {
    number: '02',
    badge: 'STRATEGIC ENTERPRISE HUBS',
    title: 'Commercial Spaces',
    focus: 'Grade-A Office Towers · Business Suites · Prime Retail High-Streets',
    description:
      'Turnkey office spaces, scalable corporate floor plates, and high-footfall retail properties positioned along primary arterial corridors with dedicated power backups, high parking ratios, and clear CAM terms.',
    icon: Building,
    highlights: [
      'Commercial title due diligence & CIDCO lease validation',
      'Walk-to-station Grade-A IT & corporate towers',
      'Independent ROI & lease yield benchmarking',
    ],
    nodes: 'Vashi · Belapur CBD · Sanpada',
  },
  {
    number: '03',
    badge: 'SIGNATURE ARCHITECTURE',
    title: 'Luxury Developments',
    focus: 'Sea-Facing Penthouses · Palm Beach Road · Private Residences',
    description:
      'Iconic waterfront residences and low-density gated enclaves featuring panoramic coastal views, private elevator lobbies, double-height living rooms, and bespoke concierge lifestyle amenities.',
    icon: Crown,
    highlights: [
      'Discreet, confidential advisory for HNWI & NRI buyers',
      'Palm Beach Road waterfront luxury apartments',
      'Exquisite construction specifications & private decks',
    ],
    nodes: 'Palm Beach Road · Nerul · Seawoods',
  },
  {
    number: '04',
    badge: 'GROWTH CORRIDORS',
    title: 'New Project Launches',
    focus: 'Early-Stage Access · Pre-Launch Pricing · Airport Infrastructure',
    description:
      'Exclusive first-mover access to newly sanctioned residential and commercial projects surrounding the upcoming Navi Mumbai International Airport, offering advantageous payment milestones and long-term capital appreciation.',
    icon: Sparkles,
    highlights: [
      'Strict MahaRERA registration & sanction verification',
      'Construction-linked milestone payment structuring',
      'High-growth multimodal transit corridor positioning',
    ],
    nodes: 'Pushpak Nagar · Ulwe · Panvel Corridor',
  },
];

const TRUST_METRICS = [
  {
    title: '100% Legal Scrutiny',
    detail: 'MahaRERA, 30-year chain of title & CIDCO compliance verified.',
  },
  {
    title: 'Zero Advisory Fee',
    detail: 'Complimentary consultation & site visits on new developer projects.',
  },
  {
    title: 'Commercial Negotiation',
    detail: 'Data-backed market price benchmarking for optimal value.',
  },
  {
    title: 'End-to-End Handholding',
    detail: 'From bank loan sanction to Sub-Registrar registration & keys.',
  },
];

export const BuyServicesPromotion: React.FC = () => {
  return (
    <Section
      variant="neutral"
      spacing="none"
      className="py-16 md:py-24 lg:py-28 bg-[var(--color-neutral-50)] border-b border-[var(--color-neutral-200)]/70 relative"
      id="buy-services"
      aria-label="Property Buying Services in Navi Mumbai"
    >
      {/* Subtle architectural grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#bc9a4f08_1px,transparent_1px),linear-gradient(to_bottom,#bc9a4f08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-prestige-gold)]">
                ACQUISITION &amp; BUY SERVICES
              </span>
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-[1.18]">
              Discover Your Ideal Property in{' '}
              <span className="font-normal block text-[var(--color-prestige-charcoal)]">
                Navi Mumbai.
              </span>
            </h2>
            <div className="w-16 h-[2px] bg-[var(--color-prestige-gold)]" aria-hidden="true" />

            <p className="text-sm sm:text-base text-[var(--color-neutral-600)] leading-relaxed font-light">
              Acquiring real estate requires uncompromised title scrutiny, hyper-local intelligence,
              and a dedicated buyer-first fiduciary representation. At SAI PRESTIGE, we eliminate
              guesswork with verified properties, transparent developer negotiations, and seamless
              legal registration across Navi Mumbai&apos;s most sought-after nodes.
            </p>
          </div>

          {/* Prominent Champagne-Gold CTA Button (Desktop Header Placement) */}
          <div className="hidden lg:flex flex-col items-end gap-2.5 shrink-0">
            <Link
              href="/buy"
              className={cn(
                'group inline-flex items-center gap-3.5 px-8 py-4 rounded-xl',
                'bg-gradient-to-r from-[var(--color-prestige-gold)] via-[#d4b468] to-[var(--color-prestige-gold)]',
                'text-[var(--color-prestige-charcoal)] font-semibold text-sm tracking-wide',
                'shadow-[0_4px_18px_rgba(188,154,79,0.32)]',
                'hover:shadow-[0_6px_24px_rgba(188,154,79,0.48)] hover:scale-[1.02] active:scale-[0.98]',
                'transition-all duration-300 ease-out',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)]'
              )}
              aria-label="Explore SAI PRESTIGE Property Buying Services"
            >
              <span className="font-medium tracking-tight">Explore Buying Services</span>
              <div className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-black/15">
                <ArrowRight className="w-4 h-4 text-[var(--color-prestige-charcoal)]" />
              </div>
            </Link>
            <span className="text-[11px] font-mono text-[var(--color-neutral-500)] tracking-wide">
              Verified Properties · 0% Buyer Fee on New Projects
            </span>
          </div>
        </div>

        {/* ── Refined Text-Based Property Category Pillars (No generic cards/images) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-14">
          {BUY_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className={cn(
                  'group relative bg-white rounded-xl p-6 sm:p-7 border border-[var(--color-neutral-200)]',
                  'hover:border-[var(--color-prestige-gold)]/80 hover:shadow-lg hover:shadow-[rgba(188,154,79,0.08)]',
                  'transition-all duration-300 flex flex-col justify-between'
                )}
              >
                {/* Gold Top Accent Bar on Hover */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-[var(--color-prestige-gold)] group-hover:to-[var(--color-prestige-gold-light)] transition-all duration-300 rounded-full" />

                <div>
                  {/* Card Header: Numeral & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="font-mono text-xs font-bold tracking-widest text-[var(--color-prestige-gold)]">
                      {pillar.number}
                    </span>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[var(--color-prestige-gold-dark)] bg-[var(--color-prestige-gold)]/10 px-2 py-0.5 rounded border border-[var(--color-prestige-gold)]/20">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold-dark)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-prestige-gold)] group-hover:text-black transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-medium text-[var(--color-prestige-charcoal)] group-hover:text-[var(--color-prestige-gold-dark)] transition-colors duration-300">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Focus Subtitle */}
                  <p className="text-[11px] font-semibold text-[var(--color-neutral-500)] tracking-wide uppercase mb-3">
                    {pillar.focus}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-[var(--color-neutral-600)] font-light leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  {/* Key Feature Bullets */}
                  <ul className="space-y-2 mb-5 pt-3 border-t border-[var(--color-neutral-100)]">
                    {pillar.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-[11px] text-[var(--color-neutral-700)] font-light leading-snug"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-prestige-gold)] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Micro-tag: Focus Nodes */}
                <div className="pt-3 border-t border-[var(--color-neutral-100)] flex items-center justify-between text-[11px]">
                  <span className="text-[var(--color-neutral-400)] font-light uppercase tracking-wider text-[10px]">
                    Key Nodes:
                  </span>
                  <span className="font-medium text-[var(--color-prestige-charcoal)] group-hover:text-[var(--color-prestige-gold-dark)] transition-colors duration-200">
                    {pillar.nodes}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Advisory Trust Metric Strip ─────────────────────────────────── */}
        <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] p-6 sm:p-8 shadow-xs mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-neutral-200)]/70">
            {TRUST_METRICS.map((metric, idx) => (
              <div
                key={metric.title}
                className={cn('space-y-1.5', idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : '')}
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-prestige-gold)] shrink-0" />
                  <h4 className="text-xs sm:text-sm font-semibold text-[var(--color-prestige-charcoal)]">
                    {metric.title}
                  </h4>
                </div>
                <p className="text-xs text-[var(--color-neutral-500)] font-light leading-relaxed">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile & Tablet Prominent CTA Strip ───────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[var(--color-neutral-200)]">
          <div className="flex items-center gap-2 text-xs text-[var(--color-neutral-500)]">
            <Compass className="w-4 h-4 text-[var(--color-prestige-gold)] shrink-0" />
            <span>
              Serving Ulwe, Sanpada, Vashi, Nerul, Seawoods, Kharghar &amp; Pushpak Nagar
            </span>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Link
              href="/buy"
              className={cn(
                'lg:hidden flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl',
                'bg-gradient-to-r from-[var(--color-prestige-gold)] via-[#d4b468] to-[var(--color-prestige-gold)]',
                'text-[var(--color-prestige-charcoal)] font-semibold text-xs tracking-wide shadow-sm'
              )}
            >
              <span>Explore Buying Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-prestige-charcoal)] hover:text-[var(--color-prestige-gold-dark)] transition-colors py-2 px-3 rounded-lg border border-[var(--color-neutral-200)] bg-white hover:border-[var(--color-prestige-gold)]/50"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[var(--color-prestige-gold)]" />
              <span>Direct Advisory: {siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};

