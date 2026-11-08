/**
 * Google Analytics 4 (GA4) Client-Side Utilities
 * ───────────────────────────────────────────────
 * Provides privacy-compliant, type-safe event tracking.
 * Respects user privacy: NEVER passes PII (names, phone numbers, email addresses).
 * Only fires when NEXT_PUBLIC_GA_MEASUREMENT_ID is defined and window.gtag is available.
 */

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetIdOrEventName: string | Date,
      eventParams?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

/**
 * Checks if GA4 is active in the current client runtime.
 */
export function isAnalyticsActive(): boolean {
  return typeof window !== 'undefined' && Boolean(GA_MEASUREMENT_ID) && typeof window.gtag === 'function';
}

/**
 * Records a page view in Google Analytics.
 */
export function trackPageView(url: string): void {
  if (!isAnalyticsActive() || !GA_MEASUREMENT_ID) return;
  try {
    window.gtag!('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  } catch (err) {
    console.warn('[GA4 PageView Notice]:', err);
  }
}

/**
 * Dispatches a generic telemetry event.
 */
export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
): void {
  if (!isAnalyticsActive()) return;
  try {
    window.gtag!('event', eventName, params);
  } catch (err) {
    console.warn('[GA4 Event Notice]:', err);
  }
}

/**
 * Dispatches a verified Lead Generation Conversion event upon genuine contact form success.
 * Crucial: Excludes all Personally Identifiable Information (PII).
 */
export function trackEnquiryConversion(requirement?: string): void {
  if (!isAnalyticsActive()) return;
  try {
    window.gtag!('event', 'generate_lead', {
      event_category: 'engagement',
      event_label: requirement || 'General Property Enquiry',
      value: 1,
    });
  } catch (err) {
    console.warn('[GA4 Conversion Notice]:', err);
  }
}

