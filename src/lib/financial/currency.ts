/**
 * Indian Rupee (INR) Formatting and Parsing Utilities
 * Adheres to Indian number grouping (e.g., ₹50,00,000) and compact Lakh/Crore notation.
 */

const inrFormatterInteger = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

const inrFormatterDecimal = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const indianNumberFormatter = new Intl.NumberFormat('en-IN', {
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

/**
 * Format a number as Indian Currency with Rupee symbol.
 * Example: 5000000 -> ₹50,00,000
 */
export function formatInr(amount: number, showDecimals: boolean = false): string {
  if (isNaN(amount) || !isFinite(amount)) {
    return '₹0';
  }
  const formatter = showDecimals ? inrFormatterDecimal : inrFormatterInteger;
  return formatter.format(amount);
}

/**
 * Format a number according to Indian grouping without currency symbol.
 * Example: 5000000 -> 50,00,000
 */
export function formatNumberIndian(amount: number): string {
  if (isNaN(amount) || !isFinite(amount)) {
    return '0';
  }
  return indianNumberFormatter.format(Math.round(amount));
}

/**
 * Format monetary values in compact Lakhs and Crores for graphical charts & stats.
 * Example: 8331103 -> ₹83.31 L, 12500000 -> ₹1.25 Cr
 */
export function formatCompactInr(amount: number): string {
  if (isNaN(amount) || !isFinite(amount) || amount === 0) {
    return '₹0';
  }

  const absAmount = Math.abs(amount);

  if (absAmount >= 10000000) {
    const cr = amount / 10000000;
    return `₹${cr.toFixed(2)} Cr`;
  }

  if (absAmount >= 100000) {
    const lakh = amount / 100000;
    return `₹${lakh.toFixed(2)} L`;
  }

  return formatInr(amount);
}

/**
 * Cleanly parse user text input into a valid number, stripping currency symbols, commas, and spaces.
 */
export function parseNumericInput(raw: string): number {
  if (!raw) return 0;
  const cleaned = raw.replace(/[^0-9.]/g, '');
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? 0 : parsed;
}
