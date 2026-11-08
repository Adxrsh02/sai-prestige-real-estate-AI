import React from 'react';
import Image from 'next/image';
import { LinkedInIcon } from '@/components/ui/LinkedInIcon';
import { cn } from '@/lib/utils';

export interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  linkedIn: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  description,
  linkedIn,
  imageSrc,
  imageAlt,
  className,
}) => {
  // Generate monogram initials (e.g., "Rutik Bhoir" -> "RB")
  const initials = name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <article
      className={cn(
        'group flex flex-col justify-between bg-white rounded-lg border border-[var(--color-neutral-200)]/80 p-5 sm:p-6 transition-all duration-200 hover:shadow-[var(--shadow-premium-sm)] hover:-translate-y-0.5',
        className
      )}
    >
      <div>
        {/* Portrait container with 4:5 aspect ratio */}
        <div
          className="relative w-full aspect-[4/5] rounded-md overflow-hidden border border-[var(--color-neutral-200)]/60 bg-[var(--color-neutral-100)] flex flex-col items-center justify-center select-none"
          role="img"
          aria-label={imageAlt || `Portrait placeholder for ${name} — photograph to be provided`}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt || name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center w-full h-full">
              {/* Architectural monogram */}
              <div className="w-16 h-16 rounded-full border border-[var(--color-prestige-gold)]/40 bg-[var(--color-prestige-gold)]/10 flex items-center justify-center mb-3">
                <span className="font-heading text-2xl font-light tracking-wider text-[var(--color-prestige-gold)]">
                  {initials}
                </span>
              </div>
              <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[var(--color-neutral-500)]">
                Photograph to be provided
              </span>
            </div>
          )}
        </div>

        {/* Member Details */}
        <div className="mt-5">
          <span className="inline-block text-xs uppercase font-medium tracking-[0.2em] text-[var(--color-prestige-gold)]">
            {role}
          </span>
          <h3 className="mt-1 text-lg sm:text-xl font-light tracking-tight text-[var(--color-prestige-charcoal)]">
            {name}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-neutral-600)]">
            {description}
          </p>
        </div>
      </div>

      {/* LinkedIn Link */}
      <div className="mt-6 pt-4 border-t border-[var(--color-neutral-200)]/70">
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name}'s LinkedIn profile (opens in new tab)`}
          className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-[var(--color-neutral-600)] hover:text-[var(--color-prestige-gold)] transition-colors group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-prestige-gold)] rounded-sm"
        >
          <LinkedInIcon className="w-4 h-4 text-[var(--color-prestige-gold)] transition-transform duration-200 group-hover/link:scale-110" />
          <span>View LinkedIn Profile</span>
        </a>
      </div>
    </article>
  );
};
