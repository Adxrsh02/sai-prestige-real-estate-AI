import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, ShieldCheck, Award, Building2 } from 'lucide-react';

const HERO_IMAGE_URL =
  'https://res.cloudinary.com/qlxaljlj/image/upload/q_auto,f_auto/v1793424951/sai_hero_section.jpg';

export const HeroPlaceholder: React.FC = () => {
  return (
    <Section spacing="none" className="pt-2 pb-14 md:pb-20 lg:pb-24 border-b border-[var(--color-neutral-200)]/60 bg-gradient-to-b from-white to-[var(--color-neutral-50)]/50">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-7 min-w-0 lg:max-w-[800px]">
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge variant="gold" size="md">
                PREMIER REAL ESTATE ADVISORY
              </Badge>
              <span className="text-xs text-[var(--color-neutral-500)] hidden sm:inline">
                Navi Mumbai &bull; Maharashtra
              </span>
            </div>

            <h1
              style={{ fontSize: 'clamp(2.5rem, 4.6vw, 4.5rem)' }}
              className="font-jakarta font-semibold leading-[1.08] tracking-[-0.02em] text-neutral-900"
            >
              <span className="block">Trusted Real Estate</span>
              <span className="block">Consultant in</span>
              <span style={{ fontSize: '0.85em' }} className="block text-[#B8924A]">
                Navi Mumbai
              </span>
            </h1>

            <p className="mt-6 text-lg lg:text-xl leading-relaxed text-neutral-600 max-w-2xl font-light">
              Sai Prestige is a real estate consultancy in Navi Mumbai helping buyers, sellers, tenants and investors across Ulwe, Sanpada, Vashi and Pushpak Nagar with transparent guidance and local market insight.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10">
              <Button
                href="/properties"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Curated Properties
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
              >
                Talk to an Advisor
              </Button>
            </div>

            {/* Trust Signals Strip */}
            <div className="pt-8 mt-10 border-t border-[var(--color-neutral-200)] grid grid-cols-3 gap-4 sm:gap-6 text-left">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[var(--color-prestige-gold)]">
                  <Building2 className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-prestige-charcoal)]">Prime Residences</span>
                </div>
                <p className="text-xs text-[var(--color-neutral-500)]">Handpicked residential properties &amp; verified developments</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[var(--color-prestige-gold)]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-prestige-charcoal)]">Full Transparency</span>
                </div>
                <p className="text-xs text-[var(--color-neutral-500)]">Clear documentation &amp; verified title guidance</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[var(--color-prestige-gold)]">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-prestige-charcoal)]">Tailored Guidance</span>
                </div>
                <p className="text-xs text-[var(--color-neutral-500)]">Strategic property investment &amp; advisory</p>
              </div>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[var(--color-neutral-200)] shadow-[var(--shadow-premium-md)] bg-white p-3 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] flex flex-col justify-between group">

              {/* Hero Property Image */}
              <div className="absolute inset-3 rounded-xl overflow-hidden">
                <Image
                  src={HERO_IMAGE_URL}
                  alt="Curated residential properties and premium investment opportunities in Navi Mumbai by SAI PRESTIGE"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Subtle gradient overlay for readability of overlaid elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Foreground Floating Badge */}
              <div className="relative z-10 self-start bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[var(--color-neutral-200)] shadow-sm">
                <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-prestige-gold)] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-prestige-gold)] animate-pulse" />
                  Exclusive Portfolio
                </span>
              </div>

              {/* Bottom Quick Metric Card */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[var(--color-neutral-200)] shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[var(--color-neutral-500)] block">
                    Strategic Locations
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-prestige-charcoal)]">
                    Ulwe &bull; Sanpada &bull; Vashi &bull; Pushpak Nagar
                  </span>
                </div>
                <Button href="/locations" variant="ghost" size="sm" className="text-xs">
                  View Areas &rarr;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
