import { constructMetadata } from '@/lib/metadata';
import { RouteStub } from '@/components/ui/RouteStub';

export const metadata = constructMetadata({
  title: 'Home Loan Assistance & Advisory',
  description: 'Navigate home financing with ease. Competitive interest rates, transparent eligibility guidance, and trusted banking partners with SAI PRESTIGE.',
  canonical: '/home-loan',
});

export default function HomeLoanPage() {
  return (
    <RouteStub
      title="Home Loan Assistance"
      category="FINANCE"
      description="Transparent loan guidance, interest rate comparisons, documentation assistance, and liaison with leading banking institutions."
    />
  );
}
