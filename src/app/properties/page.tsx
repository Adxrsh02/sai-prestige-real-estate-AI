import { constructMetadata } from '@/lib/metadata';
import { RouteStub } from '@/components/ui/RouteStub';

export const metadata = constructMetadata({
  title: 'Luxury Properties for Sale & Rent',
  description: 'Browse luxury apartments, penthouses, villas, and commercial spaces curated by SAI PRESTIGE in Navi Mumbai.',
  canonical: '/properties',
});

export default function PropertiesPage() {
  return (
    <RouteStub
      title="Properties Collection"
      category="INVENTORY"
      description="An exclusive portfolio of premium residential residences and high-value commercial properties available for purchase and lease."
    />
  );
}
