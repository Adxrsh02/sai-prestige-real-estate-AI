import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { Logo } from '@/components/ui/Logo';
import { BackToTopButton } from '@/components/ui/BackToTopButton';
import { footerNavigation, siteConfig } from '@/lib/constants';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer"
      className="bg-[var(--color-prestige-deep)] text-neutral-300 pt-16 md:pt-20 pb-10 border-t border-[var(--color-neutral-800)]"
    >
      <Container size="wide">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[var(--color-neutral-800)]">
          {/* Brand & Contact Column */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="dark" />

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="space-y-3 pt-2 text-sm text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--color-prestige-gold)] shrink-0 mt-1" />
                <span>
                  {siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.state}, {siteConfig.contact.country}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--color-prestige-gold)] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[var(--color-prestige-gold-light)] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--color-prestige-gold)] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[var(--color-prestige-gold-light)] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 1: Discovery */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4">
              Explore Properties
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.discovery.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--color-prestige-gold-light)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services & Finance */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4">
              Advisory & Finance
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--color-prestige-gold-light)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company & Trust */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4">
              The Firm
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--color-prestige-gold-light)] transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-prestige-gold)]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Social Media & Footer Utilities Section ───────────────────── */}
        <div className="py-7 border-b border-[var(--color-neutral-800)] flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social Media Channels */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-400">
              Connect With Us
            </span>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href={siteConfig.social.instagram || '#'}
                target={siteConfig.social.instagram ? '_blank' : undefined}
                rel={siteConfig.social.instagram ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-neutral-700/80 bg-neutral-900/60 text-neutral-300 hover:text-[var(--color-prestige-gold)] hover:border-[var(--color-prestige-gold)] hover:bg-[var(--color-prestige-gold)]/10 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)] shadow-xs"
                aria-label="Follow SAI PRESTIGE on Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={siteConfig.social.facebook || '#'}
                target={siteConfig.social.facebook ? '_blank' : undefined}
                rel={siteConfig.social.facebook ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-neutral-700/80 bg-neutral-900/60 text-neutral-300 hover:text-[var(--color-prestige-gold)] hover:border-[var(--color-prestige-gold)] hover:bg-[var(--color-prestige-gold)]/10 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)] shadow-xs"
                aria-label="Follow SAI PRESTIGE on Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.social.linkedin || '#'}
                target={siteConfig.social.linkedin ? '_blank' : undefined}
                rel={siteConfig.social.linkedin ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-neutral-700/80 bg-neutral-900/60 text-neutral-300 hover:text-[var(--color-prestige-gold)] hover:border-[var(--color-prestige-gold)] hover:bg-[var(--color-prestige-gold)]/10 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)] shadow-xs"
                aria-label="Connect with SAI PRESTIGE on LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href={siteConfig.social.twitter || '#'}
                target={siteConfig.social.twitter ? '_blank' : undefined}
                rel={siteConfig.social.twitter ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-neutral-700/80 bg-neutral-900/60 text-neutral-300 hover:text-[var(--color-prestige-gold)] hover:border-[var(--color-prestige-gold)] hover:bg-[var(--color-prestige-gold)]/10 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)] shadow-xs"
                aria-label="Follow SAI PRESTIGE on X"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Back-to-Top Button */}
          <BackToTopButton />
        </div>

        {/* Regulatory Disclaimer */}
        <div className="py-6 border-b border-[var(--color-neutral-800)] text-xs text-neutral-500 leading-relaxed">
          <p>
            Disclaimer: All property listings, project images, architectural representations, and details displayed on this website are for general guidance and informational purposes only. Customers are advised to verify all terms and statutory RERA registrations directly prior to finalizing any property transactions.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-neutral-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
