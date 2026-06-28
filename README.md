# Harsha Clinics Website

A modern, responsive healthcare clinic website built with Next.js 16, React 19, and Tailwind CSS.

## Website Overview

Harsha Clinics is a multi-specialty healthcare clinic in Madhapur, Hyderabad, dedicated to providing compassionate, affordable, and quality healthcare services. This website serves as the digital presence for the clinic, offering information about services, online appointment booking, and patient engagement.

## Features Implemented

### Core Pages

1. **Homepage** (`/`)
   - Hero section with clinic tagline and quick CTAs
   - Animated statistics showing clinic metrics (2000+ patients, 4.9★ rating)
   - About section with mission, vision, and values
   - Services showcase with 6 service categories
   - Health packages comparison
   - Testimonials carousel with auto-play and navigation
   - FAQ accordion with expandable Q&A
   - Contact section with appointment form
   - Floating emergency call button

2. **About Page** (`/about`)
   - Comprehensive clinic history and story
   - Mission, Vision, and Values
   - Track record statistics
   - 6 key reasons why patients trust the clinic
   - Location and business hours

3. **Services Page** (`/services`)
   - Detailed service cards for all offerings
   - Service details with comprehensive information:
     - General Physician Services
     - Emergency & Trauma Care
     - Preventive Health Checkups
     - Specialty Care Services
   - Why choose the clinic section

4. **Health Packages Page** (`/packages`)
   - 6 premium health package cards
   - Package comparison table
   - Package benefits and features
   - Package FAQs
   - Call-to-action sections

5. **Diagnostics Page** (`/diagnostics`)
   - Laboratory services overview
   - Key features (Same-Day Results, Digital Reports, Home Collection)
   - Modern equipment highlights
   - Comprehensive test categories
   - Step-by-step process explanation

6. **Appointment Booking Page** (`/appointment`)
   - Advanced appointment form with:
     - Full name and phone
     - Email address
     - Date and time selection
     - Concern description
     - Form validation and success message
   - Quick contact sidebar with clinic details
   - "Why Book With Us" benefits
   - Alternative booking methods (Phone, WhatsApp, Walk-in)
   - Appointment FAQs

### Components

1. **Header** (`components/header.tsx`)
   - Sticky navigation with mobile responsive hamburger menu
   - Clinic logo and branding
   - Navigation links to all major pages
   - Call button with clinic phone number
   - Responsive design for mobile, tablet, and desktop

2. **Footer** (`components/footer.tsx`)
   - About section
   - Contact information with clickable links
   - Location details with Google Maps link
   - Quick links to main pages
   - Clinic rating display

3. **Service Card** (`components/service-card.tsx`)
   - Icon and title display
   - Service items list with "more" indicator
   - Hover effects and smooth transitions

4. **Package Card** (`components/package-card.tsx`)
   - Package name, price, and duration
   - Feature list with checkmarks
   - "Popular" badge for featured packages
   - Select button for booking

5. **Testimonial Card** (`components/testimonial-card.tsx`)
   - Star rating display
   - Patient testimonial text
   - Patient name and verification badge

6. **Testimonial Carousel** (`components/testimonial-carousel.tsx`)
   - Auto-rotating carousel with 5-second interval
   - Manual navigation with previous/next buttons
   - Dot indicators for slide selection
   - Progress counter (e.g., "1 of 4")

7. **FAQ Item** (`components/faq-item.tsx`)
   - Expandable accordion with chevron animation
   - Smooth expand/collapse transitions
   - Question and answer content

8. **Appointment Form** (`components/appointment-form.tsx`)
   - Comprehensive form with 6 fields
   - Icon-enhanced input fields
   - Time slot selection dropdown
   - Form validation
   - Success feedback after submission

9. **Animated Stats** (`components/animated-stats.tsx`)
   - Intersection Observer for visibility detection
   - Staggered animation on scroll
   - Responsive grid layout

### Design System

- **Color Palette**: Healthcare-inspired professional colors
  - Primary: Deep Blue (Trust and professionalism)
  - Secondary: Warm Orange/Gold (Care and warmth)
  - Backgrounds: Clean whites and light grays
  - Text: Professional grays and dark tones

- **Typography**: Maximum 2 font families
  - Heading: Geist Sans (modern, clean)
  - Body: Geist Sans (consistent, readable)

- **Layout**: Mobile-first responsive design
  - Flexbox for linear layouts
  - CSS Grid for 2D layouts
  - Tailwind spacing scale for consistency

### Data Structure

- **lib/data.ts**: Centralized data management
  - Clinic information and contact details
  - 6 service categories with details
  - 6 health package offerings
  - 4 diagnostic test categories
  - 10 "Why Choose Us" features
  - 4 patient testimonials
  - 8 FAQ items
  - 4 statistics

### SEO Optimization

- SEO-optimized metadata in layout.tsx
- Semantic HTML structure
- Sitemap.xml for search engine indexing
- Robots.txt for crawler directives
- Mobile-responsive design
- Fast page load performance

### Additional Features

- **Sticky Call Button**: Fixed floating button on every page for quick contact
- **WhatsApp Integration**: Direct WhatsApp booking link
- **Google Maps**: Embedded location link
- **Phone Integration**: Click-to-call buttons throughout the site
- **Form Validation**: Client-side validation on appointment form
- **Success Messages**: User feedback on form submission
- **Responsive Images**: Optimized for all screen sizes
- **Accessibility**: ARIA labels and semantic HTML

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── globals.css             # Global styles and design tokens
│   ├── page.tsx                # Homepage
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── packages/
│   │   └── page.tsx            # Health packages page
│   ├── diagnostics/
│   │   └── page.tsx            # Diagnostics page
│   └── appointment/
│       └── page.tsx            # Appointment booking page
├── components/
│   ├── header.tsx              # Navigation header
│   ├── footer.tsx              # Footer
│   ├── service-card.tsx        # Service display card
│   ├── package-card.tsx        # Package display card
│   ├── testimonial-card.tsx    # Single testimonial
│   ├── testimonial-carousel.tsx # Rotating testimonials
│   ├── faq-item.tsx            # Expandable FAQ
│   ├── appointment-form.tsx    # Appointment booking form
│   └── animated-stats.tsx      # Animated statistics
├── lib/
│   └── data.ts                 # Centralized data
├── public/
│   ├── sitemap.xml             # SEO sitemap
│   └── robots.txt              # Crawler directives
└── package.json
```

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Runtime**: React 19.2
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: pnpm

## Setup and Installation

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run development server**:
   ```bash
   pnpm dev
   ```

3. **Build for production**:
   ```bash
   pnpm build
   ```

4. **Start production server**:
   ```bash
   pnpm start
   ```

## Customization

### Update Clinic Information

Edit `lib/data.ts` to update:
- Clinic name and contact details
- Address and location
- Business hours
- Services offered
- Health packages
- Testimonials
- FAQs

### Modify Colors

Update color tokens in `app/globals.css`:
- Primary color (blue/trust)
- Secondary color (orange/warmth)
- Accent colors
- Background colors

### Add New Pages

1. Create new folder in `app/` directory
2. Add `page.tsx` file
3. Import Header and Footer components
4. Update navigation links in `components/header.tsx`

## Future Enhancement Opportunities

1. **Backend Integration**
   - Connect appointment form to backend
   - Email notifications for appointments
   - Admin dashboard for appointment management

2. **Content Management**
   - CMS integration for easy content updates
   - Blog section for health tips
   - Doctor profiles page

3. **Advanced Features**
   - Online prescription system
   - Health records portal
   - Telemedicine/Video consultations
   - Patient reviews and ratings system

4. **E-commerce**
   - Online pharmacy
   - Health product store
   - Prescription delivery

5. **Analytics & SEO**
   - Google Analytics integration
   - Search Console setup
   - Rich snippets for healthcare
   - Local SEO optimization

6. **Performance**
   - Image optimization with next/image
   - API route optimization
   - Database caching

7. **Security**
   - Patient data protection (HIPAA compliance)
   - Secure authentication system
   - Encrypted communications

## Deployment

The site is ready for deployment on:
- **Vercel** (Recommended - Next.js native)
- **AWS Amplify**
- **Netlify**
- **Digital Ocean**
- **Any Node.js hosting**

### Deploy to Vercel

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy with automatic CI/CD

## Support and Maintenance

- Regular content updates required
- Monitor analytics and user engagement
- Keep testimonials and reviews current
- Update services and packages as needed
- Test booking form functionality
- Monitor site performance metrics

## License

This website is developed for Harsha Clinics, Madhapur, Hyderabad.

## Contact

For website updates or technical support, contact the development team.

---

Built with care for Harsha Clinics - Trusted Family Clinic in Madhapur, Hyderabad
# Harsha-Clinics
