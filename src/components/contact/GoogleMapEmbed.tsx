'use client';

import React, { useState } from 'react';
import { MapPin, Navigation2, ExternalLink } from 'lucide-react';

interface GoogleMapEmbedProps {
  className?: string;
}

export const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({ className = '' }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const officeQuery = encodeURIComponent(
    'Dream Heritage Sector 17 Ulwe Navi Mumbai Maharashtra 410206'
  );

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Use Google Maps Embed API if API key exists, otherwise use standard query embed
  const embedUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${officeQuery}&zoom=16`
    : `https://maps.google.com/maps?q=${officeQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${officeQuery}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${officeQuery}`;

  return (
    <div className={`relative rounded-xl overflow-hidden border border-[var(--color-neutral-200)] bg-[var(--color-neutral-100)] ${className}`}>
      {/* Loading Skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[var(--color-neutral-50)] text-[var(--color-neutral-500)] p-4 text-center">
          <div className="w-8 h-8 rounded-full border-2 border-[var(--color-prestige-gold)] border-t-transparent animate-spin mb-3" />
          <span className="text-xs uppercase tracking-wider font-medium text-[var(--color-neutral-600)]">
            Loading Office Location Map...
          </span>
        </div>
      )}

      {/* Fallback Display if Iframe fails */}
      {hasError ? (
        <div className="p-8 flex flex-col items-center justify-center text-center bg-[var(--color-neutral-50)] min-h-[300px]">
          <div className="w-12 h-12 rounded-full bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold)] flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6" />
          </div>
          <h4 className="font-heading text-base font-medium text-[var(--color-prestige-charcoal)] mb-1">
            Office Location in Ulwe, Navi Mumbai
          </h4>
          <p className="text-xs text-[var(--color-neutral-600)] max-w-sm mb-5 leading-relaxed">
            Shop No. 03, Plot No. 172, Dream Heritage, Sector 17, Ulwe, Navi Mumbai 410206 (Opposite
            Ramsheth Thakur International Sports Complex).
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-[var(--color-prestige-gold)] text-white hover:bg-[var(--color-prestige-gold-dark)] transition-colors"
            >
              <Navigation2 className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
            <a
              href={externalMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-white border border-[var(--color-neutral-300)] text-[var(--color-prestige-charcoal)] hover:bg-neutral-50 transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[350px]">
          <iframe
            title="SAI PRESTIGE Office Location Map - Dream Heritage Ulwe"
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
            className="w-full h-full grayscale-[15%] contrast-[105%]"
          />

          {/* Quick Action Overlay Strip */}
          <div className="absolute bottom-3 left-3 right-3 z-20 flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-white/95 backdrop-blur-sm border border-[var(--color-neutral-200)] shadow-[var(--shadow-premium-sm)]">
            <div className="flex items-center gap-2 text-xs text-[var(--color-prestige-charcoal)] font-medium truncate">
              <MapPin className="w-3.5 h-3.5 text-[var(--color-prestige-gold)] shrink-0" />
              <span className="truncate">Sector 17, Ulwe, Navi Mumbai</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded bg-[var(--color-prestige-gold)] text-white hover:bg-[var(--color-prestige-gold-dark)] transition-colors"
              >
                <Navigation2 className="w-3 h-3" />
                <span>Directions</span>
              </a>
              <a
                href={externalMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-[var(--color-neutral-600)] hover:text-[var(--color-prestige-charcoal)] transition-colors"
                title="Open in Google Maps"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
