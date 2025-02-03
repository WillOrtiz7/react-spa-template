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

- [Vite](https://vitejs.dev/) (Bundler)
- [TailwindCSS](https://tailwindcss.com/) (CSS solution)
- [ShadCN](https://ui.shadcn.com/) (Component library)
- [TanstackRouter](https://tanstack.com/router) (Client-side router)
- [TanstackQuery](https://tanstack.com/query) (Data fetching)
- [Jotai](https://jotai.org/) (Global state)
- [Supabase](https://supabase.com/) (Backend as a Service)
- [Sentry](https://sentry.io/) (Monitoring)
