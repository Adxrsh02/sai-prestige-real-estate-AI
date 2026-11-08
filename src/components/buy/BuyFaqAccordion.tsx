'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BuyFaqItem {
  question: string;
  answer: string;
  category: string;
}

const BUY_FAQS: BuyFaqItem[] = [
  {
    category: 'LEGAL & DOCUMENTATION',
    question: 'What essential legal documents should I inspect before buying property in Navi Mumbai?',
    answer:
      'For newly constructed developments in Maharashtra, verify the MahaRERA registration number, sanctioned building plans, Commencement Certificate (CC), and Occupancy Certificate (OC) for completed projects. For resale properties, inspect the registered Agreement for Sale, Chain of Title documents going back at least 30 years, CIDCO Final Order/Conveyance or tripartite agreement, latest property tax receipts, society No-Objection Certificate (NOC), and non-encumbrance certificate from the Sub-Registrar office. Sai Prestige assists clients in assembling document checklists and coordinating with certified legal title search experts.',
  },
  {
    category: 'ADVISORY & CHARGES',
    question: 'Does Sai Prestige charge consultation fees to homebuyers for property shortlisting?',
    answer:
      'No. Our initial consultation, property requirement mapping, and project site visits for new builder developments are provided at zero advisory charge to buyers. We believe in building long-term fiduciary relationships. For specialized resale property transactions or dedicated title coordination, standard professional brokerage terms are communicated with 100% upfront transparency prior to any engagement.',
  },
  {
    category: 'NRI PROPERTY ACQUISITION',
    question: 'Can Non-Resident Indians (NRIs) buy residential or commercial properties in Navi Mumbai through Sai Prestige?',
    answer:
      'Yes. NRIs and Persons of Indian Origin (PIOs) can freely acquire residential and commercial properties in India under Reserve Bank of India (RBI) general permissions. Payments can be routed through standard NRE/NRO banking channels. Sai Prestige routinely provides end-to-end remote coordination for NRI clients across the Gulf and overseas—including curated video walkthroughs, digital allotment paperwork, Power of Attorney (POA) review assistance, and registered agreement scheduling.',
  },
  {
    category: 'LOCALITY SELECTION',
    question: 'How do I decide between buying in Ulwe versus established nodes like Sanpada or Vashi?',
    answer:
      'Your choice depends on budget, possession horizons, and commuting patterns. Vashi and Sanpada are mature, established central nodes offering walkable social infrastructure, premier commercial hubs, and ready-to-move cooperative societies at established price points. Ulwe is an infrastructurally accelerated growth corridor directly connected to South Mumbai via the Atal Setu (MTHL) and minutes from the upcoming airport, making it compelling for modern planned layouts, younger families, and attractive capital-entry budgets. We help you objectively evaluate your family’s daily priorities.',
  },
  {
    category: 'INFRASTRUCTURE IMPACT',
    question: 'What is the impact of the Atal Setu (MTHL) and Navi Mumbai International Airport (NMIA) on property buyers?',
    answer:
      'The operational Atal Setu has compressed travel time between South Mumbai (Sewri) and Navi Mumbai (Chirle/Ulwe) to under 25 minutes. Coupled with the advancing Navi Mumbai International Airport, Coastal Road corridors, and expanded suburban rail lines, Southern Navi Mumbai nodes like Ulwe and Pushpak Nagar have transformed from distant suburbs into highly accessible transit corridors. However, property decisions should always be grounded in current livability, verified occupancy status, and realistic holding timelines rather than speculative assumptions.',
  },
  {
    category: 'FINANCIAL PLANNING',
    question: 'What additional costs must I budget for beyond the property agreement value in Maharashtra?',
    answer:
      'In Maharashtra, buyers must budget for: 1) Stamp Duty (typically 6% to 7% of agreement or market value depending on municipal limits and local surcharges, with a 1% concession for women buyers on residential purchases); 2) Registration Fee (1% of property value or capped at ₹30,000 for properties above ₹30 Lakhs); 3) GST (1% for affordable under-construction housing, 5% for standard under-construction housing; zero GST on ready-to-move properties with an OC); and 4) Society corpus/transfer charges and advance maintenance dues.',
  },
  {
    category: 'HOME LOANS & BANKING',
    question: 'Does Sai Prestige assist with home loan sanctions and bank eligibility verification?',
    answer:
      'Yes. We coordinate with major nationalized and private banking institutions (including SBI, HDFC Bank, ICICI Bank, and Bank of Baroda) to help you verify project approvals (APF codes), calculate optimal loan-to-value ratios, and streamline documentation for swift home loan sanctions with competitive interest rates.',
  },
  {
    category: 'SITE VISITS & DUE DILIGENCE',
    question: 'How does the property site visit and shortlisting process work with your team?',
    answer:
      'After an initial requirement discussion, your dedicated property advisor prepares a curated portfolio of 3 to 5 vetted properties that strictly match your parameters. We schedule accompanied, private site visits at your convenience, providing unvarnished insights into carpet area efficiency, ventilation, sunlight, builder track record, society maintenance history, and local neighborhood amenities.',
  },
];

export const BuyFaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <Section
      variant="neutral"
      spacing="none"
      className="py-16 md:py-24 lg:py-28 bg-[var(--color-neutral-50)] border-b border-[var(--color-neutral-200)]/70"
      id="buy-faqs"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-prestige-gold)]">
              BUYER GUIDANCE &amp; CLARITY
            </span>
            <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-[1.2]">
            Frequently Asked <span className="font-normal block sm:inline">Questions.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--color-neutral-600)] font-light leading-relaxed">
            Essential facts, statutory regulations, and practical guidance for purchasing residential
            and commercial property in Navi Mumbai.
          </p>
        </div>

        {/* ── Accordion List ───────────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-3.5">
          {BUY_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const id = `buy-faq-${idx}`;

            return (
              <div
                key={idx}
                className={cn(
                  'rounded-xl border transition-all duration-200 bg-white overflow-hidden',
                  isOpen
                    ? 'border-[var(--color-prestige-gold)] shadow-[var(--shadow-premium-sm)] ring-1 ring-[var(--color-prestige-gold)]/20'
                    : 'border-[var(--color-neutral-200)] hover:border-[var(--color-neutral-300)] hover:shadow-xs'
                )}
              >
                <button
                  type="button"
                  id={`${id}-header`}
                  aria-expanded={isOpen}
                  aria-controls={`${id}-panel`}
                  onClick={() => toggle(idx)}
                  className="w-full py-4.5 px-5 sm:px-7 flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)] rounded-xl"
                >
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 min-w-0">
                    <span
                      className={cn(
                        'text-xs font-mono font-bold px-2 py-0.5 rounded-md tracking-wider shrink-0 transition-colors mt-0.5 sm:mt-0',
                        isOpen
                          ? 'bg-[var(--color-prestige-gold)] text-white'
                          : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-500)] group-hover:bg-[var(--color-prestige-gold)]/15 group-hover:text-[var(--color-prestige-gold-dark)]'
                      )}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base sm:text-[17px] font-bold text-[var(--color-prestige-charcoal)] group-hover:text-[var(--color-prestige-gold-dark)] transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200',
                      isOpen
                        ? 'bg-[var(--color-prestige-gold)] text-white rotate-180 shadow-xs'
                        : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-400)] group-hover:bg-[var(--color-prestige-gold)]/15 group-hover:text-[var(--color-prestige-gold-dark)]'
                    )}
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`${id}-panel`}
                    role="region"
                    aria-labelledby={`${id}-header`}
                    className="px-5 sm:px-7 pb-6 pt-3 border-t border-[var(--color-neutral-100)] bg-[var(--color-neutral-50)]/70 animate-in fade-in duration-200"
                  >
                    <p className="font-light text-sm sm:text-[15px] text-[var(--color-neutral-700)] leading-relaxed sm:pl-10">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Further Questions Help Strip */}
        <div className="mt-12 text-center text-xs text-[var(--color-neutral-500)]">
          <span>Have specific legal, loan, or project due diligence questions? </span>
          <a
            href="/contact"
            className="font-semibold text-[var(--color-prestige-gold-dark)] hover:underline ml-1"
          >
            Connect directly with our senior property consultant &rarr;
          </a>
        </div>
      </Container>
    </Section>
  );
};

