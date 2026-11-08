import React from 'react';
import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
  variant?: 'subtle' | 'gold' | 'dark';
}

export const Divider: React.FC<DividerProps> = ({
  className,
  variant = 'subtle',
}) => {
  const variantClasses = {
    subtle: 'border-[var(--color-neutral-200)]/80',
    gold: 'border-[var(--color-prestige-gold)]/40',
    dark: 'border-[var(--color-neutral-800)]',
  };

  return <hr className={cn('w-full border-t my-0', variantClasses[variant], className)} />;
};
