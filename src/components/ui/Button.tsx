import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ButtonSize, ButtonVariant } from '@/types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer group';

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      'bg-[var(--color-prestige-gold)] text-white hover:bg-[var(--color-prestige-gold-dark)] active:bg-[var(--color-prestige-gold-dark)] shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-premium-sm)]',
    secondary:
      'bg-white text-[var(--color-prestige-charcoal)] border border-[var(--color-prestige-charcoal)] hover:bg-[var(--color-prestige-charcoal)] hover:text-white',
    outline:
      'bg-transparent text-[var(--color-prestige-gold)] border border-[var(--color-prestige-gold)] hover:bg-[var(--color-prestige-gold)] hover:text-white',
    ghost:
      'bg-transparent text-[var(--color-prestige-charcoal)] hover:bg-[var(--color-neutral-100)] active:bg-[var(--color-neutral-200)]',
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'h-9 px-3.5 text-xs tracking-wider uppercase',
    md: 'h-11 px-5 text-sm tracking-wide',
    lg: 'h-12 px-6 text-base',
    xl: 'h-14 px-8 text-base font-semibold',
  };

  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className
  );

  const content = (
    <>
      {leftIcon && <span className="mr-2 inline-flex items-center transition-transform group-hover:-translate-x-0.5">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="ml-2 inline-flex items-center transition-transform group-hover:translate-x-0.5">{rightIcon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
