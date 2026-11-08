import React from 'react';
import { constructMetadata } from '@/lib/metadata';
import { ThankYouContent } from './ThankYouContent';

export const metadata = constructMetadata({
  title: 'Enquiry Received — Thank You',
  description:
    'Thank you for contacting SAI PRESTIGE. We have received your property enquiry and our senior real estate advisory team will be in touch with you shortly.',
  canonical: '/contact/thank-you',
  noIndex: true, // Strictly prevent search indexing of the conversion confirmation page
});

export default function ThankYouPage() {
  return <ThankYouContent />;
}

