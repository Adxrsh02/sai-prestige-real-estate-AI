'use client';

import React from 'react';
import { formatCompactInr, formatInr } from '@/lib/financial/currency';
import { RentVsBuyYearSnapshot } from '@/types/financial';
import { cn } from '@/lib/utils';
import { TrendingUp, Home, ArrowUpRight, ShieldCheck, Wallet } from 'lucide-react';

interface RentVsBuyChartProps {
  analysisPeriodYears: number;
  totalRentPaid: number;
  projectedPropertyValue: number;
  outstandingLoanBalance: number;
  estimatedNetEquity: number;
  totalOwnershipCosts: number;
  downPaymentAmount: number;
  yearlySnapshots: RentVsBuyYearSnapshot[];
  className?: string;
}

export const RentVsBuyChart: React.FC<RentVsBuyChartProps> = ({
  analysisPeriodYears,
  totalRentPaid,
  projectedPropertyValue,
  outstandingLoanBalance,
  estimatedNetEquity,
  totalOwnershipCosts,
  downPaymentAmount,
  yearlySnapshots,
  className,
}) => {
  // Determine scale maximum for visual comparison bars
  const maxValue = Math.max(projectedPropertyValue, totalRentPaid, totalOwnershipCosts, 1);
  const rentBarPercent = Math.min(100, Math.max(5, (totalRentPaid / maxValue) * 100));
  const equityBarPercent = Math.min(100, Math.max(5, (estimatedNetEquity / maxValue) * 100));
  const propertyBarPercent = Math.min(100, Math.max(5, (projectedPropertyValue / maxValue) * 100));

  // Select milestone years for trajectory preview
  const milestoneYears = [
    yearlySnapshots[Math.min(4, yearlySnapshots.length - 1)], // ~Year 5
    yearlySnapshots[Math.min(9, yearlySnapshots.length - 1)], // ~Year 10
    yearlySnapshots[yearlySnapshots.length - 1], // Final Year
  ].filter(
    (snap, idx, arr): snap is RentVsBuyYearSnapshot =>
      Boolean(snap) && arr.findIndex((s) => s?.year === snap?.year) === idx
  );

  return (
    <div className={cn('space-y-4 pt-1', className)} aria-label="Rent vs Buy Financial Comparison">
      {/* Visual Comparison Header */}
      <div className="flex items-center justify-between text-xs pb-1 border-b border-[var(--color-neutral-200)]/70">
        <span className="font-medium text-[var(--color-prestige-charcoal)] flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-[var(--color-prestige-gold)]" />
          {analysisPeriodYears}-Year Financial Outcome Comparison
        </span>
        <span className="text-[10px] text-[var(--color-neutral-400)] tabular-nums">
          Based on compound growth & amortization
        </span>
      </div>

      {/* Visual Comparative Bars */}
      <div className="space-y-3">
        {/* Bar 1: Renting Cumulative Outflow */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[var(--color-neutral-600)] flex items-center gap-1.5 font-light">
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" aria-hidden="true" />
              Renting: Total Rent Outflow
            </span>
            <span className="font-semibold text-rose-600 tabular-nums">
              {formatInr(totalRentPaid)}
            </span>
          </div>
          <div className="h-2.5 w-full bg-[var(--color-neutral-100)] rounded-full overflow-hidden border border-[var(--color-neutral-200)]">
            <div
              className="h-full bg-gradient-to-r from-rose-400 to-rose-500 rounded-full transition-all duration-300"
              style={{ width: `${rentBarPercent}%` }}
              title={`Total Rent Paid: ${formatInr(totalRentPaid)}`}
            />
          </div>
          <span className="text-[10px] text-[var(--color-neutral-400)] block font-light leading-none">
            Cumulative rental expenditure across {analysisPeriodYears} years (₹0 asset retained)
          </span>
        </div>

        {/* Bar 2: Buying Net Equity */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[var(--color-neutral-600)] flex items-center gap-1.5 font-light">
              <span className="w-2 h-2 rounded-full bg-[var(--color-prestige-gold)] shrink-0" aria-hidden="true" />
              Buying: Net Real Estate Equity
            </span>
            <span className="font-semibold text-[var(--color-prestige-charcoal)] tabular-nums">
              {formatInr(estimatedNetEquity)}
            </span>
          </div>
          <div className="h-2.5 w-full bg-[var(--color-neutral-100)] rounded-full overflow-hidden border border-[var(--color-neutral-200)]">
            <div
              className="h-full bg-gradient-to-r from-[var(--color-prestige-gold)] to-[var(--color-prestige-gold-light)] rounded-full transition-all duration-300"
              style={{ width: `${equityBarPercent}%` }}
              title={`Net Equity: ${formatInr(estimatedNetEquity)}`}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] text-[var(--color-neutral-400)] font-light leading-none">
            <span>Projected Asset Value ({formatCompactInr(projectedPropertyValue)})</span>
            <span>Remaining Loan ({formatCompactInr(outstandingLoanBalance)})</span>
          </div>
        </div>
      </div>

      {/* Trajectory Milestones Strip */}
      {milestoneYears.length > 1 && (
        <div className="pt-2">
          <div className="text-[10px] uppercase tracking-wider text-[var(--color-neutral-400)] font-semibold mb-2">
            Equity Progression Milestones
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {milestoneYears.map((snap) => (
              <div
                key={snap.year}
                className="rounded-lg border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)]/70 p-2 text-center space-y-0.5"
              >
                <span className="text-[10px] font-semibold text-[var(--color-neutral-500)] uppercase block">
                  Year {snap.year}
                </span>
                <div className="text-xs font-semibold text-[var(--color-prestige-charcoal)] tabular-nums">
                  {formatCompactInr(snap.equity)}
                </div>
                <div className="text-[9px] text-[var(--color-neutral-500)] tabular-nums">
                  Rent: {formatCompactInr(snap.cumulativeRent)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
