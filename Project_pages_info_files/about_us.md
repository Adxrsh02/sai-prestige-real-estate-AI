# SAI PRESTIGE — About Us Page Specification

## 1. Project Overview

### Project
**SAI PRESTIGE — About Us**

### Route
`/about`

### Primary Objective

Design and build an exceptionally premium, multi-section About Us page for SAI PRESTIGE, a real estate consultancy serving Navi Mumbai.

The page must communicate the company's identity, buyer-first philosophy, mission, vision, team responsibilities, professionalism, and commitment to helping customers make informed property decisions.

The experience must feel like a carefully crafted premium real estate brand website—not a generic corporate template.

The design should communicate trust through its visual quality, content clarity, authentic team presentation, and transparent business information.

### Quality Benchmark

The final experience should demonstrate the level of visual craftsmanship, typography, spacing, responsiveness, and engineering quality associated with premium digital experiences from Vercel, Apple, Linear, Stripe, and leading luxury real estate brands.

These references indicate quality standards, not designs to copy.

**The priority is premium minimalism, purposeful interactions, excellent storytelling, strong accessibility, and high performance—not excessive animations or decorative effects.**

---

## 2. Mandatory Project Specifications

Before planning or implementation, read and carefully analyze the following documents:

1. `project_spec.md`
2. `Sai_prestige_info.md`
3. `about_us.md`

Treat each document according to its purpose.

### `project_spec.md` — Global Website Specification

This document defines the website's global architecture, technology stack, design system, component conventions, accessibility requirements, SEO strategy, responsive behavior, and development methodology.

All global requirements must be preserved.

### `Sai_prestige_info.md` — Central Business, SEO & GEO Knowledge Base

This document is the central source of truth for SAI PRESTIGE's business identity and search visibility.

Use it for:

- Official brand name and business description.
- Business category and services.
- Business location and contact information.
- Service areas and local relevance.
- Established business facts.
- Approved SEO and GEO terminology.
- Brand descriptions and positioning.
- Existing canonical URL conventions.
- Approved metadata and internal-linking information.
- Relevant structured-data requirements.

Do not duplicate or contradict the central knowledge base unnecessarily.

Do not invent business facts, experience figures, customer counts, certifications, awards, property transactions, testimonials, or achievements.

If information conflicts between documents, identify the discrepancy and follow the established source-of-truth hierarchy rather than silently choosing an unsupported claim.

### `about_us.md` — Page-Specific Specification

This document defines the About Us page's content, section hierarchy, visual direction, interactions, and implementation requirements.

Treat it as the authoritative specification for this page.

---

## 3. Brand Identity & Design Direction

### Visual Concept

**Architectural Luxury × Editorial Minimalism × Modern Real Estate Consultancy**

The About Us page must communicate sophistication without appearing excessively decorative.

Use a refined visual language inspired by premium architectural publications and contemporary luxury property brands.

### Brand Palette

Reuse the existing global design tokens.

The established palette includes:

| Token | Color | Usage |
|---|---|---|
| Prestige White | `#FFFFFF` | Main backgrounds |
| Prestige Gold | `#BC9A4F` | Primary brand accent |
| Champagne Gold | `#E1B959` | Restrained highlights |
| Prestige Charcoal | `#242424` | Headings and primary text |
| Deep Charcoal | `#1F1A17` | Strong contrast |
| Soft Neutral | `#F7F8FA` | Alternate section surfaces |
| Border Neutral | `#E5E7EB` | Borders and separators |
| Secondary Text | `#667085` | Supporting copy |

These values must remain consistent with the actual global design tokens if they already exist in the codebase.

Do not introduce unrelated accent colors.

### Typography

- Headings: Helvetica Neue or the established equivalent.
- Body text: Inter.
- Eyebrows: restrained uppercase labels with careful letter spacing.
- Supporting text: comfortable line height and readable line lengths.
- Section headings: clear typographic hierarchy.
- Team names: strong, refined, and immediately identifiable.

Use generous whitespace strategically, not indiscriminately.

### Component Styling

Prefer:

- Fine neutral borders.
- Restrained shadows.
- Consistent border radii.
- Editorial image compositions.
- Balanced asymmetric layouts.
- Subtle gold dividers.
- Refined buttons.
- Clean section transitions.
- Carefully aligned content.

Avoid:

- Excessive gradients.
- Glassmorphism used without purpose.
- Neon colors.
- Oversized decorative icons.
- Repetitive generic cards.
- Excessive pill-shaped containers.
- Unnecessary 3D elements.
- Large animated backgrounds.
- Overly rounded, toy-like interfaces.

The design must feel premium, trustworthy, and appropriate for a professional real estate consultancy.

---

# 4. Page Architecture & Section Order

Implement the About Us page in the following order.

1. Breadcrumb navigation.
2. Brand introduction / editorial hero.
3. Company philosophy and approach.
4. Our Mission and Our Vision.
5. Our core principles.
6. Meet Our Team.
7. Service area and local relevance.
8. Contact and enquiry CTA.
9. Existing global footer.

This structure establishes brand identity first, explains the company's approach, introduces its team, and then gives visitors a clear next step.

Do not add unrelated sections or fabricate content to fill whitespace.

---

# 5. Section One — Breadcrumb Navigation

### Purpose

Help users understand their current location within the website.

### Breadcrumb

`Home → About Us`

Requirements:

- Reuse the existing breadcrumb component.
- Follow the established navigation typography.
- Use subtle neutral styling.
- Ensure links are keyboard-accessible.
- Use semantic breadcrumb markup.
- Keep the component compact.

Do not create a separate breadcrumb implementation if a reusable component already exists.

---

# 6. Section Two — Brand Introduction / Editorial Hero

### Purpose

Introduce SAI PRESTIGE through a confident, elegant, buyer-focused message.

This section must establish the page's visual identity immediately.

### Suggested Eyebrow

`ABOUT SAI PRESTIGE`

### Primary H1

**Real Estate Decisions Begin With Trust.**

### Supporting Copy

"At SAI PRESTIGE, successful property transactions begin with understanding the buyer. We believe in clear communication, genuine relationships, and identifying the right property for every client's needs. From the first conversation to the final deal, every interaction should build confidence and help buyers make informed decisions."

This copy is the approved editorial direction. Refine grammar or punctuation if necessary without changing the intended meaning.

### Recommended Visual Composition

Create a premium editorial hero rather than a generic centered text block.

On desktop, consider:

- A prominent heading and supporting paragraph on the left.
- A refined architectural or real-estate visual composition on the right.
- Subtle gold accents.
- A carefully balanced grid.
- Generous but controlled whitespace.

The visual must support the message without overpowering it.

Use authentic, relevant business assets if they are available in the project.

If an approved company-office photograph, property image, or architectural photograph is not yet available, do not invent one or generate a fake company image. Use a restrained, intentional layout that works without it.

### Hero Requirements

- One clear H1.
- Concise, meaningful supporting copy.
- Strong contrast.
- Excellent mobile readability.
- No unnecessary animation.
- No unsupported company statistics.
- No fabricated customer testimonials.
- No artificial urgency.

Do not add a hero CTA unless it serves a clear user journey and fits the established design system.

---

# 7. Section Three — Our Philosophy & Approach

### Section Eyebrow

`OUR APPROACH`

### Heading

**Understand First. Recommend With Confidence.**

### Content

"At SAI PRESTIGE, a successful sale begins with understanding the buyer. Our approach is built on trust, clear communication, and identifying the right property for every client's needs.

From the first conversation to the final deal, every interaction should create more confidence, deliver value, and move the buyer one step closer to making an informed decision."

### Core Statement

**Build trust. Understand needs. Present the right property. Close with confidence.**

This statement should receive a distinctive visual treatment.

Possible treatments include:

- A refined editorial statement block.
- A horizontal four-step process on desktop.
- A vertically stacked sequence on mobile.
- Subtle numbered markers.
- Restrained gold dividers.

Avoid turning this section into an unnecessarily complicated infographic.

### Four Principles

**01 — Build Trust**

Establish clear communication and honest expectations from the first interaction.

**02 — Understand Needs**

Understand the buyer's priorities, preferences, budget, and property requirements before recommending options.

**03 — Present the Right Property**

Help buyers explore relevant property options based on their requirements rather than presenting irrelevant listings.

**04 — Close With Confidence**

Support the buyer through property discussions, site visits, negotiations, and transaction coordination.

These descriptions express the company's intended approach. Do not imply guaranteed outcomes or services beyond the approved business scope.

---

# 8. Section Four — Our Mission & Our Vision

### Objective

Present the mission and vision as two distinct, meaningful statements.

They should feel connected but must not be duplicated or presented as interchangeable content.

### Our Vision

"To become the most trusted real estate sales team in Navi Mumbai by understanding every buyer's needs, building genuine relationships, and helping clients make confident, informed property decisions."

### Our Mission

"To follow a structured, buyer-focused sales process—from the first conversation and requirement analysis to property presentation, site visits, negotiation, and final closure. Every interaction must build trust, deliver value, and move the buyer towards the right decision."

### Layout Direction

Use two balanced editorial panels or a refined split-section composition.

Each panel should contain:

- A small section label.
- A clear heading.
- The complete statement.
- A subtle visual distinction.
- Comfortable line length.
- Consistent spacing.

Use white and soft-neutral surfaces, with restrained gold accents.

Do not add fabricated metrics, dates, or claims about achieving the vision.

On mobile, stack the two sections naturally.

---

# 9. Section Five — Our Core Principles

### Purpose

Translate the company's buyer-first philosophy into practical principles visitors can understand.

### Heading

**The Principles Behind Every Property Decision**

### Introductory Copy

"Every successful property journey depends on understanding, communication, coordination, and confidence. These principles guide how SAI PRESTIGE approaches buyer relationships and property transactions."

### Principle One — Buyer First

Understand the buyer's actual requirements before recommending a property.

### Principle Two — Transparent Communication

Explain property information and transaction steps clearly, without creating unrealistic expectations.

### Principle Three — Relevant Recommendations

Focus on property options that align with the buyer's stated needs and preferences.

### Principle Four — Coordinated Execution

Maintain clear responsibilities and coordination throughout the buyer journey.

### Principle Five — Informed Decisions

Help buyers understand the information available to them so they can evaluate their options carefully.

### Principle Six — Relationship Beyond the Enquiry

Treat every conversation professionally and prioritize long-term trust over unnecessary sales pressure.

### Design Requirements

Use a restrained grid or editorial list.

Avoid six oversized cards with identical decorative icons.

Use typography, spacing, thin separators, and selective gold accents to create hierarchy.

The layout should feel light, polished, and easy to scan.

---

# 10. Section Six — Meet Our Team

## Section Objective

Introduce the three team members and explain their distinct responsibilities.

This is a key trust-building section.

The design must communicate accountability, coordination, and professional collaboration.

### Section Eyebrow

`THE PEOPLE BEHIND SAI PRESTIGE`

### Heading

**Meet Our Team**

### Introductory Copy

"A successful real estate operation depends on clear responsibilities, strong coordination, and shared accountability. At SAI PRESTIGE, each team member contributes to a different part of the business while working towards one common goal: delivering an excellent buyer experience and supporting successful property transactions."

Do not describe the team as award-winning, industry-leading, or the largest in the region unless supported by verified evidence.

## Team Design Direction

Use premium editorial team profiles rather than generic employee cards.

On desktop, use a balanced three-column grid when the available width permits.

Each profile should contain:

1. Team member photograph.
2. Full name.
3. Functional role.
4. Concise responsibility description.
5. LinkedIn link.
6. Accessible image alternative text.

Use consistent portrait aspect ratios, carefully aligned content, subtle borders, and restrained hover effects.

Photographs must remain the visual focus.

Do not apply excessive filters, fake backgrounds, or automatic portrait transformations.

### Important Asset Requirement

**Team photographs will be provided separately by the user in a later step.**

Until those images are supplied:

- Do not invent portraits.
- Do not generate artificial people.
- Do not use unrelated stock photographs as if they depict the actual team.
- Do not create misleading avatar portraits.
- Do not permanently hardcode imaginary image paths.

Plan the component to accept individual image assets later.

During initial implementation, use an intentional image-placeholder treatment only if necessary. It must not imply that a placeholder represents the actual person.

Once the photographs are supplied, integrate the real assets into the approved design.

## Team Member One

### Name

**Rutik Bhoir**

### Role

Marketing & Operations

### Responsibility Description

"Leads marketing, manages lead generation, oversees daily operations, and coordinates the process from buyer enquiry to sales coordination."

### LinkedIn

https://www.linkedin.com/in/rutik-tiwari-ab34a3254/

### Link Requirements

- Open the correct LinkedIn profile.
- Use a descriptive accessible label.
- Open in a new tab where appropriate.
- Apply safe external-link attributes.
- Use the existing social-link component if available.

## Team Member Two

### Name

**Siddhesh Kale**

### Role

Sales & Documentation

### Responsibility Description

"Manages buyer conversations, property presentations, site visits, negotiations, and coordination of booking formalities and documentation."

### LinkedIn

https://www.linkedin.com/in/siddhesh-kale-a8495b359/

### Link Requirements

- Open the correct LinkedIn profile.
- Use a descriptive accessible label.
- Open in a new tab where appropriate.
- Apply safe external-link attributes.

## Team Member Three

### Name

**Aditya Solunke**

### Role

Finance

### Responsibility Description

"Oversees financial planning, transaction-related financial coordination, payment tracking, and financial records to support smooth business operations."

### LinkedIn

https://www.linkedin.com/in/adityasolunke17/

### Link Requirements

- Open the correct LinkedIn profile.
- Use a descriptive accessible label.
- Open in a new tab where appropriate.
- Apply safe external-link attributes.

### Team Layout Details

For desktop:

- Use three balanced columns.
- Maintain consistent portrait proportions.
- Keep names, roles, and descriptions aligned.
- Place LinkedIn links consistently.
- Avoid unnecessary card height.

For tablet:

- Use a layout that preserves comfortable image sizes and readable descriptions.

For mobile:

- Stack the profiles vertically or use a carefully designed compact layout.
- Keep each name and role clearly visible.
- Make external links easy to tap.
- Avoid horizontal scrolling.

The section must remain premium even before the final photographs are available.

---

# 11. Section Seven — Our Presence in Navi Mumbai

### Purpose

Communicate local relevance and provide a natural connection between the company and the market it serves.

### Heading

**Rooted in Navi Mumbai. Focused on Your Property Goals.**

### Supporting Copy

"SAI PRESTIGE helps property buyers navigate their search with a buyer-focused approach, clear communication, and coordinated guidance across relevant real estate opportunities in Navi Mumbai."

Use `Sai_prestige_info.md` to determine the exact service areas and approved location terminology.

The knowledge base may identify relevant localities such as Ulwe, Sanpada, Vashi, or Pushpak Nagar. Include only areas that are explicitly supported by the current business information.

### Local Relevance Requirements

- Use the approved business address.
- Maintain consistency with the central SEO/GEO knowledge base.
- Link to existing locality or property pages where appropriate.
- Do not create new locality pages as part of this milestone.
- Do not invent local offices or service locations.
- Do not make unsupported claims about market coverage.

### Visual Direction

Prefer a clean editorial layout with a short paragraph and a refined location detail.

If an authentic office or approved architectural photograph is available, consider using it.

Do not add a decorative map unless it genuinely improves the visitor's understanding.

---

# 12. Section Eight — Contact & Enquiry CTA

### Objective

Give visitors a clear next step after they understand the brand, philosophy, and team.

### Heading

**Let's Find the Right Property for You.**

### Supporting Copy

"Every property journey begins with a conversation. Tell us what you're looking for, and the SAI PRESTIGE team can help you explore relevant property opportunities."

### Primary CTA

**Contact Our Team**

Destination:

`/contact`

Use the established contact route if it differs from this proposed route.

### Secondary CTA

**Explore Properties**

Destination:

Use the existing approved property discovery route.

Do not invent a route or create a new properties page as part of this milestone.

### Contact Information

Use the following supplied business information consistently with `Sai_prestige_info.md`.

**Email**

sai.prestige01@gmail.com

**Phone**

+91 93264 33965

**WhatsApp**

+91 93264 33965

**LinkedIn Company Page**

https://www.linkedin.com/company/sai-prestige/?viewAsMember=true

**Office Address**

Shop No. 03, Plot No. 172, Dream Heritage, opposite Ramsheth Thakur International Sports Complex, Sector 17, Ulwe, Navi Mumbai, Maharashtra 410206, India.

Use the canonical address formatting from `Sai_prestige_info.md` if an approved version already exists.

### Functional Requirements

- Email links must use `mailto:`.
- Telephone links must use `tel:`.
- WhatsApp links must use the correct international phone number format.
- LinkedIn links must point to the supplied company page.
- Internal CTA links must use existing routes.
- Contact information must be selectable and readable.
- All interactive elements must be keyboard-accessible.

Do not introduce a backend or create a new contact form as part of this About Us milestone.

Reuse the existing contact page and global footer where appropriate.

---

# 13. Global Navigation & Footer Integration

The About Us page must integrate seamlessly into the existing website.

### Route

`/about`

### Navigation

Ensure the approved website navigation provides an accessible path to About Us.

Do not unnecessarily rearrange the entire navigation system.

If the existing Projects & Developments route has been removed or replaced according to an earlier approved instruction, preserve that decision.

Do not recreate the removed page as part of this milestone.

### Footer

Reuse the existing global footer.

Do not create a second footer specifically for the About Us page.

Ensure the business name, contact details, social links, and address remain consistent with the central knowledge base.

---

# 14. SEO & GEO Strategy

## Core Principle

`Sai_prestige_info.md` is the central source of truth for business information, local relevance, brand descriptions, and SEO/GEO requirements.

The About Us page must strengthen that foundation rather than introduce conflicting business identities.

## Suggested Page Title

`About SAI PRESTIGE | Real Estate Consultancy in Navi Mumbai`

Use the existing metadata conventions and approved brand positioning.

## Suggested Meta Description

`Meet SAI PRESTIGE, a Navi Mumbai real estate consultancy focused on understanding buyer needs, building trust, and guiding informed property decisions.`

Refine this description if the central knowledge base defines an approved version.

## Search Intent

The page should help visitors understand:

- Who SAI PRESTIGE is.
- What the company does.
- How the company approaches property buyers.
- Who is responsible for different business functions.
- How to contact the company.
- Where the business is located.

## On-Page SEO Requirements

- One clear H1.
- Logical H2 and H3 hierarchy.
- Unique page metadata.
- Canonical URL consistent with the global site configuration.
- Appropriate Open Graph metadata.
- Semantic HTML.
- Crawlable internal links.
- Descriptive link text.
- Optimized team photographs when provided.
- Meaningful image alternative text.
- Mobile-friendly rendering.
- Fast loading.
- No duplicate metadata.
- No hidden keyword content.

## GEO & Entity Consistency

Keep these business details consistent across the page and the central knowledge base:

- Official name: SAI PRESTIGE.
- Business category: Real estate consultancy.
- Geographic relevance: Navi Mumbai, Maharashtra, India.
- Approved service areas.
- Official email.
- Official phone and WhatsApp number.
- Office address.
- Official LinkedIn company page.

Do not invent coordinates, office branches, founding dates, legal registrations, certifications, or other entity attributes.

## Structured Data

Evaluate the existing website's structured-data implementation before adding anything new.

Use appropriate business or organization schema only when supported by the actual business information and global SEO strategy.

Avoid duplicate or contradictory entities.

Use accurate address and contact information.

Do not add fake reviews, aggregate ratings, awards, or unsupported company statistics.

The goal is consistent, understandable business information for both traditional search engines and AI-powered answer engines—not artificial attempts to manipulate rankings.

---

# 15. Motion & Micro-Interactions

Motion should be subtle, intentional, and consistent with the premium brand identity.

Appropriate interactions may include:

- Gentle section reveals.
- Subtle image transitions.
- Refined button hover states.
- Minimal team-profile hover feedback.
- Small opacity or position transitions.

Avoid:

- Excessive scroll-triggered animations.
- Large parallax effects.
- Automatic carousels.
- Animated background particles.
- Unnecessary 3D.
- Repeated bounce effects.
- Animation that delays access to content.

Respect `prefers-reduced-motion`.

The page must remain complete and usable when animation is disabled.

Use the existing animation system if available. Do not install additional libraries without a clear need.

---

# 16. Accessibility Requirements

Follow the global accessibility standards in `project_spec.md`.

Ensure:

- Semantic section structure.
- Correct heading hierarchy.
- Keyboard navigation.
- Visible focus states.
- Sufficient contrast.
- Accessible external links.
- Meaningful image alternative text.
- Appropriate touch-target sizing.
- Clear link labels.
- Reduced-motion support.
- No interaction that depends exclusively on hover.

The page must be usable with a keyboard and assistive technology.

---

# 17. Performance & Engineering Standards

Use the existing Next.js App Router architecture and established project conventions.

Requirements:

- TypeScript.
- Tailwind CSS.
- Reusable components.
- Maintainable content structure.
- Optimized image delivery.
- Minimal client-side JavaScript.
- No unnecessary dependencies.
- No backend.
- No database.
- No authentication.
- No fabricated content.
- No unnecessary modifications to unrelated routes.

Prefer Server Components for static content wherever appropriate.

Use Client Components only where interaction genuinely requires them.

Avoid creating an overly complex component hierarchy for a mostly content-driven page.

Keep page content easy to maintain as the company information and team assets evolve.

---

# 18. Recommended Component Architecture

Inspect the current repository before adopting this structure.

Reuse existing components wherever appropriate.

A possible architecture is:

```text
src/
├── app/
│   └── about/
│       └── page.tsx
├── components/
│   └── about/
│       ├── about-hero.tsx
│       ├── company-philosophy.tsx
│       ├── mission-vision.tsx
│       ├── core-principles.tsx
│       ├── team-section.tsx
│       ├── team-member-card.tsx
│       ├── local-presence.tsx
│       └── about-contact-cta.tsx
```

This is a reference architecture, not a requirement to create every file.

If the existing project already provides equivalent components, reuse them.

Do not create duplicate headers, footers, navigation, or design tokens.

---

# 19. Content Integrity Rules

All About Us content must remain authentic and grounded in supplied business information.

Do not invent:

- Company founding dates.
- Years of experience.
- Number of properties sold.
- Number of customers served.
- Customer testimonials.
- Awards.
- Certifications.
- Professional qualifications.
- Legal registrations.
- Team member achievements.
- Guaranteed property returns.
- Guaranteed transaction outcomes.
- Additional office locations.

The supplied company philosophy, mission, vision, team responsibilities, and contact information are the approved content foundation.

You may improve grammar, readability, and presentation without changing the meaning.

Keep the tone confident, warm, professional, and buyer-focused.

Avoid generic marketing claims that could describe any real estate business.

---

# 20. Development Workflow

Follow the milestone-based workflow in `project_spec.md`.

## Stage 1 — Planning

Use the designated planning model and Planning Mode.

Before writing production code:

1. Read `project_spec.md` completely.
2. Read `Sai_prestige_info.md` completely.
3. Read `about_us.md` completely.
4. Inspect the existing website and component library.
5. Verify existing routes and navigation.
6. Identify the reusable design tokens.
7. Define the page architecture.
8. Define the section-by-section layout.
9. Plan the responsive behavior.
10. Plan SEO and GEO implementation.
11. Identify missing assets.
12. Present the implementation plan for review.

Do not begin production implementation during this stage.

## Stage 2 — Implementation

After approval:

1. Implement the About Us route.
2. Build the approved page sections.
3. Integrate the real business content.
4. Prepare the team components for the photographs to be supplied later.
5. Integrate existing navigation and footer.
6. Implement metadata.
7. Add relevant internal links.
8. Apply responsive styles.
9. Verify accessibility.
10. Test the completed page.

Do not implement unrelated pages.

## Stage 3 — Review & Validation

Verify:

- Correct route.
- Correct navigation.
- Correct content.
- Correct team names and roles.
- Correct LinkedIn URLs.
- Correct contact information.
- Consistency with `Sai_prestige_info.md`.
- Premium desktop presentation.
- Premium mobile presentation.
- No horizontal overflow.
- Accessible interactions.
- Correct metadata.
- No fabricated claims.
- No broken links.
- No unnecessary dependencies.
- No unintended changes to other pages.

Report any unresolved requirements honestly.

---

# 21. Acceptance Criteria

The About Us page is complete only when the following criteria are met.

### Content

- [ ] Company introduction is accurate.
- [ ] Buyer-first philosophy is communicated clearly.
- [ ] Mission and vision are distinct.
- [ ] Core principles are included.
- [ ] All three team members are presented accurately.
- [ ] Responsibilities match the supplied descriptions.
- [ ] LinkedIn profile URLs are correct.
- [ ] Contact information matches the central knowledge base.
- [ ] Office address is formatted consistently.
- [ ] No unsupported business claims are introduced.

### Design

- [ ] Premium architectural-minimalist visual direction.
- [ ] Consistent SAI PRESTIGE gold-and-white identity.
- [ ] Strong typography hierarchy.
- [ ] Balanced whitespace.
- [ ] Elegant editorial layouts.
- [ ] Authentic team photographs integrated when supplied.
- [ ] No fake portraits.
- [ ] No excessive animation.
- [ ] Consistent global navigation and footer.

### Functionality

- [ ] `/about` loads correctly.
- [ ] Navigation links work.
- [ ] LinkedIn links work.
- [ ] Email and phone links work.
- [ ] WhatsApp link works.
- [ ] Contact and property CTAs use existing routes.
- [ ] No backend is introduced.

### Technical Quality

- [ ] Responsive across mobile, tablet, and desktop.
- [ ] Accessible semantic structure.
- [ ] SEO metadata implemented.
- [ ] Canonical configuration preserved.
- [ ] GEO information consistent.
- [ ] No duplicate business schema.
- [ ] Images optimized when supplied.
- [ ] Production build succeeds.
- [ ] No unrelated pages are modified.

---

# 22. Final Directive

Build an About Us experience that makes visitors understand the people, principles, and buyer-focused approach behind SAI PRESTIGE.

The page must feel authentic, premium, professional, and visually cohesive with the rest of the website.

Every section must have a clear purpose.

Every claim must be grounded in the approved business information.

Every interaction must improve usability.

Every design decision must support trust, clarity, and the visitor's journey.


Read `Sai_prestige_info.md` completely and treat it as the central SEO and GEO knowledge base for the Sai Prestige website.

Audit the existing Next.js website and implement the SEO strategy described in the file. Prioritize accurate business identity, unique page metadata, canonical URLs, sitemap.xml, robots.txt, appropriate JSON-LD structured data, internal linking, responsive performance, accessibility, and helpful location-specific content for Ulwe, Sanpada, Vashi, and Pushpak Nagar.

Preserve the existing visual design and functionality. Do not invent business details, property listings, testimonials, prices, registrations, or customer statistics. Use placeholders for missing verified information. Do not create thin or duplicate locality pages.

After implementation, report which files were changed, which SEO features are complete, and what business information is still required before production launch.

KEY PRINCIPLES OF BUYER SALES Listen Before You Sell Let the buyer explain their requirements. Ask questions, listen carefully, and never assume what they need Understand the Real Need Identify the buyer's purpose, budget, preferred location, urgency, and decision-making priorities before suggesting properties Build Trust Through Honesty Share accurate property details, pricing, availability, and limitations. Never make false promises just to secure a deal Follow a Structured Process Move systematically from lead qualification, requirements to property presentation, site visit, follow-up, negotiation, and closure Always Secure a Next Step End every meaningful conversation with a clear next action, such as sharing shortlisted properties, scheduling a visit, or agreeing on a follow-up time



**Use `project_spec.md` for global website rules, `Sai_prestige_info.md` for business and SEO/GEO truth, and this document for the About Us page requirements.**

**Begin with Planning Mode. Read all three documents and inspect the existing workspace before implementation. Produce the detailed plan and wait for approval. Do not start coding prematurely.**

