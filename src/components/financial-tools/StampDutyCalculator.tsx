'use client';

import React, { useState, useId } from 'react';
import { BuyerProfile, StampDutyInputs } from '@/types/financial';
import {
  DEFAULT_JURISDICTION_ID,
  MAHARASHTRA_JURISDICTIONS,
} from '@/config/stamp-duty-rates';
import { calculateStampDuty } from '@/lib/financial/stamp-duty';
import { formatInr } from '@/lib/financial/currency';
import { STAMP_DUTY_LIMITS, sanitizeStampDutyInputs } from '@/lib/financial/validation';
import { CalculatorCard } from './CalculatorCard';
import { CalculatorInput } from './CalculatorInput';
import { CalculatorSlider } from './CalculatorSlider';
import { FinancialResultCard } from './FinancialResultCard';
import { CalculatorDisclaimer } from './CalculatorDisclaimer';
import { Landmark, CheckCircle2, AlertCircle, Sparkles, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface StampDutyCalculatorProps {
  initialValue?: number;
  initialProfile?: BuyerProfile;
  initialJurisdiction?: string;
  className?: string;
}

export const StampDutyCalculator: React.FC<StampDutyCalculatorProps> = ({
  initialValue = STAMP_DUTY_LIMITS.AGREEMENT_VALUE.DEFAULT,
  initialProfile = 'male',
  initialJurisdiction = DEFAULT_JURISDICTION_ID,
  className,
}) => {
  const baseId = useId();

  const [inputs, setInputs] = useState<StampDutyInputs>(() =>
    sanitizeStampDutyInputs({
      agreementValue: initialValue,
      buyerProfile: initialProfile,
      jurisdictionId: initialJurisdiction,
    })
  );

  const results = calculateStampDuty(inputs);

  const handleAgreementValueChange = (newVal: number) => {
    setInputs((prev) => sanitizeStampDutyInputs({ ...prev, agreementValue: newVal }));
  };

  const handleProfileChange = (newProfile: BuyerProfile) => {
    setInputs((prev) => sanitizeStampDutyInputs({ ...prev, buyerProfile: newProfile }));
  };

  const handleJurisdictionChange = (newId: string) => {
    setInputs((prev) => sanitizeStampDutyInputs({ ...prev, jurisdictionId: newId }));
  };

  const handleReset = () => {
    setInputs({
      agreementValue: initialValue,
      buyerProfile: initialProfile,
      jurisdictionId: initialJurisdiction,
    });
  };

  return (
    <CalculatorCard
      id="stamp-duty"
      icon={<Landmark className="w-4 h-4 text-[var(--color-prestige-gold)]" />}
      title="Maharashtra Stamp Duty & Registration"
      subtitle="Estimate mandatory government duties, municipal cesses, and statutory registration fee caps."
      badge="MAHARASHTRA ACT"
      badgeVariant="gold"
      className={className}
    >
      <div className="space-y-4">
        {/* Input 1: Agreement Value */}
        <div className="space-y-0.5">
          <CalculatorInput
            id={`${baseId}-agreement-value`}
            label="Property Agreement / Market Value"
            value={inputs.agreementValue}
            onChange={handleAgreementValueChange}
            min={0}
            max={STAMP_DUTY_LIMITS.AGREEMENT_VALUE.MAX}
            prefix="₹"
          />
          <CalculatorSlider
            id={`${baseId}-value-slider`}
            label="Agreement Value Slider"
            value={inputs.agreementValue}
            onChange={handleAgreementValueChange}
            min={STAMP_DUTY_LIMITS.AGREEMENT_VALUE.MIN}
            max={50000000} // Up to ₹5 Cr slider range
            step={STAMP_DUTY_LIMITS.AGREEMENT_VALUE.STEP}
            minLabel="₹5 Lakhs"
            maxLabel="₹5 Crores"
            valueText={formatInr(inputs.agreementValue)}
          />
        </div>

        {/* Two-Column Consolidated Row: Jurisdiction & Buyer Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Jurisdiction Selector */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <label
                htmlFor={`${baseId}-jurisdiction`}
                className="font-medium text-[var(--color-prestige-charcoal)] select-none tracking-wide text-xs"
              >
                Jurisdiction / Region
              </label>
              {results.rateProfileStatus === 'verified' ? (
                <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Verified
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[10px] text-amber-700 font-medium">
                  <AlertCircle className="w-3 h-3 text-amber-600" />
                  Illustrative
                </span>
              )}
            </div>

            <select
              id={`${baseId}-jurisdiction`}
              value={inputs.jurisdictionId}
              onChange={(e) => handleJurisdictionChange(e.target.value)}
              className="w-full h-10 px-2.5 text-xs sm:text-sm font-medium text-[var(--color-prestige-charcoal)] bg-white rounded-lg border border-[var(--color-neutral-300)] hover:border-[var(--color-neutral-400)] focus:outline-none focus:ring-2 focus:ring-[var(--color-prestige-gold)]/20 focus:border-[var(--color-prestige-gold)] transition-colors shadow-[var(--shadow-subtle)]"
            >
              {MAHARASHTRA_JURISDICTIONS.map((j) => (
                <option key={j.id} value={j.id}>
                  {j.name}
                </option>
              ))}
            </select>
          </div>

          {/* Buyer Profile Segmented Toggle */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <label className="font-medium text-[var(--color-prestige-charcoal)] select-none tracking-wide text-xs">
                Buyer Category
              </label>
              <span className="text-[10px] text-[var(--color-neutral-400)]">
                {inputs.buyerProfile === 'female' ? '1% Concession' : 'Standard'}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 h-10">
              {[
                { id: 'male' as BuyerProfile, label: 'Male' },
                { id: 'female' as BuyerProfile, label: 'Female*' },
                { id: 'joint' as BuyerProfile, label: 'Joint' },
              ].map((profile) => {
                const isSelected = inputs.buyerProfile === profile.id;
                return (
                  <button
                    key={profile.id}
                    type="button"
                    onClick={() => handleProfileChange(profile.id)}
                    className={`h-10 px-1 rounded-lg border text-center transition-all duration-200 select-none flex items-center justify-center font-medium text-xs ${
                      isSelected
                        ? 'border-[var(--color-prestige-gold)] bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold-dark)] font-semibold shadow-xs'
                        : 'border-[var(--color-neutral-200)] hover:border-[var(--color-neutral-300)] bg-white text-[var(--color-neutral-700)]'
                    }`}
                  >
                    {profile.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Concession Announcement Banner */}
        {results.concessionApplied && (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-2.5 flex items-start gap-2 text-[11px] text-emerald-800 animate-in fade-in duration-200 leading-snug">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold">Women Buyer Concession: </strong>
              Saves <strong className="tabular-nums font-semibold">{formatInr(results.concessionAmount)}</strong> (1% rebate under Maharashtra GR for sole female ownership).
            </div>
          </div>
        )}

        {/* Results Panel */}
        <div className="pt-1">
          <FinancialResultCard
            primaryLabel="Total Estimated Government Charges"
            primaryValue={formatInr(results.totalGovernmentCharges)}
            primarySubtitle="Stamp Duty + Registration"
            metrics={[
              {
                label: `Stamp Duty (${(results.effectiveStampDutyRate * 100).toFixed(1)}%)`,
                value: formatInr(results.stampDutyAmount),
                subtitle: `${(results.baseStampDutyRate * 100).toFixed(0)}% base + ${(results.surchargeRate * 100).toFixed(0)}% cess`,
                isEmphasized: true,
              },
              {
                label: 'Registration Charges',
                value: formatInr(results.registrationCharges),
                subtitle: results.agreementValue > 3000000 ? 'Capped at ₹30,000 max' : '1% of Agreement Value',
                isEmphasized: true,
              },
              {
                label: 'Selected Jurisdiction',
                value: results.jurisdictionName.split('(')[0].trim(),
                subtitle: results.rateProfileStatus === 'verified' ? 'Statutory Verified' : 'Illustrative Rate',
              },
              {
                label: 'Valuation Base',
                value: formatInr(results.agreementValue),
                subtitle: 'Agreement / Reckoner',
              },
            ]}
            ariaLiveMessage={`Total estimated Maharashtra government charges are ${formatInr(results.totalGovernmentCharges)}.`}
          />
        </div>

        {/* Compact Regulatory Breakdown & Notes */}
        <div className="rounded-xl border border-[var(--color-neutral-200)]/70 bg-[var(--color-neutral-50)] p-3 space-y-1.5 text-[11px]">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-prestige-gold-dark)] block">
            Statutory Rules Applicable
          </span>
          <ul className="space-y-1 text-[var(--color-neutral-600)] font-light leading-snug">
            {results.notes.slice(0, 3).map((note, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[var(--color-prestige-gold)] shrink-0 mt-1.5" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

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

        <CalculatorDisclaimer
          type="stamp-duty"
          sourceNote={results.verifiedSource}
        />
      </div>
    </CalculatorCard>
  );
};
