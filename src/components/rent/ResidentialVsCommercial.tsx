import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Home, Building2, Check, ArrowRight, ShieldCheck, Scale } from 'lucide-react';

interface ComparisonRow {
  dimension: string;
  residential: string;
  commercial: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    dimension: 'Agreement Format & Tenure',
    residential:
      'Standard Leave & License Agreement under Maharashtra Rent Control Act. Typical tenure is 11, 22, or 33 months with renewal options.',
    commercial:
      'Registered Commercial Lease Deed or Business License. Standard tenure ranges from 3 to 9+ years with formal lock-in periods.',
  },
  {
    dimension: 'Security Deposit Structure',
    residential:
      'Refundable security deposit typically equivalent to 3 to 6 months of rent, reimbursed upon vacating after utility reconciliation.',
    commercial:
      'Refundable interest-free security deposit typically 6 to 12 months, benchmarked against bare-shell vs. furnished asset value.',
  },
  {
    dimension: 'Fit-Out & Rent-Free Period',
    residential:
      'Immediate occupancy. Apartments are offered semi-furnished, furnished, or unfurnished without extended interior fit-out windows.',
    commercial:
      '15 to 90 days rent-free fit-out period commonly negotiated to install customized electricals, IT cabling, partitions, and workstations.',
  },
  {
    dimension: 'Rent Escalation Clause',
    residential:
      'Predictable 5% to 10% rent increment upon completion of each 11-month tenure, mutually agreed by landlord and tenant.',
    commercial:
      'Structured 5% annual or 15% triennial (every 3 years) escalation clause clearly detailed in the registered lease indenture.',
  },
  {
    dimension: 'Statutory Compliances',
    residential:
      'Mandatory Maharashtra Police tenant verification, housing society NOC / move-in intimation, and Aadhaar e-registration.',
    commercial:
      'Shop & Establishment (Gumasta) license, GST registration, CIDCO commercial usage compliance, fire safety NOC, and society trade consent.',
  },
  {
    dimension: 'Maintenance & Tax Splits',
    residential:
      'Society maintenance typically absorbed by landlord or factored into rent; tenant bears metered electricity, water, and internet.',
    commercial:
      'Base rent plus CAM (Common Area Maintenance) charges; 18% GST applicable on commercial leases; tenant covers commercial utility meters.',
  },
];

export const ResidentialVsCommercial: React.FC = () => {
  return (
    <Section
      variant="neutral"
      spacing="none"
      className="py-16 md:py-24 lg:py-28 bg-[var(--color-neutral-50)] border-b border-[var(--color-neutral-200)]/70"
      id="residential-vs-commercial"
    >
      <Container size="wide">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-3.5">
            <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-prestige-gold)]">
              LEASE ADVISORY BENCHMARK
            </span>
            <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-[1.2]">
            Residential Rentals vs.{' '}
            <span className="font-normal block text-[var(--color-prestige-charcoal)]">
              Commercial Leasing.
            </span>
          </h2>
          <div className="w-16 h-[2px] bg-[var(--color-prestige-gold)] my-4" aria-hidden="true" />

          <p className="text-base text-[var(--color-neutral-600)] leading-relaxed font-light">
            Understanding the legal, operational, and financial nuances between a residential home license and a corporate commercial lease ensures clarity, transparency, and seamless execution.
          </p>
        </div>

        {/* Dual Cards for Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-[var(--color-neutral-200)] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold)] flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-prestige-gold)] block">
                  Category 01
                </span>
                <h3 className="text-lg font-medium text-[var(--color-prestige-charcoal)]">
                  Residential Tenancy Overview
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-neutral-600)] leading-relaxed font-light mb-4">
              Focuses on domestic livability, family comfort, building amenities, and quick move-in timelines governed by Maharashtra e-registration protocols.
            </p>
            <div className="text-[11px] font-mono text-[var(--color-neutral-500)] bg-[var(--color-neutral-50)] p-3 rounded border border-[var(--color-neutral-200)]/60">
              Key Focus: Society NOCs · Police Verification · Move-In Handover
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg border border-[var(--color-neutral-200)] shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-prestige-charcoal)]/10 text-[var(--color-prestige-charcoal)] flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-prestige-gold)] block">
                  Category 02
                </span>
                <h3 className="text-lg font-medium text-[var(--color-prestige-charcoal)]">
                  Commercial Leasing Overview
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-neutral-600)] leading-relaxed font-light mb-4">
              Focuses on long-term business tenure, signage rights, CAM allocations, power load capacities, and statutory municipal business licensing.
            </p>
            <div className="text-[11px] font-mono text-[var(--color-neutral-500)] bg-[var(--color-neutral-50)] p-3 rounded border border-[var(--color-neutral-200)]/60">
              Key Focus: Fit-Out Window · CAM &amp; GST Structures · Multi-Year Lock-In
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white rounded-lg border border-[var(--color-neutral-200)] overflow-hidden shadow-sm">
          <div className="grid grid-cols-12 bg-[var(--color-prestige-charcoal)] text-white text-xs font-semibold uppercase tracking-wider py-4 px-6 border-b border-[var(--color-neutral-800)]">
            <div className="col-span-12 md:col-span-3">Key Legal &amp; Financial Dimension</div>
            <div className="hidden md:block md:col-span-4 text-[var(--color-prestige-gold)]">
              Residential Rentals
            </div>
            <div className="hidden md:block md:col-span-5 text-[var(--color-neutral-200)]">
              Commercial Leases
            </div>
          </div>

          <div className="divide-y divide-[var(--color-neutral-200)]/80">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={row.dimension}
                className={`grid grid-cols-12 py-5 px-6 gap-4 items-start ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-[var(--color-neutral-50)]/50'
                }`}
              >
                {/* Dimension Name */}
                <div className="col-span-12 md:col-span-3">
                  <span className="text-xs sm:text-sm font-semibold text-[var(--color-prestige-charcoal)] block">
                    {row.dimension}
                  </span>
                </div>

                {/* Residential Value */}
                <div className="col-span-12 md:col-span-4">
                  <span className="md:hidden text-[10px] uppercase font-bold text-[var(--color-prestige-gold)] block mb-1">
                    Residential:
                  </span>
                  <p className="text-xs sm:text-sm text-[var(--color-neutral-700)] leading-relaxed font-light">
                    {row.residential}
                  </p>
                </div>

                {/* Commercial Value */}
                <div className="col-span-12 md:col-span-5">
                  <span className="md:hidden text-[10px] uppercase font-bold text-[var(--color-neutral-500)] block mb-1">
                    Commercial:
                  </span>
                  <p className="text-xs sm:text-sm text-[var(--color-neutral-700)] leading-relaxed font-light">
                    {row.commercial}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Advisory Footer */}
          <div className="p-6 bg-[var(--color-neutral-100)] border-t border-[var(--color-neutral-200)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[var(--color-prestige-gold)] shrink-0" />
              <p className="text-xs text-[var(--color-neutral-600)] font-light">
                Sai Prestige provides comprehensive agreement drafting, government registration coordination, and biometric scheduling for both categories.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-prestige-charcoal)] hover:text-[var(--color-prestige-gold)] transition-colors shrink-0"
            >
              <span>Consult Our Leasing Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

