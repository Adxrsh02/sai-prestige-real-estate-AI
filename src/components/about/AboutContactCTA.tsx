import React from 'react';
import { Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { LinkedInIcon } from '@/components/ui/LinkedInIcon';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export const AboutContactCTA: React.FC = () => {
  return (
    <Section variant="deep" spacing="spacious" id="contact-cta">
      <Container size="default">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs uppercase font-medium tracking-[0.24em] text-[var(--color-prestige-gold-light)] mb-4">
            Begin Your Property Search
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
            Let&apos;s Find the Right Property for You.
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-300 max-w-2xl mx-auto">
            Every property journey begins with a conversation. Tell us what you&apos;re looking for,
            and the SAI PRESTIGE team can help you explore relevant property opportunities.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Contact Our Team
            </Button>
            <Button
              href="/properties"
              variant="outline"
              size="lg"
              className="text-white border-white/30 hover:border-white hover:bg-white hover:text-[var(--color-prestige-deep)]"
            >
              Explore Properties
            </Button>
          </div>

          {/* Direct Channels Card */}
          <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Phone */}
            <a
              href="tel:+919326433965"
              aria-label="Call SAI PRESTIGE at +91 93264 33965"
              className="group p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-[var(--color-prestige-gold-light)] font-medium mb-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>Call Directly</span>
              </div>
              <span className="text-sm text-neutral-200 group-hover:text-white transition-colors">
                +91 93264 33965
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:sai.prestige01@gmail.com"
              aria-label="Send email to SAI PRESTIGE at sai.prestige01@gmail.com"
              className="group p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-[var(--color-prestige-gold-light)] font-medium mb-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>Email Us</span>
              </div>
              <span className="text-sm text-neutral-200 group-hover:text-white transition-colors truncate block">
                sai.prestige01@gmail.com
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919326433965"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with SAI PRESTIGE on WhatsApp (opens in new tab)"
              className="group p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-[var(--color-prestige-gold-light)] font-medium mb-1.5">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </div>
              <span className="text-sm text-neutral-200 group-hover:text-white transition-colors">
                +91 93264 33965
              </span>
            </a>

            {/* LinkedIn Company */}
            <a
              href="https://www.linkedin.com/company/sai-prestige/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View SAI PRESTIGE LinkedIn Company Page (opens in new tab)"
              className="group p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-[var(--color-prestige-gold-light)] font-medium mb-1.5">
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </div>
              <span className="text-sm text-neutral-200 group-hover:text-white transition-colors">
                SAI PRESTIGE Company
              </span>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};
