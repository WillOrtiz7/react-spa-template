# React SPA Template

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/WillOrtiz7/react-spa-template)

This project is a template for building a React Single Page Application (SPA) with various modern technologies.

## Prerequisites

- Node.js (v18 or higher)

## Getting Started

- Clone the repo
- Install deps with `pnpm i`
- [Setup Supabase project](https://supabase.com/)
- [Setup Sentry project for monitoring](https://sentry.io/)
- Fill your `.env.local` with the following
  - `VITE_SUPABASE_URL=<https://<supabase_project_id>.supabase.co>`
  - `VITE_SUPABASE_ANON_KEY=<supabase_anon_key>`
  - `VITE_SENTRY_DSN=<sentry_dsn>`
- Fill you `.env` with the following
  - `SUPABASE_PROJECT_ID=<supabase_project_id>`
- Run `pnpm generate:types`for full type safety when querying for data via the SupabaseJS client
- Start the app locally by running `pnpm dev`

## Technologies used

- [Vite](https://vitejs.dev/) (Bundler)
- [TailwindCSS](https://tailwindcss.com/) (CSS solution)
- [ShadCN](https://ui.shadcn.com/) (Component library)
- [TanstackRouter](https://tanstack.com/router) (Client-side router)
- [TanstackQuery](https://tanstack.com/query) (Data fetching)
- [Jotai](https://jotai.org/) (Global state)
- [Supabase](https://supabase.com/) (Backend as a Service)
- [Sentry](https://sentry.io/) (Monitoring)
