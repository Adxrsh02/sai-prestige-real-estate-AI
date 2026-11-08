import type { Metadata } from 'next';
import Script from 'next/script';
import { inter, plusJakartaSans } from '@/lib/fonts';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipToContent } from '@/components/ui/SkipToContent';
import { FloatingContactWidget } from '@/components/ui/FloatingContactWidget';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { constructMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/constants';
import './globals.css';

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateAgent',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.contact.address,
          addressLocality: siteConfig.contact.city,
          addressRegion: siteConfig.contact.state,
          addressCountry: siteConfig.contact.country,
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Navi Mumbai',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                    send_page_view: true
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-[var(--color-prestige-white)] text-[var(--color-prestige-charcoal)]">
        <SmoothScrollProvider>
          <SkipToContent />
          <Header />
          <main id="main-content" className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          {/* Global floating contact widget — phone & WhatsApp quick-access */}
          <FloatingContactWidget />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
