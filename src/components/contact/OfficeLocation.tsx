import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { LinkedInIcon } from '@/components/ui/LinkedInIcon';
import { siteConfig } from '@/lib/constants';
import { GoogleMapEmbed } from './GoogleMapEmbed';

export const OfficeLocation: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-[var(--color-neutral-200)]/90 p-6 sm:p-8 lg:p-10 shadow-[var(--shadow-premium-sm)] flex flex-col justify-between h-full">
      {/* Top Header & Address */}
      <div>
        <div className="mb-6">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-prestige-gold)] block mb-2">
            Headquarters & Advisory
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-[var(--color-prestige-charcoal)] tracking-tight">
            Visit Our Office
          </h2>
          <p className="mt-2 text-sm text-[var(--color-neutral-600)] leading-relaxed">
            Connect with SAI PRESTIGE to discuss your property requirements and explore the next steps.
          </p>
        </div>

        {/* Address Card */}
        <div className="p-4 sm:p-5 rounded-lg bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)]/70 mb-6">
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-full bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold)] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[var(--color-prestige-charcoal)] mb-1">
                Office Address
              </h3>
              <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed">
                Shop No. 03, Plot No. 172, Dream Heritage,
                <br />
                Opposite Ramsheth Thakur International Sports Complex,
                <br />
                Sector 17, Ulwe, Navi Mumbai,
                <br />
                Maharashtra – 410206, India.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Contact Strips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {/* Phone Action */}
          <a
            href="tel:+919326433965"
            className="flex items-center gap-3 p-3 rounded-lg border border-[var(--color-neutral-200)] bg-white hover:border-[var(--color-prestige-gold)] hover:bg-[var(--color-neutral-50)] transition-all group"
          >
            <div className="w-8 h-8 rounded-md bg-[var(--color-neutral-100)] group-hover:bg-[var(--color-prestige-gold)] group-hover:text-white text-[var(--color-prestige-gold)] flex items-center justify-center transition-colors shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="block text-[10px] uppercase tracking-wider text-[var(--color-neutral-500)] font-medium">
                Call Us
              </span>
              <span className="block text-xs font-semibold text-[var(--color-prestige-charcoal)] truncate">
                +91 93264 33965
              </span>
            </div>
          </a>

          {/* WhatsApp Action */}
          <a
            href="https://wa.me/919326433965?text=Hello%20SAI%20PRESTIGE%2C%20I%20would%20like%20to%20discuss%20my%20property%20requirements%20in%20Navi%20Mumbai."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg border border-[var(--color-neutral-200)] bg-white hover:border-[var(--color-prestige-gold)] hover:bg-[var(--color-neutral-50)] transition-all group"
          >
            <div className="w-8 h-8 rounded-md bg-[var(--color-neutral-100)] group-hover:bg-[#25D366] group-hover:text-white text-[#25D366] flex items-center justify-center transition-colors shrink-0">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="block text-[10px] uppercase tracking-wider text-[var(--color-neutral-500)] font-medium">
                WhatsApp
              </span>
              <span className="block text-xs font-semibold text-[var(--color-prestige-charcoal)] truncate">
                +91 93264 33965
              </span>
            </div>
          </a>

          {/* Email Action */}
          <a
            href="mailto:sai.prestige01@gmail.com"
            className="flex items-center gap-3 p-3 rounded-lg border border-[var(--color-neutral-200)] bg-white hover:border-[var(--color-prestige-gold)] hover:bg-[var(--color-neutral-50)] transition-all group"
          >
            <div className="w-8 h-8 rounded-md bg-[var(--color-neutral-100)] group-hover:bg-[var(--color-prestige-gold)] group-hover:text-white text-[var(--color-prestige-gold)] flex items-center justify-center transition-colors shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="block text-[10px] uppercase tracking-wider text-[var(--color-neutral-500)] font-medium">
                Email
              </span>
              <span className="block text-xs font-semibold text-[var(--color-prestige-charcoal)] truncate">
                sai.prestige01@gmail.com
              </span>
            </div>
          </a>

          {/* LinkedIn Action */}
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg border border-[var(--color-neutral-200)] bg-white hover:border-[var(--color-prestige-gold)] hover:bg-[var(--color-neutral-50)] transition-all group"
          >
            <div className="w-8 h-8 rounded-md bg-[var(--color-neutral-100)] group-hover:bg-[#0A66C2] group-hover:text-white text-[#0A66C2] flex items-center justify-center transition-colors shrink-0">
              <LinkedInIcon className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="block text-[10px] uppercase tracking-wider text-[var(--color-neutral-500)] font-medium">
                Company Page
              </span>
              <span className="block text-xs font-semibold text-[var(--color-prestige-charcoal)] truncate">
                SAI PRESTIGE
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Embedded Map Section */}
      <div className="mt-2">
        <GoogleMapEmbed />
      </div>
    </div>
  );
};
