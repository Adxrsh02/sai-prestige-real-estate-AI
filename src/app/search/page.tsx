import { constructMetadata } from '@/lib/metadata';
import { RouteStub } from '@/components/ui/RouteStub';

export const metadata = constructMetadata({
  title: 'Universal Property & Project Search',
  description: 'Search properties, projects, locations, and insights across SAI PRESTIGE.',
  canonical: '/search',
  noIndex: true,
});

export default function SearchPage() {
  return (
    <RouteStub
      title="Universal Portfolio Search"
      category="DISCOVERY"
      description="Find properties, premier developments, strategic sectors, and real estate insights across our platform."
    />
  );
}
