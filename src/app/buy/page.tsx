import React from 'react';
import { constructMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/constants';
import { BuyHero } from '@/components/buy/BuyHero';
import { BuyCategories } from '@/components/buy/BuyCategories';
import { BuyProcessTimeline } from '@/components/buy/BuyProcessTimeline';
import { WhyBuyWithUs } from '@/components/buy/WhyBuyWithUs';
import { BuyLocalities } from '@/components/buy/BuyLocalities';
import { BuyFaqAccordion } from '@/components/buy/BuyFaqAccordion';
import { BuyConversionCTA } from '@/components/buy/BuyConversionCTA';

export const metadata = constructMetadata({
  title: 'Buy Property in Navi Mumbai | Luxury Flats, Homes & Commercial Real Estate',
  description:
    'Discover verified residential flats, luxury penthouses, new project launches, and commercial properties to buy across Ulwe, Sanpada, Vashi, and Navi Mumbai with SAI PRESTIGE.',
  canonical: '/buy',
});

export default function BuyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateAgent',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.contact.address,
          addressLocality: siteConfig.contact.city,
          addressRegion: siteConfig.contact.state,
          addressCountry: siteConfig.contact.country,
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Navi Mumbai' },
          { '@type': 'AdministrativeArea', name: 'Ulwe' },
          { '@type': 'AdministrativeArea', name: 'Sanpada' },
          { '@type': 'AdministrativeArea', name: 'Vashi' },
          { '@type': 'AdministrativeArea', name: 'Pushpak Nagar' },
          { '@type': 'AdministrativeArea', name: 'Nerul' },
          { '@type': 'AdministrativeArea', name: 'Seawoods' },
          { '@type': 'AdministrativeArea', name: 'Kharghar' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
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
            name: 'Buy Property',
            item: `${siteConfig.url}/buy`,
          },
        ],
      },
      {
        '@type': 'Service',
        name: 'Property Buying Consultancy in Navi Mumbai',
        serviceType: 'Real Estate Acquisition Advisory',
        provider: {
          '@id': `${siteConfig.url}/#organization`,
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Navi Mumbai',
        },
        description:
          'Comprehensive real estate buying guidance for residential apartments, luxury residences, commercial office spaces, and new builder launches across Navi Mumbai.',
      },
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section */}
      <BuyHero />

      {/* 2. Property Acquisition Categories (4 Supplied Cloudinary Collections) */}
      <BuyCategories />

      {/* 3. Sequential Buying Methodology & Process Timeline */}
      <BuyProcessTimeline />

      {/* 4. Why Discerning Buyers Choose Sai Prestige */}
      <WhyBuyWithUs />

      {/* 5. Prime Navi Mumbai Locality Market Intelligence */}
      <BuyLocalities />

      {/* 6. Accessible Frequently Asked Questions Accordion */}
      <BuyFaqAccordion />

      {/* 7. Final High-Impact Conversion CTA Banner */}
      <BuyConversionCTA />
    </>
  );
}
