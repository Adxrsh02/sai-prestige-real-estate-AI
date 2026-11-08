'use client';

import React from 'react';
import Link from 'next/link';
import { servicesMegaMenuData } from '@/lib/constants';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Services Menu"
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-white border-b border-[var(--color-neutral-200)] shadow-[var(--shadow-premium-lg)] transition-all duration-200 z-40"
    >
      <div className="max-w-7xl mx-auto px-6 py-8 lg:px-10">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--color-neutral-100)]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--color-prestige-gold)]" />
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--color-neutral-500)]">
              {servicesMegaMenuData.title}
            </h3>
          </div>
          <Link
            href="/services"
            onClick={onClose}
            className="text-xs font-medium text-[var(--color-prestige-gold)] hover:text-[var(--color-prestige-gold-dark)] flex items-center gap-1 group"
          >
            <span>View All Services Overview</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {servicesMegaMenuData.categories.map((category) => (
            <div key={category.title} className="flex flex-col">
              <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-prestige-charcoal)] mb-3 pb-1 border-b border-[var(--color-neutral-200)]/60">
                {category.title}
              </h4>
              <ul className="space-y-2.5">
                {category.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group block p-1.5 -mx-1.5 rounded hover:bg-[var(--color-neutral-50)] transition-colors"
                    >
                      <div className="text-sm font-medium text-[var(--color-neutral-800)] group-hover:text-[var(--color-prestige-gold)] transition-colors">
                        {item.label}
                      </div>
                      {item.description && (
                        <p className="text-[11px] text-[var(--color-neutral-500)] leading-tight mt-0.5 line-clamp-1">
                          {item.description}
                        </p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Advisory Banner */}
        <div className="mt-8 pt-6 border-t border-[var(--color-neutral-100)] flex items-center justify-between bg-[var(--color-neutral-50)] p-4 rounded-lg">
          <div>
            <p className="text-xs font-semibold text-[var(--color-prestige-charcoal)]">
              Looking for Private Portfolio Advisory in Navi Mumbai?
            </p>
            <p className="text-xs text-[var(--color-neutral-500)] mt-0.5">
              Connect with our senior property advisors for confidential property evaluation and access to off-market developments.
            </p>
          </div>
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-[var(--color-prestige-charcoal)] text-white hover:bg-black rounded transition-colors shrink-0"
          >
            <span>Book Private Consultation</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};
