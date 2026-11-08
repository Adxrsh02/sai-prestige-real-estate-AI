import { constructMetadata } from '@/lib/metadata';
import { RouteStub } from '@/components/ui/RouteStub';

export const metadata = constructMetadata({
  title: 'Sell Your Property with SAI PRESTIGE',
  description: 'Connect with verified high-net-worth buyers and list your premium property with SAI PRESTIGE in Navi Mumbai.',
  canonical: '/sell',
});

export default function SellPage() {
  return (
    <RouteStub
      title="Sell Your Property"
      category="DIVESTMENT"
      description="Maximized visibility, confidential marketing, accurate valuation, and dedicated transaction management for property owners."
    />
  );
}
