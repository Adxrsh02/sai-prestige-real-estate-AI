import {
  AmortizationMonthDetail,
  AmortizationYearSummary,
  EmiInputs,
  EmiResults,
} from '@/types/financial';

/**
 * Calculate Monthly EMI and associated loan metrics using the standard
 * fixed-rate amortizing loan formula.
 */
export function calculateEmi(inputs: EmiInputs): EmiResults {
  const propertyPrice = Math.max(0, inputs.propertyPrice);
  const downPayment = Math.min(propertyPrice, Math.max(0, inputs.downPayment));
  const loanPrincipal = Math.max(0, propertyPrice - downPayment);
  const downPaymentPercentage =
    propertyPrice > 0 ? (downPayment / propertyPrice) * 100 : 0;
  const tenureYears = Math.max(1, Math.round(inputs.tenureYears));
  const numberOfPayments = tenureYears * 12;
  const annualInterestRate = Math.max(0, inputs.annualInterestRate);

  // Case 1: Loan principal is zero (down payment equals or exceeds property price)
  if (loanPrincipal === 0) {
    return {
      propertyPrice,
      downPayment,
      downPaymentPercentage,
      loanPrincipal: 0,
      monthlyEmi: 0,
      totalInterest: 0,
      totalRepayment: 0,
      numberOfPayments,
      annualInterestRate,
      tenureYears,
      isFullyFunded: true,
    };
  }

  // Case 2: Zero annual interest rate
  if (annualInterestRate === 0) {
    const monthlyEmi = Math.round(loanPrincipal / numberOfPayments);
    const totalRepayment = monthlyEmi * numberOfPayments;
    return {
      propertyPrice,
      downPayment,
      downPaymentPercentage,
      loanPrincipal,
      monthlyEmi,
      totalInterest: 0,
      totalRepayment,
      numberOfPayments,
      annualInterestRate,
      tenureYears,
      isFullyFunded: false,
    };
  }

  // Case 3: Standard amortizing loan with positive interest rate
  // Formula: EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = annualInterestRate / (12 * 100);
  const growthFactor = Math.pow(1 + monthlyRate, numberOfPayments);
  const rawEmi = (loanPrincipal * monthlyRate * growthFactor) / (growthFactor - 1);
  const monthlyEmi = Math.round(rawEmi);

  const totalRepayment = monthlyEmi * numberOfPayments;
  const totalInterest = Math.max(0, totalRepayment - loanPrincipal);

  return {
    propertyPrice,
    downPayment,
    downPaymentPercentage,
    loanPrincipal,
    monthlyEmi,
    totalInterest,
    totalRepayment,
    numberOfPayments,
    annualInterestRate,
    tenureYears,
    isFullyFunded: false,
  };
}

/**
 * Generate a complete amortization schedule broken down by year and month.
 * Automatically reconciles final month rounding so that closing balance reaches exact zero.
 */
export function generateAmortizationSchedule(inputs: EmiInputs): AmortizationYearSummary[] {
  const result = calculateEmi(inputs);

  if (result.loanPrincipal === 0 || result.numberOfPayments === 0) {
    return [];
  }

  const monthlyRate = result.annualInterestRate / (12 * 100);
  const totalMonths = result.numberOfPayments;
  const monthlyEmi = result.monthlyEmi;

  let currentBalance = result.loanPrincipal;
  const yearlySummaries: AmortizationYearSummary[] = [];

  let currentYearNumber = 1;
  let currentYearMonths: AmortizationMonthDetail[] = [];
  let yearOpeningBalance = currentBalance;
  let yearPrincipalPaid = 0;
  let yearInterestPaid = 0;
  let yearTotalEmi = 0;

  for (let month = 1; month <= totalMonths; month++) {
    const openingBalance = currentBalance;
    const isLastMonth = month === totalMonths;

    let interestPaid = 0;
    let principalPaid = 0;
    let closingBalance = 0;
    let emiForMonth = monthlyEmi;

    if (monthlyRate === 0) {
      principalPaid = isLastMonth ? openingBalance : Math.min(openingBalance, monthlyEmi);
      interestPaid = 0;
      closingBalance = Math.max(0, openingBalance - principalPaid);
      emiForMonth = principalPaid;
    } else if (isLastMonth) {
      // Reconcile final installment: Pay exact remaining principal + month interest
      interestPaid = Math.round(openingBalance * monthlyRate);
      principalPaid = openingBalance;
      closingBalance = 0;
      emiForMonth = principalPaid + interestPaid;
    } else {
      interestPaid = Math.round(openingBalance * monthlyRate);
      principalPaid = Math.min(openingBalance, monthlyEmi - interestPaid);
      closingBalance = Math.max(0, openingBalance - principalPaid);
    }

    currentBalance = closingBalance;

    const monthDetail: AmortizationMonthDetail = {
      month,
      openingBalance,
      emi: emiForMonth,
      principalPaid,
      interestPaid,
      closingBalance,
    };

    currentYearMonths.push(monthDetail);
    yearPrincipalPaid += principalPaid;
    yearInterestPaid += interestPaid;
    yearTotalEmi += emiForMonth;

    // When 12 months are accumulated or we reach the final month, seal the year summary
    if (month % 12 === 0 || isLastMonth) {
      yearlySummaries.push({
        year: currentYearNumber,
        openingBalance: yearOpeningBalance,
        totalEmi: yearTotalEmi,
        principalPaid: yearPrincipalPaid,
        interestPaid: yearInterestPaid,
        closingBalance: currentBalance,
        months: [...currentYearMonths],
      });

      currentYearNumber++;
      currentYearMonths = [];
      yearOpeningBalance = currentBalance;
      yearPrincipalPaid = 0;
      yearInterestPaid = 0;
      yearTotalEmi = 0;
    }
  }

  return yearlySummaries;
}
