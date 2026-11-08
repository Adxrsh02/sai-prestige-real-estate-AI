import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

const ABOUT_HERO_IMAGE =
  'https://res.cloudinary.com/qlxaljlj/image/upload/v1793427699/sai_about_us_page.jpg';

export const AboutHero: React.FC = () => {
  return (
    <Section variant="white" spacing="none" className="pt-3 sm:pt-4 md:pt-5 pb-14 md:pb-20 lg:pb-24">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Message & H1 */}
          <div className="lg:col-span-7">
            <span className="inline-block text-xs uppercase font-medium tracking-[0.24em] text-[var(--color-prestige-gold)] mb-4">
              About SAI PRESTIGE
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl/tight font-light tracking-tight text-[var(--color-prestige-charcoal)]">
              Real Estate Decisions <span className="font-normal">Begin With Trust.</span>
            </h1>

            <div className="w-16 h-[2px] bg-[var(--color-prestige-gold)] my-6 sm:my-8" aria-hidden="true" />

            <p className="text-base sm:text-lg leading-relaxed text-[var(--color-neutral-600)] max-w-2xl">
              At SAI PRESTIGE, successful property transactions begin with understanding the buyer.
              We believe in clear communication, genuine relationships, and identifying the right
              property for every client&apos;s needs. From the first conversation to the final deal,
              every interaction should build confidence and help buyers make informed decisions.
            </p>
          </div>

          {/* Right Column: Hero Image Frame */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none rounded-xl sm:rounded-2xl overflow-hidden border border-[var(--color-neutral-200)]/80 bg-[var(--color-neutral-50)] shadow-[var(--shadow-premium-md)]">
              <Image
                src={ABOUT_HERO_IMAGE}
                alt="SAI PRESTIGE — Real Estate Consultancy in Navi Mumbai"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
