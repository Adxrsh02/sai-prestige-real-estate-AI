import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ChevronRight, ArrowLeft } from 'lucide-react';

interface RouteStubProps {
  title: string;
  category: string;
  description: string;
  phaseNote?: string;
}

export const RouteStub: React.FC<RouteStubProps> = ({
  title,
  category,
  description,
  phaseNote = 'This section is scheduled for dedicated implementation in an upcoming development milestone.',
}) => {
  return (
    <Section spacing="spacious" className="flex-1">
      <Container size="default">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-[var(--color-neutral-500)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-prestige-charcoal)] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3 text-[var(--color-neutral-400)]" />
            </li>
            <li className="text-[var(--color-neutral-700)] font-medium" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        {/* Header Block */}
        <div className="max-w-3xl space-y-4 mb-12">
          <Badge variant="gold" size="md">
            {category}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[var(--color-prestige-charcoal)]">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-neutral-600)] leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* Architectural Placeholder Container */}
        <div className="rounded-2xl border border-dashed border-[var(--color-neutral-300)] bg-[var(--color-neutral-50)] p-8 sm:p-12 text-center max-w-3xl">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--color-prestige-gold)]/10 text-[var(--color-prestige-gold)] flex items-center justify-center font-bold text-sm">
            SP
          </div>
          <h2 className="text-lg font-medium text-[var(--color-prestige-charcoal)] mb-2">
            Architecture & Layout Foundation Ready
          </h2>
          <p className="text-sm text-[var(--color-neutral-600)] max-w-md mx-auto mb-6">
            {phaseNote}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/" variant="secondary" size="md" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Return to Home
            </Button>
            <Button href="/contact" variant="primary" size="md">
              Enquire Now
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
