import { constructMetadata } from '@/lib/metadata';
import { RouteStub } from '@/components/ui/RouteStub';

export const metadata = constructMetadata({
  title: 'Real Estate Disclaimer & Regulatory Notice',
  description: 'Statutory disclaimer, RERA compliance declarations, and advisory terms for SAI PRESTIGE.',
  canonical: '/disclaimer',
});

export default function DisclaimerPage() {
  return (
    <RouteStub
      title="Regulatory Disclaimer & RERA Notice"
      category="REGULATORY NOTICE"
      description="Important legal statements concerning project specifications, artistic renderings, third-party financing, and statutory state RERA compliance."
      phaseNote="Formal statutory disclaimer documentation will be finalized with legal counsel prior to public deployment."
    />
  );
}
