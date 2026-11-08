# SAI PRESTIGE — Contact Us Page Specification

**Document:** `contact_us.md`  
**Page:** Contact Us  
**Proposed Route:** `/contact`  
**Project:** SAI PRESTIGE — Premium Real Estate Consultancy Website  
**Implementation Style:** Premium, conversion-focused, responsive, accessible, SEO/GEO optimized.

---

# 1. Project Objective

Design and implement an exceptionally premium Contact Us page for SAI PRESTIGE that makes it easy for property buyers, tenants, and prospective clients to contact the business through their preferred communication channel.

This must not look like a generic contact page consisting of a heading, a basic form, and a Google Map.

It must feel like a carefully designed, trustworthy real estate consultation experience.

The page must combine:

- Premium visual design.
- Clear communication options.
- An elegant and functional contact form.
- Secure email delivery using Resend.
- Cloudflare Turnstile bot protection.
- Google Maps integration.
- Accurate business information.
- Strong local SEO and GEO signals.
- Exceptional mobile usability.
- Clear submission feedback.
- Accessible, production-quality interactions.

**Primary objective:** Make contacting SAI PRESTIGE effortless while communicating professionalism, trust, and genuine attention to the customer's property requirements.

**Secondary objective:** Convert relevant website visitors into genuine property enquiries without unnecessary friction.

The result must prioritize functional reliability and user trust over decorative complexity.

---

# 2. Mandatory Project Documents

Before planning or implementation, read the following documents completely.

1. `project_spec.md`
2. `Sai_prestige_info.md`
3. `contact_us.md`

Also inspect the existing project structure, current website implementation, and all supplied reference screenshots.

## `project_spec.md`

This is the global source of truth for:

- Technology stack.
- Website architecture.
- Design tokens.
- Typography.
- Responsive behavior.
- Navigation.
- Accessibility.
- Performance.
- SEO conventions.
- Component reuse.
- Development workflow.
- Existing architectural constraints.

## `Sai_prestige_info.md`

This is the central source of truth for:

- Official business identity.
- Business description.
- Contact details.
- Office address.
- Service areas.
- Local relevance.
- Brand positioning.
- SEO and GEO requirements.
- Canonical business information.

Do not introduce conflicting business details.

## `contact_us.md`

This document defines the Contact Us page's requirements, layout, content, integrations, validation behavior, visual direction, and acceptance criteria.

If the global project specification and this page specification appear to conflict, identify the conflict and resolve it according to the established architecture before implementation.

The new integrations must be introduced without unnecessarily changing the rest of the website.

---

# 3. Reference Images & Design Interpretation

Use the supplied screenshots as visual references.

### Reference A — Contact Hero and Direct Communication

The first reference demonstrates:

- A centered introductory heading.
- A concise explanation of the contact experience.
- Two prominent communication cards.
- Direct phone and WhatsApp actions.
- Clear trust indicators.
- Generous spacing and simple navigation.

Use these principles to make contacting the business immediately understandable.

### Reference B — Contact Form and Office Location

The second reference demonstrates:

- A structured contact form.
- An office-location panel.
- An embedded map.
- A clear lower-page CTA.
- Contact options grouped into logical sections.

Use these ideas to plan the page's content and functionality.

### Brand Adaptation

The references are structural inspiration, not templates to reproduce.

The final implementation must follow SAI PRESTIGE's established identity:

- White and off-white surfaces.
- Prestige gold accents.
- Charcoal typography.
- Architectural minimalism.
- Refined borders.
- Subtle shadows.
- Premium spacing.
- Editorial typography.
- Consistent global navigation and footer.

Do not copy the blue-purple gradients, green action styling, or other brand-specific details from the reference screenshots unless an element is explicitly required for functional clarity.

**The finished page must look unmistakably like SAI PRESTIGE.**

---

# 4. Global Business Information

Use the following supplied information consistently with `Sai_prestige_info.md`.

## Official Business Name

SAI PRESTIGE

## Business Category

Real Estate Consultancy

## Email

`sai.prestige01@gmail.com`

## Phone

`+91 93264 33965`

## WhatsApp

`+91 93264 33965`

## LinkedIn Company Page

https://www.linkedin.com/company/sai-prestige/?viewAsMember=true

## Office Address

Shop No. 03, Plot No. 172, Dream Heritage, opposite Ramsheth Thakur International Sports Complex, Sector 17, Ulwe, Navi Mumbai, Maharashtra 410206, India.

Use the approved canonical address from `Sai_prestige_info.md` if its formatting differs.

Do not use contact details or addresses visible in the reference screenshots. Those belong to another business and are not part of SAI PRESTIGE.

Do not invent office hours, guaranteed response times, additional branches, or unverified service areas.

---

# 5. Design System & Visual Direction

## 5.1 Design Philosophy

**Premium Real Estate Advisory × Architectural Minimalism × Conversion-Focused UX**

The interface should feel sophisticated, calm, professional, and exceptionally easy to use.

Avoid the appearance of a generic lead-generation landing page.

Every section must have a clear purpose.

Every interaction must help visitors contact the business or understand its location.

Every visual element must contribute to clarity, trust, or usability.

## 5.2 Color System

Reuse the established global design tokens.

| Token | Suggested Color | Purpose |
|---|---|---|
| Prestige White | `#FFFFFF` | Primary background |
| Prestige Gold | `#BC9A4F` | Brand accents and primary CTA |
| Champagne Gold | `#E1B959` | Restrained highlights |
| Prestige Charcoal | `#242424` | Headings and primary text |
| Deep Charcoal | `#1F1A17` | High-contrast surfaces |
| Soft Neutral | `#F7F8FA` | Alternate backgrounds |
| Border Neutral | `#E5E7EB` | Borders and dividers |
| Secondary Text | `#667085` | Supporting text |

If the existing design tokens define different approved values, reuse those tokens instead of introducing duplicate colors.

Use gold sparingly. Do not make the entire page gold.

Use semantic success and error colors only where necessary for understandable feedback and accessible status communication.

## 5.3 Typography

- Headings: Helvetica Neue or the existing approved equivalent.
- Body: Inter.
- Form labels: clear, readable, and consistently weighted.
- Supporting text: restrained and legible.
- Buttons: concise and action-oriented.
- Address details: readable without overwhelming the layout.

Use consistent typography tokens and avoid arbitrary font sizes.

## 5.4 Component Appearance

Prefer:

- Clean white cards.
- Fine borders.
- Subtle shadows.
- Consistent corner radii.
- Clear field labels.
- Refined focus rings.
- Restrained hover transitions.
- Balanced spacing.
- Premium button styling.
- Strong visual grouping.

Avoid:

- Excessive gradients.
- Heavy shadows.
- Oversized empty areas.
- Unnecessary animation.
- Decorative elements that distract from the contact actions.
- Excessive card nesting.
- Overly large form fields.
- Unnecessary 3D or parallax effects.

---

# 6. Contact Page Information Architecture

Build the page in the following order:

1. Existing global navigation.
2. Breadcrumb navigation.
3. Premium contact hero.
4. Direct communication cards.
5. Trust and service principles.
6. Contact form and office location.
7. Google Maps integration.
8. Final contact CTA.
9. Existing global footer.

This order is intentional.

Visitors should first understand that they can contact SAI PRESTIGE, then choose a communication channel, submit a detailed enquiry if needed, and verify the business location.

Do not insert unrelated sections.

---

# 7. Section One — Breadcrumb Navigation

### Breadcrumb

`Home → Contact Us`

Requirements:

- Reuse the existing breadcrumb component.
- Follow the global typography and spacing.
- Use semantic breadcrumb markup.
- Ensure keyboard accessibility.
- Maintain sufficient contrast.
- Keep the breadcrumb compact.

Do not create a duplicate breadcrumb implementation if one already exists.

---

# 8. Section Two — Premium Contact Hero

## Objective

Immediately communicate that visitors can speak with SAI PRESTIGE about their property requirements.

The hero should establish trust without consuming excessive vertical space.

### Eyebrow

`LET'S START A CONVERSATION`

### Primary H1

**Let's Talk About Your Property Goals.**

### Supporting Copy

"Looking to buy, rent, or explore property opportunities in Navi Mumbai? Connect with SAI PRESTIGE for a conversation focused on your requirements, clear communication, and informed property decisions."

Use the exact services and terminology supported by `Sai_prestige_info.md`.

### Visual Direction

Create a refined, editorial hero with:

- A clear H1.
- A concise supporting paragraph.
- Restrained gold accents.
- Balanced horizontal spacing.
- Excellent text readability.
- A controlled vertical footprint.

The desktop hero may be centered or left-aligned, depending on the established website layout.

Choose the arrangement that best integrates with the global header and reference imagery.

On mobile, use a clear single-column composition.

Do not add an unnecessary hero image if it does not improve the experience.

Do not use an invented office photograph.

---

# 9. Section Three — Direct Communication Options

## Objective

Give visitors two prominent, immediately usable options before they encounter the longer enquiry form.

Use two premium communication cards.

On desktop, display the cards side by side when the viewport permits.

On mobile, stack them vertically.

The cards should have balanced visual weight without excessive height.

## Card A — Call Our Team

### Heading

**Call Our Team**

### Description

"Prefer speaking directly? Call SAI PRESTIGE to discuss your property requirements."

### Primary Button

**Call +91 93264 33965**

### Functional Requirement

Use the following destination:

`tel:+919326433965`

The action must launch the device's supported calling interface.

Do not display a fake online status or claim that an agent is available immediately unless the business has confirmed that information.

## Card B — WhatsApp Chat

### Heading

**Chat on WhatsApp**

### Description

"Have a property requirement or a quick question? Connect with SAI PRESTIGE on WhatsApp."

### Primary Button

**Chat on WhatsApp**

### Functional Requirement

Use a properly encoded WhatsApp click-to-chat URL:

`https://wa.me/919326433965`

An optional prefilled message may be used:

"Hello SAI PRESTIGE, I would like to discuss my property requirements in Navi Mumbai."

Ensure the message is correctly URL-encoded.

Open the external destination appropriately for the device and browser.

Do not claim that the team responds within a specific number of minutes unless a verified service commitment is supplied.

## Card Design

Each card should contain:

- A restrained icon.
- A clear heading.
- One short description.
- One prominent action button.
- Consistent padding.
- A subtle border.
- A refined hover and focus state.

Use the global gold-and-white design system.

Do not copy the blue-purple buttons from the inspiration screenshots.

---

# 10. Section Four — Trust Principles

## Objective

Reassure visitors that the company prioritizes clear communication and informed property decisions.

### Suggested Principles

**Buyer-Focused Guidance**

We begin by understanding your property requirements.

**Clear Communication**

We aim to make property discussions and next steps easy to understand.

**Informed Decisions**

We help you explore relevant options based on the information available.

### Layout

Use a compact row of three principles on desktop.

On mobile, allow a clean stacked or wrapped layout.

Use subtle icons or simple typographic markers.

Do not create fake verification badges.

Do not describe the business as officially certified or independently verified without evidence.

Do not promise guaranteed property outcomes.

---

# 11. Section Five — Premium Contact Form

## Primary Objective

Create a beautiful, reliable, accessible contact form that collects genuine enquiries and delivers them to the official SAI PRESTIGE email address through Resend.

This is a functional form, not a visual mockup.

All validation, submission, error handling, verification, and email-delivery behavior must work.

## 11.1 Form Heading

**Tell Us What You're Looking For.**

### Supporting Copy

"Share a few details about your property requirements. Our team will receive your enquiry and use the information to understand how we may assist you."

Do not promise a particular response time unless officially confirmed.

## 11.2 Required Form Fields

### Field 1 — Full Name

- Label: `Full Name`
- Required: Yes
- Input type: Text
- Placeholder: `Enter your full name`

Validation:

- Trim leading and trailing whitespace.
- Reject empty values.
- Apply sensible length limits.
- Display an accessible, field-specific error.

Do not unnecessarily restrict legitimate names containing spaces, apostrophes, or hyphens.

### Field 2 — Email Address

- Label: `Email Address`
- Required: Yes
- Input type: Email
- Placeholder: `you@example.com`

Validation:

- Required.
- Basic valid email format.
- Reasonable maximum length.
- Clear error messaging.

### Field 3 — Phone Number

- Label: `Phone Number`
- Required: Yes.
- Input type: Telephone.
- Placeholder: `Enter your phone number`

The primary audience is in India, but the interface should not unnecessarily reject legitimate international phone numbers.

Use sensible normalization and validation without accepting obviously invalid input.

### Field 4 — Property Requirement

- Label: `I'm Interested In`
- Required: Yes.
- Input type: Select.

Suggested options:

- Buying a Property.
- Renting a Property.
- Selling a Property.
- Commercial Property.
- Investment Enquiry.
- General Enquiry.
- Other.

Only retain options that align with the services supported by `Sai_prestige_info.md`.

Use a clear default prompt rather than silently selecting an enquiry category.

### Field 5 — Preferred Location

- Label: `Preferred Location`
- Required: No.
- Input type: Text.
- Placeholder: `e.g. Ulwe, Navi Mumbai`

Do not force visitors to enter a locality if they have not decided on one.

### Field 6 — Message

- Label: `Tell Us About Your Requirements`
- Required: Yes.
- Input type: Multiline textarea.
- Placeholder: `Describe the property you're looking for, your preferred budget, or any questions you have.`

Allow enough space for a meaningful message.

Use a sensible character limit and provide accessible validation feedback.

Do not request unnecessary sensitive financial information.

## 11.3 Form Layout

### Desktop

Use a two-column page layout for the form and office-location area.

The form should receive sufficient width for readable labels and comfortable input fields.

The location panel should remain visually connected to the form without competing with it.

Within the form:

- Place Full Name and Email Address side by side where sufficient width exists.
- Place Phone Number and enquiry category side by side where appropriate.
- Allow location and message fields to use the full form width.
- Keep labels consistently positioned.
- Use consistent control heights and vertical spacing.

If the form column becomes too narrow, stack the fields instead of forcing awkward layouts.

### Mobile

Stack all fields vertically.

Use full-width controls.

Prevent horizontal overflow.

Keep error messages near their relevant fields.

Maintain comfortable spacing between labels, controls, and validation feedback.

Do not make the form unnecessarily long by adding decorative elements.

---

# 12. Cloudflare Turnstile Integration

## Critical Requirement

Cloudflare Turnstile is mandatory for contact-form submission.

The Turnstile widget must appear **directly above the "Send Message" button**.

The user must complete successful verification before the form can be submitted.

Client-side widget completion alone is not sufficient. The server must verify the Turnstile token with Cloudflare.

## 12.1 Required Interaction Flow

```text
User opens Contact Us page
          |
          v
Completes contact form
          |
          v
Client-side form validation
          |
          v
Cloudflare Turnstile verification
          |
          v
Valid verification token available?
       /             \
     No               Yes
     |                 |
Display a clear       Enable submission
verification error    when other checks pass
     |                 |
Prevent submission    Submit to server
                       |
                       v
             Server validates request
                       |
                       v
             Verify Turnstile token
                       |
                Verification valid?
                  /          \
                No            Yes
                |              |
           Reject request   Validate fields
           with safe error  on the server
                              |
                              v
                         Send email
                         using Resend
                              |
                              v
                         Email request
                         successful?
                         /       \
                       Yes        No
                        |          |
                   Success     Error feedback
                   feedback    Preserve fields
                   Reset form
                   Reset Turnstile
```

This is a logical flow. The implementation must also handle expired tokens, network errors, duplicate submissions, and server-side failures.

## 12.2 Widget Placement

The order inside the form must be:

1. Message field.
2. Cloudflare Turnstile widget.
3. Submission button.
4. Submission status and any applicable form-level feedback.

If field-specific validation messages are displayed, they should remain close to their associated inputs.

Keep the Turnstile widget within the form card.

It must not appear in a floating popup, the footer, or a separate section far from the submission button.

## 12.3 Button Activation

The `Send Message` button must remain disabled unless all required conditions are satisfied:

- Required form fields pass client-side validation.
- A valid Turnstile verification token is available.
- No submission is currently in progress.
- The form is otherwise eligible for submission.

When Turnstile verification fails or expires:

- Prevent submission.
- Disable the button until verification is restored.
- Display a concise, user-friendly error.
- Allow the user to retry verification.

Do not rely exclusively on disabling the button for security.

The server must independently enforce every security requirement.

## 12.4 Expiration and Failure

Handle:

- Verification failure.
- Token expiration.
- Network failure during verification.
- Widget rendering failure.
- Invalid or missing token.
- Repeated or replayed token.
- Server-side verification failure.

Suggested message:

"Verification could not be completed. Please try again."

Do not expose raw Cloudflare responses, internal error details, or secret configuration.

## 12.5 Server-Side Verification

Verify the Turnstile token through Cloudflare's official server-side Siteverify API before sending any email.

The server must:

- Reject missing tokens.
- Reject invalid tokens.
- Reject expired or already-used tokens.
- Validate the expected hostname where appropriate.
- Validate the expected action if the integration uses an action.
- Fail closed if verification cannot be completed.
- Never send the email when verification fails.

Turnstile tokens are short-lived and single-use. Handle them accordingly.

## 12.6 Accessibility

- Provide an accessible verification status.
- Preserve keyboard navigation.
- Ensure the disabled button has a clear explanation when appropriate.
- Avoid trapping keyboard focus.
- Follow the widget's accessibility requirements.
- Respect the selected color theme if the integration supports it.

Do not hide verification errors inside inaccessible toast messages alone.

---

# 13. Resend Email Integration

## Objective

Deliver valid contact enquiries to:

`sai.prestige01@gmail.com`

Use Resend for email delivery.

The integration must be functional and secure.

## 13.1 Email Architecture

The frontend must submit the contact form to a server-side endpoint or serverless function.

The server must:

1. Parse and validate the request.
2. Enforce request-size and field-length limits.
3. Apply appropriate abuse controls.
4. Verify the Turnstile token.
5. Validate and normalize the submitted information.
6. Construct a controlled email.
7. Send the email using Resend.
8. Return a safe, structured response.

**Do not call Resend directly from browser code using a secret API key.**

Do not expose server credentials in client-side bundles.

## 13.2 Recipient

The notification recipient is:

`sai.prestige01@gmail.com`

## 13.3 Email Subject

Use a clear subject such as:

`New Property Enquiry — SAI PRESTIGE`

Where useful, include the selected enquiry category without placing untrusted user content into email headers.

## 13.4 Email Content

The notification email should include:

- Customer name.
- Customer email.
- Customer phone number.
- Enquiry category.
- Preferred location, if supplied.
- Customer message.
- Submission timestamp.
- Relevant request reference, if implemented.

Use a clean HTML email template with a readable plain-text alternative.

Keep the email professional and consistent with the brand.

Escape untrusted user content before inserting it into HTML.

Do not interpret submitted content as HTML.

## 13.5 Sender Identity

Use a verified sender identity configured in Resend.

Do not assume that `sai.prestige01@gmail.com` can be used as the verified sender merely because it is the recipient.

If a verified sender domain is not yet configured, identify the requirement and request the necessary setup.

Use the customer's validated email as the reply-to address only after appropriate validation.

Never allow user input to control arbitrary email recipients or sender identities.

## 13.6 Optional Customer Confirmation

A customer acknowledgement email may be considered only if it is explicitly included in the approved implementation plan and the sender configuration supports it.

If implemented:

- Keep it concise.
- Do not make unverified response-time promises.
- Do not disclose internal information.
- Do not imply that a property has been reserved or that an agreement has been accepted.

The essential requirement is reliable notification to the SAI PRESTIGE business inbox.

---

# 14. Submission States & Feedback

The form must provide clear feedback throughout its lifecycle.

## Idle

- Form fields are editable.
- Turnstile is available.
- Button activation follows validation and verification state.

## Invalid Fields

Display specific, actionable messages near the relevant inputs.

Example:

"Please enter a valid email address."

Do not clear other valid field values.

## Verification Required

Display:

"Please complete the security verification before submitting."

## Submitting

- Prevent duplicate submissions.
- Disable relevant controls.
- Display a concise loading state.
- Use a button label such as `Sending Message...`.
- Keep the page stable.
- Avoid unnecessary layout shifts.

## Success

Suggested confirmation:

**Your message has been sent successfully.**

"Thank you for contacting SAI PRESTIGE. Your enquiry has been received."

Only display success after the server confirms that the Resend operation succeeded.

After success:

- Clear the form fields.
- Reset the Turnstile widget.
- Clear the previous token.
- Restore the initial validation state.
- Display an accessible success message.
- Ensure the form is ready for another enquiry.

Do not claim delivery to the customer's own inbox when only the notification-send operation has been confirmed.

## Failure

Suggested message:

"We couldn't send your message right now. Please try again or contact us directly by phone or WhatsApp."

On failure:

- Preserve all entered form values.
- Clear or refresh the Turnstile token if necessary.
- Require fresh verification when needed.
- Re-enable the form after the request finishes.
- Display a clean error message.
- Provide the direct contact alternatives.

Do not display stack traces, provider credentials, internal API errors, or sensitive server responses.

---

# 15. Security Requirements

The contact form is public-facing and must be protected against abuse.

Implement the following:

- Server-side input validation.
- Server-side Turnstile verification.
- Request-body size limits.
- Field-length limits.
- Email-header injection prevention.
- HTML escaping.
- Duplicate-submission protection.
- Appropriate rate limiting or abuse controls.
- Safe error handling.
- Restricted email recipients.
- Environment-variable-based secret management.

Do not rely on frontend validation alone.

Do not allow arbitrary user-supplied email recipients.

Do not return internal error messages or provider responses directly to the browser.

Avoid collecting unnecessary personal data.

Do not store submitted enquiries in a database as part of this milestone unless explicitly approved.

---

# 16. Environment Variables & Integration Configuration

Inspect the actual project framework before defining environment-variable names.

The website uses a Next.js architecture according to the global project specification. Therefore, adapt the configuration to Next.js rather than blindly copying Vite-specific conventions.

The following names are illustrative for a Next.js implementation.

```dotenv
# Resend — server-side only
RESEND_API_KEY=

# Verified sender identity configured in Resend
RESEND_FROM_EMAIL=

# Notification recipient
CONTACT_TO_EMAIL=sai.prestige01@gmail.com

# Cloudflare Turnstile
TURNSTILE_SECRET_KEY=

# Public Turnstile site key
NEXT_PUBLIC_TURNSTILE_SITE_KEY=

# Google Maps browser key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
```

Use the established environment naming convention if the existing project requires a different structure.

### Important Security Rules

**Never expose these values to browser code:**

- `RESEND_API_KEY`
- `TURNSTILE_SECRET_KEY`

Only public, appropriately restricted keys should be exposed to the browser.

If the project is actually using Vite rather than Next.js, reconcile that discrepancy with `project_spec.md` before implementation. Do not introduce a second framework.

## Google Maps API Key

A browser Maps key is necessarily visible to visitors when used by a client-side map. Protect it through appropriate Google Cloud API restrictions, website-referrer restrictions, and applicable quotas.

Enable only the Google Maps APIs actually required by the implementation.

Do not expose unrestricted credentials.

## Environment Setup

- Update `.env.example` with variable names only.
- Never commit real secrets.
- Never place credentials directly in source code.
- Never put secret keys into public environment variables.
- Document any required external dashboard configuration.
- Do not claim an integration is working until it has been tested.

---

# 17. Google Maps Integration

## Objective

Provide a useful, interactive map showing the actual SAI PRESTIGE office location.

The map must help visitors understand where the business is located and open directions when required.

## Office Address

Shop No. 03, Plot No. 172, Dream Heritage, opposite Ramsheth Thakur International Sports Complex, Sector 17, Ulwe, Navi Mumbai, Maharashtra 410206, India.

Use the canonical business address from `Sai_prestige_info.md` if necessary.

## Map Requirements

- Display the correct business location.
- Use an appropriate zoom level.
- Provide a clear location marker.
- Include an accessible title or equivalent label.
- Allow users to open the location in Google Maps.
- Provide a direct directions link.
- Keep the map visually integrated with the office-information panel.
- Avoid excessive map controls or unnecessary visual clutter.
- Maintain usability on mobile devices.

Do not invent latitude or longitude coordinates.

Use a verified location or a reliable geocoding result grounded in the supplied address.

Do not claim that the map marker is verified until the actual location has been checked.

## Layout

### Desktop

Use the form and office information as two coordinated columns.

Within the office column, display:

1. Office Location heading.
2. Full business address.
3. Open in Google Maps link.
4. Interactive map.

The map should have a consistent aspect ratio and an appropriate height.

It must not dominate the contact form.

### Mobile

Stack the form and office information.

Use a responsive map container.

Prevent horizontal overflow.

Ensure the directions link remains easy to tap.

## Loading & Error States

While loading, use a restrained placeholder that preserves the map's intended dimensions.

If the Google Maps integration fails:

- Do not leave a broken or blank-looking map container.
- Display the office address.
- Keep the direct Google Maps link available.
- Provide a graceful fallback.

Do not make the entire Contact Us page dependent on successful map loading.

## Performance

- Load the map only when needed.
- Avoid loading multiple map instances unnecessarily.
- Consider lazy loading below-the-fold map content.
- Use the existing project architecture and approved Google Maps integration.
- Avoid adding a heavy dependency if the required experience can be implemented more simply.

Do not replace the interactive map with a static screenshot unless the approved implementation explicitly chooses that alternative.

---

# 18. Office Information Panel

### Heading

**Visit Our Office**

### Supporting Copy

"Connect with SAI PRESTIGE to discuss your property requirements and explore the next steps."

### Address

Display the complete approved office address.

### Contact Actions

Provide compact links for:

- Call Our Team.
- WhatsApp Chat.
- Send an Email.
- Open in Google Maps.

Each action must use the correct destination.

Do not duplicate a large contact card for every communication channel if the direct communication section already covers those actions.

The office panel should complement the contact form rather than compete with it.

---

# 19. Final Contact CTA

Place a final CTA after the contact form and office-location section, before the global footer.

### Heading

**Your Next Property Conversation Starts Here.**

### Supporting Copy

"Tell us what you are looking for, and connect with SAI PRESTIGE to discuss your property requirements."

### Primary CTA

**Call Our Team**

Destination:

`tel:+919326433965`

### Secondary CTA

**Chat on WhatsApp**

Destination:

`https://wa.me/919326433965`

### Design Direction

Use a restrained, premium brand treatment.

A deep-charcoal or soft-neutral background with carefully applied gold accents may be used if it fits the established design system.

Do not use a large blue-purple gradient copied from the reference website.

Keep the CTA compact, readable, and useful.

On mobile, stack the actions when necessary.

---

# 20. Global Navigation Update

The existing global navigation currently contains the CTA label:

`Enquire Now`

Change the visible label to:

**Contact Us**

This change must apply to the shared navigation component wherever that CTA is used.

### Requirements

- Update the visible label from `Enquire Now` to `Contact Us`.
- Link the CTA to the canonical Contact Us route.
- Preserve the existing button styling and responsive behavior.
- Preserve the existing navigation layout.
- Ensure the mobile navigation uses the same approved label.
- Do not introduce a duplicate navigation CTA.
- Do not redesign unrelated navigation elements.

Inspect the actual route structure before implementing the link.

If `/contact` is the canonical route, use that route consistently.

Do not change the business's other navigation labels or page routes as part of this task.

---

# 21. SEO & GEO Strategy

## Source of Truth

`Sai_prestige_info.md` is the central source of truth for business identity, contact details, location, service areas, and SEO/GEO information.

The Contact Us page must remain consistent with that document.

## Suggested Page Title

`Contact SAI PRESTIGE | Real Estate Consultancy in Navi Mumbai`

Use the established metadata conventions and approved business description.

## Suggested Meta Description

`Contact SAI PRESTIGE in Navi Mumbai for property enquiries, buying and renting guidance, and information about our office location.`

Refine this description according to the approved services in `Sai_prestige_info.md`.

## On-Page SEO

- One clear H1.
- Logical H2 and H3 hierarchy.
- Unique page title and description.
- Correct canonical URL.
- Appropriate Open Graph metadata.
- Semantic contact information.
- Crawlable contact links.
- Meaningful internal links.
- Descriptive CTA labels.
- Accessible map and location information.
- Optimized performance.
- Mobile-first rendering.

## Local SEO & GEO

Maintain consistent business information across:

- Contact Us page.
- Global footer.
- `Sai_prestige_info.md`.
- Existing business structured data.
- Relevant internal locality pages.

Use the approved business name, phone number, email, address, and geographic information.

Do not invent office coordinates or service-area claims.

## Structured Data

Inspect existing structured data before adding new schema.

If appropriate, implement accurate and supported business/contact structured data using the global SEO conventions.

Avoid duplicate business entities or contradictory contact information.

Do not add fake reviews, ratings, certifications, or opening hours.

## AI Search Visibility

Write useful, direct, factual content that makes it clear:

- What SAI PRESTIGE does.
- How visitors can contact the business.
- Where the office is located.
- Which enquiry channels are available.
- What information visitors can provide through the contact form.

Do not add hidden text, keyword stuffing, or unsupported claims about guaranteed AI recommendations.

---

# 22. Responsive Design Requirements

The page must be designed mobile-first and scale elegantly to larger screens.

## Desktop

- Premium editorial hero.
- Two balanced communication cards.
- Compact trust-principle row.
- Two-column form and office layout.
- Properly sized map.
- Refined final CTA.

## Tablet

- Reduce column gaps appropriately.
- Maintain readable form widths.
- Stack fields when necessary.
- Preserve a clear hierarchy.
- Prevent the map from squeezing the form.

## Mobile

- Compact hero.
- Full-width communication cards.
- Clear trust indicators.
- Single-column form.
- Full-width controls.
- Turnstile positioned above the submission button.
- Readable verification and validation messages.
- Responsive map.
- Easy-to-tap contact actions.
- No horizontal overflow.

Test representative viewport widths, including 360px, 390px, 768px, 1024px, 1280px, and 1440px.

These are validation targets, not fixed layout widths.

Do not shrink typography excessively to force desktop layouts onto mobile screens.

---

# 23. Accessibility Requirements

The entire page must follow the accessibility standards established in `project_spec.md`.

Required considerations:

- Semantic HTML.
- Accessible form labels.
- Correct input types.
- Keyboard navigation.
- Visible focus states.
- Appropriate color contrast.
- Clear validation messages.
- Accessible loading states.
- Accessible success and error announcements.
- Screen-reader-friendly form status.
- Proper button semantics.
- Descriptive link text.
- Accessible map labeling.
- Turnstile accessibility.
- Reduced-motion support.
- Touch-friendly mobile controls.

Do not use placeholder text as the only field label.

Do not communicate success or failure through color alone.

Do not make the form unusable when JavaScript fails; provide a graceful fallback wherever the architecture allows.

---

# 24. Performance & Engineering Standards

Use the existing framework and component conventions defined in `project_spec.md`.

The expected architecture is Next.js App Router with TypeScript and Tailwind CSS, unless inspection establishes an explicitly approved alternative.

Requirements:

- Reuse the existing header and footer.
- Reuse global design tokens.
- Keep components focused.
- Prefer Server Components for static content where appropriate.
- Use Client Components only where interaction requires them.
- Keep secrets on the server.
- Keep the contact page responsive and lightweight.
- Avoid unnecessary packages.
- Handle external integrations gracefully.
- Avoid layout shifts during map loading.
- Avoid unnecessary animation libraries.
- Preserve existing routes.
- Do not create a database.
- Do not introduce authentication.
- Do not build a separate backend application.

## Minimal Server-Side Functionality

Because Resend requires a protected API credential and Turnstile requires server-side verification, implement the smallest server-side endpoint compatible with the existing application architecture.

For a Next.js App Router project, a suitable starting point is a server-side route such as:

`app/api/contact/route.ts`

Adapt this path to the actual repository structure.

This endpoint exists only to validate and process contact submissions securely.

It does not require a database or a separate backend service.

Do not attempt to implement secure email delivery entirely in client-side code.

---

# 25. Recommended Component Architecture

Inspect the existing codebase before creating new components.

Reuse existing components wherever possible.

A potential structure is:

```text
src/
├── app/
│   ├── contact/
│   │   └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts
├── components/
│   └── contact/
│       ├── contact-hero.tsx
│       ├── contact-method-card.tsx
│       ├── trust-principles.tsx
│       ├── contact-form.tsx
│       ├── turnstile-verification.tsx
│       ├── office-location.tsx
│       └── contact-cta.tsx
```

This is a suggested structure, not a requirement to create every file.

If the existing project uses another valid organization, preserve it.

Do not duplicate shared navigation, footer, buttons, typography tokens, or form primitives.

---

# 26. Error Handling & Observability

The application must distinguish between:

- Invalid user input.
- Missing Turnstile verification.
- Failed Turnstile verification.
- Expired verification.
- Request-rate limiting.
- Temporary email-provider failure.
- Server configuration errors.
- Unexpected server failures.

Return appropriate HTTP status codes and safe error messages.

Do not expose internal provider responses to the client.

Log useful server-side diagnostics without logging unnecessary personal data, verification tokens, or secrets.

Never log the Resend API key or Turnstile secret.

Do not display success before the email-send operation has succeeded.

If delivery confirmation is not available, describe the state accurately as a successful send request rather than guaranteed inbox delivery.

---

# 27. Testing Requirements

The Contact Us page is complete only after both visual and functional testing.

## Visual Testing

- [ ] Premium brand consistency.
- [ ] Proper heading hierarchy.
- [ ] Balanced card proportions.
- [ ] Correct desktop layout.
- [ ] Correct mobile layout.
- [ ] Responsive map.
- [ ] No horizontal overflow.
- [ ] No unexpected layout shifts.
- [ ] Correct global navigation CTA.
- [ ] Consistent global footer.

## Form Testing

- [ ] Required fields validate correctly.
- [ ] Invalid email is rejected.
- [ ] Invalid phone input is handled appropriately.
- [ ] Empty required fields show errors.
- [ ] Invalid submission does not send email.
- [ ] Form data is validated again on the server.
- [ ] Submission loading state works.
- [ ] Duplicate submission is prevented.
- [ ] Success feedback appears only after confirmed success.
- [ ] Form resets correctly after success.
- [ ] Field values remain after failure.

## Turnstile Testing

- [ ] Widget renders correctly.
- [ ] Widget is above the submission button.
- [ ] Button activation requires successful verification.
- [ ] Missing token is rejected by the server.
- [ ] Invalid token is rejected.
- [ ] Expired token is rejected.
- [ ] Replayed token is rejected.
- [ ] Verification network failure is handled.
- [ ] Fresh verification can be completed after failure.
- [ ] No email is sent when verification fails.

## Resend Testing

- [ ] Valid enquiries reach the configured notification recipient.
- [ ] Email subject is correct.
- [ ] Email body includes the submitted fields.
- [ ] HTML content is safely escaped.
- [ ] Invalid submissions do not trigger email delivery.
- [ ] Provider failures produce safe error feedback.
- [ ] No secret is exposed to browser code.
- [ ] Sender identity is correctly configured.

## Google Maps Testing

- [ ] Correct office location is displayed.
- [ ] Map key restrictions are configured.
- [ ] Map loads successfully with valid configuration.
- [ ] Map failure has a graceful fallback.
- [ ] Directions link works.
- [ ] Map is usable on mobile.
- [ ] The page remains useful if the map fails to load.

## SEO & Accessibility Testing

- [ ] Unique metadata.
- [ ] Canonical URL.
- [ ] Consistent business details.
- [ ] No duplicate business schema.
- [ ] Accessible form labels.
- [ ] Keyboard-accessible actions.
- [ ] Visible focus states.
- [ ] Screen-reader-friendly status messages.
- [ ] Appropriate reduced-motion behavior.
- [ ] No broken internal links.

Use official test keys and documented test modes for Turnstile during development. Do not use production credentials in automated tests unnecessarily.

Do not claim successful email delivery, verification, or map rendering unless the relevant integration has actually been tested.

---

# 28. Development Workflow

Follow the milestone-based process in `project_spec.md`.

## Stage 1 — Planning Mode

Use the designated planning model and Planning Mode.

Before writing code:

1. Read `project_spec.md` completely.
2. Read `Sai_prestige_info.md` completely.
3. Read `contact_us.md` completely.
4. Inspect the existing project structure.
5. Inspect the current Contact Us route and global navigation.
6. Analyze the supplied screenshots.
7. Identify the existing design tokens and reusable components.
8. Plan the complete page layout.
9. Plan the form and validation states.
10. Plan Turnstile verification.
11. Plan the Resend email flow.
12. Plan Google Maps configuration and fallback behavior.
13. Plan security and environment variables.
14. Plan SEO, GEO, accessibility, and performance.
15. Identify missing credentials and external setup requirements.
16. Present the implementation plan for approval.

**Do not modify production code during the initial planning stage.**

## Stage 2 — Implementation

Begin only after explicit approval.

Implement:

- Contact Us page.
- Direct communication cards.
- Contact form.
- Cloudflare Turnstile.
- Minimal server-side contact endpoint.
- Resend integration.
- Google Maps.
- Office information panel.
- Final CTA.
- Shared navigation label update.
- Metadata.
- Responsive behavior.
- Error and success states.

Do not modify unrelated pages.

## Stage 3 — Validation

Run the relevant build, lint, type checks, browser previews, responsive tests, and integration tests available in the project.

Verify the actual rendered page and real integration behavior where credentials and test configuration permit.

Report missing configuration honestly.

Do not claim completion of external integrations that remain unconfigured.

---

# 29. Acceptance Criteria

The Contact Us milestone is complete when:

### Design

- [ ] The page looks premium and consistent with SAI PRESTIGE.
- [ ] Both communication cards are visually balanced.
- [ ] The form and office panel are elegantly arranged.
- [ ] The map is correctly sized and responsive.
- [ ] The page is polished across desktop, tablet, and mobile.

### Functionality

- [ ] Phone calls use the correct number.
- [ ] WhatsApp opens the correct business chat.
- [ ] Contact form validation works.
- [ ] Turnstile verification is mandatory.
- [ ] The server independently verifies the token.
- [ ] Resend sends valid enquiries to the configured recipient.
- [ ] Success and failure states behave correctly.
- [ ] Google Maps displays the correct location.
- [ ] Directions links work.
- [ ] The shared navigation CTA reads `Contact Us`.

### Security

- [ ] Secrets remain server-side.
- [ ] Client-side validation is supplemented by server validation.
- [ ] Invalid Turnstile tokens are rejected.
- [ ] Email recipients are controlled.
- [ ] Duplicate submissions are handled.
- [ ] Safe errors are returned.
- [ ] No database is introduced.

### Search & Accessibility

- [ ] Metadata is correct.
- [ ] Business information matches `Sai_prestige_info.md`.
- [ ] Contact links are accessible.
- [ ] Form status is announced accessibly.
- [ ] No horizontal overflow exists.
- [ ] No unsupported business claims are introduced.

### Engineering

- [ ] Existing components are reused appropriately.
- [ ] No unnecessary dependencies are added.
- [ ] The production build succeeds.
- [ ] No unrelated pages are modified.
- [ ] External integrations are tested or clearly reported as pending configuration.

---

# 30. Final Implementation Directive

Build a Contact Us page that makes SAI PRESTIGE feel like a trustworthy, established, premium real estate consultancy.

The page must be visually exceptional, functionally reliable, secure, accessible, and easy to use.

The contact form must be a real working form, not a frontend demonstration.

Cloudflare Turnstile must be verified server-side.

Resend credentials must never be exposed to the browser.

Google Maps must use the actual business location and have a graceful fallback.

The global navigation CTA must be changed from `Enquire Now` to `Contact Us`.

Preserve the established global design system, website architecture, and existing routes.

**Use `project_spec.md` for global rules, `Sai_prestige_info.md` for business and SEO/GEO truth, and this document for Contact Us requirements.**

**Immediate instruction: Activate Planning Mode, read all three Markdown files, inspect the existing workspace and supplied reference screenshots, and present a detailed implementation plan. Do not begin implementation until the plan has been reviewed and approved.**