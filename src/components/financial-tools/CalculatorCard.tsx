import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

interface CalculatorCardProps {
  id?: string;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeVariant?: 'gold' | 'charcoal' | 'neutral' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const CalculatorCard: React.FC<CalculatorCardProps> = ({
  id,
  icon,
  title,
  subtitle,
  badge,
  badgeVariant = 'gold',
  children,
  className,
}) => {
  return (
    <article
      id={id}
      className={cn(
        'rounded-2xl border border-[var(--color-neutral-200)] bg-white p-5 sm:p-6 lg:p-6 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-premium-sm)] transition-shadow duration-300 flex flex-col justify-between',
        className
      )}
    >
      <div>
        {/* Compact Card Header */}
        <div className="flex items-start justify-between gap-3 pb-3.5 border-b border-[var(--color-neutral-200)]/70">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold)] flex items-center justify-center shrink-0 mt-0.5 border border-[var(--color-prestige-gold)]/20">
              {icon}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-xl font-normal text-[var(--color-prestige-charcoal)] tracking-tight">
                  {title}
                </h2>
                {badge && (
                  <Badge variant={badgeVariant} size="sm">
                    {badge}
                  </Badge>
                )}
              </div>
              {subtitle && (
                <p className="text-xs text-[var(--color-neutral-500)] mt-0.5 font-light leading-snug">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Compact Card Body */}
        <div className="pt-4 space-y-4">{children}</div>
      </div>
    </article>
  );
};
