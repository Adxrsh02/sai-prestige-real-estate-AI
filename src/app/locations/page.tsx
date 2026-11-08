import { constructMetadata } from '@/lib/metadata';
import { RouteStub } from '@/components/ui/RouteStub';

export const metadata = constructMetadata({
  title: 'Strategic Real Estate Locations in Navi Mumbai',
  description: 'Explore high-growth real estate markets across Navi Mumbai including Vashi, Sanpada, Nerul, and Kharghar with SAI PRESTIGE.',
  canonical: '/locations',
});

export default function LocationsPage() {
  return (
    <RouteStub
      title="Strategic Real Estate Locations"
      category="REGIONAL HUBS"
      description="Deep local insight and market dynamics across Navi Mumbai's most sought-after residential and commercial sectors."
    />
  );
}
