import React from 'react';
import { UserCheck, MessageSquareText, Compass } from 'lucide-react';

export const TrustPrinciples: React.FC = () => {
  const principles = [
    {
      icon: UserCheck,
      title: 'Buyer-Focused Guidance',
      description: 'We begin by understanding your property requirements and long-term priorities.',
    },
    {
      icon: MessageSquareText,
      title: 'Clear Communication',
      description: 'We aim to make property discussions, pricing, and next steps transparent and easy to evaluate.',
    },
    {
      icon: Compass,
      title: 'Informed Decisions',
      description: 'We help you explore relevant options with practical local insights and due diligence.',
    },
  ];

  return (
    <div className="mb-14 sm:mb-20">
      <div className="p-6 sm:p-8 rounded-xl bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)]/80">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-prestige-gold)] block mb-1.5">
            Our Fiduciary Approach
          </span>
          <h2 className="text-xl sm:text-2xl font-light text-[var(--color-prestige-charcoal)] tracking-tight">
            Consultations Built on Clarity and Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex flex-col items-start sm:items-center text-left sm:text-center">
                <div className="w-10 h-10 rounded-lg bg-white border border-[var(--color-neutral-200)] shadow-[var(--shadow-subtle)] text-[var(--color-prestige-gold)] flex items-center justify-center mb-3.5">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-prestige-charcoal)] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--color-neutral-600)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
