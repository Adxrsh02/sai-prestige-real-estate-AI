import { constructMetadata } from '@/lib/metadata';
import { RouteStub } from '@/components/ui/RouteStub';

export const metadata = constructMetadata({
  title: 'Cookie Policy',
  description: 'Cookie Policy explaining how SAI PRESTIGE uses browser storage and analytics for user experience improvement.',
  canonical: '/cookie-policy',
});

export default function CookiePolicyPage() {
  return (
    <RouteStub
      title="Cookie & Storage Policy"
      category="DATA & PRIVACY"
      description="Information on essential session cookies, local storage for favorites, and telemetry standards."
      phaseNote="Formal statutory cookie policy will be deployed alongside analytics integration."
    />
  );
}
