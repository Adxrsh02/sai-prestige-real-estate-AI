'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { testimonialsData, Testimonial } from '@/lib/testimonials-data';
import { ChevronLeft, ChevronRight, MapPin, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const AUTOPLAY_INTERVAL = 6000;

export const ClientTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const total = testimonialsData.length;

  // Detect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const timer = setTimeout(() => {
      setPrefersReducedMotion(mediaQuery.matches);
    }, 0);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener('change', handler);
    };
  }, []);

  const changeSlide = useCallback(
    (newIndex: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex((newIndex + total) % total);
      setTimeout(() => setIsTransitioning(false), 380);
    },
    [isTransitioning, total]
  );

  const handleNext = useCallback(() => {
    changeSlide(currentIndex + 1);
  }, [changeSlide, currentIndex]);

  const handlePrev = useCallback(() => {
    changeSlide(currentIndex - 1);
  }, [changeSlide, currentIndex]);

  // Autoplay loop
  useEffect(() => {
    if (isPaused || prefersReducedMotion || total <= 1) return;

    timerRef.current = setInterval(() => {
      handleNext();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, prefersReducedMotion, total, handleNext]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Horizontal swipe threshold > 45px and more horizontal than vertical
    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
    setIsPaused(false);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  const current: Testimonial = testimonialsData[currentIndex];

  return (
    <Section
      variant="white"
      spacing="none"
      className="py-16 md:py-20 lg:py-24 border-b border-[var(--color-neutral-200)]/70 bg-white"
      id="client-experiences"
      aria-label="Client Testimonials and Experiences"
    >
      <Container size="wide">
        {/* ── Section Header ─────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-prestige-gold)]">
                CLIENT EXPERIENCES
              </span>
              <span className="w-5 h-px bg-[var(--color-prestige-gold)]" aria-hidden="true" />
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-light tracking-tight text-[var(--color-prestige-charcoal)] leading-[1.22]">
              What Our Clients Say <span className="font-normal block sm:inline">About Us.</span>
            </h2>
          </div>

          {/* Supporting Description */}
          <div className="lg:max-w-md">
            <p className="text-sm sm:text-base text-[var(--color-neutral-600)] font-light leading-relaxed">
              Every successful property journey begins with trust. Discover the experiences of
              clients who have chosen Sai Prestige for their real estate decisions across Navi
              Mumbai.
            </p>
          </div>
        </div>

        {/* ── Carousel Stage (Tight, Balanced Max-Width Layout) ───────── */}
        <div
          className="relative group outline-none max-w-5xl mx-auto"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="What Our Clients Say About Us"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onKeyDown={handleKeyDown}
        >
          {/* Main Stage Grid: Balanced 2-Column Editorial Arrangement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* ── Left Side: Client Photography (20–25% Compact Landscape Frame) ─ */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden border border-[var(--color-neutral-200)]/90 bg-white p-2.5 sm:p-3 shadow-[var(--shadow-premium-md)] group/photo">
                {/* Inner Landscape-Ratio Frame */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[var(--color-neutral-100)]">
                  {!imageErrorMap[current.id] ? (
                    <div
                      key={current.id}
                      className={cn(
                        'relative w-full h-full transition-all duration-400 ease-out',
                        isTransitioning ? 'opacity-30 scale-[0.98]' : 'opacity-100 scale-100'
                      )}
                    >
                      <Image
                        src={current.image}
                        alt={`Client photograph of ${current.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 420px"
                        className="object-cover object-[center_20%] sm:object-center transition-transform duration-700 ease-out group-hover/photo:scale-105"
                        priority={currentIndex === 0}
                        onError={() =>
                          setImageErrorMap((prev) => ({ ...prev, [current.id]: true }))
                        }
                      />
                      {/* Subtle aesthetic gradient vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                    </div>
                  ) : (
                    /* Fallback Monogram Avatar if image fails */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-neutral-100)] to-[var(--color-neutral-200)] p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-[var(--color-prestige-gold)]/15 border border-[var(--color-prestige-gold)]/40 flex items-center justify-center mb-3">
                        <span className="font-heading text-xl font-bold text-[var(--color-prestige-gold)]">
                          {current.name.charAt(0)}
                        </span>
                      </div>
                      <span className="font-heading text-base font-bold text-[var(--color-prestige-charcoal)]">
                        {current.name}
                      </span>
                      <span className="text-xs text-[var(--color-neutral-500)] mt-0.5">
                        {current.location}
                      </span>
                    </div>
                  )}

                  {/* Floating Verified Client Pill */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
                    <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[var(--color-neutral-200)]/80 shadow-xs">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-prestige-charcoal)] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-prestige-gold)]" />
                        Verified Client
                      </span>
                    </div>
                    {current.category && (
                      <div className="bg-[var(--color-prestige-deep)]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shadow-xs">
                        <span className="text-[9px] uppercase tracking-wider font-semibold text-[var(--color-prestige-gold-light)]">
                          {current.category}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Side: Elevated Editorial Testimonial Card ─────────── */}
            <div className="lg:col-span-7">
              <div
                className={cn(
                  'relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 xl:p-10',
                  'bg-gradient-to-br from-[#FCFBF8] via-[#FAF9F5] to-[#F5F3EC]',
                  'border border-[var(--color-prestige-gold)]/25',
                  'shadow-[0_8px_30px_rgba(188,154,79,0.06),0_2px_8px_rgba(0,0,0,0.02)]',
                  'transition-all duration-400 ease-out flex flex-col justify-between overflow-hidden',
                  isTransitioning ? 'opacity-30 translate-x-2' : 'opacity-100 translate-x-0'
                )}
              >
                {/* Decorative Subtle Watermark Quotation */}
                <div
                  className="absolute -top-3 right-5 text-[var(--color-prestige-gold)]/[0.08] select-none pointer-events-none font-serif text-[110px] sm:text-[130px] leading-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                {/* Card Top: Gold Quotation Icon + Meta Header + Position Indicator */}
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[var(--color-prestige-gold)]/15">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-prestige-gold)]/12 border border-[var(--color-prestige-gold)]/30 flex items-center justify-center text-[var(--color-prestige-gold)] shadow-xs shrink-0">
                      <Quote className="w-5 h-5 rotate-180" strokeWidth={1.8} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-prestige-gold)] block leading-none">
                        Client Experience
                      </span>
                      <span className="text-[11px] text-[var(--color-neutral-500)] font-medium mt-1 block leading-none">
                        {current.category || 'Navi Mumbai Resident'}
                      </span>
                    </div>
                  </div>

                  {/* Refined Position Indicator 01 / 04 */}
                  <div className="flex items-center gap-1.5 font-mono text-xs tracking-wider bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-[var(--color-neutral-200)]/80 shadow-2xs">
                    <span className="text-[var(--color-prestige-gold)] font-bold text-sm">
                      0{currentIndex + 1}
                    </span>
                    <span className="text-[var(--color-neutral-400)] text-[10px]">/</span>
                    <span className="text-[var(--color-neutral-500)] font-medium text-xs">
                      0{total}
                    </span>
                  </div>
                </div>

                {/* Client Feedback Quote */}
                <blockquote className="relative z-10 my-5 sm:my-6">
                  <p className="font-heading text-base sm:text-lg lg:text-[1.18rem] font-light text-[var(--color-prestige-charcoal)] leading-[1.65] tracking-[-0.01em]">
                    &ldquo;{current.feedback}&rdquo;
                  </p>
                </blockquote>

                {/* Subtle Gold Accent Divider */}
                <div className="w-12 h-[2px] bg-gradient-to-r from-[var(--color-prestige-gold)] to-[var(--color-prestige-gold-light)] mb-4" />

                {/* Card Bottom: Client Info & Refined Circular Controls */}
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading text-base sm:text-lg font-bold text-[var(--color-prestige-charcoal)] tracking-tight">
                        {current.name}
                      </h3>
                      {current.category && (
                        <span className="inline-block px-2 py-0.5 rounded-full text-[9px] uppercase font-bold tracking-wider bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold-dark)] border border-[var(--color-prestige-gold)]/25">
                          {current.category}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-[var(--color-neutral-500)] font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-prestige-gold)] shrink-0" />
                      <span>{current.location}</span>
                    </div>
                  </div>

                  {/* Refined Circular Gold-Accented Controls */}
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className={cn(
                        'w-10 h-10 rounded-full border border-[var(--color-prestige-gold)]/35',
                        'bg-white text-[var(--color-prestige-charcoal)]',
                        'flex items-center justify-center shadow-xs',
                        'hover:bg-[var(--color-prestige-gold)] hover:border-[var(--color-prestige-gold)] hover:text-white',
                        'hover:shadow-[0_4px_14px_rgba(188,154,79,0.3)]',
                        'hover:scale-105 active:scale-95 transition-all duration-200',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)]'
                      )}
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className={cn(
                        'w-10 h-10 rounded-full border border-[var(--color-prestige-gold)]/35',
                        'bg-white text-[var(--color-prestige-charcoal)]',
                        'flex items-center justify-center shadow-xs',
                        'hover:bg-[var(--color-prestige-gold)] hover:border-[var(--color-prestige-gold)] hover:text-white',
                        'hover:shadow-[0_4px_14px_rgba(188,154,79,0.3)]',
                        'hover:scale-105 active:scale-95 transition-all duration-200',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)]'
                      )}
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Refined Pagination Indicators ─────────────────────────── */}
          <div className="flex items-center justify-center gap-2 mt-8 md:mt-10">
            {testimonialsData.map((t, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => changeSlide(idx)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)] focus-visible:ring-offset-2',
                    isActive
                      ? 'w-9 bg-gradient-to-r from-[var(--color-prestige-gold)] to-[var(--color-prestige-gold-light)] shadow-xs'
                      : 'w-2 bg-[var(--color-neutral-300)] hover:bg-[var(--color-prestige-gold)]/50'
                  )}
                  aria-label={`Go to slide ${idx + 1}: ${t.name}`}
                  aria-current={isActive ? 'true' : 'false'}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
