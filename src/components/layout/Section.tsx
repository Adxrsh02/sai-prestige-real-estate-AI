import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  spacing?: 'compact' | 'default' | 'spacious' | 'none';
  variant?: 'white' | 'neutral' | 'charcoal' | 'deep';
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  spacing = 'default',
  variant = 'white',
  id,
  ...props
}) => {
  const spacingClasses = {
    none: '',
    compact: 'py-10 md:py-16',
    default: 'py-16 md:py-24 lg:py-28',
    spacious: 'py-20 md:py-32 lg:py-36',
  };

  const variantClasses = {
    white: 'bg-[var(--color-prestige-white)] text-[var(--color-prestige-charcoal)]',
    neutral: 'bg-[var(--color-neutral-50)] text-[var(--color-prestige-charcoal)] border-y border-[var(--color-neutral-200)]/60',
    charcoal: 'bg-[var(--color-prestige-charcoal)] text-white',
    deep: 'bg-[var(--color-prestige-deep)] text-white',
  };

  return (
    <section
      id={id}
      className={cn(
        'relative w-full overflow-hidden',
        spacingClasses[spacing],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
