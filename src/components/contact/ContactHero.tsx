import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

export const ContactHero: React.FC = () => {
  return (
    <Section variant="white" spacing="compact" className="pt-8 sm:pt-12 md:pt-16 pb-6 md:pb-8">
      <Container size="default">
        <div className="max-w-3xl">
          <span className="inline-block text-xs uppercase font-medium tracking-[0.24em] text-[var(--color-prestige-gold)] mb-4">
            Let&apos;s Start a Conversation
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-tight">
            Let&apos;s Talk About Your <span className="font-normal">Property Goals.</span>
          </h1>

          <div className="w-16 h-[2px] bg-[var(--color-prestige-gold)] my-5 sm:my-6" aria-hidden="true" />

          <p className="text-base sm:text-lg leading-relaxed text-[var(--color-neutral-600)] max-w-2xl">
            Looking to buy, rent, or explore property opportunities in Navi Mumbai? Connect with SAI PRESTIGE
            for a conversation focused on your requirements, clear communication, and informed property decisions.
          </p>
        </div>
      </Container>
    </Section>
  );
};
