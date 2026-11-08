'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─────────────────────────────────────────────────────────────────────────────
   DATA — all values sourced from user-supplied business facts & Sai_prestige_info.md
   ───────────────────────────────────────────────────────────────────────────── */

const STATS = [
  {
    value: 8,
    suffix: '+',
    unit: 'Years',
    label: 'Real Estate Industry Experience',
    description: "A decade of market knowledge across Navi Mumbai's fastest-growing localities.",
  },
  {
    value: 85,
    suffix: '+',
    unit: 'Clients',
    label: 'Happy Clients Served',
    description: 'Families and investors guided across Mumbai and Navi Mumbai.',
  },
  {
    value: 100,
    suffix: '%',
    unit: '',
    label: 'Client Satisfaction',
    description: 'A commitment to transparent, buyer-focused real estate service.',
  },
] as const;

/**
 * Doughnut chart segments representing Sai Prestige's Navi Mumbai market coverage.
 * Four PRIMARY localities + three additional served areas from Sai_prestige_info.md.
 * The proportions reflect stated priority (primary: higher share) only — no
 * invented market-share statistics.
 */
const LOCALITIES = [
  { name: 'Ulwe',          color: '#BC9A4F', stroke: '#A8873D', share: 28, primary: true  },
  { name: 'Sanpada',       color: '#D4B468', stroke: '#BC9A4F', share: 22, primary: true  },
  { name: 'Vashi',         color: '#C5A454', stroke: '#A8873D', share: 20, primary: true  },
  { name: 'Pushpak Nagar', color: '#E8CC84', stroke: '#BC9A4F', share: 18, primary: true  },
  { name: 'Nerul',         color: '#8B7355', stroke: '#6B5535', share: 5,  primary: false },
  { name: 'Seawoods',      color: '#A08060', stroke: '#7A6040', share: 4,  primary: false },
  { name: 'Kharghar',      color: '#786050', stroke: '#584030', share: 3,  primary: false },
] as const;

/* ─────────────────────────────────────────────────────────────────────────────
   HOOKS
   ───────────────────────────────────────────────────────────────────────────── */

/** Returns true once the ref element enters the viewport (fires only once). */
function useInViewOnce(ref: React.RefObject<Element | null>): boolean {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current || inView) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, inView]);
  return inView;
}

/** Animates a number from 0 to `target` over `duration` ms. Respects reduced-motion. */
function useCountUp(target: number, active: boolean, duration = 1600): number {
  const [current, setCurrent] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    // Respect prefers-reduced-motion — jump immediately
    if (typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const timer = setTimeout(() => setCurrent(target), 0);
      return () => clearTimeout(timer);
    }
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [active, target, duration]);

  return current;
}

/* ─────────────────────────────────────────────────────────────────────────────
   STAT CARD — individual statistic with count-up
   ───────────────────────────────────────────────────────────────────────────── */

interface StatCardProps {
  value: number;
  suffix: string;
  unit: string;
  label: string;
  description: string;
  active: boolean;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, suffix, unit, label, description, active, delay = 0 }) => {
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, started);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);

  return (
    <div className="group relative flex flex-col gap-3 p-6 sm:p-7 rounded-2xl bg-white border border-[var(--color-neutral-200)] shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-md)] hover:border-[var(--color-prestige-gold)]/40 transition-all duration-300">
      {/* Gold accent bar */}
      <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-[var(--color-prestige-gold-dark)] via-[var(--color-prestige-gold)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Number */}
      <div className="flex items-end gap-1 leading-none" aria-label={`${value}${suffix} ${unit}`}>
        <span className="text-[2.6rem] sm:text-[3rem] font-bold tracking-tight text-[var(--color-prestige-charcoal)] tabular-nums">
          {count}
        </span>
        <span className="text-2xl sm:text-[1.75rem] font-bold text-[var(--color-prestige-gold)] mb-1">
          {suffix}
        </span>
        {unit && (
          <span className="text-sm font-semibold text-[var(--color-neutral-500)] mb-2 ml-1">
            {unit}
          </span>
        )}
      </div>

      {/* Label */}
      <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--color-prestige-charcoal)]">
        {label}
      </p>

      {/* Divider */}
      <div className="w-8 h-px bg-[var(--color-prestige-gold)]/40" />

      {/* Description */}
      <p className="text-sm text-[var(--color-neutral-500)] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   DOUGHNUT CHART — pure SVG, no external library
   ───────────────────────────────────────────────────────────────────────────── */

const CHART_SIZE = 220;
const CENTER = CHART_SIZE / 2;
const OUTER_R = 88;
const INNER_R = 56; // Doughnut thickness = 32

interface DoughnutChartProps {
  animated: boolean;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ animated }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (!animated) return;
    const t = setTimeout(() => setDrawn(true), 200);
    return () => clearTimeout(t);
  }, [animated]);

  // Convert share percentages to SVG arc paths
  const total = LOCALITIES.reduce((s, l) => s + l.share, 0);

  const segments = LOCALITIES.map((loc, i) => {
    const prevCumulative = LOCALITIES.slice(0, i).reduce((s, l) => s + l.share, 0);
    const currCumulative = prevCumulative + loc.share;
    const startAngle = (prevCumulative / total) * 2 * Math.PI - Math.PI / 2;
    const endAngle = (currCumulative / total) * 2 * Math.PI - Math.PI / 2;

    const isHovered = hovered === i;
    const r = isHovered ? OUTER_R + 5 : OUTER_R;

    const x1 = CENTER + r * Math.cos(startAngle);
    const y1 = CENTER + r * Math.sin(startAngle);
    const x2 = CENTER + r * Math.cos(endAngle);
    const y2 = CENTER + r * Math.sin(endAngle);

    const xi1 = CENTER + INNER_R * Math.cos(startAngle);
    const yi1 = CENTER + INNER_R * Math.sin(startAngle);
    const xi2 = CENTER + INNER_R * Math.cos(endAngle);
    const yi2 = CENTER + INNER_R * Math.sin(endAngle);

    const largeArc = (endAngle - startAngle) > Math.PI ? 1 : 0;

    const d = [
      `M ${x1} ${y1}`,
      `A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`,
      `L ${xi2} ${yi2}`,
      `A ${INNER_R} ${INNER_R} 0 ${largeArc} 0 ${xi1} ${yi1}`,
      'Z',
    ].join(' ');

    // Midpoint angle for any potential tooltip positioning
    const midAngle = (startAngle + endAngle) / 2;

    return { ...loc, d, midAngle, i };
  });

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Chart */}
      <div className="relative" style={{ width: CHART_SIZE, height: CHART_SIZE }}>
        <svg
          width={CHART_SIZE}
          height={CHART_SIZE}
          viewBox={`0 0 ${CHART_SIZE} ${CHART_SIZE}`}
          aria-label="Doughnut chart showing Sai Prestige market coverage across Navi Mumbai localities"
          role="img"
        >
          {/* Drop shadow filter */}
          <defs>
            <filter id="seg-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#BC9A4F" floodOpacity="0.15" />
            </filter>
            {/* Entrance clip mask — animates a circle from r=0 to full */}
            <clipPath id="reveal-clip">
              <circle
                cx={CENTER}
                cy={CENTER}
                r={drawn ? OUTER_R + 10 : 0}
                style={{ transition: 'r 1s cubic-bezier(0.4,0,0.2,1)' }}
              />
            </clipPath>
          </defs>

          <g clipPath="url(#reveal-clip)">
            {segments.map((seg) => (
              <path
                key={seg.name}
                d={seg.d}
                fill={seg.color}
                stroke={seg.stroke}
                strokeWidth="1"
                filter={hovered === seg.i ? 'url(#seg-shadow)' : undefined}
                style={{ transition: 'all 0.2s ease', cursor: 'pointer', outline: 'none' }}
                onMouseEnter={() => setHovered(seg.i)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(seg.i)}
                onBlur={() => setHovered(null)}
                tabIndex={0}
                role="button"
                aria-label={`${seg.name}: ${seg.share}% of market coverage`}
              />
            ))}
          </g>

          {/* Center label */}
          <text
            x={CENTER}
            y={CENTER - 8}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="11"
            fontWeight="600"
            letterSpacing="0.08em"
            fill="#78716C"
            style={{ textTransform: 'uppercase' }}
          >
            {hovered !== null ? LOCALITIES[hovered].name : 'COVERAGE'}
          </text>
          <text
            x={CENTER}
            y={CENTER + 10}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="22"
            fontWeight="700"
            fill="#242424"
          >
            {hovered !== null ? `${LOCALITIES[hovered].share}%` : '7'}
          </text>
          <text
            x={CENTER}
            y={CENTER + 26}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="10"
            fill="#A8A29E"
            letterSpacing="0.06em"
          >
            {hovered !== null ? 'AREA FOCUS' : 'LOCALITIES'}
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 w-full max-w-[280px]">
        {LOCALITIES.map((loc) => (
          <div key={loc.name} className="flex items-center gap-2 min-w-0">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: loc.color }}
            />
            <span className={cn(
              'text-xs leading-none truncate',
              loc.primary
                ? 'font-semibold text-[var(--color-prestige-charcoal)]'
                : 'font-normal text-[var(--color-neutral-500)]'
            )}>
              {loc.name}
            </span>
          </div>
        ))}
      </div>

      <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-neutral-400)] text-center leading-relaxed max-w-[260px]">
        Priority coverage: Ulwe, Sanpada, Vashi &amp; Pushpak Nagar.<br />
        Area proportions reflect service focus only.
      </p>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN EXPORT
   ───────────────────────────────────────────────────────────────────────────── */

export const PortfolioDiscovery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInViewOnce(sectionRef);

  return (
    <Section
      spacing="none"
      className="py-16 md:py-20 lg:py-24 bg-[var(--color-neutral-50)] border-b border-[var(--color-neutral-200)]"
    >
      <Container size="wide">
        <div ref={sectionRef}>
          {/* ── Section Eyebrow ────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-prestige-gold)]">
                PORTFOLIO DISCOVERY
              </span>
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" />
            </div>
          </div>

          {/* ── Two-Column Grid ─────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">

            {/* LEFT COLUMN — Editorial copy + CTA */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-[1.85rem] md:text-[2.15rem] font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-[1.22]">
                  Experience That Builds&nbsp;Trust.{' '}
                  <span className="font-normal text-[var(--color-prestige-charcoal)]">
                    Relationships That Create&nbsp;Value.
                  </span>
                </h2>

                <p className="text-base text-[var(--color-neutral-600)] leading-relaxed font-light max-w-lg">
                  With over 8 years of real estate experience and more than 85 happy clients across Mumbai and Navi Mumbai, SAI PRESTIGE is committed to making every property decision more informed, transparent, and confident.
                </p>
              </div>

              {/* Refined CTA */}
              <Link
                href="/about-us"
                className="group inline-flex items-center gap-2.5 text-sm font-semibold text-[var(--color-prestige-charcoal)] border-b border-[var(--color-prestige-gold)]/50 pb-0.5 hover:border-[var(--color-prestige-gold)] hover:text-[var(--color-prestige-gold-dark)] transition-all duration-200"
                aria-label="Explore our approach — About SAI PRESTIGE"
              >
                Explore Our Approach
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              {/* Doughnut Chart */}
              <div className="pt-4">
                <div className="mb-5">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-prestige-charcoal)] mb-1">
                    Our Navi Mumbai Market Presence
                  </h3>
                  <p className="text-xs text-[var(--color-neutral-500)]">
                    Focused real estate consultancy across selected localities
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-[var(--color-neutral-200)] shadow-[var(--shadow-premium-sm)] p-6 inline-block w-full">
                  <DoughnutChart animated={inView} />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — Stat Cards */}
            <div className="lg:col-span-7 space-y-4">
              {/* Decorative top rule */}
              <div className="hidden lg:flex items-center gap-3 mb-8 text-[var(--color-neutral-400)]">
                <div className="flex-1 h-px bg-[var(--color-neutral-200)]" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">
                  Verified Business Highlights
                </span>
                <div className="flex-1 h-px bg-[var(--color-neutral-200)]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {STATS.slice(0, 2).map((stat, i) => (
                  <StatCard
                    key={stat.label}
                    {...stat}
                    active={inView}
                    delay={i * 180}
                  />
                ))}
              </div>

              {/* Full-width third stat */}
              <StatCard
                {...STATS[2]}
                active={inView}
                delay={380}
              />

              {/* Brand Values strip */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { label: 'Transparency', desc: 'Clear communication at every step' },
                  { label: 'Client Focus', desc: 'Your goals guide every recommendation' },
                  { label: 'Local Insight', desc: 'Deep knowledge of Navi Mumbai' },
                ].map((v) => (
                  <div
                    key={v.label}
                    className="rounded-xl border border-[var(--color-neutral-200)] bg-white/70 p-4 space-y-1.5"
                  >
                    <div className="w-4 h-[2px] rounded-full bg-[var(--color-prestige-gold)]" />
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-prestige-charcoal)] leading-tight">
                      {v.label}
                    </p>
                    <p className="text-[11px] text-[var(--color-neutral-500)] leading-snug">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Discover About Us CTA */}
              <div className="pt-3">
                <Link
                  href="/about"
                  className={cn(
                    'group inline-flex items-center justify-between gap-4',
                    'w-full rounded-xl px-6 py-4',
                    'bg-white border border-[var(--color-prestige-gold)]/30',
                    'shadow-[var(--shadow-premium-sm)]',
                    'hover:border-[var(--color-prestige-gold)]/70',
                    'hover:shadow-[0_4px_20px_rgba(188,154,79,0.14)]',
                    'hover:bg-[var(--color-prestige-gold)]/[0.03]',
                    'transition-all duration-250 ease-out',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)] focus-visible:ring-offset-2'
                  )}
                  aria-label="Discover About SAI PRESTIGE"
                >
                  {/* Left: label stack */}
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-prestige-gold)]">
                      Our Story
                    </span>
                    <span className="text-[15px] font-semibold tracking-[-0.01em] text-[var(--color-prestige-charcoal)] group-hover:text-black transition-colors duration-200">
                      Discover About Us
                    </span>
                  </div>

                  {/* Right: animated arrow circle */}
                  <div className={cn(
                    'flex items-center justify-center w-9 h-9 rounded-full shrink-0',
                    'border border-[var(--color-prestige-gold)]/40',
                    'bg-[var(--color-prestige-gold)]/5',
                    'group-hover:bg-[var(--color-prestige-gold)] group-hover:border-[var(--color-prestige-gold)]',
                    'transition-all duration-250 ease-out'
                  )}>
                    <ArrowRight
                      className={cn(
                        'w-4 h-4 shrink-0',
                        'text-[var(--color-prestige-gold)]',
                        'group-hover:text-white group-hover:translate-x-0.5',
                        'transition-all duration-200 ease-out'
                      )}
                      strokeWidth={2}
                    />
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
