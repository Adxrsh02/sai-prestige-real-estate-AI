# EMI Calculator & Property Financial Tools — SAI PRESTIGE

## 1. Project Overview

### Objective

Design and implement a premium, fully functional **EMI Calculator & Property Financial Tools experience** for the SAI PRESTIGE real estate website.

This feature consists of two connected experiences:

1. A compact EMI Calculator preview section on the homepage.
2. A dedicated `/emi-calculator` page containing two fully functional financial calculators.

The experience must combine practical financial utility, exceptional usability, accurate calculations, premium visual design, mobile responsiveness, and SEO-friendly architecture.

The supplied reference screenshots define the functional direction and general calculator layout. They are references for understanding the desired experience, not designs to reproduce pixel-for-pixel.

The final implementation must follow the established SAI PRESTIGE global design system defined in `project_spec.md`.

### Primary Objectives

- Help visitors estimate home loan repayments before purchasing a property.
- Help visitors estimate Maharashtra stamp duty and registration charges.
- Present financial calculations clearly and transparently.
- Connect property discovery with financial planning.
- Encourage visitors to explore relevant properties and enquire with SAI PRESTIGE.
- Create a useful, indexable destination for organic search traffic.
- Deliver a polished experience across mobile, tablet, laptop, and desktop.

**Core principle:** Every calculation must work correctly. Visual quality must complement functionality rather than substitute for it.

---

## 2. Mandatory Project Rules

Before starting implementation, read and follow the complete `project_spec.md`.

This file is the authoritative project specification.

The implementation must preserve the following requirements:

- Use the established Next.js App Router architecture.
- Use TypeScript.
- Use Tailwind CSS.
- Reuse the existing global design system and components.
- Follow the established SAI PRESTIGE brand identity.
- Prioritize mobile-first UX.
- Implement SEO and accessibility from the beginning.
- Keep the implementation frontend-only.
- Avoid unnecessary dependencies.
- Do not modify unrelated website sections.
- Do not invent business information or legal/financial claims.
- Do not implement unrelated pages or features.

### Frontend-Only Constraint

Both calculators must work entirely in the browser.

Do not introduce a database, custom backend, authentication, admin dashboard, or backend API.

Calculations must update immediately when users change their inputs.

Use local constants or a clearly separated configuration module for financial assumptions that may need future updates.

---

# 3. Global Brand & Visual Direction

## Brand Identity

The entire experience must feel unmistakably SAI PRESTIGE.

Use the established brand palette:

| Token | Reference Color | Purpose |
|---|---|---|
| Prestige White | `#FFFFFF` | Primary backgrounds and surfaces |
| Prestige Gold | `#BC9A4F` | Brand accents and selected highlights |
| Secondary Gold | `#E1B959` | Restrained decorative or hover accents |
| Prestige Charcoal | `#242424` | Primary text and headings |
| Deep Charcoal | `#1F1A17` | High-contrast surfaces |
| Neutral Background | `#F7F8FA` | Subtle section backgrounds |
| Border Neutral | `#E5E7EB` | Dividers and component borders |
| Secondary Text | `#667085` | Supporting information |

These colors are initial design tokens. Reuse the actual tokens already defined in the project if available.

Do not introduce generic bright orange, neon accents, excessive gradients, or unrelated colors.

### Visual Characteristics

The interface must communicate:

- Premium quality
- Financial clarity
- Trustworthiness
- Precision
- Simplicity
- Professionalism
- Architectural elegance

Prefer white surfaces, charcoal typography, subtle neutral borders, restrained shadows, generous whitespace, and carefully controlled gold accents.

Financial values must remain highly readable.

Avoid making the calculator look like a generic banking dashboard or a colorful SaaS application.

### Typography

Use the global typography system:

- Helvetica Neue or the established equivalent for headings.
- Inter for body text, form labels, financial values, and supporting information.

Use tabular numerals for financial figures where supported, so changing values remain visually aligned.

---

# 4. Homepage EMI Calculator Preview

## Placement

**Route:** `/`

The homepage must contain a premium financial planning section that introduces the EMI Calculator and directs visitors to the dedicated calculator page.

### Recommended Position

Place the section approximately **fourth in the homepage sequence**, after the primary hero, featured property/project discovery, and the next major property-exploration section.

The exact placement must be adjusted to the final homepage structure established in the homepage specification.

The section must not interrupt the primary property discovery journey.

### Section Purpose

The section should introduce the practical value of financial planning before a property purchase.

Suggested heading:

**Plan Your Finances Before You Buy**

Suggested supporting copy:

"Estimate your monthly home loan EMI and understand the additional costs of purchasing property in Maharashtra with our property financial tools."

Copy may be refined to match the final brand voice.

### Layout

Use a refined two-column layout on desktop.

**Left column:**

- Section heading
- Short supporting description
- Compact EMI Calculator card
- Compact Stamp Duty & Registration card
- Premium CTA linking to the full calculator page

**Right column:**

- Interactive Home Loan EMI Calculator preview
- Key result: Monthly EMI
- Loan principal
- Total interest
- Total repayment

The calculator preview must use the same calculation engine as the dedicated EMI calculator page. Do not create separate calculation logic for the homepage.

### Homepage Preview Functionality

The preview should allow users to modify the primary EMI inputs and immediately see updated results.

Required inputs:

- Property Price
- Down Payment
- Interest Rate
- Loan Tenure

Display:

- Loan Principal
- Monthly EMI
- Total Interest
- Total Repayment

The preview may omit advanced details such as the complete amortization schedule to preserve simplicity.

### Primary CTA

Use a premium button labelled:

**Explore All Financial Tools**

Destination:

`/emi-calculator`

Alternative CTA label:

**Calculate Your Property Costs**

The primary CTA must navigate to the dedicated calculator page.

Use the established SAI PRESTIGE button component and gold accent treatment where appropriate.

The button must have functional navigation, visible focus states, hover feedback, and accessible text.

### Secondary Actions

Where appropriate, provide smaller contextual links:

- Calculate Home Loan EMI
- Estimate Stamp Duty

Both should direct users to the appropriate calculator on `/emi-calculator`.

Use URL fragments only if the corresponding section IDs exist and work correctly.

### Responsive Behavior

On desktop:

- Text and supporting cards on the left.
- Interactive calculator preview on the right.

On tablet:

- Reduce column gaps and card padding.
- Preserve the financial result's readability.

On mobile:

- Stack the content vertically.
- Place the heading and supporting text first.
- Display the calculator preview in a single-column layout.
- Keep the primary CTA easy to find.
- Prevent horizontal scrolling.
- Ensure numeric inputs remain usable without zooming.

---

# 5. Dedicated EMI Calculator Page

## Route

`/emi-calculator`

## Page Objective

Build a dedicated financial tools page inspired by the supplied second reference screenshot.

The page must contain two primary calculators:

1. Home Loan EMI Calculator.
2. Maharashtra Stamp Duty & Registration Calculator.

Both calculators should be visible near the top of the page on desktop, subject to sensible responsive constraints.

The page must not force users to navigate through multiple screens to access either calculator.

### Recommended Page Structure

1. Breadcrumb navigation.
2. Page introduction.
3. Home Loan EMI Calculator.
4. Maharashtra Stamp Duty & Registration Calculator.
5. Financial calculation explanation.
6. Frequently Asked Questions.
7. Related property/project discovery.
8. Enquiry CTA.
9. Global footer.

The calculators must remain the primary focus of the page.

Do not add unnecessary charts, decorative illustrations, or unrelated content.

---

# 6. Page Introduction

### Suggested H1

**Smart Property Financial Tools**

### Supporting Copy

"Plan your property purchase with practical tools to estimate home loan EMIs, stamp duty, and registration charges."

The introduction should be concise, trustworthy, and informative.

Avoid unsupported claims such as guaranteed savings, guaranteed loan approval, or guaranteed financial accuracy under every lender's terms.

### Breadcrumb

`Home → EMI Calculator`

Use the existing breadcrumb component and follow the global navigation and accessibility conventions.

---

# 7. Calculator One — Home Loan EMI Calculator

## Objective

Create a fully functional home loan EMI calculator that estimates the monthly repayment, total interest, and total amount payable for a standard amortizing loan with a fixed interest rate.

All calculations must happen in the browser.

No external API or backend is required.

## 7.1 Inputs

### A. Property Price

Label: `Property Price (₹)`

Purpose: Total property purchase price used as the basis for calculating the loan amount.

Requirements:

- Numeric input.
- Indian rupee formatting for displayed values.
- Support direct keyboard entry.
- Update results when the value changes.
- Reject invalid or negative values.
- Provide a configurable sensible minimum and maximum.

Suggested default:

`₹50,00,000`

### B. Down Payment

Label: `Down Payment (₹)`

Purpose: The amount the buyer intends to pay upfront.

Requirements:

- Numeric input.
- Slider and editable input.
- Display the down payment percentage relative to property price.
- Prevent the down payment from exceeding the property price.
- Update the loan principal immediately.
- Maintain consistent values between the slider and numeric input.

Suggested default:

`₹10,00,000`

This represents 20% of a ₹50,00,000 property price.

The percentage must be calculated dynamically, not hardcoded.

### C. Interest Rate

Label: `Interest Rate (% per annum)`

Purpose: Annual interest rate assumed for the calculation.

Requirements:

- Editable numeric input.
- Slider control.
- Clearly indicate that the rate is annual.
- Support sensible decimal values.
- Validate against configurable minimum and maximum rates.
- Update the EMI immediately.

Suggested initial value:

`8.5%`

This is an illustrative example, not a representation of current market rates.

### D. Loan Tenure

Label: `Loan Tenure (Years)`

Purpose: Repayment duration.

Requirements:

- Numeric input.
- Slider control.
- Clearly communicate that the input is measured in years.
- Update EMI and total interest immediately.

Suggested initial value:

`20 years`

Suggested configurable range:

`1–40 years`

The supported maximum must be clearly communicated and should be configurable.

---

# 8. EMI Calculation Logic

The calculation must be mathematically correct.

## 8.1 Loan Principal

Calculate the loan principal as:

`Loan Principal = Property Price − Down Payment`

Example:

- Property Price: ₹50,00,000
- Down Payment: ₹10,00,000
- Loan Principal: ₹40,00,000

Do not calculate EMI using the entire property price when a down payment has been provided.

## 8.2 Monthly Interest Rate

Convert the annual interest rate to a monthly decimal rate:

`Monthly Rate = Annual Interest Rate / 12 / 100`

## 8.3 Number of Monthly Payments

`Number of Payments = Loan Tenure in Years × 12`

## 8.4 Monthly EMI Formula

For a standard fixed-rate amortizing loan:

`EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)`

Where:

- `P` = Loan Principal
- `r` = Monthly Interest Rate as a decimal
- `n` = Total Number of Monthly Payments

If the monthly interest rate is zero:

`EMI = Loan Principal / Number of Payments`

Implement this edge case explicitly to prevent division by zero.

## 8.5 Total Repayment

`Total Repayment = Monthly EMI × Number of Payments`

## 8.6 Total Interest

`Total Interest = Total Repayment − Loan Principal`

## 8.7 Down Payment Percentage

`Down Payment Percentage = Down Payment / Property Price × 100`

When property price is zero or invalid, do not divide by zero. Display a sensible empty or validation state.

### Calculation Precision

- Keep full precision during calculations.
- Round monetary values for presentation, not prematurely during intermediate calculations.
- Display currency using Indian number grouping.
- Use consistent rounding rules.
- Ensure the total repayment and total interest are derived from the same EMI result.

---

# 9. EMI Calculator Results Panel

The results panel must make the primary result immediately visible.

### Primary Result

**Monthly EMI**

Display the monthly EMI prominently using a large, high-contrast numerical style.

Use Prestige Charcoal for the primary interface and a restrained brand accent for emphasis.

### Secondary Results

Display:

- Loan Principal
- Total Interest
- Total Repayment
- Down Payment
- Loan Tenure
- Interest Rate

The first three supporting financial metrics may be emphasized according to the layout.

### Example Expected Calculation

For the following inputs:

| Input | Value |
|---|---:|
| Property Price | ₹50,00,000 |
| Down Payment | ₹10,00,000 |
| Loan Principal | ₹40,00,000 |
| Annual Interest Rate | 8.5% |
| Loan Tenure | 20 years |

The approximate result should be:

| Result | Approximate Value |
|---|---:|
| Monthly EMI | ₹34,713 |
| Total Repayment | ₹83.31 lakh |
| Total Interest | ₹43.31 lakh |

These are reference values for validating the implementation. Minor differences may occur because of rounding.

### Principal vs Interest Visualization

Include a simple, accessible visual breakdown showing:

- Principal
- Total Interest

A restrained horizontal bar or donut chart is acceptable.

The chart must:

- Update when inputs change.
- Use a consistent, restrained palette.
- Include readable labels.
- Provide the underlying values as text.
- Remain understandable without relying on color alone.
- Avoid introducing unnecessary charting dependencies if a simple CSS visualization is sufficient.

Do not allow the visualization to dominate the calculator.

---

# 10. Advanced EMI Results

Provide an expandable section labelled:

**View Repayment Breakdown**

This section should show a repayment schedule with:

- Month
- Opening Balance
- EMI
- Principal Paid
- Interest Paid
- Closing Balance

The schedule must be calculated using the same monthly interest and payment assumptions as the primary calculator.

### Schedule Requirements

- Generate the schedule client-side.
- Keep calculations consistent with the EMI result.
- Account for rounding differences in the final payment.
- Ensure the closing balance reaches zero, subject to monetary rounding.
- Avoid creating unnecessarily large rendered tables by default.
- Use a scrollable table or pagination if required.
- Make the table usable on mobile.
- Provide a clear empty state for invalid inputs.

The schedule should remain collapsed by default so the primary calculator stays compact.

---

# 11. Calculator Input Synchronization

Every input must remain synchronized with its corresponding slider.

For example:

If a user changes the property price from ₹50,00,000 to ₹60,00,000:

- The property price slider must update.
- The loan principal must update.
- The EMI must recalculate.
- The total interest must recalculate.
- The total repayment must recalculate.
- The visualization must update.
- The repayment schedule must reflect the new values.

The same behavior must apply to down payment, interest rate, and tenure.

Use controlled React state and reusable input components.

Avoid duplicated state that can become inconsistent.

Do not require a form submission or refresh to calculate results.

---

# 12. Calculator Two — Maharashtra Stamp Duty & Registration

## Objective

Build a fully functional calculator that estimates stamp duty and registration charges associated with a property transaction in Maharashtra.

This calculator is especially important for visitors evaluating the total cost of purchasing property beyond the advertised property price.

### Important Financial Accuracy Rule

**Maharashtra stamp duty and registration charges must not be treated as universally fixed rates for every transaction.**

Applicable charges may depend on factors such as:

- Property location
- Municipal or local jurisdiction
- Property type
- Transaction category
- Buyer eligibility and applicable concessions
- Applicable government rules
- The relevant agreement value or other legally applicable valuation basis
- Registration fee rules and applicable caps or minimums

Do not present the example rates in the supplied reference screenshot as universally valid or currently verified.

The calculator must use a clearly separated, configurable rate model.

Before public launch, the rate configuration must be reviewed against current authoritative Maharashtra government sources and applicable rules.

Do not invent or silently assume missing rates.

---

# 13. Stamp Duty Calculator Inputs

## 13.1 Property Agreement Value

Label: `Property Agreement Value (₹)`

Purpose: The transaction value entered by the user for an indicative calculation.

Requirements:

- Numeric input.
- Indian currency formatting.
- Positive-value validation.
- Immediate recalculation.
- Sensible configurable input limits.

Suggested illustrative default:

`₹75,00,000`

The default is an example only and must not be presented as an actual property offer.

## 13.2 Buyer Profile

Label: `Buyer Profile`

Provide a dropdown for applicable buyer categories.

The options must correspond to actual categories supported by the configured legal calculation rules.

Potential options may include:

- Male buyer
- Female buyer
- Joint ownership

However, do not assume that a particular category automatically qualifies for a concession in every jurisdiction or transaction.

Where a joint-ownership calculation depends on ownership shares, eligibility, or additional legal conditions, the configuration must support those rules explicitly.

Do not implement misleading simplified rules that automatically grant a discount without checking the applicable configuration.

## 13.3 Property Location / Jurisdiction

Provide a jurisdiction selector if the calculator supports multiple rate profiles.

Potential dimensions may include:

- City or municipal jurisdiction
- Applicable local-body category
- Other relevant jurisdictional classifications

The initial implementation may use a limited set of verified rate profiles.

If a rate profile has not been verified, do not silently select it or present its output as an authoritative estimate.

Display a clear indication when a rate profile is illustrative or requires confirmation.

---

# 14. Stamp Duty & Registration Calculation Engine

Implement the calculation logic in a dedicated, testable utility module.

Do not place legal fee calculations directly inside presentation components.

Use a structured configuration model that separates:

1. Input values.
2. Applicable rate configuration.
3. Calculation rules.
4. Output values.
5. Explanatory disclaimers.

The model should support future updates without requiring a redesign of the calculator interface.

### Stamp Duty

The calculation should use the configured applicable rate and calculation base.

Conceptually:

`Stamp Duty = Applicable Calculation Base × Applicable Stamp Duty Rate`

However, the actual calculation base, concessions, rounding, and any special rules must follow the verified rules for the selected jurisdiction and transaction.

Do not assume that the agreement value is always the legally applicable base if the relevant rules require another valuation basis.

### Registration Charges

Registration charges must be calculated according to the verified applicable rule.

The rule configuration must be able to represent:

- Percentage-based charges where applicable.
- Minimum charges where applicable.
- Maximum caps where applicable.
- Fixed charges where applicable.
- Jurisdiction-specific exceptions where required.

Do not hardcode one registration fee cap as a universal rule for all transactions.

### Total Government Charges

`Total Government Charges = Stamp Duty + Registration Charges`

The displayed total must equal the sum of the displayed components.

All calculations must use the same verified rule configuration.

### Illustrative Reference

The supplied screenshot shows an example with:

- Agreement Value: ₹75,00,000
- Illustrative Stamp Duty Rate: 6%
- Illustrative Registration Charge: ₹30,000
- Illustrative Total: ₹4,80,000

This example may be used to test the UI's arithmetic, but **must not be represented as a verified current Maharashtra calculation**.

Production calculations must follow the selected verified rate profile.

---

# 15. Stamp Duty Results Panel

Display the following results clearly:

- Property Agreement Value
- Applicable Stamp Duty Rate
- Estimated Stamp Duty
- Estimated Registration Charges
- Total Estimated Government Charges

Use a refined results panel with a restrained light-neutral or pale-gold surface.

The total should be visually prominent.

The component values should remain readable and aligned.

Provide a concise explanation of the selected calculation assumptions.

Where appropriate, display:

- Selected jurisdiction
- Selected buyer profile
- Rate profile status
- Last verification date

Only display a verification date when the configuration has actually been verified.

---

# 16. Financial Transparency & Disclaimers

The calculators provide estimates, not official legal, banking, or financial quotations.

For the EMI Calculator, display:

"EMI estimates are indicative and depend on the selected interest rate, loan tenure, lender terms, and repayment assumptions. Actual loan terms may differ."

For the Stamp Duty Calculator, display:

"Stamp duty and registration charges depend on the applicable Maharashtra government rules, transaction details, property location, and buyer eligibility. This calculator provides an indicative estimate only. Confirm the applicable charges with the relevant authorities or a qualified professional before completing a transaction."

Do not claim:

- Guaranteed loan approval.
- Guaranteed interest rates.
- Guaranteed savings.
- Guaranteed property valuation.
- Guaranteed government charge accuracy without verified rules.

Disclaimers must be readable without dominating the design.

---

# 17. Visual Layout — Dedicated Page

## Desktop

Use a balanced two-column grid.

**Left card:**

Home Loan EMI Calculator.

**Right card:**

Maharashtra Stamp Duty & Registration Calculator.

Both cards should have comparable visual weight and consistent spacing.

### Calculator Card Structure

Each calculator card should contain:

1. Icon and title.
2. Subtle divider.
3. Input controls.
4. Results panel.
5. Relevant explanatory text.
6. Disclaimer.

For the EMI calculator, inputs and the results panel may use an internal two-column layout when space permits.

For the stamp duty calculator, use a clear input section followed by a prominent results panel.

Do not force identical internal layouts if they reduce usability.

## Tablet

Use either a two-column layout with sufficient width or a vertically stacked layout where needed.

Do not compress numeric inputs to the point where they become difficult to use.

## Mobile

Stack the calculators vertically.

Each calculator should occupy the available width without horizontal overflow.

Use a clear order:

1. Calculator title.
2. Input fields.
3. Sliders.
4. Primary result.
5. Secondary results.
6. Breakdown.
7. Disclaimer.

The most important result must be visible without excessive scrolling.

---

# 18. Interaction Design

All interactions must feel responsive and deliberate.

Implement:

- Synchronized sliders and numeric inputs.
- Immediate recalculation.
- Clear field labels.
- Input validation.
- Inline validation messages.
- Visible focus states.
- Subtle hover states.
- Expandable repayment breakdown.
- Accessible dropdowns.
- Accessible result updates.
- Clear reset behavior.

Avoid:

- Excessive animation.
- Animated numbers that reduce readability.
- Large bouncing transitions.
- Distracting chart effects.
- Unnecessary modals.
- Automatically scrolling the page after every input change.

Use subtle transitions consistent with the global SAI PRESTIGE design system.

Respect reduced-motion preferences.

---

# 19. Input Validation & Edge Cases

The calculators must handle invalid inputs gracefully.

### EMI Calculator

Handle:

- Empty fields.
- Zero property price.
- Negative amounts.
- Down payment exceeding property price.
- Down payment equal to property price.
- Zero loan principal.
- Zero interest rate.
- Invalid tenure.
- Interest rates outside the configured range.
- Decimal input.
- Very large values.
- Rapid slider changes.
- Browser refresh.
- Invalid or incomplete values while typing.

When the down payment equals the property price, the loan principal is zero.

In this case, do not display a misleading positive EMI. Display a clear zero-loan result and explain that no loan amount is being calculated.

During intermediate input editing, avoid unexpectedly resetting the user's value.

### Stamp Duty Calculator

Handle:

- Empty agreement value.
- Zero or negative values.
- Invalid buyer profile.
- Unsupported jurisdiction.
- Missing rate configuration.
- Unverified rate configuration.
- Invalid ownership shares where applicable.
- Charges below minimum thresholds.
- Charges above maximum caps.
- Decimal values.
- Very large values.

If a valid calculation cannot be produced because the applicable rules are missing or unverified, explain why and do not fabricate a result.

---

# 20. Functional Architecture

Use reusable, maintainable frontend components.

Suggested structure:

```text
src/
├── app/
│   └── emi-calculator/
│       └── page.tsx
├── components/
│   └── financial-tools/
│       ├── emi-calculator-preview.tsx
│       ├── emi-calculator.tsx
│       ├── stamp-duty-calculator.tsx
│       ├── calculator-card.tsx
│       ├── financial-result-card.tsx
│       ├── calculator-input.tsx
│       ├── calculator-slider.tsx
│       ├── repayment-breakdown.tsx
│       └── calculator-disclaimer.tsx
├── lib/
│   └── financial-calculations/
│       ├── emi.ts
│       ├── stamp-duty.ts
│       ├── currency.ts
│       └── validation.ts
└── config/
    └── stamp-duty-rates.ts
```

This is a suggested structure, not permission to duplicate existing components or utilities.

Inspect the current workspace first.

If equivalent components already exist, reuse or extend them instead of creating duplicates.

Keep calculation utilities independent from UI components.

---

# 21. Type Safety

Use TypeScript types for calculator inputs, outputs, and rate configurations.

Example conceptual types:

```ts
type EmiInputs = {
  propertyPrice: number;
  downPayment: number;
  annualInterestRate: number;
  tenureYears: number;
};

type EmiResults = {
  loanPrincipal: number;
  monthlyEmi: number;
  totalInterest: number;
  totalRepayment: number;
  numberOfPayments: number;
};

type StampDutyInputs = {
  agreementValue: number;
  buyerProfile: string;
  jurisdictionId: string;
};

type StampDutyResults = {
  calculationBase: number;
  stampDuty: number;
  registrationCharges: number;
  totalGovernmentCharges: number;
  rateProfileStatus: "verified" | "illustrative" | "unavailable";
};
```

Adapt these types to the final validated requirements.

Do not use `any` unnecessarily.

The UI must not directly mutate rate configuration or calculation results.

---

# 22. Currency Formatting

Use the Indian numbering system consistently.

Examples:

- ₹50,00,000
- ₹10,00,000
- ₹40,00,000
- ₹34,713
- ₹43,31,103

Use `Intl.NumberFormat` with the appropriate Indian locale and currency configuration where suitable.

Do not implement fragile manual comma insertion.

Ensure currency formatting does not interfere with numeric input editing.

---

# 23. Accessibility Requirements

Both calculators must follow accessible interaction patterns.

Requirements:

- Every input has an associated visible label.
- Sliders have accessible names and current values.
- Numeric inputs remain keyboard-accessible.
- Focus indicators are visible.
- Color contrast is sufficient.
- Validation errors are understandable.
- Error messages are associated with the relevant fields.
- Results are presented as readable text.
- Charts have text equivalents.
- Screen readers can identify the primary result.
- Dynamic result announcements do not become excessively verbose.
- Touch targets are appropriately sized.
- Reduced-motion preferences are respected.

Use semantic HTML and appropriate ARIA attributes only where necessary.

Do not use color alone to communicate errors or financial categories.

---

# 24. SEO Requirements

The dedicated calculator page must be designed for discoverability through traditional search and AI-powered search systems.

## Metadata

Suggested title:

`Home Loan EMI & Stamp Duty Calculator | SAI PRESTIGE`

Suggested meta description:

`Estimate home loan EMI, total interest, Maharashtra stamp duty and registration charges with SAI PRESTIGE's property financial calculators.`

These are proposed defaults and should be reviewed against the final page content.

Implement unique metadata through the Next.js Metadata API.

Also implement:

- Canonical URL.
- Open Graph metadata.
- Appropriate heading hierarchy.
- Semantic HTML.
- Crawlable navigation.
- Descriptive internal links.
- Fast page rendering.
- Mobile-friendly layouts.
- Optimized images and fonts where used.

The page must be indexable unless a project-level SEO rule explicitly requires otherwise.

## Structured Data

Evaluate whether relevant structured data is appropriate for the final page.

Do not add irrelevant schema merely to target search features.

FAQ structured data must not be added with the expectation that Google will necessarily display FAQ rich results.

Do not create false reviews, ratings, financial offers, or unsupported claims.

## Internal Linking

Provide meaningful links to:

- Buy Property.
- Projects.
- Properties.
- Relevant Locations.
- Home Loan Assistance.
- Relevant Real Estate Insights.
- Contact SAI PRESTIGE.

Use descriptive anchor text and avoid excessive keyword repetition.

## AI Search Readiness

Make the page understandable to search engines and answer engines through:

- Clear definitions.
- Direct explanations.
- Visible calculation formulas where appropriate.
- Accurate disclaimers.
- Structured headings.
- Useful FAQs.
- Consistent brand information.
- Crawlable content.

Do not use hidden text, fabricated claims, or AI-specific keyword tricks.

---

# 25. Frequently Asked Questions

Include a concise, genuinely useful FAQ section beneath the calculators.

Potential questions:

1. How is home loan EMI calculated?
2. How does a higher down payment affect EMI?
3. Does a longer loan tenure reduce monthly EMI?
4. How much interest will I pay over the loan tenure?
5. What is the difference between property price and loan principal?
6. What is stamp duty?
7. What are property registration charges in Maharashtra?
8. Do stamp duty charges vary by location or buyer eligibility?
9. Are the calculator results official quotations?
10. How can I enquire about a property with SAI PRESTIGE?

Answers must be accurate, concise, and consistent with the calculator's actual functionality.

Do not make unsupported legal or financial assertions.

---

# 26. Enquiry & Conversion Strategy

After the financial tools and FAQs, include a restrained conversion section.

Suggested heading:

**Found a Property You Love?**

Suggested supporting copy:

"Explore properties and projects with SAI PRESTIGE, or connect with our team for assistance with your property search."

Primary CTA:

**Explore Properties**

Destination:

`/properties`

Secondary CTA:

**Contact SAI PRESTIGE**

Destination:

`/contact`

Only use routes that exist or are established in the project's approved information architecture.

The conversion section must not interrupt calculator usage or obscure financial results.

---

# 27. Testing Requirements

Before marking the feature complete, verify the calculations independently.

## EMI Calculation Tests

Test at least:

- ₹50,00,000 property price, ₹10,00,000 down payment, 8.5% annual interest, 20 years.
- A different property price.
- A different down payment.
- A different interest rate.
- A shorter tenure.
- A longer tenure.
- Zero interest rate.
- Zero loan principal.
- Invalid input.
- Maximum supported input values.

Verify:

- Loan principal.
- Monthly EMI.
- Total repayment.
- Total interest.
- Repayment schedule.
- Input/slider synchronization.

Check that:

`Total Repayment ≈ Loan Principal + Total Interest`

Allow for the defined rounding policy.

## Stamp Duty Tests

Test:

- A verified rate profile.
- Each supported buyer profile.
- Each supported jurisdiction.
- Minimum charge conditions.
- Maximum cap conditions.
- Missing rate configuration.
- Unverified rate configuration.
- Invalid values.
- Registration fee calculations.
- Total charge calculations.

Verify that:

`Total Government Charges = Stamp Duty + Registration Charges`

The expected results must be based on the actual configured rules, not assumptions from the reference screenshot.

## UI Tests

Verify:

- Desktop layout.
- Tablet layout.
- Mobile layout.
- Keyboard navigation.
- Focus states.
- Input validation.
- Accessible results.
- Responsive sliders.
- Expandable repayment breakdown.
- Navigation to `/emi-calculator`.
- Homepage preview functionality.
- No horizontal overflow.

---

# 28. Acceptance Criteria

The feature is complete only when all of the following conditions are satisfied.

### Homepage

- [ ] Financial tools section appears at the approved position.
- [ ] Section follows the SAI PRESTIGE design system.
- [ ] EMI preview performs real calculations.
- [ ] Primary CTA navigates to `/emi-calculator`.
- [ ] Mobile layout is polished and usable.
- [ ] No unrelated homepage sections are redesigned.

### EMI Calculator

- [ ] All inputs work.
- [ ] Sliders and numeric inputs remain synchronized.
- [ ] Loan principal is correct.
- [ ] EMI formula is correct.
- [ ] Total interest is correct.
- [ ] Total repayment is correct.
- [ ] Zero-interest case works.
- [ ] Zero-principal case works.
- [ ] Currency formatting uses Indian grouping.
- [ ] Repayment breakdown is functional.
- [ ] Validation handles invalid inputs.

### Stamp Duty Calculator

- [ ] Agreement value input works.
- [ ] Buyer profile selection works.
- [ ] Supported jurisdiction selection works.
- [ ] Rate configuration is separated from the UI.
- [ ] Calculation logic follows the selected verified rules.
- [ ] Registration charge rules are correctly applied.
- [ ] Total charges are calculated correctly.
- [ ] Unverified rates are clearly identified.
- [ ] Unsupported configurations do not produce fabricated estimates.

### Design & Engineering

- [ ] Premium SAI PRESTIGE styling.
- [ ] Responsive across supported screen sizes.
- [ ] Accessible inputs and controls.
- [ ] Reusable components.
- [ ] Type-safe calculation utilities.
- [ ] No unnecessary dependencies.
- [ ] No backend introduced.
- [ ] SEO metadata implemented.
- [ ] No fabricated business or financial claims.
- [ ] No unrelated files or sections modified unnecessarily.
- [ ] Relevant tests pass.
- [ ] Production build succeeds.

---

# 29. Implementation Workflow

Follow the development methodology defined in `project_spec.md`.

### Stage 1 — Planning

Before coding:

1. Read the relevant project specifications.
2. Inspect the existing workspace.
3. Confirm the established design tokens.
4. Identify reusable components.
5. Define the calculator layout.
6. Define the calculation utilities.
7. Define the stamp duty configuration model.
8. Define responsive behavior.
9. Define SEO and accessibility requirements.
10. Produce the implementation plan.

Do not immediately start coding if the project's workflow requires planning and approval first.

### Stage 2 — Implementation

After approval:

1. Implement calculation utilities.
2. Implement validation and currency formatting.
3. Build reusable calculator inputs.
4. Build the EMI calculator.
5. Build the stamp duty calculator.
6. Build the results panels.
7. Implement the homepage preview.
8. Add the dedicated page.
9. Implement responsive behavior.
10. Implement metadata and internal links.

### Stage 3 — Validation

1. Verify calculation formulas.
2. Test edge cases.
3. Test rate configuration.
4. Test desktop and mobile layouts.
5. Test accessibility.
6. Test navigation.
7. Run relevant checks and production build.
8. Fix any issues before declaring completion.

---

# 30. Final Product Standard

The final experience must feel like a carefully crafted financial utility belonging to a premium real estate brand.

It must not look like a copied calculator template.

The result should combine:

**Premium Design + Accurate Calculations + Financial Transparency + Excellent UX + Mobile Responsiveness + SEO Readiness**

The homepage preview should encourage visitors to explore the financial tools.

The dedicated calculator page should help visitors understand their estimated financial commitments with minimal friction.

**Final directive:** Build both calculators as genuinely functional frontend experiences, use verified and configurable financial rules, preserve the SAI PRESTIGE brand identity, and follow the existing `project_spec.md` throughout planning, implementation, and validation.