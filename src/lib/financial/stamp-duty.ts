import {
  DEFAULT_JURISDICTION_ID,
  MAHARASHTRA_JURISDICTIONS,
} from '@/config/stamp-duty-rates';
import {
  JurisdictionRateProfile,
  StampDutyInputs,
  StampDutyResults,
} from '@/types/financial';

/**
 * Retrieve the active jurisdiction rate profile by unique ID.
 */
export function getJurisdictionProfile(id: string): JurisdictionRateProfile {
  const profile = MAHARASHTRA_JURISDICTIONS.find((j) => j.id === id);
  if (profile) return profile;
  return (
    MAHARASHTRA_JURISDICTIONS.find((j) => j.id === DEFAULT_JURISDICTION_ID) ||
    MAHARASHTRA_JURISDICTIONS[0]
  );
}

/**
 * Calculate Maharashtra Stamp Duty, applicable cesses, and statutory registration charges.
 */
export function calculateStampDuty(inputs: StampDutyInputs): StampDutyResults {
  const profile = getJurisdictionProfile(inputs.jurisdictionId);
  const calculationBase = Math.max(0, inputs.agreementValue);

  // Female concession applies under Maharashtra GR only when sole owner is female
  const isFemaleSoleOwner = inputs.buyerProfile === 'female';
  const concessionRate = isFemaleSoleOwner ? profile.femaleConcessionRate : 0;

  const totalNominalRate = profile.baseStampDutyRate + profile.surchargeRate;
  const effectiveStampDutyRate = Math.max(0, totalNominalRate - concessionRate);

  const stampDutyAmount = Math.round(calculationBase * effectiveStampDutyRate);
  const concessionAmount = Math.round(calculationBase * concessionRate);

  // Calculate registration fees with Maharashtra statutory cap rule
  let registrationCharges = 0;
  if (profile.registrationFeeType === 'capped_percentage') {
    const rawRegistration = calculationBase * profile.registrationPercentage;
    const capped = Math.min(
      profile.registrationMaxCap,
      Math.max(profile.registrationMinFee, rawRegistration)
    );
    registrationCharges = Math.round(capped);
  } else if (profile.registrationFeeType === 'percentage') {
    registrationCharges = Math.round(calculationBase * profile.registrationPercentage);
  } else {
    registrationCharges = profile.registrationMinFee;
  }

  const totalGovernmentCharges = stampDutyAmount + registrationCharges;

  return {
    agreementValue: calculationBase,
    calculationBase,
    baseStampDutyRate: profile.baseStampDutyRate,
    surchargeRate: profile.surchargeRate,
    effectiveStampDutyRate,
    stampDutyAmount,
    registrationCharges,
    totalGovernmentCharges,
    jurisdictionName: profile.name,
    buyerProfile: inputs.buyerProfile,
    rateProfileStatus: profile.verificationStatus,
    concessionApplied: isFemaleSoleOwner && concessionRate > 0,
    concessionAmount,
    verifiedSource: profile.verifiedSource,
    lastVerifiedDate: profile.lastVerifiedDate,
    notes: profile.notes,
  };
}
