import React from 'react';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CalculatorDisclaimerProps {
  type?: 'emi' | 'stamp-duty' | 'custom';
  customText?: string;
  sourceNote?: string;
  className?: string;
}

export const CalculatorDisclaimer: React.FC<CalculatorDisclaimerProps> = ({
  type = 'emi',
  customText,
  sourceNote,
  className,
}) => {
  const defaultText =
    type === 'emi'
      ? 'EMI estimates are indicative based on standard amortizing math. Final loan eligibility, interest rates, and fees are governed by lending partners.'
      : 'Stamp duty and registration estimates are indicative. Official charges depend on Ready Reckoner valuations (ASR) and Sub-Registrar assessment.';

  return (
    <div
      className={cn(
        'rounded-xl bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)]/80 p-2.5 sm:p-3 text-[11px] text-[var(--color-neutral-600)] leading-relaxed space-y-0.5',
        className
      )}
    >
      <div className="flex items-start gap-2">
        <Info className="w-3.5 h-3.5 text-[var(--color-prestige-gold)] shrink-0 mt-0.5" aria-hidden="true" />
        <div className="space-y-0.5">
          <p className="font-light">
            <strong className="font-medium text-[var(--color-prestige-charcoal)]">Disclaimer: </strong>
            {customText || defaultText}
          </p>
          {sourceNote && (
            <p className="text-[10px] text-[var(--color-neutral-400)] font-sans italic">
              Source: {sourceNote}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
