import { RentVsBuyInputs, RentVsBuyResults, RentVsBuyYearSnapshot } from '@/types/financial';
import { sanitizeRentVsBuyInputs } from './validation';

/**
 * Rent vs Buy Analysis Calculator Core Engine
 *
 * Mathematically projects and compares the financial outcomes of renting versus purchasing
 * a property over a defined analysis horizon (5–30 years).
 *
 * Exact Formulas:
 * 1. Future Property Value: V_N = P_0 * (1 + g)^N
 *    where P_0 is initial property price, g is annual appreciation rate, N is tenure in years.
 *
 * 2. Cumulative Rent Outflow:
 *    Yearly Rent in Year k = 12 * R_0 * (1 + h)^(k - 1)
 *    where R_0 is initial monthly rent, h is annual rent hike rate.
 *    Total Rent = sum_{k=1}^N [Yearly Rent_k]
 *
 * 3. Loan Principal & Monthly Installment (Fixed Amortizing):
 *    L_0 = P_0 * (1 - DownPayment%)
 *    EMI = [L_0 * r_m * (1 + r_m)^M] / [(1 + r_m)^M - 1]
 *    where r_m = Annual Rate / 12, M = Loan Tenure in Months (Tenure Years * 12).
 *
 * 4. Remaining Loan Principal Balance after N years:
 *    Computed via standard monthly amortization balance deduction.
 *    If N >= Loan Tenure, balance = 0.
 *
 * 5. Estimated Net Equity (Asset Created):
 *    Net Equity = Projected Property Value (V_N) - Remaining Outstanding Loan Balance (B_N).
 *
 * 6. Total Ownership Costs (Buying):
 *    Total Cash Outflow = Down Payment + Cumulative EMIs Paid (up to min(N, Tenure)) + Cumulative Maintenance.
 */
export function calculateRentVsBuy(rawInputs: Partial<RentVsBuyInputs>): RentVsBuyResults {
  const inputs = sanitizeRentVsBuyInputs(rawInputs);

  const N = inputs.analysisPeriodYears;
  const P0 = inputs.propertyPrice;
  const g = inputs.annualAppreciationRate / 100;
  const R0 = inputs.monthlyRent;
  const h = inputs.annualRentIncrease / 100;
  const dpPct = inputs.downPaymentPercentage / 100;
  const loanRate = (inputs.loanInterestRate ?? 8.5) / 100;
  const loanTenure = inputs.loanTenureYears ?? 15;
  const maintRate = (inputs.annualMaintenanceRate ?? 0.5) / 100;

  const downPaymentAmount = Math.round(P0 * dpPct);
  const initialLoanPrincipal = Math.max(0, P0 - downPaymentAmount);

  // Monthly Loan Amortization parameters
  const monthlyRate = loanRate / 12;
  const totalLoanMonths = loanTenure * 12;

  let exactMonthlyEmi = 0;
  if (initialLoanPrincipal > 0 && monthlyRate > 0) {
    exactMonthlyEmi =
      (initialLoanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalLoanMonths)) /
      (Math.pow(1 + monthlyRate, totalLoanMonths) - 1);
  } else if (initialLoanPrincipal > 0) {
    exactMonthlyEmi = initialLoanPrincipal / totalLoanMonths;
  }

  // Multi-Year Simulation
  const yearlySnapshots: RentVsBuyYearSnapshot[] = [];
  let cumulativeRent = 0;
  let remainingLoanBalance = initialLoanPrincipal;
  let cumulativePrincipalPaid = 0;
  let cumulativeInterestPaid = 0;
  let cumulativeEmiPaid = 0;
  let cumulativeMaintenance = 0;

  for (let year = 1; year <= N; year++) {
    // Current year rental cash outflow without premature monthly rounding
    const annualRentThisYear = 12 * R0 * Math.pow(1 + h, year - 1);
    cumulativeRent += annualRentThisYear;

    // Property Value at end of year
    const propertyValueThisYear = P0 * Math.pow(1 + g, year);

    // Annual maintenance (e.g. 0.5% of appreciated property value)
    const annualMaintenance = propertyValueThisYear * maintRate;
    cumulativeMaintenance += annualMaintenance;

    // Simulate 12 monthly loan payments for this year
    for (let m = 1; m <= 12; m++) {
      const globalMonth = (year - 1) * 12 + m;
      if (globalMonth <= totalLoanMonths && remainingLoanBalance > 0) {
        const interestThisMonth = remainingLoanBalance * monthlyRate;
        const principalThisMonth = Math.min(
          remainingLoanBalance,
          exactMonthlyEmi - interestThisMonth
        );
        cumulativeInterestPaid += interestThisMonth;
        cumulativePrincipalPaid += principalThisMonth;
        cumulativeEmiPaid += (principalThisMonth + interestThisMonth);
        remainingLoanBalance = Math.max(0, remainingLoanBalance - principalThisMonth);
      }
    }

    const equityThisYear = Math.round(propertyValueThisYear - remainingLoanBalance);
    const totalOwnershipOutflow =
      downPaymentAmount + Math.round(cumulativeEmiPaid) + Math.round(cumulativeMaintenance);

    yearlySnapshots.push({
      year,
      annualRent: Math.round(annualRentThisYear),
      cumulativeRent: Math.round(cumulativeRent),
      propertyValue: Math.round(propertyValueThisYear),
      remainingLoanBalance: Math.round(remainingLoanBalance),
      equity: equityThisYear,
      cumulativeEmiPaid: Math.round(cumulativeEmiPaid),
      cumulativeMaintenance: Math.round(cumulativeMaintenance),
      totalOwnershipOutflow: Math.round(totalOwnershipOutflow),
    });
  }

  const finalSnapshot =
    yearlySnapshots[yearlySnapshots.length - 1] ?? {
      propertyValue: Math.round(P0 * Math.pow(1 + g, N)),
      remainingLoanBalance: 0,
      cumulativeRent: Math.round(cumulativeRent),
      cumulativeEmiPaid: Math.round(cumulativeEmiPaid),
      cumulativeMaintenance: Math.round(cumulativeMaintenance),
    };

  const projectedPropertyValue = finalSnapshot.propertyValue;
  const outstandingLoanBalance = finalSnapshot.remainingLoanBalance;
  const estimatedNetEquity = Math.round(projectedPropertyValue - outstandingLoanBalance);
  const totalRentPaid = Math.round(cumulativeRent);
  const totalOwnershipCosts =
    downPaymentAmount + Math.round(cumulativeEmiPaid) + Math.round(cumulativeMaintenance);

  const finalMonthlyRent = Math.round(R0 * Math.pow(1 + h, N - 1));
  const netWealthDifference = estimatedNetEquity - totalOwnershipCosts + totalRentPaid;

  return {
    analysisPeriodYears: N,
    initialMonthlyRent: R0,
    initialPropertyPrice: P0,
    downPaymentPercentage: inputs.downPaymentPercentage,
    downPaymentAmount,
    initialLoanPrincipal,
    monthlyEmi: Math.round(exactMonthlyEmi),
    loanTenureYears: loanTenure,
    loanInterestRate: inputs.loanInterestRate ?? 8.5,
    annualMaintenanceRate: inputs.annualMaintenanceRate ?? 0.5,
    totalRentPaid,
    projectedPropertyValue,
    outstandingLoanBalance,
    estimatedNetEquity,
    totalPrincipalPaid: Math.round(cumulativePrincipalPaid),
    totalInterestPaid: Math.round(cumulativeInterestPaid),
    totalEmiPaid: Math.round(cumulativeEmiPaid),
    totalMaintenanceCost: Math.round(cumulativeMaintenance),
    totalOwnershipCosts,
    finalMonthlyRent,
    netWealthDifference,
    yearlySnapshots,
  };
}
