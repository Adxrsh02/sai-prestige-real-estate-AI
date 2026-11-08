import { constructMetadata } from '@/lib/metadata';
import { RouteStub } from '@/components/ui/RouteStub';

export const metadata = constructMetadata({
  title: 'Terms & Conditions',
  description: 'Terms and Conditions governing the use of the SAI PRESTIGE website and real estate advisory services.',
  canonical: '/terms-and-conditions',
});

export default function TermsAndConditionsPage() {
  return (
    <RouteStub
      title="Terms & Conditions"
      category="LEGAL & COMPLIANCE"
      description="Terms of service, website usage agreements, advisory disclaimers, and intellectual property provisions."
      phaseNote="Formal statutory terms documentation will be published prior to public deployment."
    />
  );
}
