export interface EmiInputs {
  propertyPrice: number;
  downPayment: number;
  annualInterestRate: number;
  tenureYears: number;
}

export interface EmiResults {
  propertyPrice: number;
  downPayment: number;
  downPaymentPercentage: number;
  loanPrincipal: number;
  monthlyEmi: number;
  totalInterest: number;
  totalRepayment: number;
  numberOfPayments: number;
  annualInterestRate: number;
  tenureYears: number;
  isFullyFunded: boolean;
}

export interface AmortizationMonthDetail {
  month: number;
  openingBalance: number;
  emi: number;
  principalPaid: number;
  interestPaid: number;
  closingBalance: number;
}

export interface AmortizationYearSummary {
  year: number;
  openingBalance: number;
  totalEmi: number;
  principalPaid: number;
  interestPaid: number;
  closingBalance: number;
  months: AmortizationMonthDetail[];
}

export type BuyerProfile = 'male' | 'female' | 'joint';

export interface JurisdictionRateProfile {
  id: string;
  name: string;
  region: string;
  localBodyType: 'Municipal Corporation' | 'Municipal Council' | 'Gram Panchayat';
  baseStampDutyRate: number; // e.g. 0.05 (5%)
  surchargeRate: number; // e.g. 0.01 (1% Metro Cess / LBT / transport cess)
  femaleConcessionRate: number; // e.g. 0.01 (1% rebate for residential sole female owner)
  registrationFeeType: 'capped_percentage' | 'percentage' | 'fixed';
  registrationPercentage: number; // e.g. 0.01 (1%)
  registrationMaxCap: number; // e.g. 30000 (₹30,000 cap for properties above ₹30L)
  registrationMinFee: number;
  verificationStatus: 'verified' | 'illustrative' | 'unavailable';
  verifiedSource?: string;
  lastVerifiedDate?: string;
  description: string;
  notes: string[];
}

export interface StampDutyInputs {
  agreementValue: number;
  buyerProfile: BuyerProfile;
  jurisdictionId: string;
}

export interface StampDutyResults {
  agreementValue: number;
  calculationBase: number;
  baseStampDutyRate: number;
  surchargeRate: number;
  effectiveStampDutyRate: number;
  stampDutyAmount: number;
  registrationCharges: number;
  totalGovernmentCharges: number;
  jurisdictionName: string;
  buyerProfile: BuyerProfile;
  rateProfileStatus: 'verified' | 'illustrative' | 'unavailable';
  concessionApplied: boolean;
  concessionAmount: number;
  verifiedSource?: string;
  lastVerifiedDate?: string;
  notes: string[];
}

export interface RentVsBuyInputs {
  monthlyRent: number;
  annualRentIncrease: number; // e.g. 5 for 5%
  propertyPrice: number;
  annualAppreciationRate: number; // e.g. 5 for 5%
  downPaymentPercentage: number; // e.g. 20 for 20%
  analysisPeriodYears: number; // 5 to 30 years, default 10
  loanInterestRate?: number; // e.g. 8.5 for 8.5%
  loanTenureYears?: number; // e.g. 15 or 20 years
  annualMaintenanceRate?: number; // e.g. 0.5 for 0.5%
}

export interface RentVsBuyYearSnapshot {
  year: number;
  annualRent: number;
  cumulativeRent: number;
  propertyValue: number;
  remainingLoanBalance: number;
  equity: number;
  cumulativeEmiPaid: number;
  cumulativeMaintenance: number;
  totalOwnershipOutflow: number;
}

export interface RentVsBuyResults {
  analysisPeriodYears: number;
  initialMonthlyRent: number;
  initialPropertyPrice: number;
  downPaymentPercentage: number;
  downPaymentAmount: number;
  initialLoanPrincipal: number;
  monthlyEmi: number;
  loanTenureYears: number;
  loanInterestRate: number;
  annualMaintenanceRate: number;

  // Live Results at the end of analysisPeriodYears
  totalRentPaid: number;
  projectedPropertyValue: number;
  outstandingLoanBalance: number;
  estimatedNetEquity: number;
  totalPrincipalPaid: number;
  totalInterestPaid: number;
  totalEmiPaid: number;
  totalMaintenanceCost: number;
  totalOwnershipCosts: number;

  finalMonthlyRent: number;
  netWealthDifference: number;
  yearlySnapshots: RentVsBuyYearSnapshot[];
}
