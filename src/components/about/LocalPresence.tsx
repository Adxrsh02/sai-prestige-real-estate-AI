import React from 'react';
import { MapPin } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

const serviceAreas = ['Ulwe', 'Sanpada', 'Vashi', 'Pushpak Nagar'];

export const LocalPresence: React.FC = () => {
  return (
    <Section variant="neutral" spacing="default" id="local-presence">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Local Focus & Service Areas */}
          <div className="lg:col-span-7">
            <span className="inline-block text-xs uppercase font-medium tracking-[0.24em] text-[var(--color-prestige-gold)] mb-3">
              Geographic Focus
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[var(--color-prestige-charcoal)]">
              Rooted in Navi Mumbai.{' '}
              <span className="font-normal">Focused on Your Property Goals.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-neutral-600)]">
              SAI PRESTIGE helps property buyers navigate their search with a buyer-focused
              approach, clear communication, and coordinated guidance across relevant real estate
              opportunities in Navi Mumbai.
            </p>

            {/* Service Areas */}
            <div className="mt-8 pt-6 border-t border-[var(--color-neutral-200)]/80">
              <span className="block text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-prestige-charcoal)] mb-3">
                Key Localities Served
              </span>
              <div className="flex flex-wrap gap-2.5">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium bg-white border border-[var(--color-neutral-200)] text-[var(--color-prestige-charcoal)] shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-prestige-gold)] mr-2" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Office Address Card */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-8 rounded-lg bg-white border border-[var(--color-neutral-200)]/80 shadow-[var(--shadow-subtle)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-[var(--color-prestige-gold)]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[var(--color-prestige-gold)]" />
                </div>
                <h3 className="text-sm uppercase tracking-[0.2em] font-medium text-[var(--color-prestige-charcoal)]">
                  Registered Office Address
                </h3>
              </div>

              <address className="not-italic text-sm leading-relaxed text-[var(--color-neutral-600)]">
                Shop No. 03, Plot No. 172, Dream Heritage, opposite Ramsheth Thakur International
                Sports Complex, Sector 17, Ulwe, Navi Mumbai, Maharashtra 410206, India.
              </address>

              <div className="mt-6 pt-4 border-t border-[var(--color-neutral-100)]">
                <p className="text-xs text-[var(--color-neutral-500)] italic">
                  Contact us to confirm service availability in your preferred area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
