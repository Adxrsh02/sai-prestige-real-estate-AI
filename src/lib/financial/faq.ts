export interface FaqItem {
  question: string;
  answer: string;
}

export const FINANCIAL_FAQS: FaqItem[] = [
  {
    question: 'How is Home Loan EMI calculated?',
    answer:
      'EMI (Equated Monthly Installment) is computed using the standard fixed amortizing formula: EMI = [P × r × (1+r)^n] / [(1+r)^n - 1], where P is Loan Principal (Property Price minus Down Payment), r is the monthly interest rate (Annual Rate / 12 / 100), and n is the total number of monthly installments (Tenure in Years × 12).',
  },
  {
    question: 'How does a higher down payment affect monthly EMI and total interest?',
    answer:
      'A higher down payment directly reduces the loan principal. Because interest is charged only on the outstanding principal, increasing your upfront contribution noticeably lowers your monthly EMI and exponentially decreases the total interest paid over the life of the loan.',
  },
  {
    question: 'Does opting for a longer loan tenure save money?',
    answer:
      'While a longer loan tenure reduces your monthly EMI by spreading payments over more months, it substantially increases the total interest you repay to the lender. For example, a 30-year loan at 8.5% can accumulate more total interest than the original borrowed principal itself.',
  },
  {
    question: 'What is the Maharashtra Stamp Duty and Metro Cess structure?',
    answer:
      'In urban Maharashtra jurisdictions like Navi Mumbai (NMMC), Mumbai (MCGM), and Thane (TMC), residential stamp duty consists of a 5% Base Stamp Duty plus a 1% Metro Cess / Transport Surcharge, totaling 6% for general purchasers. In Pune (PMC), an additional 1% Local Body Tax brings the total to 7%.',
  },
  {
    question: 'Does a female purchaser qualify for a stamp duty concession in Maharashtra?',
    answer:
      'Yes. Under Maharashtra Government notifications, a 1% rebate on stamp duty is granted for residential properties purchased solely in the name of a female buyer (e.g., reducing the rate from 6% to 5% in Navi Mumbai and Mumbai). Note that joint ownership between a male and female co-buyer does not qualify for this rebate.',
  },
  {
    question: 'How are property registration charges calculated in Maharashtra?',
    answer:
      'In Maharashtra, the statutory property registration fee for residential sales is 1% of the agreement value, subject to a statutory cap of ₹30,000 for properties valued above ₹30 Lakhs. For properties valued up to ₹30 Lakhs, the registration fee is 1% of the value.',
  },
  {
    question: 'Can stamp duty be calculated on a value lower than Ready Reckoner rates?',
    answer:
      'No. The Department of Registration and Stamps (IGR Maharashtra) mandates that stamp duty and registration charges must be paid on whichever value is higher: the actual transaction Agreement Value or the government Ready Reckoner Rate (Annual Statement of Rates - ASR).',
  },
  {
    question: 'Are these calculator results binding quotations for loan or registration?',
    answer:
      'No. All calculations provided on this platform are indicative estimates intended for financial planning. Official loan terms depend on your credit score, eligibility, and lender policies, while exact statutory duties depend on Sub-Registrar assessment at the time of property registration.',
  },
  {
    question: 'How does the Rent vs Buy Analysis evaluate long-term financial outcomes?',
    answer:
      'The Rent vs Buy model projects cumulative rental outlays compounding with annual rent escalations against the real estate equity accumulated through property appreciation and principal loan amortization over a selected horizon (5 to 30 years). It allows homebuyers to see at what tenure purchasing begins to outweigh rental outflow.',
  },
  {
    question: 'Why is estimated net equity not considered pure cash profit?',
    answer:
      'Net equity represents the market value of your property minus the remaining loan principal. It is not liquid profit because homeownership entails upfront down payment capital, ongoing loan interest, society maintenance, and transaction costs. Equity acts as a real asset store of value rather than immediate disposable cash.',
  },
];

