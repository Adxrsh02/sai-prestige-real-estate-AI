import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/constants';
import { HeroPlaceholder } from '@/components/sections/HeroPlaceholder';
import { PortfolioDiscovery } from '@/components/sections/PortfolioDiscovery';
import { ClientTestimonials } from '@/components/sections/ClientTestimonials';
import { BuyServicesPromotion } from '@/components/sections/BuyServicesPromotion';
import { SectionPlaceholder } from '@/components/sections/SectionPlaceholder';
import { EmiCalculatorPreview } from '@/components/financial-tools/EmiCalculatorPreview';

export const metadata: Metadata = {
  title: 'Real Estate Consultant in Navi Mumbai | Sai Prestige',
  description:
    'Sai Prestige is a real estate consultant in Navi Mumbai helping you buy, sell and rent property in Ulwe, Sanpada, Vashi and Pushpak Nagar.',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: 'Real Estate Consultant in Navi Mumbai | Sai Prestige',
    description:
      'Sai Prestige is a real estate consultant in Navi Mumbai helping you buy, sell and rent property in Ulwe, Sanpada, Vashi and Pushpak Nagar.',
    url: siteConfig.url,
    siteName: 'Sai Prestige',
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Consultant in Navi Mumbai | Sai Prestige',
    description:
      'Sai Prestige is a real estate consultant in Navi Mumbai helping you buy, sell and rent property in Ulwe, Sanpada, Vashi and Pushpak Nagar.',
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Sai Prestige',
    description:
      'Sai Prestige is a real estate consultancy in Navi Mumbai helping buyers, sellers, tenants and investors across Ulwe, Sanpada, Vashi and Pushpak Nagar with transparent guidance and local market insight.',
    telephone: '+91 93264 33965',
    areaServed: ['Ulwe', 'Sanpada', 'Vashi', 'Pushpak Nagar', 'Navi Mumbai'],
    url: siteConfig.url,
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section */}
      <HeroPlaceholder />

      {/* 2. Portfolio Discovery — Experience, Trust & Market Reach */}
      <PortfolioDiscovery />

      {/* 3. Client Experiences — What Our Clients Say About Us */}
      <ClientTestimonials />

      {/* 4. Discover Your Ideal Property in Navi Mumbai — Buy Services Promotional Section */}
      <BuyServicesPromotion />

      {/* 5. Popular Locations */}
      <SectionPlaceholder
        id="locations"
        eyebrow="REGIONAL EXPERTISE"
        title="Prime Locations in Navi Mumbai"
        description="Deep local market intelligence across prominent growth corridors, transit hubs, and established neighborhoods."
        actionText="Explore All Locations"
        actionHref="/locations"
        variant="white"
        layout="grid-4"
        itemCount={4}
      />

      {/* 6. Why SAI PRESTIGE */}
      <SectionPlaceholder
        id="why-us"
        eyebrow="THE PRESTIGE ADVANTAGE"
        title="Why Discerning Clients Choose SAI PRESTIGE"
        description="Integrity, architectural discernment, and verified legal transparency form the cornerstone of our practice."
        actionText="Learn Our Story"
        actionHref="/about"
        variant="white"
        layout="split"
      />

      {/* 7. Services Overview */}
      <SectionPlaceholder
        id="services"
        eyebrow="END-TO-END SOLUTIONS"
        title="Comprehensive Real Estate Advisory"
        description="From acquisition advisory and property valuation to home financing assistance and legal registration."
        actionText="Explore All Services"
        actionHref="/services"
        variant="neutral"
        layout="grid-3"
        itemCount={3}
      />

      {/* 8. Customer Stories Preview */}
      <SectionPlaceholder
        id="testimonials"
        eyebrow="CLIENT EXPERIENCES"
        title="Trusted by Homeowners & Corporate Investors"
        description="Authentic stories of clients who secured their ideal properties and portfolios through our advisory."
        actionText="Read Stories"
        actionHref="/happy-customers"
        variant="white"
        layout="grid-3"
        itemCount={3}
      />

      {/* 9. Insights Preview */}
      <SectionPlaceholder
        id="insights"
        eyebrow="MARKET INTELLIGENCE"
        title="Real Estate Insights & Editorial Guides"
        description="Authoritative analysis on property trends, home financing, legal regulations, and infrastructure growth."
        actionText="Read Insights"
        actionHref="/insights"
        variant="neutral"
        layout="grid-3"
        itemCount={3}
      />

      {/* 10. EMI Calculator Preview */}
      <EmiCalculatorPreview />

      {/* 11. Primary Enquiry CTA */}
      <SectionPlaceholder
        id="enquiry"
        eyebrow="CONFIDENTIAL ADVISORY"
        title="Begin Your Real Estate Journey with SAI PRESTIGE"
        description="Schedule a private consultation with our senior advisory team to discuss your residential aspirations or commercial investment goals."
        actionText="Schedule Consultation"
        actionHref="/contact"
        layout="cta-banner"
      />
    </>
  );
}
