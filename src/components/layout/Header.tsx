'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/ui/Logo';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { Container } from './Container';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 left-0 w-full z-40 transition-all duration-300 bg-white/95 backdrop-blur-md',
        isScrolled
          ? 'shadow-[var(--shadow-premium-sm)] border-b border-[var(--color-neutral-200)]/80 py-2.5'
          : 'border-b border-[var(--color-neutral-200)]/40 py-3.5 sm:py-4'
      )}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <Navigation />

          {/* Mobile Hamburger Navigation */}
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
};
