'use client';

import React, { useState } from 'react';
import { AmortizationYearSummary } from '@/types/financial';
import { formatInr } from '@/lib/financial/currency';
import { Button } from '@/components/ui/Button';
import { ChevronDown, ChevronUp, Table, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RepaymentBreakdownProps {
  schedule: AmortizationYearSummary[];
  className?: string;
}

export const RepaymentBreakdown: React.FC<RepaymentBreakdownProps> = ({
  schedule,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedYear, setExpandedYear] = useState<number | null>(null);

  if (!schedule || schedule.length === 0) {
    return null;
  }

  const toggleYear = (year: number) => {
    setExpandedYear((prev) => (prev === year ? null : year));
  };

  return (
    <div className={cn('pt-4 border-t border-[var(--color-neutral-200)]', className)}>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full justify-between text-xs tracking-wider uppercase font-semibold text-[var(--color-prestige-gold-dark)] hover:bg-[var(--color-prestige-gold)]/5 py-2.5 px-3 rounded-lg border border-[var(--color-neutral-200)] hover:border-[var(--color-prestige-gold)]/40 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2">
          <Table className="w-4 h-4 text-[var(--color-prestige-gold)]" />
          {isOpen ? 'Hide Amortization Schedule' : 'View Full Repayment Breakdown'}
        </span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </Button>

      {isOpen && (
        <div className="mt-4 space-y-3 animate-in fade-in duration-300">
          <div className="flex items-center justify-between text-xs text-[var(--color-neutral-500)] px-1">
            <span className="flex items-center gap-1.5 font-light">
              <Calendar className="w-3.5 h-3.5 text-[var(--color-prestige-gold)]" />
              Annual Amortization Rollup ({schedule.length} Years)
            </span>
            <span className="text-[11px] italic hidden sm:inline text-[var(--color-neutral-400)]">
              Click any year row to view monthly distribution
            </span>
          </div>

          {/* Table Horizontal Scroll Wrapper */}
          <div className="overflow-x-auto rounded-xl border border-[var(--color-neutral-200)] bg-white shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[var(--color-neutral-100)]/75 border-b border-[var(--color-neutral-200)] text-[var(--color-neutral-600)] font-medium">
                  <th scope="col" className="py-2.5 px-3 w-16 text-center">Year</th>
                  <th scope="col" className="py-2.5 px-3 text-right">Opening (₹)</th>
                  <th scope="col" className="py-2.5 px-3 text-right">Total EMI (₹)</th>
                  <th scope="col" className="py-2.5 px-3 text-right text-[var(--color-prestige-charcoal)]">Principal (₹)</th>
                  <th scope="col" className="py-2.5 px-3 text-right text-[var(--color-neutral-600)]">Interest (₹)</th>
                  <th scope="col" className="py-2.5 px-3 text-right">Closing (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-neutral-200)]/60 tabular-nums">
                {schedule.map((row) => {
                  const isExpanded = expandedYear === row.year;
                  return (
                    <React.Fragment key={row.year}>
                      <tr
                        onClick={() => toggleYear(row.year)}
                        className={cn(
                          'cursor-pointer transition-colors hover:bg-[var(--color-neutral-50)]',
                          isExpanded && 'bg-[var(--color-prestige-gold)]/5 font-medium'
                        )}
                      >
                        <td className="py-2.5 px-3 text-center text-[var(--color-prestige-gold-dark)] font-medium">
                          Yr {row.year}
                        </td>
                        <td className="py-2.5 px-3 text-right text-[var(--color-neutral-700)]">
                          {formatInr(row.openingBalance)}
                        </td>
                        <td className="py-2.5 px-3 text-right text-[var(--color-neutral-700)]">
                          {formatInr(row.totalEmi)}
                        </td>
                        <td className="py-2.5 px-3 text-right font-medium text-[var(--color-prestige-charcoal)]">
                          {formatInr(row.principalPaid)}
                        </td>
                        <td className="py-2.5 px-3 text-right text-[var(--color-neutral-600)]">
                          {formatInr(row.interestPaid)}
                        </td>
                        <td className="py-2.5 px-3 text-right text-[var(--color-neutral-700)]">
                          {formatInr(row.closingBalance)}
                        </td>
                      </tr>

                      {/* Expandable Monthly Rows */}
                      {isExpanded && (
                        <tr>
                          <td colSpan={6} className="p-0 bg-[var(--color-neutral-50)]/50">
                            <div className="p-3 border-y border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)]">
                              <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-prestige-gold-dark)] block mb-2 px-1">
                                Year {row.year} — Monthly Breakdown
                              </span>
                              <div className="overflow-x-auto">
                                <table className="w-full text-left text-[11px] border-collapse bg-white rounded-lg border border-[var(--color-neutral-200)]">
                                  <thead>
                                    <tr className="bg-[var(--color-neutral-100)] text-[var(--color-neutral-600)] border-b border-[var(--color-neutral-200)]">
                                      <th className="py-1.5 px-2.5 text-center">Mo</th>
                                      <th className="py-1.5 px-2.5 text-right">Opening</th>
                                      <th className="py-1.5 px-2.5 text-right">EMI</th>
                                      <th className="py-1.5 px-2.5 text-right">Principal</th>
                                      <th className="py-1.5 px-2.5 text-right">Interest</th>
                                      <th className="py-1.5 px-2.5 text-right">Closing</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-[var(--color-neutral-200)]/60 tabular-nums">
                                    {row.months.map((m) => (
                                      <tr key={m.month} className="hover:bg-neutral-50">
                                        <td className="py-1.5 px-2.5 text-center text-neutral-500 font-medium">
                                          #{m.month}
                                        </td>
                                        <td className="py-1.5 px-2.5 text-right">{formatInr(m.openingBalance)}</td>
                                        <td className="py-1.5 px-2.5 text-right">{formatInr(m.emi)}</td>
                                        <td className="py-1.5 px-2.5 text-right font-medium text-[var(--color-prestige-charcoal)]">
                                          {formatInr(m.principalPaid)}
                                        </td>
                                        <td className="py-1.5 px-2.5 text-right text-neutral-600">
                                          {formatInr(m.interestPaid)}
                                        </td>
                                        <td className="py-1.5 px-2.5 text-right">{formatInr(m.closingBalance)}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
