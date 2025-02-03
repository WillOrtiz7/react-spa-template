# React SPA Template

This project is a template for building a React Single Page Application (SPA) with various modern technologies.

## Prerequisites

- Node.js (v18 or higher)

## Getting Started

- Clone the repo
- Install deps with `pnpm i`
- Setup Supabase project
- Setup Sentry project for monitoring
- Fill your `.env.local` with the following
  - VITE_SUPABASE_URL
  - VITE_SUPABASE_ANON_KEY
  - VITE_SENTRY_DSN
- Fill you `.env` with the following
  - SUPABASE_PROJECT_ID
- Run the `generate:types` script for full type safety on your Supabase client

## Technologies used

- Vite (Bundler)
- TailwindCSS (CSS solution)
- ShadCN (Component library)
- TanstackRouter (Client side router)
- TanstackQuery (Data fetching)
- Jotai (Global state)
- Supabase (Backend as a Service)
- Sentry (Monitoring)
