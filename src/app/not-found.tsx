import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { siteConfig } from '@/lib/constants';
import { Compass, Building2, Home, MapPin, Phone, MessageSquare, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <Section spacing="spacious" className="flex-1 flex items-center justify-center min-h-[70vh] bg-white">
      <Container size="default" className="text-center py-12">
        {/* Luxury Architectural Monogram Badge */}
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold)] border border-[var(--color-prestige-gold)]/20 shadow-sm">
          <Compass className="w-8 h-8" />
        </div>

        <Badge variant="gold" size="sm" className="mb-4 uppercase tracking-[0.2em] font-semibold">
          Error 404 • Destination Not Found
        </Badge>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[var(--color-prestige-charcoal)] mb-4 font-display">
          Page or Property Unavailable
        </h1>

        <p className="text-base sm:text-lg text-[var(--color-neutral-600)] max-w-xl mx-auto mb-10 leading-relaxed font-sans">
          The property listing, publication, or page you requested could not be located. It may have been updated, archived, or transitioned within our portfolio.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button href="/" variant="primary" size="lg">
            Return to Homepage
          </Button>
          <Button href="/properties" variant="secondary" size="lg">
            Explore Portfolio
          </Button>
        </div>

        {/* Quick Recovery Pathways */}
        <div className="border-t border-[var(--color-neutral-200)]/80 pt-10 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-neutral-400)] font-semibold mb-6">
            Recommended Portals
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <Link
              href="/buy"
              className="p-4 rounded-lg border border-[var(--color-neutral-200)] hover:border-[var(--color-prestige-gold)]/40 hover:bg-[var(--color-neutral-50)] transition-all group"
            >
              <div className="flex items-center gap-2 mb-1">
                <Home className="w-4 h-4 text-[var(--color-prestige-gold)]" />
                <span className="text-sm font-semibold text-[var(--color-prestige-charcoal)] group-hover:text-[var(--color-prestige-gold)] transition-colors">
                  Buy
                </span>
              </div>
              <p className="text-xs text-[var(--color-neutral-500)] line-clamp-1">
                Luxury residences
              </p>
            </Link>

            <Link
              href="/rent"
              className="p-4 rounded-lg border border-[var(--color-neutral-200)] hover:border-[var(--color-prestige-gold)]/40 hover:bg-[var(--color-neutral-50)] transition-all group"
            >
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-4 h-4 text-[var(--color-prestige-gold)]" />
                <span className="text-sm font-semibold text-[var(--color-prestige-charcoal)] group-hover:text-[var(--color-prestige-gold)] transition-colors">
                  Rent
                </span>
              </div>
              <p className="text-xs text-[var(--color-neutral-500)] line-clamp-1">
                Prime rental estates
              </p>
            </Link>

            <Link
              href="/locations"
              className="p-4 rounded-lg border border-[var(--color-neutral-200)] hover:border-[var(--color-prestige-gold)]/40 hover:bg-[var(--color-neutral-50)] transition-all group"
            >
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-[var(--color-prestige-gold)]" />
                <span className="text-sm font-semibold text-[var(--color-prestige-charcoal)] group-hover:text-[var(--color-prestige-gold)] transition-colors">
                  Locations
                </span>
              </div>
              <p className="text-xs text-[var(--color-neutral-500)] line-clamp-1">
                Navi Mumbai nodes
              </p>
            </Link>

            <Link
              href="/contact"
              className="p-4 rounded-lg border border-[var(--color-neutral-200)] hover:border-[var(--color-prestige-gold)]/40 hover:bg-[var(--color-neutral-50)] transition-all group"
            >
              <div className="flex items-center gap-2 mb-1">
                <MessageSquare className="w-4 h-4 text-[var(--color-prestige-gold)]" />
                <span className="text-sm font-semibold text-[var(--color-prestige-charcoal)] group-hover:text-[var(--color-prestige-gold)] transition-colors">
                  Advisory
                </span>
              </div>
              <p className="text-xs text-[var(--color-neutral-500)] line-clamp-1">
                Private consultation
              </p>
            </Link>
          </div>

          {/* Direct Assistance Contact Bar */}
          <div className="mt-8 pt-6 border-t border-[var(--color-neutral-100)] flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-neutral-600)]">
            <span className="font-medium text-[var(--color-neutral-500)]">Direct Concierge Assistance:</span>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 text-[var(--color-prestige-charcoal)] hover:text-[var(--color-prestige-gold)] font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-[var(--color-prestige-gold)]" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <span className="text-[var(--color-neutral-300)] hidden sm:inline">•</span>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--color-prestige-charcoal)] hover:text-[var(--color-prestige-gold)] font-medium transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
