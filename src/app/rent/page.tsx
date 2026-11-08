import React from 'react';
import { constructMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/constants';
import { RentHero } from '@/components/rent/RentHero';
import { RentCategories } from '@/components/rent/RentCategories';
import { RentProcessTimeline } from '@/components/rent/RentProcessTimeline';
import { WhyRentWithUs } from '@/components/rent/WhyRentWithUs';
import { RentLocalities } from '@/components/rent/RentLocalities';
import { ResidentialVsCommercial } from '@/components/rent/ResidentialVsCommercial';
import { RentFaqAccordion } from '@/components/rent/RentFaqAccordion';
import { RentConversionCTA } from '@/components/rent/RentConversionCTA';

export const metadata = constructMetadata({
  title: 'Rent Property in Navi Mumbai | Flats, Luxury Apartments & Commercial Leases',
  description:
    'Discover verified residential flats for rent and prime corporate commercial office spaces across Ulwe, Sanpada, Vashi, Nerul, Seawoods, and Navi Mumbai with SAI PRESTIGE.',
  canonical: '/rent',
});

export default function RentPage() {
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
          { '@type': 'AdministrativeArea', name: 'Nerul' },
          { '@type': 'AdministrativeArea', name: 'Seawoods' },
          { '@type': 'AdministrativeArea', name: 'Kharghar' },
          { '@type': 'AdministrativeArea', name: 'Pushpak Nagar' },
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
            name: 'Rent & Lease Property',
            item: `${siteConfig.url}/rent`,
          },
        ],
      },
      {
        '@type': 'Service',
        name: 'Property Rental & Commercial Leasing Advisory in Navi Mumbai',
        serviceType: 'Real Estate Leasing Consultancy',
        provider: {
          '@id': `${siteConfig.url}/#organization`,
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Navi Mumbai',
        },
        description:
          'Structured residential rental advisory and strategic corporate commercial leasing across Ulwe, Sanpada, Vashi, Nerul, Seawoods, Kharghar, and Pushpak Nagar.',
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
      <RentHero />

      {/* 2. Rental Categories (Residential Rentals & Commercial Leases) */}
      <RentCategories />

      {/* 3. The Rental Journey — 7-Stage Process Timeline */}
      <RentProcessTimeline />

      {/* 4. Why Discerning Tenants & Landlords Choose Sai Prestige */}
      <WhyRentWithUs />

      {/* 5. Navi Mumbai Rental & Leasing Locality Market Intelligence */}
      <RentLocalities />

      {/* 6. Residential vs Commercial Leasing Comparison */}
      <ResidentialVsCommercial />

      {/* 7. Accessible Frequently Asked Questions Accordion */}
      <RentFaqAccordion />

      {/* 8. Final High-Impact Conversion CTA Banner */}
      <RentConversionCTA />
    </>
  );
}
