'use client';

import React, { useState, useEffect } from 'react';
import { formatNumberIndian, parseNumericInput } from '@/lib/financial/currency';
import { cn } from '@/lib/utils';

interface CalculatorInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  prefix?: string;
  suffix?: string;
  helperText?: string;
  badge?: string;
  disabled?: boolean;
  className?: string;
  step?: number;
}

export const CalculatorInput: React.FC<CalculatorInputProps> = ({
  id,
  label,
  value,
  onChange,
  min = 0,
  max,
  prefix,
  suffix,
  helperText,
  badge,
  disabled = false,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [displayValue, setDisplayValue] = useState<string>('');

  const formattedValue = prefix === '₹' ? formatNumberIndian(value) : value.toString();
  const inputValue = isFocused ? displayValue : formattedValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setDisplayValue(raw);

    const parsed = parseNumericInput(raw);
    let clamped = Math.max(min, parsed);
    if (max !== undefined) {
      clamped = Math.min(max, clamped);
    }
    onChange(clamped);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setDisplayValue(value === 0 ? '' : value.toString());
  };

  const handleBlur = () => {
    setIsFocused(false);
    const parsed = parseNumericInput(displayValue);
    let clamped = Math.max(min, parsed);
    if (max !== undefined) {
      clamped = Math.min(max, clamped);
    }
    onChange(clamped);
    if (prefix === '₹') {
      setDisplayValue(formatNumberIndian(clamped));
    } else {
      setDisplayValue(clamped.toString());
    }
  };

  return (
    <div className={cn('space-y-1', className)}>
      <div className="flex items-center justify-between text-xs">
        <label
          htmlFor={id}
          className="font-medium text-[var(--color-prestige-charcoal)] select-none tracking-wide text-xs"
        >
          {label}
        </label>
        {badge && (
          <span className="font-sans text-[10px] font-semibold text-[var(--color-prestige-gold-dark)] bg-[var(--color-prestige-gold)]/10 px-1.5 py-0.5 rounded-sm tabular-nums">
            {badge}
          </span>
        )}
      </div>

      <div
        className={cn(
          'relative flex items-center rounded-lg border transition-all duration-200 bg-white shadow-[var(--shadow-subtle)]',
          isFocused
            ? 'border-[var(--color-prestige-gold)] ring-2 ring-[var(--color-prestige-gold)]/20'
            : 'border-[var(--color-neutral-300)] hover:border-[var(--color-neutral-400)]',
          disabled && 'opacity-60 bg-[var(--color-neutral-100)] cursor-not-allowed'
        )}
      >
        {prefix && (
          <span
            className="pl-3 pr-1 text-xs sm:text-sm font-semibold text-[var(--color-neutral-500)] select-none pointer-events-none"
            aria-hidden="true"
          >
            {prefix}
          </span>
        )}

        <input
          id={id}
          type="text"
          inputMode="numeric"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          className="w-full h-10 px-2.5 text-sm sm:text-base font-medium text-[var(--color-prestige-charcoal)] tabular-nums bg-transparent focus:outline-none placeholder:text-[var(--color-neutral-400)]"
          aria-describedby={helperText ? `${id}-helper` : undefined}
        />

        {suffix && (
          <span
            className="pr-3 pl-1 text-[11px] sm:text-xs font-medium text-[var(--color-neutral-500)] select-none pointer-events-none"
            aria-hidden="true"
          >
            {suffix}
          </span>
        )}
      </div>

      {helperText && (
        <p id={`${id}-helper`} className="text-[10px] text-[var(--color-neutral-500)] leading-none pt-0.5">
          {helperText}
        </p>
      )}
    </div>
  );
};
