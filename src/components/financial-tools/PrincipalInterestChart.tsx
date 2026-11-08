import React from 'react';
import { formatCompactInr } from '@/lib/financial/currency';
import { cn } from '@/lib/utils';

interface PrincipalInterestChartProps {
  principalAmount: number;
  totalInterest: number;
  className?: string;
}

export const PrincipalInterestChart: React.FC<PrincipalInterestChartProps> = ({
  principalAmount,
  totalInterest,
  className,
}) => {
  const total = principalAmount + totalInterest;
  const principalPercent = total > 0 ? (principalAmount / total) * 100 : 50;
  const interestPercent = total > 0 ? (totalInterest / total) * 100 : 50;

  return (
    <div className={cn('space-y-2 pt-1', className)} aria-label="Loan Breakdown Visualization">
      <div className="flex items-center justify-between text-[11px] text-[var(--color-neutral-600)]">
        <span className="font-medium text-[var(--color-prestige-charcoal)]">
          Repayment Proportion
        </span>
        <span className="text-[10px] text-[var(--color-neutral-400)]">
          Total: {formatCompactInr(total)}
        </span>
      </div>

      {/* Accessible Proportion Bar */}
      <div
        className="h-2 w-full rounded-full overflow-hidden flex bg-[var(--color-neutral-200)] shadow-inner"
        role="progressbar"
        aria-valuenow={Math.round(principalPercent)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Principal accounts for ${principalPercent.toFixed(1)}% and Interest accounts for ${interestPercent.toFixed(1)}%`}
      >
        <div
          className="h-full bg-[var(--color-prestige-gold)] transition-all duration-300"
          style={{ width: `${principalPercent}%` }}
          title={`Principal: ${principalPercent.toFixed(1)}%`}
        />
        <div
          className="h-full bg-[var(--color-prestige-charcoal)] transition-all duration-300"
          style={{ width: `${interestPercent}%` }}
          title={`Interest: ${interestPercent.toFixed(1)}%`}
        />
      </div>

      {/* Legend with Values */}
      <div className="flex items-center justify-between text-[11px] pt-0.5">
        <div className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full bg-[var(--color-prestige-gold)] shrink-0"
            aria-hidden="true"
          />
          <span className="text-[var(--color-neutral-600)]">
            Principal: <strong className="font-medium text-[var(--color-prestige-charcoal)] tabular-nums">{formatCompactInr(principalAmount)}</strong> ({principalPercent.toFixed(0)}%)
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full bg-[var(--color-prestige-charcoal)] shrink-0"
            aria-hidden="true"
          />
          <span className="text-[var(--color-neutral-600)]">
            Interest: <strong className="font-medium text-[var(--color-prestige-charcoal)] tabular-nums">{formatCompactInr(totalInterest)}</strong> ({interestPercent.toFixed(0)}%)
          </span>
        </div>
      </div>
    </div>
  );
};
