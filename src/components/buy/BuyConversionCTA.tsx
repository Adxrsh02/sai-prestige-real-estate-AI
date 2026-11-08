import React from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

export const BuyConversionCTA: React.FC = () => {
  return (
    <Section
      variant="white"
      spacing="none"
      className="py-16 md:py-24 lg:py-28 bg-white"
      id="buy-enquiry"
    >
      <Container size="wide">
        {/* Editorial Luxury Acquisition Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-prestige-deep)] via-[#26201b] to-[var(--color-prestige-charcoal)] text-white p-8 sm:p-12 lg:p-16 shadow-[var(--shadow-premium-lg)] border border-[var(--color-neutral-800)]">
          {/* Subtle architectural grid watermark lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.03] pointer-events-none" />

          {/* Champagne gold corner ambient flare */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[var(--color-prestige-gold)]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wider text-[var(--color-prestige-gold-light)] uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Personalized Real Estate Advisory</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-light tracking-tight leading-[1.2] text-white">
              Ready to Secure Your Ideal Property in{' '}
              <span className="font-normal text-[var(--color-prestige-gold-light)] block sm:inline">
                Navi Mumbai?
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl">
              Whether you are acquiring a home for your family, expanding commercial operations, or
              evaluating long-term assets, our senior advisors are ready to share verified options,
              unvarnished legal diligence, and private site visit coordination.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button
                href="/contact"
                variant="primary"
                size="xl"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="bg-[var(--color-prestige-gold)] text-black hover:bg-[var(--color-prestige-gold-light)] font-semibold shadow-md"
              >
                Schedule Private Consultation
              </Button>
              <Button
                href="/properties"
                variant="outline"
                size="xl"
                className="border-white/30 text-white hover:bg-white hover:text-black font-semibold"
              >
                Explore Curated Inventory
              </Button>
            </div>

            {/* Direct Quick Contact Strip */}
            <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-400">
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 hover:text-[var(--color-prestige-gold-light)] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[var(--color-prestige-gold)]" />
                  <span>Call Us: <strong className="text-white">{siteConfig.contact.phone}</strong></span>
                </a>
                <a
                  href="https://wa.me/919326433965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[var(--color-prestige-gold-light)] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp: <strong className="text-white">{siteConfig.contact.phone}</strong></span>
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-[var(--color-prestige-gold)] shrink-0" />
                <span>Sector 17, Ulwe, Navi Mumbai &bull; Maharashtra</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

