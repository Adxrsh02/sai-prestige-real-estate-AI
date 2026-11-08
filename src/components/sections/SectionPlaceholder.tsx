import React from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Layers, MapPin, Calculator, FileText, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionPlaceholderProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
  variant?: 'white' | 'neutral' | 'charcoal' | 'deep';
  layout?: 'grid-3' | 'grid-4' | 'split' | 'cta-banner';
  itemCount?: number;
}

export const SectionPlaceholder: React.FC<SectionPlaceholderProps> = ({
  id,
  eyebrow,
  title,
  description,
  actionText,
  actionHref,
  variant = 'white',
  layout = 'grid-3',
  itemCount = 3,
}) => {
  const isDark = variant === 'charcoal' || variant === 'deep';

  return (
    <Section id={id} variant={variant} spacing="default">
      <Container size="wide">
        {layout !== 'cta-banner' && (
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
            theme={isDark ? 'dark' : 'light'}
            align={actionHref ? 'between' : 'left'}
            action={
              actionHref && actionText ? (
                <Button
                  href={actionHref}
                  variant={isDark ? 'outline' : 'secondary'}
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  {actionText}
                </Button>
              ) : undefined
            }
          />
        )}

        {/* 3-Column Grid Layout (Projects, Services, Insights) */}
        {layout === 'grid-3' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Array.from({ length: itemCount }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  'rounded-xl border transition-all duration-300 p-6 flex flex-col justify-between group',
                  isDark
                    ? 'border-[var(--color-neutral-800)] bg-[var(--color-neutral-900)]/60 hover:border-[var(--color-prestige-gold)]/40'
                    : 'border-[var(--color-neutral-200)] bg-white hover:border-[var(--color-prestige-gold)]/50 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-premium-sm)]'
                )}
              >
                {/* Media Skeleton Box */}
                <div className="w-full aspect-[16/10] rounded-lg bg-[var(--color-neutral-100)] border border-dashed border-[var(--color-neutral-300)] flex flex-col items-center justify-center p-4 text-center mb-5">
                  <Layers className="w-6 h-6 text-[var(--color-neutral-400)] mb-2" />
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-neutral-500)]">
                    Structural Content Frame 0{index + 1}
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-[var(--color-neutral-200)] rounded w-2/3 animate-pulse" />
                  <div className="h-3 bg-[var(--color-neutral-100)] rounded w-full" />
                  <div className="h-3 bg-[var(--color-neutral-100)] rounded w-4/5" />
                </div>

                <div className="pt-4 border-t border-[var(--color-neutral-200)]/60 flex items-center justify-between text-xs text-[var(--color-neutral-500)]">
                  <span>Specification Placeholder</span>
                  <span className="text-[var(--color-prestige-gold)] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Details &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4-Column Grid Layout (Properties, Locations) */}
        {layout === 'grid-4' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Array.from({ length: itemCount }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl border border-[var(--color-neutral-200)] bg-white p-5 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-premium-sm)] transition-all group"
              >
                <div className="w-full aspect-[4/3] rounded-lg bg-[var(--color-neutral-100)] border border-dashed border-[var(--color-neutral-300)] flex flex-col items-center justify-center p-3 text-center mb-4">
                  <MapPin className="w-5 h-5 text-[var(--color-neutral-400)] mb-1" />
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--color-neutral-500)]">
                    Area Frame 0{index + 1}
                  </span>
                </div>
                <div className="h-4 bg-[var(--color-neutral-200)] rounded w-3/4 mb-2" />
                <div className="h-3 bg-[var(--color-neutral-100)] rounded w-1/2" />
              </div>
            ))}
          </div>
        )}

        {/* Split Layout (Why SAI PRESTIGE, EMI Calculator Preview) */}
        {layout === 'split' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-2xl border border-[var(--color-neutral-200)] bg-white shadow-[var(--shadow-subtle)] space-y-6">
                <h3 className="text-xl font-light text-[var(--color-prestige-charcoal)]">
                  Architectural Pillars of Advisory
                </h3>
                <div className="space-y-4">
                  {[
                    'Rigorous due diligence on titles and developer backgrounds',
                    'Strategic portfolio selection tailored to client objectives',
                    'End-to-end guidance from site inspection through registration',
                    'Uncompromising confidentiality and executive service',
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-prestige-gold)] shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--color-neutral-700)] leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-dashed border-[var(--color-neutral-300)] bg-[var(--color-neutral-50)] p-8 text-center flex flex-col items-center justify-center min-h-[320px]">
                <Calculator className="w-10 h-10 text-[var(--color-prestige-gold)] mb-3" />
                <h4 className="text-base font-medium text-[var(--color-prestige-charcoal)] mb-2">
                  Interactive Utility Container
                </h4>
                <p className="text-xs text-[var(--color-neutral-500)] max-w-sm mb-6">
                  Engineered placeholder for Phase-specific calculator / comparison interactions
                </p>
                {actionHref && (
                  <Button href={actionHref} variant="outline" size="sm">
                    {actionText || 'Open Tool'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Full-width CTA Banner (Primary Enquiry CTA) */}
        {layout === 'cta-banner' && (
          <div className="rounded-2xl bg-[var(--color-prestige-charcoal)] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[var(--shadow-premium-lg)] border border-[var(--color-neutral-800)]">
            <div className="max-w-2xl relative z-10 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[var(--color-prestige-gold-light)] block">
                {eyebrow || 'BESPOKE ADVISORY'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white">
                {title}
              </h2>
              {description && (
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                  {description}
                </p>
              )}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  {actionText || 'Schedule Private Consultation'}
                </Button>
                <Button href="/properties" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-black">
                  Browse All Properties
                </Button>
              </div>
            </div>

            {/* Subtle background architectural geometry */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden lg:flex items-center justify-center">
              <FileText className="w-64 h-64 text-white" />
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};
