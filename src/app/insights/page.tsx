import { constructMetadata } from '@/lib/metadata';
import { RouteStub } from '@/components/ui/RouteStub';

export const metadata = constructMetadata({
  title: 'Real Estate Insights & Editorial Analysis',
  description: 'Authoritative market trends, home buyer guides, loan analysis, and legal updates from the editorial team at SAI PRESTIGE.',
  canonical: '/insights',
});

export default function InsightsPage() {
  return (
    <RouteStub
      title="Real Estate Insights & Market Analysis"
      category="PUBLICATIONS"
      description="Curated market reports, property investment frameworks, regulatory updates, and expert perspectives on Navi Mumbai real estate."
    />
  );
}
