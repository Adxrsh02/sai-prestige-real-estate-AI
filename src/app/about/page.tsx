import React from 'react';
import Link from 'next/link';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/layout/Container';
import { AboutHero } from '@/components/about/AboutHero';
import { CompanyPhilosophy } from '@/components/about/CompanyPhilosophy';
import { MissionVision } from '@/components/about/MissionVision';
import { CorePrinciples } from '@/components/about/CorePrinciples';
import { TeamSection } from '@/components/about/TeamSection';
import { LocalPresence } from '@/components/about/LocalPresence';
import { AboutContactCTA } from '@/components/about/AboutContactCTA';

export const metadata = constructMetadata({
  title: 'About SAI PRESTIGE | Real Estate Consultancy in Navi Mumbai',
  description:
    'Meet SAI PRESTIGE, a Navi Mumbai real estate consultancy focused on understanding buyer needs, building trust, and guiding informed property decisions.',
  canonical: '/about',
});

export default function AboutPage() {
  return (
    <>
      {/* 1. Breadcrumb Navigation */}
      <div className="w-full bg-[var(--color-prestige-white)] pt-4 sm:pt-5 md:pt-6">
        <Container size="default">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--color-neutral-500)]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[var(--color-prestige-gold)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)] rounded-xs"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-[var(--color-prestige-gold)] select-none">
                /
              </li>
              <li aria-current="page" className="text-[var(--color-prestige-charcoal)] font-medium">
                About Us
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* 2. Brand Introduction / Editorial Hero */}
      <AboutHero />

      {/* 3. Company Philosophy & Approach */}
      <CompanyPhilosophy />

      {/* 4. Our Mission & Our Vision */}
      <MissionVision />

      {/* 5. Core Principles */}
      <CorePrinciples />

      {/* 6. Meet Our Team */}
      <TeamSection />

      {/* 7. Service Area & Local Relevance */}
      <LocalPresence />

      {/* 8. Contact & Enquiry CTA */}
      <AboutContactCTA />
    </>
  );
}
