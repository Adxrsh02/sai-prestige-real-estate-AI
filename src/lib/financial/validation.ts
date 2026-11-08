import { EmiInputs, StampDutyInputs, RentVsBuyInputs } from '@/types/financial';

export const EMI_LIMITS = {
  PROPERTY_PRICE: {
    MIN: 500000, // ₹5 Lakhs
    MAX: 500000000, // ₹50 Crores
    DEFAULT: 5000000, // ₹50 Lakhs
    STEP: 100000, // ₹1 Lakh
  },
  DOWN_PAYMENT: {
    MIN: 0,
    DEFAULT: 1000000, // ₹10 Lakhs (20% of ₹50L)
    STEP: 50000, // ₹50,000
  },
  INTEREST_RATE: {
    MIN: 0,
    MAX: 20,
    DEFAULT: 8.5,
    STEP: 0.1,
  },
  TENURE_YEARS: {
    MIN: 1,
    MAX: 30,
    DEFAULT: 20,
    STEP: 1,
  },
};

export const STAMP_DUTY_LIMITS = {
  AGREEMENT_VALUE: {
    MIN: 500000, // ₹5 Lakhs
    MAX: 500000000, // ₹50 Crores
    DEFAULT: 7500000, // ₹75 Lakhs
    STEP: 100000,
  },
};

/**
 * Clamp a number to a bounded [min, max] range.
 */
export function clamp(val: number, min: number, max: number): number {
  if (isNaN(val)) return min;
  return Math.min(Math.max(val, min), max);
}

/**
 * Validate and sanitize EMI inputs.
 */
export function sanitizeEmiInputs(inputs: Partial<EmiInputs>): EmiInputs {
  const propertyPrice = clamp(
    inputs.propertyPrice ?? EMI_LIMITS.PROPERTY_PRICE.DEFAULT,
    0,
    EMI_LIMITS.PROPERTY_PRICE.MAX
  );

  const downPayment = clamp(
    inputs.downPayment ?? EMI_LIMITS.DOWN_PAYMENT.DEFAULT,
    0,
    propertyPrice // Down payment can never exceed property price
  );

  const annualInterestRate = clamp(
    inputs.annualInterestRate ?? EMI_LIMITS.INTEREST_RATE.DEFAULT,
    EMI_LIMITS.INTEREST_RATE.MIN,
    EMI_LIMITS.INTEREST_RATE.MAX
  );

  const tenureYears = clamp(
    Math.round(inputs.tenureYears ?? EMI_LIMITS.TENURE_YEARS.DEFAULT),
    EMI_LIMITS.TENURE_YEARS.MIN,
    EMI_LIMITS.TENURE_YEARS.MAX
  );

  return {
    propertyPrice,
    downPayment,
    annualInterestRate,
    tenureYears,
  };
}

/**
 * Validate and sanitize Stamp Duty inputs.
 */
export function sanitizeStampDutyInputs(inputs: Partial<StampDutyInputs>): StampDutyInputs {
  const agreementValue = clamp(
    inputs.agreementValue ?? STAMP_DUTY_LIMITS.AGREEMENT_VALUE.DEFAULT,
    0,
    STAMP_DUTY_LIMITS.AGREEMENT_VALUE.MAX
  );

  const buyerProfile = inputs.buyerProfile ?? 'male';
  const jurisdictionId = inputs.jurisdictionId ?? 'navi_mumbai_nmmc';

  return {
    agreementValue,
    buyerProfile,
    jurisdictionId,
  };
}

export const RENT_VS_BUY_LIMITS = {
  MONTHLY_RENT: {
    MIN: 2000,
    MAX: 2000000, // ₹20 Lakhs / mo
    DEFAULT: 25000,
    STEP: 1000,
  },
  PROPERTY_PRICE: {
    MIN: 500000, // ₹5 Lakhs
    MAX: 500000000, // ₹50 Crores
    DEFAULT: 7500000, // ₹75 Lakhs
    STEP: 100000,
  },
  APPRECIATION_RATE: {
    MIN: 0,
    MAX: 15,
    DEFAULT: 5,
    STEP: 0.5,
  },
  RENT_INCREASE_RATE: {
    MIN: 0,
    MAX: 15,
    DEFAULT: 5,
    STEP: 0.5,
  },
  DOWN_PAYMENT_PERCENT: {
    MIN: 5,
    MAX: 100,
    DEFAULT: 20,
    STEP: 5,
  },
  ANALYSIS_PERIOD: {
    MIN: 5,
    MAX: 30,
    DEFAULT: 10,
    STEP: 1,
  },
  LOAN_INTEREST_RATE: {
    MIN: 5,
    MAX: 18,
    DEFAULT: 8.5,
    STEP: 0.1,
  },
  LOAN_TENURE_YEARS: {
    MIN: 5,
    MAX: 30,
    DEFAULT: 15, // Default 15 aligns with reference calculator balance, or user can toggle to 20
    STEP: 1,
  },
  MAINTENANCE_RATE: {
    MIN: 0,
    MAX: 3,
    DEFAULT: 0.5,
    STEP: 0.1,
  },
};

/**
 * Validate and sanitize Rent vs Buy inputs.
 */
export function sanitizeRentVsBuyInputs(inputs: Partial<RentVsBuyInputs>): RentVsBuyInputs {
  const monthlyRent = clamp(
    inputs.monthlyRent ?? RENT_VS_BUY_LIMITS.MONTHLY_RENT.DEFAULT,
    RENT_VS_BUY_LIMITS.MONTHLY_RENT.MIN,
    RENT_VS_BUY_LIMITS.MONTHLY_RENT.MAX
  );

  const propertyPrice = clamp(
    inputs.propertyPrice ?? RENT_VS_BUY_LIMITS.PROPERTY_PRICE.DEFAULT,
    RENT_VS_BUY_LIMITS.PROPERTY_PRICE.MIN,
    RENT_VS_BUY_LIMITS.PROPERTY_PRICE.MAX
  );

  const annualAppreciationRate = clamp(
    inputs.annualAppreciationRate ?? RENT_VS_BUY_LIMITS.APPRECIATION_RATE.DEFAULT,
    RENT_VS_BUY_LIMITS.APPRECIATION_RATE.MIN,
    RENT_VS_BUY_LIMITS.APPRECIATION_RATE.MAX
  );

  const annualRentIncrease = clamp(
    inputs.annualRentIncrease ?? RENT_VS_BUY_LIMITS.RENT_INCREASE_RATE.DEFAULT,
    RENT_VS_BUY_LIMITS.RENT_INCREASE_RATE.MIN,
    RENT_VS_BUY_LIMITS.RENT_INCREASE_RATE.MAX
  );

  const downPaymentPercentage = clamp(
    inputs.downPaymentPercentage ?? RENT_VS_BUY_LIMITS.DOWN_PAYMENT_PERCENT.DEFAULT,
    RENT_VS_BUY_LIMITS.DOWN_PAYMENT_PERCENT.MIN,
    RENT_VS_BUY_LIMITS.DOWN_PAYMENT_PERCENT.MAX
  );

  const analysisPeriodYears = clamp(
    Math.round(inputs.analysisPeriodYears ?? RENT_VS_BUY_LIMITS.ANALYSIS_PERIOD.DEFAULT),
    RENT_VS_BUY_LIMITS.ANALYSIS_PERIOD.MIN,
    RENT_VS_BUY_LIMITS.ANALYSIS_PERIOD.MAX
  );

  const loanInterestRate = clamp(
    inputs.loanInterestRate ?? RENT_VS_BUY_LIMITS.LOAN_INTEREST_RATE.DEFAULT,
    RENT_VS_BUY_LIMITS.LOAN_INTEREST_RATE.MIN,
    RENT_VS_BUY_LIMITS.LOAN_INTEREST_RATE.MAX
  );

  const loanTenureYears = clamp(
    Math.round(inputs.loanTenureYears ?? RENT_VS_BUY_LIMITS.LOAN_TENURE_YEARS.DEFAULT),
    RENT_VS_BUY_LIMITS.LOAN_TENURE_YEARS.MIN,
    RENT_VS_BUY_LIMITS.LOAN_TENURE_YEARS.MAX
  );

  const annualMaintenanceRate = clamp(
    inputs.annualMaintenanceRate ?? RENT_VS_BUY_LIMITS.MAINTENANCE_RATE.DEFAULT,
    RENT_VS_BUY_LIMITS.MAINTENANCE_RATE.MIN,
    RENT_VS_BUY_LIMITS.MAINTENANCE_RATE.MAX
  );

  return {
    monthlyRent,
    propertyPrice,
    annualAppreciationRate,
    annualRentIncrease,
    downPaymentPercentage,
    analysisPeriodYears,
    loanInterestRate,
    loanTenureYears,
    annualMaintenanceRate,
  };
}
