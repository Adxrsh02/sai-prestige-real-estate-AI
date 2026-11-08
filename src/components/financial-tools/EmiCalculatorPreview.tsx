'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EmiInputs } from '@/types/financial';
import { calculateEmi } from '@/lib/financial/emi';
import { formatCompactInr, formatInr } from '@/lib/financial/currency';
import { EMI_LIMITS, sanitizeEmiInputs } from '@/lib/financial/validation';
import { CalculatorSlider } from './CalculatorSlider';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Calculator, Landmark, ShieldCheck, TrendingUp } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const EmiCalculatorPreview: React.FC = () => {
  const [inputs, setInputs] = useState<EmiInputs>(() =>
    sanitizeEmiInputs({
      propertyPrice: 6000000, // ₹60 Lakhs illustrative benchmark
      downPayment: 1200000, // 20% down payment
      annualInterestRate: 8.5,
      tenureYears: 20,
    })
  );

  const results = calculateEmi(inputs);

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
    setInputs((prev) => sanitizeEmiInputs({ ...prev, annualInterestRate: newRate }));
  };

  const handleTenureChange = (newTenure: number) => {
    setInputs((prev) => sanitizeEmiInputs({ ...prev, tenureYears: newTenure }));
  };

  return (
    <Section id="calculator" variant="neutral" spacing="default">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-prestige-gold)] block">
                FINANCIAL ADVISORY
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-tight">
                Plan Your Property Finances Before You Buy
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-neutral-600)] font-light leading-relaxed">
                Estimate monthly home loan repayments and understand statutory acquisition charges across Navi Mumbai and Maharashtra with precision.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold)] flex items-center justify-center shrink-0 mt-0.5">
                  <Calculator className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[var(--color-prestige-charcoal)]">
                    Home Loan EMI Simulator
                  </h3>
                  <p className="text-xs text-[var(--color-neutral-500)] font-light mt-0.5">
                    Live amortizing estimates based on your chosen down payment and loan tenure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold)] flex items-center justify-center shrink-0 mt-0.5">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[var(--color-prestige-charcoal)]">
                    Maharashtra Stamp Duty & Registration
                  </h3>
                  <p className="text-xs text-[var(--color-neutral-500)] font-light mt-0.5">
                    Jurisdiction-verified duty calculators factoring in Metro cess and female buyer concessions.
                  </p>
                </div>
              </div>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                href="/emi-calculator"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore All Financial Tools
              </Button>
              <Link
                href="/emi-calculator#stamp-duty"
                className="text-xs font-medium text-[var(--color-neutral-600)] hover:text-[var(--color-prestige-gold-dark)] transition-colors inline-flex items-center gap-1.5 py-2 px-1"
              >
                <span>Calculate Stamp Duty</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Live Interactive Calculator Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[var(--color-neutral-200)] bg-white p-6 sm:p-8 shadow-[var(--shadow-premium-sm)] space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--color-neutral-200)]/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold)] flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[var(--color-prestige-charcoal)]">
                      Instant EMI Estimator
                    </h3>
                    <span className="text-[11px] text-[var(--color-neutral-500)] font-light">
                      Adjust sliders to simulate your repayment plan
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-[var(--color-prestige-gold-dark)] bg-[var(--color-prestige-gold)]/10 px-2.5 py-1 rounded-sm uppercase tracking-wider">
                  Live Preview
                </span>
              </div>

              {/* Slider 1: Property Price */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-medium text-[var(--color-prestige-charcoal)]">
                    Property Price
                  </span>
                  <strong className="text-sm font-semibold text-[var(--color-prestige-charcoal)] tabular-nums">
                    {formatInr(inputs.propertyPrice)}
                  </strong>
                </div>
                <CalculatorSlider
                  id="preview-price-slider"
                  label="Property Price"
                  value={inputs.propertyPrice}
                  onChange={handlePriceChange}
                  min={EMI_LIMITS.PROPERTY_PRICE.MIN}
                  max={30000000} // Up to ₹3 Cr on preview
                  step={100000}
                  minLabel="₹5 L"
                  maxLabel="₹3 Cr"
                  valueText={formatInr(inputs.propertyPrice)}
                />
              </div>

              {/* Slider 2: Down Payment */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[var(--color-prestige-charcoal)]">
                      Down Payment
                    </span>
                    <span className="text-[10px] font-semibold text-[var(--color-prestige-gold-dark)] bg-[var(--color-prestige-gold)]/10 px-1.5 py-0.5 rounded-sm tabular-nums">
                      {results.downPaymentPercentage.toFixed(0)}%
                    </span>
                  </div>
                  <strong className="text-sm font-semibold text-[var(--color-prestige-charcoal)] tabular-nums">
                    {formatInr(inputs.downPayment)}
                  </strong>
                </div>
                <CalculatorSlider
                  id="preview-down-payment-slider"
                  label="Down Payment"
                  value={inputs.downPayment}
                  onChange={handleDownPaymentChange}
                  min={0}
                  max={inputs.propertyPrice}
                  step={50000}
                  minLabel="₹0"
                  maxLabel={formatCompactInr(inputs.propertyPrice)}
                  valueText={formatInr(inputs.downPayment)}
                />
              </div>

              {/* Dual Sliders: Interest Rate & Tenure */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-[var(--color-prestige-charcoal)]">
                      Interest Rate
                    </span>
                    <strong className="text-xs font-semibold text-[var(--color-prestige-charcoal)] tabular-nums">
                      {inputs.annualInterestRate.toFixed(1)}% p.a.
                    </strong>
                  </div>
                  <CalculatorSlider
                    id="preview-rate-slider"
                    label="Interest Rate"
                    value={inputs.annualInterestRate}
                    onChange={handleRateChange}
                    min={6.5}
                    max={12}
                    step={0.1}
                    minLabel="6.5%"
                    maxLabel="12%"
                    valueText={`${inputs.annualInterestRate.toFixed(1)}%`}
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-[var(--color-prestige-charcoal)]">
                      Tenure
                    </span>
                    <strong className="text-xs font-semibold text-[var(--color-prestige-charcoal)] tabular-nums">
                      {inputs.tenureYears} Years
                    </strong>
                  </div>
                  <CalculatorSlider
                    id="preview-tenure-slider"
                    label="Loan Tenure"
                    value={inputs.tenureYears}
                    onChange={handleTenureChange}
                    min={5}
                    max={30}
                    step={1}
                    minLabel="5 Yrs"
                    maxLabel="30 Yrs"
                    valueText={`${inputs.tenureYears} Yrs`}
                  />
                </div>
              </div>

              {/* Preview Result Highlight */}
              <div className="rounded-xl bg-[var(--color-prestige-gold)]/10 border border-[var(--color-prestige-gold)]/30 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[var(--color-neutral-600)] block">
                    Estimated Monthly EMI
                  </span>
                  <div className="text-2xl sm:text-3xl font-light text-[var(--color-prestige-charcoal)] tabular-nums mt-0.5">
                    {formatInr(results.monthlyEmi)}
                    <span className="text-xs text-[var(--color-neutral-500)] font-normal ml-1">
                      / month
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-t sm:border-t-0 sm:border-l border-[var(--color-neutral-300)]/60 pt-3 sm:pt-0 sm:pl-4 text-xs">
                  <div>
                    <span className="text-[10px] text-[var(--color-neutral-500)] block">
                      Principal Loan
                    </span>
                    <strong className="font-medium text-[var(--color-prestige-charcoal)] tabular-nums">
                      {formatCompactInr(results.loanPrincipal)}
                    </strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-[var(--color-neutral-500)] block">
                      Total Interest
                    </span>
                    <strong className="font-medium text-[var(--color-prestige-charcoal)] tabular-nums">
                      {formatCompactInr(results.totalInterest)}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
