# SAI PRESTIGE — Luxury Real Estate Advisory & Developments

[![Production Domain](https://img.shields.io/badge/Production%20Domain-saiprestigerealestate.com-c5a880?style=flat-square)](https://saiprestigerealestate.com)
[![Next.js](https://img.shields.io/badge/Next.js-16.4.5-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers%20OpenNext-F38020?style=flat-square&logo=cloudflare)](https://developers.cloudflare.com/workers/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%20v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

A premier, production-grade multi-page real estate web application built for **SAI PRESTIGE**, representing prime residential developments, bespoke commercial spaces, and comprehensive property advisory in Navi Mumbai, Maharashtra.

---

## 🏛️ Architecture & Technology Stack

- **Framework:** Next.js 16.4.5 (App Router, Turbopack, React 19)
- **Deployment Platform:** Cloudflare Workers via `@opennextjs/cloudflare`
- **Styling:** Tailwind CSS v4 & custom prestige color system
- **Typography:** Plus Jakarta Sans (Headings) & Inter (Body)
- **Smooth Scroll:** Lenis with accessibility `prefers-reduced-motion` compliance
- **Form Security:** Cloudflare Turnstile token verification + Honeypot protection
- **Email Delivery:** Resend transactional email API with dual notification routing
- **Analytics:** Privacy-compliant Google Analytics 4 (zero PII transmitted)
- **Structured Data:** Schema.org JSON-LD (`RealEstateAgent`, `WebSite`, `PostalAddress`)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### 2. Environment Configuration
Copy the provided environment template to `.env.local`:

```bash
cp .env.example .env.local
```

Populate `.env.local` with your development keys:
- `RESEND_API_KEY`: Resend transactional API key
- `RESEND_FROM_EMAIL`: Verified sender (default: `Sai Prestige <contact@saiprestigerealestate.com>`)
- `CONTACT_TO_EMAIL`: Dedicated admin notification inbox (`sai.prestige01@gmail.com`)
- `TURNSTILE_SECRET_KEY`: Cloudflare Turnstile server-side secret key
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: Cloudflare Turnstile client-side site key
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`)

### 3. Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📦 Build & Cloudflare Deployment

### Standard Next.js Production Build:
```bash
npm run build
```

### Cloudflare Worker Bundle:
```bash
npm run build:worker
```

### Preview Worker Locally:
```bash
npm run preview:worker
```

### Deploy to Cloudflare:
```bash
npm run deploy
```

---

## 🔒 Security & Privacy

- **Zero Credential Exposure:** `.env.local` and all private secrets are strictly excluded from version control.
- **Bot Mitigation:** Submissions are verified against Cloudflare Turnstile before triggering email delivery.
- **Conversion Safety:** Thank-you conversion endpoints are strictly excluded from search crawlers (`noIndex: true`, `robots.txt` disallow) and protected against direct URL manipulation.
- **Security Headers:** Strict HTTP response headers (`X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`).

---

## 📍 Business Information

- **Brand:** SAI PRESTIGE
- **Location:** Shop No. 03, Plot No. 172, Dream Heritage, Sector 17, Ulwe, Navi Mumbai, Maharashtra 410206
- **Contact:** +91 93264 33965 / +91 93217 64640
- **Official Domain:** [https://saiprestigerealestate.com](https://saiprestigerealestate.com)
