'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavLinks } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { MegaMenu } from './MegaMenu';
import { ChevronDown, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
      <ul className="flex items-center space-x-1">
        {mainNavLinks.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          const isServices = item.label === 'Services';

          if (isServices) {
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
              >
                <button
                  type="button"
                  aria-expanded={isMegaMenuOpen}
                  aria-haspopup="true"
                  onClick={() => setIsMegaMenuOpen((prev) => !prev)}
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-md select-none',
                    isActive || isMegaMenuOpen
                      ? 'text-[var(--color-prestige-gold)]'
                      : 'text-[var(--color-neutral-700)] hover:text-[var(--color-prestige-charcoal)]'
                  )}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 transition-transform duration-200',
                      isMegaMenuOpen && 'rotate-180 text-[var(--color-prestige-gold)]'
                    )}
                  />
                </button>
              </li>
            );
          }

          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-md select-none block',
                  isActive
                    ? 'text-[var(--color-prestige-gold)] font-semibold'
                    : 'text-[var(--color-neutral-700)] hover:text-[var(--color-prestige-charcoal)]'
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Services Mega Menu dropdown attached globally */}
      <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />

      {/* Right Utility Actions */}
      <div className="flex items-center pl-4 ml-2 border-l border-[var(--color-neutral-200)] gap-2.5">
        <Link
          href="/emi-calculator"
          className="flex items-center gap-1.5 px-3 py-2 text-xs uppercase tracking-wider font-medium text-[var(--color-neutral-600)] hover:text-[var(--color-prestige-charcoal)] transition-colors rounded"
          title="EMI Calculator"
        >
          <Calculator className="w-3.5 h-3.5 text-[var(--color-prestige-gold)]" />
          <span className="hidden xl:inline">EMI Calculator</span>
        </Link>

        <Button
          href="/contact"
          variant="primary"
          size="sm"
          className="text-xs uppercase tracking-wider font-semibold px-4"
        >
          Contact Us
        </Button>
      </div>
    </nav>
  );
};
