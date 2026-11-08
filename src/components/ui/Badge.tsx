import React from 'react';
import { cn } from '@/lib/utils';
import { BadgeVariant } from '@/types';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'gold',
  size = 'md',
  ...props
}) => {
  const variantClasses: Record<BadgeVariant, string> = {
    gold: 'bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold)] border border-[var(--color-prestige-gold)]/30',
    charcoal: 'bg-[var(--color-prestige-charcoal)] text-white border border-[var(--color-prestige-charcoal)]',
    neutral: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] border border-[var(--color-neutral-200)]',
    outline: 'bg-transparent text-[var(--color-prestige-charcoal)] border border-[var(--color-neutral-300)]',
  };

  const sizeClasses = {
    sm: 'text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-sm',
    md: 'text-xs tracking-wider uppercase px-2.5 py-1 rounded',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium font-sans select-none',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
