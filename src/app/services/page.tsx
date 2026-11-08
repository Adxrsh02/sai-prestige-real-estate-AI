import { constructMetadata } from '@/lib/metadata';
import { RouteStub } from '@/components/ui/RouteStub';

export const metadata = constructMetadata({
  title: 'Real Estate Services & Advisory',
  description: 'Comprehensive property advisory services including buy, sell, rent, home loans, valuation, and legal registration.',
  canonical: '/services',
});

export default function ServicesPage() {
  return (
    <RouteStub
      title="Real Estate Advisory Services"
      category="SERVICES"
      description="Full-spectrum real estate advisory encompassing residential & commercial acquisition, leasing, valuation, home financing, and registration."
    />
  );
}
