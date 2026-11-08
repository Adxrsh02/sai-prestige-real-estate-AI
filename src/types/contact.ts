export type ContactRequirement =
  | 'Buying a Property'
  | 'Renting a Property'
  | 'Selling a Property'
  | 'Commercial Property'
  | 'Investment Enquiry'
  | 'General Enquiry'
  | 'Other';

export const CONTACT_REQUIREMENTS: ContactRequirement[] = [
  'Buying a Property',
  'Renting a Property',
  'Selling a Property',
  'Commercial Property',
  'Investment Enquiry',
  'General Enquiry',
  'Other',
];

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  requirement: ContactRequirement | '';
  location?: string;
  message: string;
  turnstileToken: string;
  website_url?: string; // Honeypot field (must remain empty)
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
  customerConfirmationSent?: boolean;
}
