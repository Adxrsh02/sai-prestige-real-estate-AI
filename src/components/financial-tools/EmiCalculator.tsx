'use client';

import React, { useState, useId } from 'react';
import { EmiInputs } from '@/types/financial';
import { calculateEmi, generateAmortizationSchedule } from '@/lib/financial/emi';
import { formatCompactInr, formatInr } from '@/lib/financial/currency';
import { EMI_LIMITS, sanitizeEmiInputs } from '@/lib/financial/validation';
import { CalculatorCard } from './CalculatorCard';
import { CalculatorInput } from './CalculatorInput';
import { CalculatorSlider } from './CalculatorSlider';
import { FinancialResultCard } from './FinancialResultCard';
import { PrincipalInterestChart } from './PrincipalInterestChart';
import { RepaymentBreakdown } from './RepaymentBreakdown';
import { CalculatorDisclaimer } from './CalculatorDisclaimer';
import { Calculator as CalculatorIcon, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface EmiCalculatorProps {
  initialPrice?: number;
  initialDownPayment?: number;
  initialRate?: number;
  initialTenure?: number;
  className?: string;
}

export const EmiCalculator: React.FC<EmiCalculatorProps> = ({
  initialPrice = EMI_LIMITS.PROPERTY_PRICE.DEFAULT,
  initialDownPayment = EMI_LIMITS.DOWN_PAYMENT.DEFAULT,
  initialRate = EMI_LIMITS.INTEREST_RATE.DEFAULT,
  initialTenure = EMI_LIMITS.TENURE_YEARS.DEFAULT,
  className,
}) => {
  const baseId = useId();

  const [inputs, setInputs] = useState<EmiInputs>(() =>
    sanitizeEmiInputs({
      propertyPrice: initialPrice,
      downPayment: initialDownPayment,
      annualInterestRate: initialRate,
      tenureYears: initialTenure,
    })
  );

  const results = calculateEmi(inputs);
  const schedule = generateAmortizationSchedule(inputs);

  const handlePriceChange = (newPrice: number) => {
    setInputs((prev) => {
      const adjustedDownPayment =
        prev.downPayment > newPrice ? Math.round(newPrice * 0.2) : prev.downPayment;
      return sanitizeEmiInputs({
        ...prev,
        propertyPrice: newPrice,
        downPayment: adjustedDownPayment,
      });
    });
  };

  const handleDownPaymentChange = (newDownPayment: number) => {
    setInputs((prev) =>
      sanitizeEmiInputs({
        ...prev,
        downPayment: Math.min(prev.propertyPrice, newDownPayment),
      })
    );
  };

  const handleRateChange = (newRate: number) => {
    setInputs((prev) =>
      sanitizeEmiInputs({
        ...prev,
        annualInterestRate: newRate,
      })
    );
  };

  const handleTenureChange = (newTenure: number) => {
    setInputs((prev) =>
      sanitizeEmiInputs({
        ...prev,
        tenureYears: newTenure,
      })
    );
  };

  const handleReset = () => {
    setInputs({
      propertyPrice: initialPrice,
      downPayment: initialDownPayment,
      annualInterestRate: initialRate,
      tenureYears: initialTenure,
    });
  };

  return (
    <CalculatorCard
      id="home-loan-emi"
      icon={<CalculatorIcon className="w-4 h-4 text-[var(--color-prestige-gold)]" />}
      title="Home Loan EMI Calculator"
      subtitle="Estimate your monthly installments, total interest commitments, and amortization."
      badge="FIXED RATE"
      badgeVariant="gold"
      className={className}
    >
      <div className="space-y-4">
        {/* Input Control 1: Property Price */}
        <div className="space-y-0.5">
          <CalculatorInput
            id={`${baseId}-price`}
            label="Property Purchase Price"
            value={inputs.propertyPrice}
            onChange={handlePriceChange}
            min={0}
            max={EMI_LIMITS.PROPERTY_PRICE.MAX}
            prefix="₹"
          />
          <CalculatorSlider
            id={`${baseId}-price-slider`}
            label="Property Purchase Price Slider"
            value={inputs.propertyPrice}
            onChange={handlePriceChange}
            min={EMI_LIMITS.PROPERTY_PRICE.MIN}
            max={50000000} // Up to ₹5 Cr on standard slider
            step={EMI_LIMITS.PROPERTY_PRICE.STEP}
            minLabel="₹5 Lakhs"
            maxLabel="₹5 Crores"
            valueText={formatInr(inputs.propertyPrice)}
          />
        </div>

        {/* Input Control 2: Down Payment */}
        <div className="space-y-0.5">
          <CalculatorInput
            id={`${baseId}-down-payment`}
            label="Upfront Down Payment"
            value={inputs.downPayment}
            onChange={handleDownPaymentChange}
            min={0}
            max={inputs.propertyPrice}
            prefix="₹"
            badge={`${results.downPaymentPercentage.toFixed(0)}% of Price`}
          />
          <CalculatorSlider
            id={`${baseId}-down-payment-slider`}
            label="Down Payment Slider"
            value={inputs.downPayment}
            onChange={handleDownPaymentChange}
            min={0}
            max={inputs.propertyPrice > 0 ? inputs.propertyPrice : 10000000}
            step={EMI_LIMITS.DOWN_PAYMENT.STEP}
            minLabel="₹0"
            maxLabel={formatCompactInr(inputs.propertyPrice)}
            valueText={formatInr(inputs.downPayment)}
          />
        </div>

        {/* Dual Column Inputs: Interest Rate & Loan Tenure */}
        <div className="grid grid-cols-2 gap-3.5">
          {/* Input Control 3: Interest Rate */}
          <div className="space-y-0.5">
            <CalculatorInput
              id={`${baseId}-rate`}
              label="Interest Rate"
              value={inputs.annualInterestRate}
              onChange={handleRateChange}
              min={0}
              max={EMI_LIMITS.INTEREST_RATE.MAX}
              step={0.1}
              suffix="% p.a."
            />
            <CalculatorSlider
              id={`${baseId}-rate-slider`}
              label="Annual Interest Rate Slider"
              value={inputs.annualInterestRate}
              onChange={handleRateChange}
              min={6}
              max={15}
              step={0.1}
              minLabel="6%"
              maxLabel="15%"
              valueText={`${inputs.annualInterestRate.toFixed(1)}%`}
            />
          </div>

          {/* Input Control 4: Loan Tenure */}
          <div className="space-y-0.5">
            <CalculatorInput
              id={`${baseId}-tenure`}
              label="Loan Tenure"
              value={inputs.tenureYears}
              onChange={handleTenureChange}
              min={EMI_LIMITS.TENURE_YEARS.MIN}
              max={EMI_LIMITS.TENURE_YEARS.MAX}
              step={1}
              suffix="Yrs"
            />
            <CalculatorSlider
              id={`${baseId}-tenure-slider`}
              label="Loan Tenure Slider"
              value={inputs.tenureYears}
              onChange={handleTenureChange}
              min={1}
              max={30}
              step={1}
              minLabel="1 Yr"
              maxLabel="30 Yrs"
              valueText={`${inputs.tenureYears} Years`}
            />
          </div>
        </div>

        {/* Results Panel */}
        <div className="pt-1">
          {results.isFullyFunded ? (
            <div className="rounded-xl border border-[var(--color-prestige-gold)]/40 bg-[var(--color-prestige-gold)]/10 p-4 text-center space-y-1">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[var(--color-prestige-gold-dark)]">
                100% Upfront Funded
              </span>
              <p className="text-xs text-[var(--color-prestige-charcoal)] font-light">
                Down payment equals total property price. No home loan or monthly EMI is required.
              </p>
            </div>
          ) : (
            <FinancialResultCard
              primaryLabel="Estimated Monthly EMI"
              primaryValue={formatInr(results.monthlyEmi)}
              primarySubtitle="/ month"
              metrics={[
                {
                  label: 'Loan Principal',
                  value: formatInr(results.loanPrincipal),
                  subtitle: `${(100 - results.downPaymentPercentage).toFixed(0)}% borrowed`,
                  isEmphasized: true,
                },
                {
                  label: 'Total Interest Payable',
                  value: formatInr(results.totalInterest),
                  isEmphasized: true,
                },
                {
                  label: 'Total Repayment Amount',
                  value: formatInr(results.totalRepayment),
                  subtitle: 'Principal + Interest',
                },
                {
                  label: 'Down Payment Contributed',
                  value: formatInr(results.downPayment),
                  subtitle: `${results.downPaymentPercentage.toFixed(0)}% equity`,
                },
              ]}
              ariaLiveMessage={`Calculated Monthly EMI is ${formatInr(results.monthlyEmi)}. Total repayment is ${formatInr(results.totalRepayment)}.`}
            />
          )}
        </div>

        {/* Proportional Visualization */}
        {!results.isFullyFunded && (
          <PrincipalInterestChart
            principalAmount={results.loanPrincipal}
            totalInterest={results.totalInterest}
          />
        )}

        {/* Amortization Schedule */}
        {!results.isFullyFunded && <RepaymentBreakdown schedule={schedule} />}

        {/* Reset & Regulatory Disclaimer */}
        <div className="pt-0.5 flex items-center justify-between gap-4">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="text-[11px] text-[var(--color-neutral-500)] hover:text-[var(--color-prestige-charcoal)] px-2 h-7 gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            Reset Defaults
          </Button>
        </div>

        <CalculatorDisclaimer type="emi" />
      </div>
    </CalculatorCard>
  );
};
