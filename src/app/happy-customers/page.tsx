import { constructMetadata } from '@/lib/metadata';
import { RouteStub } from '@/components/ui/RouteStub';

export const metadata = constructMetadata({
  title: 'Client Stories & Happy Customers',
  description: 'Read authentic client testimonials and success stories from homeowners and investors who partnered with SAI PRESTIGE.',
  canonical: '/happy-customers',
});

export default function HappyCustomersPage() {
  return (
    <RouteStub
      title="Client Stories & Social Proof"
      category="TRUST & REPUTATION"
      description="Reflecting our commitment to precision, transparency, and exemplary service through the experiences of our valued clients."
    />
  );
}
