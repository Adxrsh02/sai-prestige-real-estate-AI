'use client';

import React, { useState, useId } from 'react';
import { RentVsBuyInputs } from '@/types/financial';
import { calculateRentVsBuy } from '@/lib/financial/rent-vs-buy';
import { formatCompactInr, formatInr } from '@/lib/financial/currency';
import { RENT_VS_BUY_LIMITS, sanitizeRentVsBuyInputs } from '@/lib/financial/validation';
import { CalculatorCard } from './CalculatorCard';
import { CalculatorInput } from './CalculatorInput';
import { CalculatorSlider } from './CalculatorSlider';
import { RentVsBuyChart } from './RentVsBuyChart';
import { CalculatorDisclaimer } from './CalculatorDisclaimer';
import { Button } from '@/components/ui/Button';
import {
  Scale,
  RotateCcw,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Info,
  TrendingUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface RentVsBuyCalculatorProps {
  initialRent?: number;
  initialPrice?: number;
  initialAppreciation?: number;
  initialRentHike?: number;
  initialDownPaymentPercent?: number;
  initialPeriod?: number;
  className?: string;
}

export const RentVsBuyCalculator: React.FC<RentVsBuyCalculatorProps> = ({
  initialRent = RENT_VS_BUY_LIMITS.MONTHLY_RENT.DEFAULT,
  initialPrice = RENT_VS_BUY_LIMITS.PROPERTY_PRICE.DEFAULT,
  initialAppreciation = RENT_VS_BUY_LIMITS.APPRECIATION_RATE.DEFAULT,
  initialRentHike = RENT_VS_BUY_LIMITS.RENT_INCREASE_RATE.DEFAULT,
  initialDownPaymentPercent = RENT_VS_BUY_LIMITS.DOWN_PAYMENT_PERCENT.DEFAULT,
  initialPeriod = RENT_VS_BUY_LIMITS.ANALYSIS_PERIOD.DEFAULT,
  className,
}) => {
  const baseId = useId();
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [inputs, setInputs] = useState<RentVsBuyInputs>(() =>
    sanitizeRentVsBuyInputs({
      monthlyRent: initialRent,
      propertyPrice: initialPrice,
      annualAppreciationRate: initialAppreciation,
      annualRentIncrease: initialRentHike,
      downPaymentPercentage: initialDownPaymentPercent,
      analysisPeriodYears: initialPeriod,
      loanInterestRate: 8.5,
      loanTenureYears: 15,
      annualMaintenanceRate: 0.5,
    })
  );

  const results = calculateRentVsBuy(inputs);

  const handleRentChange = (newRent: number) => {
    setInputs((prev) => sanitizeRentVsBuyInputs({ ...prev, monthlyRent: newRent }));
  };

  const handlePriceChange = (newPrice: number) => {
    setInputs((prev) => sanitizeRentVsBuyInputs({ ...prev, propertyPrice: newPrice }));
  };

  const handleAppreciationChange = (newAppreciation: number) => {
    setInputs((prev) =>
      sanitizeRentVsBuyInputs({ ...prev, annualAppreciationRate: newAppreciation })
    );
  };

  const handleRentHikeChange = (newHike: number) => {
    setInputs((prev) => sanitizeRentVsBuyInputs({ ...prev, annualRentIncrease: newHike }));
  };

  const handleDownPaymentChange = (newDownPaymentPct: number) => {
    setInputs((prev) =>
      sanitizeRentVsBuyInputs({ ...prev, downPaymentPercentage: newDownPaymentPct })
    );
  };

  const handlePeriodChange = (newPeriod: number) => {
    setInputs((prev) => sanitizeRentVsBuyInputs({ ...prev, analysisPeriodYears: newPeriod }));
  };

  const handleRateChange = (newRate: number) => {
    setInputs((prev) => sanitizeRentVsBuyInputs({ ...prev, loanInterestRate: newRate }));
  };

  const handleTenureChange = (newTenure: number) => {
    setInputs((prev) => sanitizeRentVsBuyInputs({ ...prev, loanTenureYears: newTenure }));
  };

  const handleReset = () => {
    setInputs(
      sanitizeRentVsBuyInputs({
        monthlyRent: initialRent,
        propertyPrice: initialPrice,
        annualAppreciationRate: initialAppreciation,
        annualRentIncrease: initialRentHike,
        downPaymentPercentage: initialDownPaymentPercent,
        analysisPeriodYears: initialPeriod,
        loanInterestRate: 8.5,
        loanTenureYears: 15,
        annualMaintenanceRate: 0.5,
      })
    );
  };

  // Quick Preset Handlers
  const applyPreset = (preset: 'starter' | 'prime' | 'luxury') => {
    if (preset === 'starter') {
      setInputs((prev) =>
        sanitizeRentVsBuyInputs({
          ...prev,
          monthlyRent: 25000,
          propertyPrice: 7500000,
          annualAppreciationRate: 5,
          annualRentIncrease: 5,
          downPaymentPercentage: 20,
        })
      );
    } else if (preset === 'prime') {
      setInputs((prev) =>
        sanitizeRentVsBuyInputs({
          ...prev,
          monthlyRent: 45000,
          propertyPrice: 14000000,
          annualAppreciationRate: 5.5,
          annualRentIncrease: 5,
          downPaymentPercentage: 20,
        })
      );
    } else {
      setInputs((prev) =>
        sanitizeRentVsBuyInputs({
          ...prev,
          monthlyRent: 85000,
          propertyPrice: 28000000,
          annualAppreciationRate: 6,
          annualRentIncrease: 6,
          downPaymentPercentage: 25,
        })
      );
    }
  };

  return (
    <CalculatorCard
      id="rent-vs-buy"
      icon={<Scale className="w-4 h-4 text-[var(--color-prestige-gold)]" />}
      title="Rent vs Buy Analysis"
      subtitle="Compare long-term cumulative rent against property appreciation and net equity creation."
      badge="WEALTH PROJECTION"
      badgeVariant="gold"
      className={className}
    >
      <div className="space-y-4">
        {/* Quick Market Presets */}
        <div className="flex items-center justify-between text-xs pb-1">
          <span className="text-[11px] text-[var(--color-neutral-500)] font-light flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[var(--color-prestige-gold)]" />
            Quick Navi Mumbai Benchmarks:
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              type="button"
              onClick={() => applyPreset('starter')}
              className="px-2 py-0.5 text-[11px] rounded bg-[var(--color-neutral-100)] text-[var(--color-neutral-600)] hover:bg-[var(--color-prestige-gold)]/10 hover:text-[var(--color-prestige-gold-dark)] transition-colors"
            >
              ₹25k / ₹75L
            </button>
            <button
              type="button"
              onClick={() => applyPreset('prime')}
              className="px-2 py-0.5 text-[11px] rounded bg-[var(--color-neutral-100)] text-[var(--color-neutral-600)] hover:bg-[var(--color-prestige-gold)]/10 hover:text-[var(--color-prestige-gold-dark)] transition-colors"
            >
              ₹45k / ₹1.4Cr
            </button>
            <button
              type="button"
              onClick={() => applyPreset('luxury')}
              className="px-2 py-0.5 text-[11px] rounded bg-[var(--color-neutral-100)] text-[var(--color-neutral-600)] hover:bg-[var(--color-prestige-gold)]/10 hover:text-[var(--color-prestige-gold-dark)] transition-colors"
            >
              ₹85k / ₹2.8Cr
            </button>
          </div>
        </div>

        {/* 2x2 Primary Inputs Grid matching reference screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {/* Input 1: Monthly Rent */}
          <div className="space-y-0.5">
            <CalculatorInput
              id={`${baseId}-monthly-rent`}
              label="Monthly Rent"
              value={inputs.monthlyRent}
              onChange={handleRentChange}
              min={RENT_VS_BUY_LIMITS.MONTHLY_RENT.MIN}
              max={RENT_VS_BUY_LIMITS.MONTHLY_RENT.MAX}
              prefix="₹"
              step={1000}
            />
            <CalculatorSlider
              id={`${baseId}-rent-slider`}
              label="Monthly Rent Slider"
              value={inputs.monthlyRent}
              onChange={handleRentChange}
              min={10000}
              max={200000}
              step={1000}
              minLabel="₹10k"
              maxLabel="₹2 Lakhs"
              valueText={formatInr(inputs.monthlyRent)}
            />
          </div>

          {/* Input 2: Expected Appreciation */}
          <div className="space-y-0.5">
            <CalculatorInput
              id={`${baseId}-appreciation`}
              label="Exp. Appreciation"
              value={inputs.annualAppreciationRate}
              onChange={handleAppreciationChange}
              min={0}
              max={15}
              step={0.5}
              suffix="% p.a."
            />
            <CalculatorSlider
              id={`${baseId}-appreciation-slider`}
              label="Property Appreciation Slider"
              value={inputs.annualAppreciationRate}
              onChange={handleAppreciationChange}
              min={0}
              max={15}
              step={0.5}
              minLabel="0%"
              maxLabel="15%"
              valueText={`${inputs.annualAppreciationRate}%`}
            />
          </div>

          {/* Input 3: Property Price */}
          <div className="space-y-0.5">
            <CalculatorInput
              id={`${baseId}-property-price`}
              label="Property Price"
              value={inputs.propertyPrice}
              onChange={handlePriceChange}
              min={RENT_VS_BUY_LIMITS.PROPERTY_PRICE.MIN}
              max={RENT_VS_BUY_LIMITS.PROPERTY_PRICE.MAX}
              prefix="₹"
              step={100000}
            />
            <CalculatorSlider
              id={`${baseId}-price-slider`}
              label="Property Price Slider"
              value={inputs.propertyPrice}
              onChange={handlePriceChange}
              min={3000000}
              max={50000000}
              step={500000}
              minLabel="₹30 Lakhs"
              maxLabel="₹5 Crores"
              valueText={formatInr(inputs.propertyPrice)}
            />
          </div>

          {/* Input 4: Annual Rent Hike */}
          <div className="space-y-0.5">
            <CalculatorInput
              id={`${baseId}-rent-hike`}
              label="Annual Rent Hike"
              value={inputs.annualRentIncrease}
              onChange={handleRentHikeChange}
              min={0}
              max={15}
              step={0.5}
              suffix="% p.a."
            />
            <CalculatorSlider
              id={`${baseId}-hike-slider`}
              label="Rent Hike Slider"
              value={inputs.annualRentIncrease}
              onChange={handleRentHikeChange}
              min={0}
              max={15}
              step={0.5}
              minLabel="0%"
              maxLabel="15%"
              valueText={`${inputs.annualRentIncrease}%`}
            />
          </div>
        </div>

        {/* Supporting Secondary Controls: Down Payment & Analysis Period */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1 border-t border-[var(--color-neutral-200)]/60">
          {/* Down Payment % */}
          <div className="space-y-0.5">
            <CalculatorInput
              id={`${baseId}-down-payment-pct`}
              label="Down Payment"
              value={inputs.downPaymentPercentage}
              onChange={handleDownPaymentChange}
              min={5}
              max={100}
              step={5}
              suffix="%"
              badge={formatCompactInr(results.downPaymentAmount)}
            />
            <CalculatorSlider
              id={`${baseId}-down-payment-slider`}
              label="Down Payment Percentage Slider"
              value={inputs.downPaymentPercentage}
              onChange={handleDownPaymentChange}
              min={10}
              max={50}
              step={5}
              minLabel="10%"
              maxLabel="50%"
              valueText={`${inputs.downPaymentPercentage}% (${formatCompactInr(results.downPaymentAmount)})`}
            />
          </div>

          {/* Analysis Period Years */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <label
                htmlFor={`${baseId}-analysis-period`}
                className="font-medium text-[var(--color-prestige-charcoal)]"
              >
                Analysis Period
              </label>
              <span className="font-semibold text-[var(--color-prestige-gold-dark)] tabular-nums">
                {inputs.analysisPeriodYears} Years
              </span>
            </div>
            {/* Quick Pills for 5, 10, 15, 20 Years */}
            <div className="flex items-center gap-1.5 pt-0.5">
              {[5, 10, 15, 20, 25, 30].map((period) => (
                <button
                  key={period}
                  type="button"
                  onClick={() => handlePeriodChange(period)}
                  className={cn(
                    'flex-1 py-1 text-xs rounded font-medium transition-all text-center',
                    inputs.analysisPeriodYears === period
                      ? 'bg-[var(--color-prestige-charcoal)] text-white shadow-xs'
                      : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-600)] hover:bg-[var(--color-neutral-200)]'
                  )}
                >
                  {period}Y
                </button>
              ))}
            </div>
            <CalculatorSlider
              id={`${baseId}-analysis-period-slider`}
              label="Analysis Period Slider"
              value={inputs.analysisPeriodYears}
              onChange={handlePeriodChange}
              min={5}
              max={30}
              step={1}
              minLabel="5 Yrs"
              maxLabel="30 Yrs"
              valueText={`${inputs.analysisPeriodYears} Years`}
            />
          </div>
        </div>

        {/* Collapsible Financing & Assumption Controls */}
        <div className="pt-1">
          <button
            type="button"
            onClick={() => setShowAdvanced((prev) => !prev)}
            className="flex items-center justify-between w-full text-xs font-medium text-[var(--color-neutral-600)] hover:text-[var(--color-prestige-charcoal)] py-1.5 px-2 rounded-lg bg-[var(--color-neutral-50)] hover:bg-[var(--color-neutral-100)] transition-colors border border-[var(--color-neutral-200)]/70"
          >
            <span className="flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[var(--color-prestige-gold)]" />
              Financing Assumptions ({inputs.loanInterestRate}% Rate • {inputs.loanTenureYears}Y Loan)
            </span>
            {showAdvanced ? (
              <ChevronUp className="w-3.5 h-3.5 text-[var(--color-neutral-500)]" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-[var(--color-neutral-500)]" />
            )}
          </button>

          {showAdvanced && (
            <div className="mt-2.5 p-3 rounded-xl border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)]/70 space-y-3 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-0.5">
                  <CalculatorInput
                    id={`${baseId}-loan-rate`}
                    label="Home Loan Interest Rate"
                    value={inputs.loanInterestRate ?? 8.5}
                    onChange={handleRateChange}
                    min={6}
                    max={15}
                    step={0.1}
                    suffix="% p.a."
                  />
                </div>
                <div className="space-y-0.5">
                  <CalculatorInput
                    id={`${baseId}-loan-tenure`}
                    label="Home Loan Tenure"
                    value={inputs.loanTenureYears ?? 15}
                    onChange={handleTenureChange}
                    min={5}
                    max={30}
                    step={1}
                    suffix="Yrs"
                  />
                </div>
              </div>
              <div className="text-[10px] text-[var(--color-neutral-500)] flex items-center gap-1 font-light">
                <Info className="w-3 h-3 text-[var(--color-prestige-gold)] shrink-0" />
                Monthly loan installment modeled at {formatInr(results.monthlyEmi)}/mo for {results.loanTenureYears} years.
              </div>
            </div>
          )}
        </div>

        {/* Live Results Panel (Faithfully styled after Reference Screenshot with Luxury Sai Prestige Elevation) */}
        <div className="pt-2">
          <div className="rounded-xl border border-purple-200/70 bg-gradient-to-b from-purple-50/40 via-white to-purple-50/20 p-4 sm:p-5 shadow-[var(--shadow-subtle)] space-y-3.5">
            {/* Header: After {N} Years: */}
            <div className="border-b border-purple-100 pb-2">
              <span className="text-sm sm:text-base font-semibold text-purple-950 tracking-tight block">
                After {inputs.analysisPeriodYears} Years:
              </span>
            </div>

            {/* Metric Row 1: Total Rent You Would Pay (Wasted/Expense) */}
            <div className="flex items-center justify-between text-xs sm:text-sm py-1">
              <span className="text-[var(--color-neutral-700)] font-medium">
                Total Rent You Would Pay (Cash Outflow):
              </span>
              <span className="text-base sm:text-lg font-bold text-rose-600 tabular-nums">
                {formatInr(results.totalRentPaid)}
              </span>
            </div>

            {/* Metric Row 2: Property Value (Asset Created) */}
            <div className="flex items-center justify-between text-xs sm:text-sm py-1 border-t border-purple-100/60">
              <span className="text-[var(--color-neutral-700)] font-medium">
                Property Value (Asset Created):
              </span>
              <span className="text-base sm:text-lg font-bold text-emerald-600 tabular-nums">
                {formatInr(results.projectedPropertyValue)}
              </span>
            </div>

            {/* Metric Row 3: Remaining Loan */}
            <div className="flex items-center justify-between text-xs sm:text-sm py-1 border-t border-purple-100/60">
              <span className="text-[var(--color-neutral-600)] font-light">
                Estimated Outstanding Loan Balance:
              </span>
              <span className="text-sm sm:text-base font-medium text-[var(--color-neutral-700)] tabular-nums">
                {formatInr(results.outstandingLoanBalance)}
              </span>
            </div>

            {/* Metric Row 4: Net Equity (Value - Loan) */}
            <div className="flex items-center justify-between text-sm sm:text-base py-2.5 px-3 rounded-lg bg-white/90 border border-purple-200/80 shadow-xs">
              <span className="font-bold text-[var(--color-prestige-charcoal)]">
                Net Equity (Value - Loan):
              </span>
              <span className="text-lg sm:text-xl font-bold text-blue-900 tabular-nums">
                {formatInr(results.estimatedNetEquity)}
              </span>
            </div>

            {/* Transparent Footnote */}
            <p className="text-[11px] text-[var(--color-neutral-500)] italic font-light pt-0.5 leading-snug">
              *Analysis assumes {inputs.downPaymentPercentage}% down payment ({formatCompactInr(results.downPaymentAmount)}), {inputs.loanInterestRate}% interest, and {inputs.loanTenureYears}-year amortization. Indicative only.
            </p>
          </div>
        </div>

        {/* Visual Comparison Chart Component */}
        <RentVsBuyChart
          analysisPeriodYears={inputs.analysisPeriodYears}
          totalRentPaid={results.totalRentPaid}
          projectedPropertyValue={results.projectedPropertyValue}
          outstandingLoanBalance={results.outstandingLoanBalance}
          estimatedNetEquity={results.estimatedNetEquity}
          totalOwnershipCosts={results.totalOwnershipCosts}
          downPaymentAmount={results.downPaymentAmount}
          yearlySnapshots={results.yearlySnapshots}
        />

        {/* Concise Financial Advisory Summary */}
        <div className="rounded-xl border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)]/80 p-3.5 space-y-1.5">
          <span className="text-xs font-semibold text-[var(--color-prestige-charcoal)] flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-[var(--color-prestige-gold)]" />
            Financial Summary & Nuance ({inputs.analysisPeriodYears}-Year Horizon)
          </span>
          <p className="text-xs text-[var(--color-neutral-600)] font-light leading-relaxed">
            Over {inputs.analysisPeriodYears} years, continuing to rent at {formatInr(inputs.monthlyRent)}/mo (with {inputs.annualRentIncrease}% annual hike) results in an aggregate rental expenditure of <strong className="font-semibold text-[var(--color-prestige-charcoal)]">{formatInr(results.totalRentPaid)}</strong>. Conversely, acquiring the property at {formatInr(inputs.propertyPrice)} requires an upfront equity down payment of {formatInr(results.downPaymentAmount)} and monthly EMIs of {formatInr(results.monthlyEmi)}, building an estimated net equity of <strong className="font-semibold text-emerald-700">{formatInr(results.estimatedNetEquity)}</strong> as loan debt amortizes to {formatInr(results.outstandingLoanBalance)}.
          </p>
          <p className="text-[11px] text-[var(--color-neutral-500)] font-light leading-relaxed">
            <strong>Advisory Note:</strong> Net equity represents unrealized real estate asset value minus remaining debt, not immediate cash liquidity. Renting preserves cash liquidity and eliminates maintenance and interest carrying risks, whereas buying acts as a disciplined wealth accumulation vehicle against long-term inflation.
          </p>
        </div>

        {/* Regulatory & Estimation Disclaimer */}
        <CalculatorDisclaimer
          type="custom"
          customText="Rent vs Buy projections are mathematical estimates based on compound growth models and standard loan amortizations. Actual capital appreciation, rental escalation rates, and property maintenance vary across specific micro-markets and macroeconomic conditions."
          sourceNote="Sai Prestige Real Estate Financial Planning Advisory"
        />

        {/* Reset Action */}
        <div className="flex justify-end pt-1">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleReset}
            leftIcon={<RotateCcw className="w-3 h-3 text-[var(--color-neutral-400)]" />}
            className="text-[11px] text-[var(--color-neutral-500)] hover:text-[var(--color-prestige-charcoal)] font-normal"
          >
            Reset to Standard Inputs
          </Button>
        </div>
      </div>
    </CalculatorCard>
  );
};
