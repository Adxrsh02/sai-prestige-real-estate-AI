import { constructMetadata } from '@/lib/metadata';
import { RouteStub } from '@/components/ui/RouteStub';

export const metadata = constructMetadata({
  title: 'Property Valuation Request',
  description: 'Request an accurate, professional market valuation of your residential or commercial property in Navi Mumbai with SAI PRESTIGE.',
  canonical: '/property-valuation',
});

export default function PropertyValuationPage() {
  return (
    <RouteStub
      title="Property Valuation Request"
      category="APPRAISAL"
      description="Obtain an objective, market-aligned property appraisal based on recent comparative transactions, location connectivity, and asset specifications."
    />
  );
}
