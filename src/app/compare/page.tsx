import { constructMetadata } from '@/lib/metadata';
import { RouteStub } from '@/components/ui/RouteStub';

export const metadata = constructMetadata({
  title: 'Compare Properties & Developments',
  description: 'Side-by-side comparative analysis of configurations, pricing, carpet area, and amenities with SAI PRESTIGE.',
  canonical: '/compare',
  noIndex: true,
});

export default function ComparePage() {
  return (
    <RouteStub
      title="Property Comparison"
      category="EVALUATION TOOL"
      description="Compare shortlisted properties side-by-side across key parameters including configuration, carpet area, price, and amenities."
    />
  );
}
