import { Resend } from 'resend';

let resendInstance: Resend | null = null;
let lastApiKey: string | undefined = undefined;

/**
 * Returns an initialized Resend client reading the secret API key from process.env.
 * Ensures the API key is dynamically read at runtime (e.g. from .env.local).
 */
export function getResendClient(): Resend | null {
  const currentKey = process.env.RESEND_API_KEY?.trim();
  if (!currentKey) {
    return null;
  }
  if (!resendInstance || lastApiKey !== currentKey) {
    resendInstance = new Resend(currentKey);
    lastApiKey = currentKey;
  }
  return resendInstance;
}

/**
 * Convenience export for backward compatibility.
 */
export const resend = {
  get emails() {
    const client = getResendClient();
    if (!client) {
      throw new Error('Resend client is not initialized because RESEND_API_KEY is missing.');
    }
    return client.emails;
  },
};

/**
 * Resolves the official 'from' sender address for SAI PRESTIGE.
 *
 * Rules:
 * 1. Reads RESEND_FROM_EMAIL from process.env if set.
 * 2. If RESEND_FROM_EMAIL is a free @gmail.com address (which Resend will reject with a 403),
 *    or is unset, defaults to the official branded domain address:
 *    'Sai Prestige <contact@saiprestigerealestate.com>'.
 * 3. Never falls back to 'onboarding@resend.dev' in production, preventing customer email
 *    rejection by Resend's test sandbox policy.
 */
export const OFFICIAL_SENDER_EMAIL = 'Sai Prestige <contact@saiprestigerealestate.com>';

export function getFromAddress(): string {
  const envFrom = process.env.RESEND_FROM_EMAIL?.trim();

  if (envFrom) {
    // Check if user accidentally configured a free gmail address as the sender
    const isGmail = /@gmail\.com/i.test(envFrom);
    if (!isGmail) {
      return envFrom.includes('<') ? envFrom : `Sai Prestige <${envFrom}>`;
    }
    console.warn(
      '[Resend Warning]: RESEND_FROM_EMAIL cannot be a @gmail.com address for domain sending. Using official sender domain.'
    );
  }

  // Official production sender identity
  return OFFICIAL_SENDER_EMAIL;
}

/**
 * Resolves the business inbox recipient for enquiry notifications.
 */
export function getContactToEmail(): string {
  return process.env.CONTACT_TO_EMAIL?.trim() || 'sai.prestige01@gmail.com';
}
