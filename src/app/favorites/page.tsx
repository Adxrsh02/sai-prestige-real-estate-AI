import { constructMetadata } from '@/lib/metadata';
import { RouteStub } from '@/components/ui/RouteStub';

export const metadata = constructMetadata({
  title: 'Saved Properties & Portfolio Shortlist',
  description: 'View and review your saved properties and shortlisted real estate developments with SAI PRESTIGE.',
  canonical: '/favorites',
  noIndex: true,
});

export default function FavoritesPage() {
  return (
    <RouteStub
      title="Saved Properties"
      category="PORTFOLIO SHORTLIST"
      description="Review your shortlisted properties, track updates, and quickly request private viewings or detailed specifications."
    />
  );
}
