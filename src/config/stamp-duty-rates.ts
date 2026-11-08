import { JurisdictionRateProfile } from '@/types/financial';

export const MAHARASHTRA_JURISDICTIONS: JurisdictionRateProfile[] = [
  {
    id: 'navi_mumbai_nmmc',
    name: 'Navi Mumbai (NMMC Jurisdiction)',
    region: 'Navi Mumbai',
    localBodyType: 'Municipal Corporation',
    baseStampDutyRate: 0.05, // 5% Base Stamp Duty
    surchargeRate: 0.01, // 1% Metro Cess / Transport Surcharge
    femaleConcessionRate: 0.01, // 1% Concession for sole female buyer
    registrationFeeType: 'capped_percentage',
    registrationPercentage: 0.01, // 1%
    registrationMaxCap: 30000, // Capped at ₹30,000 in Maharashtra for properties > ₹30 Lakhs
    registrationMinFee: 0,
    verificationStatus: 'verified',
    verifiedSource: 'Department of Registration and Stamps (IGR Maharashtra) & Maharashtra Stamp Act',
    lastVerifiedDate: 'October 2024',
    description:
      'Standard residential properties under Navi Mumbai Municipal Corporation limits. Includes 5% base stamp duty and 1% Metro cess.',
    notes: [
      '5% Base Stamp Duty + 1% Metro Cess applies to male and joint purchases.',
      'Under Maharashtra GR, a 1% rebate applies solely when residential property is registered in the name of a female purchaser.',
      'For properties valued above ₹30 Lakhs, the registration fee is statutorily capped at ₹30,000 for residential sales.',
      'Ready Reckoner rates (Annual Statement of Rates) serve as the minimum legal valuation base.',
    ],
  },
  {
    id: 'mumbai_mcgm',
    name: 'Mumbai Suburban & City (MCGM / BMC)',
    region: 'Mumbai Metropolitan Region',
    localBodyType: 'Municipal Corporation',
    baseStampDutyRate: 0.05,
    surchargeRate: 0.01,
    femaleConcessionRate: 0.01,
    registrationFeeType: 'capped_percentage',
    registrationPercentage: 0.01,
    registrationMaxCap: 30000,
    registrationMinFee: 0,
    verificationStatus: 'verified',
    verifiedSource: 'IGR Maharashtra & Maharashtra Stamp Act Schedule I',
    lastVerifiedDate: 'October 2024',
    description:
      'Residential properties within Brihanmumbai Municipal Corporation (BMC/MCGM) limits, including Western and Central suburbs.',
    notes: [
      'Total 6% (5% Base + 1% Metro cess) for male and joint purchasers.',
      '5% effective rate for sole female residential buyers.',
      'Registration charges are 1% of agreement value capped at ₹30,000 for properties exceeding ₹30 Lakhs.',
    ],
  },
  {
    id: 'thane_tmc',
    name: 'Thane (TMC Jurisdiction)',
    region: 'Thane',
    localBodyType: 'Municipal Corporation',
    baseStampDutyRate: 0.05,
    surchargeRate: 0.01,
    femaleConcessionRate: 0.01,
    registrationFeeType: 'capped_percentage',
    registrationPercentage: 0.01,
    registrationMaxCap: 30000,
    registrationMinFee: 0,
    verificationStatus: 'verified',
    verifiedSource: 'IGR Maharashtra',
    lastVerifiedDate: 'October 2024',
    description:
      'Residential transactions within Thane Municipal Corporation limits.',
    notes: [
      '6% total rate for male/joint purchasers (5% Base + 1% Metro Cess).',
      '5% effective rate for female purchasers.',
      'Registration fee capped at ₹30,000 for residential sales above ₹30L.',
    ],
  },
  {
    id: 'pune_pmc',
    name: 'Pune (PMC Jurisdiction)',
    region: 'Pune',
    localBodyType: 'Municipal Corporation',
    baseStampDutyRate: 0.05,
    surchargeRate: 0.02, // 1% Metro Cess + 1% Local Body Tax (LBT)
    femaleConcessionRate: 0.01,
    registrationFeeType: 'capped_percentage',
    registrationPercentage: 0.01,
    registrationMaxCap: 30000,
    registrationMinFee: 0,
    verificationStatus: 'verified',
    verifiedSource: 'IGR Maharashtra Notification for Pune Urban Area',
    lastVerifiedDate: 'October 2024',
    description:
      'Residential properties within Pune Municipal Corporation limits.',
    notes: [
      '7% total rate for male/joint purchasers (5% Base + 1% Metro Cess + 1% LBT).',
      '6% effective rate for female purchasers.',
      'Registration fee capped at ₹30,000 for residential sales above ₹30L.',
    ],
  },
  {
    id: 'rest_of_maharashtra_urban',
    name: 'Rest of Maharashtra (Other Municipal Councils)',
    region: 'Maharashtra Urban',
    localBodyType: 'Municipal Council',
    baseStampDutyRate: 0.05,
    surchargeRate: 0.0,
    femaleConcessionRate: 0.01,
    registrationFeeType: 'capped_percentage',
    registrationPercentage: 0.01,
    registrationMaxCap: 30000,
    registrationMinFee: 0,
    verificationStatus: 'illustrative',
    description:
      'Illustrative benchmark for other urban municipal councils in Maharashtra where specific metro cesses may not apply.',
    notes: [
      'Illustrative baseline: 5% base stamp duty without city-specific cesses.',
      'Specific local authority surcharges may vary by region.',
      'Subject to verification with local Sub-Registrar Office.',
    ],
  },
  {
    id: 'rural_gram_panchayat',
    name: 'Rural Maharashtra (Gram Panchayat)',
    region: 'Maharashtra Rural',
    localBodyType: 'Gram Panchayat',
    baseStampDutyRate: 0.03,
    surchargeRate: 0.01, // 1% Zilla Parishad cess
    femaleConcessionRate: 0.01,
    registrationFeeType: 'capped_percentage',
    registrationPercentage: 0.01,
    registrationMaxCap: 30000,
    registrationMinFee: 0,
    verificationStatus: 'illustrative',
    description:
      'Illustrative rate for properties located within rural Gram Panchayat jurisdictions.',
    notes: [
      'Illustrative baseline: 3% base + 1% ZP cess = 4% for male/joint.',
      'Rate verification required before concluding formal transactions.',
    ],
  },
];

export const DEFAULT_JURISDICTION_ID = 'navi_mumbai_nmmc';
