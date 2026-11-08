import React from 'react';
import Link from 'next/link';
import { constructMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/constants';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FinancialToolsSuite } from '@/components/financial-tools/FinancialToolsSuite';
import { FinancialFaqAccordion } from '@/components/financial-tools/FinancialFaqAccordion';
import { FINANCIAL_FAQS } from '@/lib/financial/faq';
import { ChevronRight, ArrowRight, ShieldCheck, Scale, FileSpreadsheet, TrendingUp } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Home Loan EMI, Stamp Duty & Rent vs Buy Calculator',
  description:
    'Calculate accurate monthly home loan EMIs, interest breakdowns, Maharashtra stamp duty and registration fees, and comprehensive Rent vs Buy financial comparisons in Navi Mumbai and Mumbai with SAI PRESTIGE.',
  canonical: '/emi-calculator',
});

export default function EMICalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
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
            name: 'EMI Calculator & Property Financial Tools',
            item: `${siteConfig.url}/emi-calculator`,
          },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'SAI PRESTIGE Property Financial Calculators',
        applicationCategory: 'FinancialApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        featureList: [
          'Home Loan EMI Calculation with Fixed Amortization',
          'Down Payment Equity Ratio Optimization',
          'Maharashtra Stamp Duty & Surcharge Computation',
          'Statutory Registration Fee Capping Verification',
          'Rent vs Buy Comparative Analysis & Long-Term Equity Modeling',
          'Annual and Monthly Loan Amortization Schedule',
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FINANCIAL_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Header & Breadcrumb Hero Section */}
      <Section spacing="none" variant="white" className="py-5 sm:py-7 border-b border-[var(--color-neutral-200)]/60 bg-white">
        <Container size="wide" className="max-w-[1280px]">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-2">
            <ol className="flex items-center gap-1.5 text-[11px] text-[var(--color-neutral-500)] font-sans">
              <li>
                <Link
                  href="/"
                  className="hover:text-[var(--color-prestige-charcoal)] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-[var(--color-neutral-400)]" aria-hidden="true" />
              </li>
              <li className="text-[var(--color-neutral-800)] font-medium" aria-current="page">
                EMI Calculator & Financial Tools
              </li>
            </ol>
          </nav>

          {/* Compact Heading Block */}
          <div className="max-w-2xl space-y-2">
            <Badge variant="gold" size="sm">
              STATUTORY & FINANCIAL PLANNING
            </Badge>
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-tight">
              Smart Property Financial Tools
            </h1>
            <p className="text-xs sm:text-sm text-[var(--color-neutral-600)] font-light leading-relaxed">
              Estimate monthly home loan repayments, Maharashtra stamp duty and statutory registration charges, or analyze long-term wealth divergence with our Rent vs Buy financial model.
            </p>
          </div>
        </Container>
      </Section>

      {/* 2. Interactive Calculator Suite (Tabbed / Comprehensive Mode) */}
      <Section spacing="none" variant="neutral" className="py-6 sm:py-8 lg:py-10">
        <Container size="wide" className="max-w-[1280px]">
          <FinancialToolsSuite />
        </Container>
      </Section>

      {/* 3. Financial Methodology & Guidance Section */}
      <Section spacing="default" variant="white" className="border-b border-[var(--color-neutral-200)]/60">
        <Container size="wide">
          <SectionHeader
            eyebrow="METHODOLOGY & INSIGHTS"
            title="Understanding Your Acquisition Capital"
            description="Clear guidance on how loan amortizations, down payment equity, government valuations, and rental outflows govern your property acquisition decisions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            <div className="rounded-xl border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)]/60 p-5 space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold)] flex items-center justify-center">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <h3 className="text-base font-medium text-[var(--color-prestige-charcoal)]">
                The Amortization Curve
              </h3>
              <p className="text-xs text-[var(--color-neutral-600)] font-light leading-relaxed">
                During the early years of a home loan, the majority of your monthly installment goes toward interest. As the principal balance reduces over time, a progressively higher portion of each EMI repays your principal debt.
              </p>
            </div>

            <div className="rounded-xl border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)]/60 p-5 space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold)] flex items-center justify-center">
                <Scale className="w-4 h-4" />
              </div>
              <h3 className="text-base font-medium text-[var(--color-prestige-charcoal)]">
                Down Payment Leverage
              </h3>
              <p className="text-xs text-[var(--color-neutral-600)] font-light leading-relaxed">
                Contributing 20% to 30% down payment significantly reduces risk for lenders, qualifying you for preferential interest rates while drastically suppressing compound interest accumulation across a 15 to 25 year tenure.
              </p>
            </div>

            <div className="rounded-xl border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)]/60 p-5 space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold)] flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base font-medium text-[var(--color-prestige-charcoal)]">
                Ready Reckoner Valuation
              </h3>
              <p className="text-xs text-[var(--color-neutral-600)] font-light leading-relaxed">
                Under the Maharashtra Stamp Act, stamp duty is payable on whichever value is higher: the declared Agreement Consideration or the government Annual Statement of Rates (Ready Reckoner). Always verify official circle rates.
              </p>
            </div>

            <div className="rounded-xl border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)]/60 p-5 space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold)] flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="text-base font-medium text-[var(--color-prestige-charcoal)]">
                Rent vs Buy Wealth Divergence
              </h3>
              <p className="text-xs text-[var(--color-neutral-600)] font-light leading-relaxed">
                Rental payments compound annually without building asset value. In contrast, property acquisition channels cash outflows into tangible home equity as debt amortizes against long-term capital appreciation.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Frequently Asked Questions */}
      <Section spacing="compact" variant="white" className="py-12 sm:py-16 lg:py-20">
        <Container size="default">
          <SectionHeader
            eyebrow="COMMON INQUIRIES"
            title="Frequently Asked Questions"
            description="Clear, authoritative answers regarding home financing formulas, interest calculations, and Maharashtra registration laws."
            align="center"
          />

          <FinancialFaqAccordion />
        </Container>
      </Section>

      {/* 5. Strategic Conversion CTA Section */}
      <Section spacing="default" variant="neutral" className="border-t border-[var(--color-neutral-200)]/80">
        <Container size="wide">
          <div className="rounded-2xl bg-[var(--color-prestige-charcoal)] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[var(--shadow-premium-lg)] border border-[var(--color-neutral-800)]">
            <div className="max-w-2xl relative z-10 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[var(--color-prestige-gold-light)] block">
                PORTFOLIO ADVISORY
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white">
                Found a Property You Love in Navi Mumbai?
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                Discover exceptional residential and commercial assets with SAI PRESTIGE, or connect with our senior advisory team for private viewings and personalized acquisition guidance.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button href="/properties" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explore Properties
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white hover:text-black"
                >
                  Schedule Private Consultation
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
