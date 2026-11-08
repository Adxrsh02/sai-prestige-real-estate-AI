import { constructMetadata } from '@/lib/metadata';
import { RouteStub } from '@/components/ui/RouteStub';

export const metadata = constructMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy of SAI PRESTIGE regarding data protection, inquiries, and customer confidentiality.',
  canonical: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <RouteStub
      title="Privacy Policy"
      category="LEGAL & COMPLIANCE"
      description="Commitment to client data privacy, confidential record-keeping, and compliance with applicable data protection guidelines."
      phaseNote="Formal statutory privacy documentation will be published prior to public deployment."
    />
  );
}
