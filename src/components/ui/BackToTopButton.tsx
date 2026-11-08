'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BackToTopButtonProps {
  className?: string;
  showLabel?: boolean;
}

export const BackToTopButton: React.FC<BackToTopButtonProps> = ({
  className,
  showLabel = true,
}) => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(
        'group inline-flex items-center gap-3 select-none cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-prestige-deep)] rounded-full',
        className
      )}
      aria-label="Back to top of page"
    >
      {showLabel && (
        <span className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-400 group-hover:text-[var(--color-prestige-gold)] transition-colors duration-200">
          Back to top
        </span>
      )}
      <div
        className={cn(
          'w-10 h-10 sm:w-11 sm:h-11 rounded-full shrink-0',
          'border border-[var(--color-prestige-gold)]/40 bg-[var(--color-prestige-deep)] text-[var(--color-prestige-gold)]',
          'group-hover:bg-[var(--color-prestige-gold)] group-hover:text-black group-hover:border-[var(--color-prestige-gold)]',
          'group-hover:-translate-y-0.5 group-hover:shadow-[0_4px_16px_rgba(188,154,79,0.3)]',
          'active:scale-95 transition-all duration-300',
          'flex items-center justify-center'
        )}
      >
        <ArrowUp
          className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5"
          strokeWidth={2.2}
        />
      </div>
    </button>
  );
};

