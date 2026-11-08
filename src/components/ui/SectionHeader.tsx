import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  align?: 'left' | 'center' | 'between';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  action,
  align = 'left',
  theme = 'light',
  className,
}) => {
  const isDark = theme === 'dark';

  if (align === 'between') {
    return (
      <div className={cn('mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6', className)}>
        <div className="max-w-2xl">
          {eyebrow && (
            <span
              className={cn(
                'inline-block text-xs uppercase font-medium tracking-[0.2em] mb-3',
                isDark ? 'text-[var(--color-prestige-gold-light)]' : 'text-[var(--color-prestige-gold)]'
              )}
            >
              {eyebrow}
            </span>
          )}
          <h2
            className={cn(
              'text-2xl sm:text-3xl md:text-4xl font-light tracking-tight',
              isDark ? 'text-white' : 'text-[var(--color-prestige-charcoal)]'
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                'mt-3 text-sm sm:text-base leading-relaxed',
                isDark ? 'text-neutral-400' : 'text-[var(--color-neutral-600)]'
              )}
            >
              {description}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'mb-10 md:mb-14',
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-block text-xs uppercase font-medium tracking-[0.2em] mb-3',
            isDark ? 'text-[var(--color-prestige-gold-light)]' : 'text-[var(--color-prestige-gold)]'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-2xl sm:text-3xl md:text-4xl font-light tracking-tight',
          isDark ? 'text-white' : 'text-[var(--color-prestige-charcoal)]'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-3 text-sm sm:text-base leading-relaxed',
            isDark ? 'text-neutral-400' : 'text-[var(--color-neutral-600)]'
          )}
        >
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};
