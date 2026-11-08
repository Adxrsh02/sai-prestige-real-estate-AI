import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  /** 'dark' variant — used on the deep-charcoal Footer background */
  variant?: 'light' | 'dark';
  collapsed?: boolean;
}

const LOGO_URL =
  'https://res.cloudinary.com/qlxaljlj/image/upload/q_auto,f_auto/v1793422198/Sai_prestige__logo_HD.jpg';

export const Logo: React.FC<LogoProps> = ({
  className,
  variant = 'light',
  collapsed = false,
}) => {
  return (
    <Link
      href="/"
      className={cn(
        'group inline-flex items-center gap-3 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)] focus-visible:ring-offset-2 rounded-sm',
        className
      )}
      aria-label="SAI PRESTIGE Real Estate Consultant — Home"
    >
      {/* Official Company Logo Image */}
      <div
        className={cn(
          'relative shrink-0 overflow-hidden rounded-md transition-transform duration-300 group-hover:scale-105',
          // On the dark footer give the logo a subtle warm-white background so it
          // pops against the deep-charcoal surface.
          variant === 'dark' ? 'bg-white/10 ring-1 ring-white/15' : ''
        )}
        style={{ width: 40, height: 40 }}
      >
        <Image
          src={LOGO_URL}
          alt="SAI PRESTIGE Real Estate Consultant — Official Logo"
          fill
          sizes="40px"
          className="object-contain"
          priority
        />
      </div>

      {/* Typography Mark */}
      {!collapsed && (
        <div className="flex flex-col justify-center">
          <span
            className={cn(
              'font-heading text-[17px] sm:text-lg font-bold tracking-[0.16em] uppercase leading-none transition-colors',
              variant === 'dark'
                ? 'text-white'
                : 'text-[var(--color-prestige-charcoal)] group-hover:text-black'
            )}
          >
            SAI PRESTIGE
          </span>
          <span
            className={cn(
              'text-[8px] sm:text-[8.5px] uppercase tracking-[0.22em] font-semibold mt-1.5 leading-none transition-colors',
              variant === 'dark'
                ? 'text-[var(--color-prestige-gold-light)]'
                : 'text-[var(--color-prestige-gold)] group-hover:text-[var(--color-prestige-gold-dark)]'
            )}
          >
            REAL ESTATE CONSULTANT
          </span>
        </div>
      )}
    </Link>
  );
};
