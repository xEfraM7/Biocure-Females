# BioCure Launchpad | Project Context

## Project Overview
BioCure Launchpad is a premium, high-performance landing page for a telehealth service specializing in **hormone optimization**. The application is designed to convert visitors into patients by showcasing professional expertise, clear benefits, and a seamless user experience.

## Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Scrolling**: Lenis (Smooth Scroll)
- **Data Fetching**: TanStack Query (React Query)
- **Forms**: React Hook Form + Zod
- **Calendar Booking**: Go High Level (Embedded Widget)

## Design Principles
- **Aesthetic**: Premium, modern, medical-tech aesthetic.
- **Visuals**: Use of vibrant gradients, glassmorphism, and subtle micro-animations.
- **Responsiveness**: Fully responsive and mobile-first.
- **Typography**: `Poppins` for headings and `Open Sans` for body text.

## File Structure
- `src/app/`: Next.js App Router core (layouts, pages, providers).
- `src/components/`:
  - `calendar/`: Go High Level calendar widget (`GHLCalendarWidget.tsx`).
  - `common/`: Reusable basic components (SmoothScroll, etc.).
  - `layout/`: UI structure (Navbar, Footer).
  - `modals/`: Modal components (`CalendarModal.tsx`).
  - `sections/`: High-level page sections (Hero, Features, etc.).
  - `ui/`: shadcn/ui base components.
- `src/content/`: Centralized content management (`site-content.ts`).
- `src/lib/`: Shared utility functions and configurations.
- `src/hooks/`: Custom React hooks.
- `public/`: Static assets (images, icons).

## Integrations
### Go High Level Calendar
- **Calendar ID**: `yLMUmpEtzQioIMeq9VQg`
- **Location ID**: `PsWjpnbWPFGvoZdwuZ59`
- **Widget**: Embedded iframe in `CalendarModal` for appointment booking.

### Centralized Content
All UI text is managed in `src/content/site-content.ts` for easy updates without touching components.

## Key Workflows
- **Migration**: The project was migrated from Vite/React (Lovable) to Next.js 15.
- **Components**: New UI components should follow the shadcn/ui pattern and use Tailwind for styling.
- **Aesthetics**: Always prioritize a "premium" feel. Avoid default/plain designs.

## Contact/Brand Information
- **Brand**: BioCure
- **Main Service**: Hormone Optimization Telehealth

---

## Recent Changes (2026-01-15)

### Logo
- Increased navbar logo size from 48x48 to 72x72 pixels for better visibility.

### Call to Action
- Updated all CTA buttons from "Schedule Your Consultation" to **"Schedule Your Free 15-Min Intro Call"**.
- Affected areas: Navbar, Hero Section, How It Works (Step 1), Final CTA, Lead Modal.

### Booking Rules
- Configured Go High Level calendar to require **minimum 1 day advance notice** (disables same-day booking).
- Setting: `allowBookingAfter: 1`, `allowBookingAfterUnit: "days"` in GHL dashboard.

### Pricing Section
- Removed price display ($125) from the pricing card.
- Removed price anchor text ("Less than your gym membership...").
- Kept: Description, CTA button, and features list.

### Testimonials
- Replaced reviews that mentioned orthopedic therapies with general wellness reviews.
- **Removed**: Jordan Alonso (sciatic pain), Cary Lopez (injections/PRP), Gisele Blain (chiropractic), Artemio Garcia.
- **Added**: Luisa Belo, Sonny Leon, Annmarie Bruzzo, Denise Suarez.
- **Kept**: Jeanfranco Ciaramella, Lawrence Serrahn.
