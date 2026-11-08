'use client';

import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

/** SAI PRESTIGE contact details */
const PHONE_NUMBER = '+91 93264 33965';
const PHONE_HREF = 'tel:+919326433965';
const WHATSAPP_HREF = 'https://wa.me/919326433965';

/** WhatsApp SVG icon — official brand mark, no external dep needed */
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.887.52 3.653 1.424 5.169L2.05 21.95l4.896-1.366A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2zm0 18.35a8.334 8.334 0 01-4.291-1.185l-.308-.183-3.167.883.884-3.082-.2-.316A8.35 8.35 0 013.65 12c0-4.605 3.745-8.35 8.35-8.35 4.604 0 8.35 3.745 8.35 8.35 0 4.604-3.746 8.35-8.35 8.35z" />
  </svg>
);

/**
 * FloatingContactWidget
 * ─────────────────────
 * Premium fixed-position contact widget anchored to the bottom-right corner.
 * Displays:
 *   1. A gold pill-shaped phone CTA showing the full number (desktop) / icon-only (mobile).
 *   2. A WhatsApp circular button.
 * Both animate in after a 1.2 s page-load delay, so they don't compete with LCP.
 */
export const FloatingContactWidget: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Defer widget appearance — avoids competing with page LCP paint
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-label="Quick contact"
      className={cn(
        // Fixed position — bottom-right safe area
        'fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3',
        // Entrance animation
        'transition-all duration-500',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      {/* ── 1. Phone CTA ──────────────────────────────────────────────── */}
      <a
        href={PHONE_HREF}
        aria-label={`Call SAI PRESTIGE at ${PHONE_NUMBER}`}
        className={cn(
          // Layout
          'group flex items-center gap-2.5 h-[46px]',
          // On mobile: icon-only circle; on sm+: full pill with number
          'w-[46px] sm:w-auto sm:px-5 rounded-full overflow-hidden',
          // Gold gradient surface
          'bg-[linear-gradient(135deg,var(--color-prestige-gold-light)_0%,var(--color-prestige-gold)_55%,var(--color-prestige-gold-dark)_100%)]',
          // Premium depth shadow with gold tint
          'shadow-[0_4px_20px_rgba(188,154,79,0.45),0_1px_3px_rgba(0,0,0,0.12)]',
          // Focus ring
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)] focus-visible:ring-offset-2',
          // Hover
          'hover:shadow-[0_6px_28px_rgba(188,154,79,0.60),0_2px_6px_rgba(0,0,0,0.16)]',
          'hover:scale-[1.04] active:scale-[0.98]',
          'transition-all duration-200 ease-out'
        )}
      >
        {/* Phone icon — always visible */}
        <span className="flex items-center justify-center shrink-0 w-5 h-5 sm:ml-0 mx-auto sm:mx-0">
          <Phone className="w-[18px] h-[18px] text-white" strokeWidth={2.2} />
        </span>

        {/* Phone number — hidden on mobile, shown sm+ */}
        <span className="hidden sm:inline-flex flex-col leading-tight mr-0.5">
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/75 leading-none mb-0.5">
            Call Us
          </span>
          <span className="text-[13px] font-bold tracking-[0.04em] text-white whitespace-nowrap">
            {PHONE_NUMBER}
          </span>
        </span>
      </a>

      {/* ── 2. WhatsApp Button ─────────────────────────────────────────── */}
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with SAI PRESTIGE on WhatsApp at ${PHONE_NUMBER}`}
        className={cn(
          // Circle
          'flex items-center justify-center w-[46px] h-[46px] rounded-full',
          // WhatsApp green
          'bg-[#25D366]',
          // Depth shadow with green tint
          'shadow-[0_4px_20px_rgba(37,211,102,0.40),0_1px_3px_rgba(0,0,0,0.12)]',
          // Focus ring
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2',
          // Hover
          'hover:bg-[#20bc5a] hover:shadow-[0_6px_28px_rgba(37,211,102,0.55),0_2px_6px_rgba(0,0,0,0.16)]',
          'hover:scale-[1.08] active:scale-[0.96]',
          'transition-all duration-200 ease-out'
        )}
      >
        <WhatsAppIcon className="w-[22px] h-[22px] text-white" />
      </a>
    </div>
  );
};

