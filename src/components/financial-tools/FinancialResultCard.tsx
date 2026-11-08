import React from 'react';
import { cn } from '@/lib/utils';

export interface MetricItem {
  label: string;
  value: string;
  subtitle?: string;
  isEmphasized?: boolean;
}

interface FinancialResultCardProps {
  primaryLabel: string;
  primaryValue: string;
  primarySubtitle?: string;
  metrics: MetricItem[];
  theme?: 'gold' | 'charcoal' | 'neutral';
  className?: string;
  ariaLiveMessage?: string;
}

export const FinancialResultCard: React.FC<FinancialResultCardProps> = ({
  primaryLabel,
  primaryValue,
  primarySubtitle,
  metrics,
  theme = 'gold',
  className,
  ariaLiveMessage,
}) => {
  const themeClasses = {
    gold: 'bg-[var(--color-prestige-gold)]/8 border-[var(--color-prestige-gold)]/25 text-[var(--color-prestige-charcoal)]',
    charcoal: 'bg-[var(--color-prestige-charcoal)] border-[var(--color-neutral-800)] text-white',
    neutral: 'bg-[var(--color-neutral-50)] border-[var(--color-neutral-200)] text-[var(--color-prestige-charcoal)]',
  };

  return (
    <div
      className={cn(
        'rounded-xl border p-4 sm:p-4.5 transition-all duration-300 space-y-3',
        themeClasses[theme],
        className
      )}
      role="region"
      aria-label="Calculated Financial Summary"
    >
      {/* Screen Reader Announcement */}
      {ariaLiveMessage && (
        <div className="sr-only" aria-live="polite">
          {ariaLiveMessage}
        </div>
      )}

      {/* Primary KPI */}
      <div className="border-b border-[var(--color-neutral-200)]/70 pb-2.5">
        <span className="text-[10px] uppercase tracking-widest font-semibold text-[var(--color-neutral-500)] block mb-0.5">
          {primaryLabel}
        </span>
        <div className="flex items-baseline gap-1.5 flex-wrap">
          <span className="text-2xl sm:text-[28px] font-light tracking-tight text-[var(--color-prestige-charcoal)] tabular-nums leading-none">
            {primaryValue}
          </span>
          {primarySubtitle && (
            <span className="text-xs font-light text-[var(--color-neutral-500)]">
              {primarySubtitle}
            </span>
          )}
        </div>
      </div>

      {/* Supporting Metric Grid */}
      <div className="grid grid-cols-2 gap-y-2 gap-x-3 pt-0.5">
        {metrics.map((metric, idx) => (
          <div key={idx} className="space-y-0.5">
            <span className="text-[11px] text-[var(--color-neutral-500)] block font-light leading-snug">
              {metric.label}
            </span>
            <span
              className={cn(
                'text-xs sm:text-sm tabular-nums block leading-tight',
                metric.isEmphasized
                  ? 'font-medium text-[var(--color-prestige-charcoal)]'
                  : 'font-normal text-[var(--color-neutral-700)]'
              )}
            >
              {metric.value}
            </span>
            {metric.subtitle && (
              <span className="text-[10px] text-[var(--color-neutral-400)] block leading-none pt-0.5">
                {metric.subtitle}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
