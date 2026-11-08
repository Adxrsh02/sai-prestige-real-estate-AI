import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const DirectContactCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 sm:mb-16">
      {/* Card A: Phone Direct Call */}
      <div className="relative rounded-xl border border-[var(--color-neutral-200)]/90 bg-white p-6 sm:p-8 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-premium-sm)] hover:border-[var(--color-prestige-gold)]/60 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-lg bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-prestige-gold)] group-hover:text-white transition-colors duration-200">
            <Phone className="w-5 h-5" />
          </div>

          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[var(--color-prestige-gold)] block mb-1.5">
            Direct Line
          </span>

          <h3 className="text-xl sm:text-2xl font-light text-[var(--color-prestige-charcoal)] tracking-tight mb-2.5">
            Call Our Team
          </h3>

          <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed mb-6">
            Prefer speaking directly? Call SAI PRESTIGE to discuss your property requirements.
          </p>
        </div>

        <div>
          <Button
            href="tel:+919326433965"
            variant="primary"
            size="md"
            fullWidth
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="tracking-wide font-semibold text-xs uppercase"
          >
            Call +91 93264 33965
          </Button>
        </div>
      </div>

      {/* Card B: WhatsApp Chat */}
      <div className="relative rounded-xl border border-[var(--color-neutral-200)]/90 bg-white p-6 sm:p-8 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-premium-sm)] hover:border-[#25D366]/60 transition-all duration-300 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-5 group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-200">
            <MessageCircle className="w-5 h-5" />
          </div>

          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#25D366] block mb-1.5">
            Instant Messaging
          </span>

          <h3 className="text-xl sm:text-2xl font-light text-[var(--color-prestige-charcoal)] tracking-tight mb-2.5">
            Chat on WhatsApp
          </h3>

          <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed mb-6">
            Have a property requirement or a quick question? Connect with SAI PRESTIGE on WhatsApp.
          </p>
        </div>

        <div>
          <Button
            href="https://wa.me/919326433965?text=Hello%20SAI%20PRESTIGE%2C%20I%20would%20like%20to%20discuss%20my%20property%20requirements%20in%20Navi%20Mumbai."
            isExternal
            variant="secondary"
            size="md"
            fullWidth
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="tracking-wide font-semibold text-xs uppercase border-[var(--color-neutral-300)] hover:border-[var(--color-prestige-charcoal)]"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};
