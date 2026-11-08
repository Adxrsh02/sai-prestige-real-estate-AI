import { constructMetadata } from '@/lib/metadata';
import { RouteStub } from '@/components/ui/RouteStub';

export const metadata = constructMetadata({
  title: 'Why Choose SAI PRESTIGE',
  description: 'Discover the pillars of excellence, transparency, and market intelligence that set SAI PRESTIGE apart in luxury real estate.',
  canonical: '/why-sai-prestige',
});

export default function WhySaiPrestigePage() {
  return (
    <RouteStub
      title="Why SAI PRESTIGE"
      category="DIFFERENTIATORS"
      description="Transparent advisory, verified project legalities, personalized portfolio stewardship, and end-to-end transaction support."
    />
  );
}
