'use client';

import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        params: {
          sitekey: string;
          theme?: 'light' | 'dark' | 'auto';
          size?: 'normal' | 'compact' | 'flexible';
          callback?: (token: string) => void;
          'error-callback'?: (error: unknown) => void;
          'expired-callback'?: () => void;
          'timeout-callback'?: () => void;
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onTurnstileScriptLoaded?: () => void;
  }
}

export interface TurnstileWidgetRef {
  reset: () => void;
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: (error: unknown) => void;
  siteKey?: string;
  className?: string;
  theme?: 'light' | 'dark' | 'auto';
}

const TURNSTILE_SCRIPT_ID = 'cf-turnstile-script';
const TURNSTILE_SCRIPT_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

export const TurnstileWidget = forwardRef<TurnstileWidgetRef, TurnstileWidgetProps>(
  ({ onVerify, onExpire, onError, siteKey, className = '', theme = 'light' }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const isRenderingRef = useRef(false);

    // Keep callbacks in refs to decouple lifecycle from parent component re-renders
    const onVerifyRef = useRef(onVerify);
    const onExpireRef = useRef(onExpire);
    const onErrorRef = useRef(onError);

    useEffect(() => {
      onVerifyRef.current = onVerify;
      onExpireRef.current = onExpire;
      onErrorRef.current = onError;
    });

    const [scriptReady, setScriptReady] = useState(false);
    const [loadError, setLoadError] = useState<string | null>(null);
    const [isWidgetActive, setIsWidgetActive] = useState(false);

    // Resolve effective site key
    const effectiveSiteKey =
      siteKey ||
      process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
      '1x00000000000000000000AA';

    // Imperative handle to reset challenge
    useImperativeHandle(ref, () => ({
      reset: () => {
        if (typeof window !== 'undefined' && window.turnstile && widgetIdRef.current) {
          try {
            window.turnstile.reset(widgetIdRef.current);
          } catch (e) {
            console.warn('[Cloudflare Turnstile Reset Notice]:', e);
          }
        }
      },
    }));

    // 1. Single-instance Script Loader
    useEffect(() => {
      if (typeof window === 'undefined') return;

      if (window.turnstile) {
        setScriptReady(true);
        return;
      }

      let script = document.getElementById(TURNSTILE_SCRIPT_ID) as HTMLScriptElement | null;

      const handleScriptLoad = () => {
        if (window.turnstile) {
          setScriptReady(true);
        } else {
          // Poll briefly in case turnstile object takes a tick to attach
          const checkTimer = setInterval(() => {
            if (window.turnstile) {
              setScriptReady(true);
              clearInterval(checkTimer);
            }
          }, 50);
          setTimeout(() => clearInterval(checkTimer), 3000);
        }
      };

      const handleScriptError = () => {
        const errorMsg = 'Failed to load Cloudflare Turnstile security script.';
        setLoadError(errorMsg);
        if (onErrorRef.current) onErrorRef.current(errorMsg);
      };

      if (!script) {
        script = document.createElement('script');
        script.id = TURNSTILE_SCRIPT_ID;
        script.src = TURNSTILE_SCRIPT_SRC;
        script.async = true;
        script.defer = true;
        script.onload = handleScriptLoad;
        script.onerror = handleScriptError;
        document.head.appendChild(script);
      } else {
        script.addEventListener('load', handleScriptLoad);
        script.addEventListener('error', handleScriptError);
        // If already in DOM and complete
        if (window.turnstile) {
          setScriptReady(true);
        }
      }

      return () => {
        if (script) {
          script.removeEventListener('load', handleScriptLoad);
          script.removeEventListener('error', handleScriptError);
        }
      };
    }, []);

    // 2. Safe Widget Rendering (Strict Mode and Re-render Protected)
    const renderWidget = useCallback(() => {
      if (
        !scriptReady ||
        !containerRef.current ||
        !window.turnstile ||
        widgetIdRef.current !== null ||
        isRenderingRef.current
      ) {
        return;
      }

      try {
        isRenderingRef.current = true;

        // Clean container of any stale markup
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
        }

        const widgetId = window.turnstile.render(containerRef.current, {
          sitekey: effectiveSiteKey,
          theme,
          size: 'normal',
          callback: (token: string) => {
            setIsWidgetActive(true);
            setLoadError(null);
            if (onVerifyRef.current) {
              onVerifyRef.current(token);
            }
          },
          'expired-callback': () => {
            setIsWidgetActive(false);
            if (onExpireRef.current) {
              onExpireRef.current();
            }
          },
          'timeout-callback': () => {
            setIsWidgetActive(false);
            if (onExpireRef.current) {
              onExpireRef.current();
            }
          },
          'error-callback': (err: unknown) => {
            console.warn('[Cloudflare Turnstile Error Callback]:', err);
            setIsWidgetActive(false);
            const errCode = String(err || '');
            let humanError = 'Security challenge error. Please refresh or retry.';
            if (errCode.includes('400020')) {
              humanError =
                'Cloudflare Turnstile Error 400020: Invalid sitekey or origin mismatch. Verify site key permissions for localhost.';
            } else if (errCode.includes('110200')) {
              humanError = 'Domain not allowed in Cloudflare Turnstile dashboard.';
            }
            setLoadError(humanError);
            if (onErrorRef.current) {
              onErrorRef.current(err);
            }
          },
        });

        widgetIdRef.current = widgetId;
        setIsWidgetActive(true);
      } catch (err) {
        console.error('[Cloudflare Turnstile Render Exception]:', err);
        setLoadError('Failed to initialize security verification.');
        if (onErrorRef.current) onErrorRef.current(err);
      } finally {
        isRenderingRef.current = false;
      }
    }, [scriptReady, effectiveSiteKey, theme]);

    useEffect(() => {
      renderWidget();

      return () => {
        if (widgetIdRef.current && window.turnstile) {
          try {
            window.turnstile.remove(widgetIdRef.current);
          } catch {
            // ignore removal errors during unmount
          }
          widgetIdRef.current = null;
        }
        setIsWidgetActive(false);
      };
    }, [renderWidget]);

    const handleRetry = () => {
      setLoadError(null);
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // ignore
        }
        widgetIdRef.current = null;
      }
      renderWidget();
    };

    return (
      <div className={`turnstile-wrapper flex flex-col justify-start my-2 min-h-[65px] ${className}`}>
        {/* Loading Spinner */}
        {!scriptReady && !loadError && (
          <div className="flex items-center gap-2 py-3 px-3.5 rounded-lg bg-[var(--color-neutral-50)]/60 border border-[var(--color-neutral-200)]/70 text-xs text-neutral-500 mb-2">
            <span className="w-3.5 h-3.5 border-2 border-neutral-300 border-t-[var(--color-prestige-gold)] rounded-full animate-spin shrink-0" />
            <span>Connecting to Cloudflare Turnstile security...</span>
          </div>
        )}

        {/* Error Fallback */}
        {loadError && (
          <div className="p-3 text-xs rounded-lg bg-red-50 text-red-700 border border-red-200 flex items-center justify-between mb-2">
            <span className="leading-snug">{loadError}</span>
            <button
              type="button"
              onClick={handleRetry}
              className="ml-3 font-semibold text-[var(--color-prestige-gold)] hover:underline shrink-0 cursor-pointer"
            >
              Retry
            </button>
          </div>
        )}

        {/* Turnstile Container Mount Target */}
        <div ref={containerRef} aria-label="Cloudflare Turnstile Security Verification" />
      </div>
    );
  }
);

TurnstileWidget.displayName = 'TurnstileWidget';
