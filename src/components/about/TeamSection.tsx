import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { TeamMemberCard, TeamMemberCardProps } from './TeamMemberCard';

const teamMembers: TeamMemberCardProps[] = [
  {
    name: 'Rutik Bhoir',
    role: 'Marketing & Operations',
    description:
      'Leads marketing, manages lead generation, oversees daily operations, and coordinates the process from buyer enquiry to sales coordination.',
    linkedIn: 'https://www.linkedin.com/in/rutik-tiwari-ab34a3254/',
  },
  {
    name: 'Siddhesh Kale',
    role: 'Sales & Documentation',
    description:
      'Manages buyer conversations, property presentations, site visits, negotiations, and coordination of booking formalities and documentation.',
    linkedIn: 'https://www.linkedin.com/in/siddhesh-kale-a8495b359/',
  },
  {
    name: 'Aditya Solunke',
    role: 'Finance',
    description:
      'Oversees financial planning, transaction-related financial coordination, payment tracking, and financial records to support smooth business operations.',
    linkedIn: 'https://www.linkedin.com/in/adityasolunke17/',
  },
];

export const TeamSection: React.FC = () => {
  return (
    <Section variant="white" spacing="default" id="team">
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="inline-block text-xs uppercase font-medium tracking-[0.24em] text-[var(--color-prestige-gold)] mb-3">
            The People Behind SAI PRESTIGE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[var(--color-prestige-charcoal)]">
            Meet Our Team
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-neutral-600)]">
            A successful real estate operation depends on clear responsibilities, strong
            coordination, and shared accountability. At SAI PRESTIGE, each team member contributes to
            a different part of the business while working towards one common goal: delivering an
            excellent buyer experience and supporting successful property transactions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              description={member.description}
              linkedIn={member.linkedIn}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
