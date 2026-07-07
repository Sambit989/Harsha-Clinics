# Reusable Clinic Website Template

A premium, fully-configurable, and highly-reusable multi-specialty healthcare clinic template built with **Next.js**, **React**, and **Tailwind CSS**. 

This repository has been designed as a white-label clinical template. Onboarding a new clinic client requires no changes to page markup or layouts—simply modify the central configuration file and style sheets.

---

## 🚀 How to Onboard a New Client

To deploy this website for a new clinic client, complete the following steps:

### 1. Update Clinic Configuration
Open [lib/clinicConfig.ts](file:///C:/Users/sambi/Downloads/Harsha-Clinics-main/Harsha-Clinics-main/lib/clinicConfig.ts) and modify all fields with the client's information. This centralizes:
- Clinic Profile (Name, rating, reviews, tagline, description)
- Contact details (Phone numbers, WhatsApp number, email, emergency phone)
- Business location & working hours
- Social media links (Facebook, Instagram, LinkedIn, Twitter)
- Google Maps search/embed links
- Dynamic Page Content (Services details, health packages, diagnostic categories, package comparisons, FAQs, stats, and testimonials)
- SEO Defaults (Sitemap base domain, page meta titles, and descriptions)

### 2. Replace Branding Assets
Place new branding files in the `public/` directory (retaining the exact filenames):
- `public/icon.svg` — Primary vector favicon & textless logo icon
- `public/icon-light-32x32.png` — Tab favicon for light mode
- `public/icon-dark-32x32.png` — Tab favicon for dark mode
- `public/apple-icon.png` — Apple mobile touch favicon
- `public/placeholder-logo.png` / `placeholder-logo.svg` — Main logo files (if `clinicConfig.logo.type` is set to `'image'`)

### 3. Update Brand Colors
Open [app/globals.css](file:///C:/Users/sambi/Downloads/Harsha-Clinics-main/Harsha-Clinics-main/app/globals.css) and customize the OKLCH theme colors to match the client's brand guidelines:
- `--primary` / `--primary-foreground`
- `--secondary` / `--secondary-foreground`
- `--accent` / `--accent-foreground`

---

## 📋 Pre-Delivery Launch Checklist
Before deploying the website to production for a new client, verify that all checklist items are reviewed and updated:

- [ ] **Clinic Profile**
  - [ ] Clinic name matches branding
  - [ ] Tagline matches marketing requirements
  - [ ] Rating and reviews count updated
- [ ] **Contact Details**
  - [ ] Primary phone number verified
  - [ ] Emergency support number verified
  - [ ] Email address verified and operational
  - [ ] WhatsApp click-to-chat API number matches (`whatsappNumber` digits-only)
- [ ] **Location & Map**
  - [ ] Address street, area, city, state, and zip code verified
  - [ ] Google Maps search link redirects to the correct pin location
  - [ ] Working hours match operational timing
- [ ] **Media & Branding**
  - [ ] Dynamic logo block initials match new name (or image logo set)
  - [ ] Emojis/icons correspond to services offered
  - [ ] Favicon, Apple Touch Icon, and logos updated in `public/` folder
- [ ] **SEO & Dynamic Sitemaps**
  - [ ] Dynamic SEO title matches keyword guidelines
  - [ ] Meta description written using target location keywords
  - [ ] Dynamic sitemap base domain updated (`clinicConfig.seo.domain`)
  - [ ] Dynamic robots rules checked
- [ ] **Analytics & Deployments**
  - [ ] Setup tracking codes (e.g. Google Analytics or Vercel Web Analytics)
  - [ ] Verify form submissions on the appointment page
  - [ ] Database credentials (if using Atlas) or fallback local storage verified

---

## 🛠️ Tech Stack & Development

- **Framework**: Next.js (App Router)
- **UI Components**: React, Tailwind CSS, Shadcn, Lucide Icons
- **Database Fallback**: Offline-first MongoDB routing (stores data in MongoDB or falls back to local `data/appointments.json` file if server is disconnected).

### Commands
```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build the production bundle
npm run build

# Start production server
npm run start
```
