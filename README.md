# Vinext Boilerplate

Minimal Next.js web boilerplate with:

- Next.js 16 Pages Router
- React 19
- Prisma 7 + PostgreSQL
- `@t3-oss/env-nextjs` runtime env parsing
- `oxfmt` and `oxlint`
- `vinext` for local dev and Cloudflare-targeted builds
- `wrangler` for Cloudflare Workers deployment

## Prerequisites

- Node.js 24+
- `pnpm` 10+
- PostgreSQL access if you plan to run Prisma queries

## Setup

Install dependencies:

```bash
pnpm install
```

Create a local env file:

```bash
cp .env.example .env
```

Sync the sample Prisma schema when your database is ready:

```bash
pnpm db:push
```

Start the app:

```bash
pnpm dev
```

## Common scripts

- `pnpm dev`: start the vinext development server
- `pnpm build`: create the Cloudflare-targeted production bundle with Vite
- `pnpm start`: run the built app locally
- `pnpm deploy`: build and deploy to Cloudflare Workers
- `pnpm deploy:dry-run`: build the deploy artifact without publishing it
- `pnpm vinext:check`: scan for vinext compatibility issues
- `pnpm cf-typegen`: generate `cloudflare-env.d.ts` from `wrangler.jsonc`
- `pnpm lint`: run Oxfmt checks and Oxlint
- `pnpm format:write`: format supported files with Oxfmt
- `pnpm typecheck`: run TypeScript checks
- `pnpm db:push`: push the Prisma schema to your database
- `pnpm db:studio`: open Prisma Studio

## Project layout

- `src/env.ts`: runtime env validation and defaults
- `src/server/db.ts`: Prisma singleton using the Postgres adapter
- `prisma/schema.prisma`: sample `Post` model and Prisma client generator
- `wrangler.jsonc`: Cloudflare Workers runtime configuration

## Cloudflare

Authenticate Wrangler before the first deploy:

```bash
wrangler login
```

Then deploy:

```bash
pnpm deploy
```

`wrangler.jsonc` intentionally does not include an `account_id`. Supply it through Wrangler login state or environment configuration when you wire the project to a real account.
