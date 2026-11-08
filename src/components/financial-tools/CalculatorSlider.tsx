'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CalculatorSliderProps {
  id: string;
  label: string;
  value: number;
  onChange: (val: number) => void;
  min: number;
  max: number;
  step?: number;
  minLabel?: string;
  maxLabel?: string;
  valueText?: string;
  disabled?: boolean;
  className?: string;
}

export const CalculatorSlider: React.FC<CalculatorSliderProps> = ({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  minLabel,
  maxLabel,
  valueText,
  disabled = false,
  className,
}) => {
  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  return (
    <div className={cn('space-y-0.5 pt-0.5 select-none', className)}>
      <div className="relative flex items-center h-4">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          aria-label={label}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-valuetext={valueText || `${value}`}
          className="w-full h-1 bg-transparent appearance-none cursor-pointer focus:outline-none z-10 
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-3.5 
            [&::-webkit-slider-thumb]:h-3.5 
            [&::-webkit-slider-thumb]:rounded-full 
            [&::-webkit-slider-thumb]:bg-white 
            [&::-webkit-slider-thumb]:border-2 
            [&::-webkit-slider-thumb]:border-[var(--color-prestige-gold)] 
            [&::-webkit-slider-thumb]:shadow-[0_1px_3px_rgba(0,0,0,0.12)] 
            [&::-webkit-slider-thumb]:transition-transform 
            [&::-webkit-slider-thumb]:hover:scale-115 
            [&::-webkit-slider-thumb]:active:scale-105 
            [&::-moz-range-thumb]:w-3.5 
            [&::-moz-range-thumb]:h-3.5 
            [&::-moz-range-thumb]:rounded-full 
            [&::-moz-range-thumb]:bg-white 
            [&::-moz-range-thumb]:border-2 
            [&::-moz-range-thumb]:border-[var(--color-prestige-gold)] 
            [&::-moz-range-thumb]:shadow-[0_1px_3px_rgba(0,0,0,0.12)] 
            focus-visible:[&::-webkit-slider-thumb]:ring-2 
            focus-visible:[&::-webkit-slider-thumb]:ring-[var(--color-prestige-gold)]"
        />

        {/* Custom Track Background with Fill */}
        <div
          className="absolute left-0 right-0 h-1 rounded-full bg-[var(--color-neutral-200)] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="h-full bg-[var(--color-prestige-gold)] transition-all duration-75"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {(minLabel || maxLabel) && (
        <div
          className="flex justify-between items-center text-[10px] text-[var(--color-neutral-400)] font-sans tabular-nums leading-none pt-0.5"
          aria-hidden="true"
        >
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
      )}
    </div>
  );
};
