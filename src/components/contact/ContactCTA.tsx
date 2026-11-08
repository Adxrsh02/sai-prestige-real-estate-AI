import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Phone, MessageCircle } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <Section variant="deep" spacing="compact" className="mt-16 sm:mt-24 border-t border-[var(--color-neutral-800)]">
      <Container size="default">
        <div className="max-w-3xl mx-auto text-center py-6 sm:py-8">
          <span className="inline-block text-xs uppercase font-medium tracking-[0.24em] text-[var(--color-prestige-gold-light)] mb-3">
            Start Your Advisory Journey
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white leading-tight">
            Your Next Property Conversation Starts Here.
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-300 max-w-xl mx-auto">
            Tell us what you are looking for, and connect with SAI PRESTIGE to discuss your property
            requirements with clarity and transparency.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="tel:+919326433965"
              variant="primary"
              size="lg"
              leftIcon={<Phone className="w-4 h-4" />}
              className="tracking-wide font-semibold text-xs uppercase w-full sm:w-auto"
            >
              Call Our Team
            </Button>
            <Button
              href="https://wa.me/919326433965?text=Hello%20SAI%20PRESTIGE%2C%20I%20would%20like%20to%20discuss%20my%20property%20requirements%20in%20Navi%20Mumbai."
              isExternal
              variant="outline"
              size="lg"
              leftIcon={<MessageCircle className="w-4 h-4" />}
              className="text-white border-white/30 hover:border-white hover:bg-white hover:text-[var(--color-prestige-deep)] tracking-wide font-semibold text-xs uppercase w-full sm:w-auto"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
