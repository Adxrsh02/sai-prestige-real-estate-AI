'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

import { FaqItem, FINANCIAL_FAQS } from '@/lib/financial/faq';
export { FINANCIAL_FAQS, type FaqItem };

interface FinancialFaqAccordionProps {
  items?: FaqItem[];
  className?: string;
}

export const FinancialFaqAccordion: React.FC<FinancialFaqAccordionProps> = ({
  items = FINANCIAL_FAQS,
  className,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className={cn('max-w-4xl mx-auto space-y-3 sm:space-y-3.5', className)}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const id = `faq-item-${idx}`;

        return (
          <div
            key={idx}
            className={cn(
              'rounded-xl border transition-all duration-200 bg-white overflow-hidden',
              isOpen
                ? 'border-[var(--color-prestige-gold)] shadow-[var(--shadow-premium-sm)] ring-1 ring-[var(--color-prestige-gold)]/25'
                : 'border-[var(--color-neutral-200)] hover:border-[var(--color-neutral-300)] hover:shadow-xs'
            )}
          >
            <button
              type="button"
              id={`${id}-header`}
              aria-expanded={isOpen}
              aria-controls={`${id}-panel`}
              onClick={() => toggle(idx)}
              className="w-full py-4 px-4 sm:px-6 flex items-center justify-between text-left gap-3.5 sm:gap-4 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)] rounded-xl"
            >
              <div className="flex items-start sm:items-center gap-3 sm:gap-3.5 min-w-0">
                <span
                  className={cn(
                    'text-xs font-semibold px-2.5 py-0.5 rounded-md tracking-wider shrink-0 transition-colors mt-0.5 sm:mt-0',
                    isOpen
                      ? 'bg-[var(--color-prestige-gold)] text-white'
                      : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-500)] group-hover:bg-[var(--color-prestige-gold)]/15 group-hover:text-[var(--color-prestige-gold-dark)]'
                  )}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-base sm:text-[17px] font-bold text-[var(--color-prestige-charcoal)] group-hover:text-[var(--color-prestige-gold-dark)] transition-colors leading-snug">
                  {item.question}
                </span>
              </div>
              <span
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200',
                  isOpen
                    ? 'bg-[var(--color-prestige-gold)] text-white rotate-180 shadow-xs'
                    : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-400)] group-hover:bg-[var(--color-prestige-gold)]/15 group-hover:text-[var(--color-prestige-gold-dark)]'
                )}
                aria-hidden="true"
              >
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </span>
            </button>

            {isOpen && (
              <div
                id={`${id}-panel`}
                role="region"
                aria-labelledby={`${id}-header`}
                className="px-4 sm:px-6 pb-5 pt-3.5 border-t border-[var(--color-neutral-100)] bg-[var(--color-neutral-50)]/60 animate-in fade-in duration-200"
              >
                <p className="font-normal text-sm sm:text-[15px] text-[var(--color-neutral-600)] leading-relaxed sm:pl-10">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
