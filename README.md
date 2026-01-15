# BioCure Launchpad

BioCure Launchpad is a modern landing page for a telehealth service specializing in hormone optimization. This project has been migrated from a Vite/React SPA to **Next.js 15 (App Router)** for improved performance, SEO, and server-side rendering capabilities.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (based on Radix UI)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: [TanStack Query](https://tanstack.com/query/latest) (React Query)
- **Forms**: React Hook Form + Zod
- **Calendar Booking**: [Go High Level](https://www.gohighlevel.com/) (Embedded Widget)

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd biocure-launchpad
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build & Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

This project uses the Next.js **App Router**.

- `src/app`: Contains the application routes, layouts, and global styles.
- `src/components`: Reusable UI components and page sections.
  - `calendar/`: Go High Level calendar widget integration.
  - `modals/`: Modal components (CalendarModal).
  - `sections/`: Landing page sections.
  - `layout/`: Navbar, Footer.
  - `ui/`: shadcn/ui base components.
- `src/content`: Centralized content management (`site-content.ts`).
- `src/lib`: Utility functions and helpers.
- `src/hooks`: Custom React hooks.
- `public`: Static assets (images, icons).

## Migration Notes

This project was originally a Lovable (Vite) project. It has been refactored to:
- Use `src/app/layout.tsx` as the root layout instead of `index.html`.
- Use `src/app/page.tsx` as the main entry point.
- Implement a `Providers` component for client-side context (React Query, Tooltips).
- Use `next/image` for optimized image rendering.
- Use `next/font` for optimized Google Fonts loading.
