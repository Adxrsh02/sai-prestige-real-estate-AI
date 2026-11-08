import React from 'react';
import Link from 'next/link';
import { constructMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/constants';
import { Container } from '@/components/layout/Container';
import { ContactHero } from '@/components/contact/ContactHero';
import { DirectContactCards } from '@/components/contact/DirectContactCards';
import { TrustPrinciples } from '@/components/contact/TrustPrinciples';
import { ContactForm } from '@/components/contact/ContactForm';
import { OfficeLocation } from '@/components/contact/OfficeLocation';
import { ContactCTA } from '@/components/contact/ContactCTA';

export const metadata = constructMetadata({
  title: 'Contact SAI PRESTIGE | Real Estate Consultancy in Navi Mumbai',
  description:
    'Contact SAI PRESTIGE in Navi Mumbai for property enquiries, buying and renting guidance, and office visits in Ulwe Sector 17.',
  canonical: '/contact',
});

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteConfig.url}/contact#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteConfig.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Contact Us',
            item: `${siteConfig.url}/contact`,
          },
        ],
      },
      {
        '@type': 'ContactPage',
        '@id': `${siteConfig.url}/contact#webpage`,
        url: `${siteConfig.url}/contact`,
        name: 'Contact SAI PRESTIGE | Real Estate Consultancy in Navi Mumbai',
        description:
          'Contact SAI PRESTIGE in Navi Mumbai for property enquiries, buying and renting guidance, and office visits in Ulwe Sector 17.',
        isPartOf: {
          '@id': `${siteConfig.url}/#website`,
        },
        mainEntity: {
          '@id': `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Breadcrumb Navigation */}
      <div className="w-full bg-[var(--color-prestige-white)] pt-6 sm:pt-8">
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
                Contact Us
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* 2. Premium Contact Hero */}
      <ContactHero />

      {/* 3. Direct Contact, Trust Principles & Interaction Grid */}
      <div className="w-full bg-[var(--color-prestige-white)] pb-12 sm:pb-16">
        <Container size="default">
          {/* Direct Communication Cards (Phone & WhatsApp) */}
          <DirectContactCards />

          {/* Trust Principles Strip */}
          <TrustPrinciples />

          {/* Main 2-Column Split: Form (Left 7 cols) & Office Location + Map (Right 5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <OfficeLocation />
            </div>
          </div>
        </Container>
      </div>

      {/* 4. Final Contact Conversion CTA */}
      <ContactCTA />
    </>
  );
}
