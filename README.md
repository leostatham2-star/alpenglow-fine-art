# Alpenglow Fine Art

Fine art landscape photography portfolio and print shop for the fictional
photographer Elias Ward, based in Ridgway, Colorado. Single page application
with hash based navigation covering the home, gallery, photo detail, about,
prints, contact, and policy views.

Built with Next.js 16, React 19, Tailwind CSS 4, shadcn/ui, and Prisma
(SQLite) for the contact form and newsletter signups.

## Local development

```bash
npm install        # or bun install
cp .env.example .env
npm run db:push    # creates db/custom.db and generates the Prisma client
npm run dev        # starts the dev server on port 3000
```

Environment variables:

| Variable       | Required | Description                                          |
| -------------- | -------- | ---------------------------------------------------- |
| `DATABASE_URL` | yes      | SQLite file location, e.g. `file:../db/custom.db`    |

Relative `file:` paths are resolved against the `prisma/` folder.

## Deployment to Vercel

1. Push this repository to GitHub.
2. On vercel.com choose **Add New > Project** and import the repository.
   Vercel detects Next.js automatically; the default build settings work.
3. (Optional but recommended) Add the environment variable `DATABASE_URL`
   in **Settings > Environment Variables**, e.g. `file:/tmp/custom.db`.
   Serverless instances have an ephemeral filesystem, so SQLite writes do
   not persist between invocations.
4. Deploy.

### About form submissions on Vercel

The contact form and newsletter signup write to SQLite when the database is
reachable. On a fresh Vercel deployment without a persistent database the
routes fail gracefully: submissions are printed to the function logs
(visible under **Deployments > Runtime Logs**) and visitors still see the
confirmation state.

For durable storage, connect a hosted Postgres (for example Neon or Vercel
Postgres), switch the Prisma provider to `postgresql`, and set
`DATABASE_URL` in the Vercel project settings.

## Sandbox notes

The z.ai sandbox serves the dev server on port 3000. A production start uses
the standalone output:

```bash
npm run build
npm run start
```

`next.config.ts` enables `output: "standalone"` only outside Vercel, so the
same repository builds correctly on both platforms.

## Project structure

```
src/app/page.tsx                     SPA root and hash router setup
src/hooks/useHashRoute.ts            tiny hash based router
src/lib/photos.ts                    photo catalog, site constants, print sizes
src/components/site/header.tsx       navigation header
src/components/site/footer.tsx       footer with designer credit
src/components/site/views/*          home, gallery, photo, about, prints, contact, policies
src/app/api/contact/route.ts         contact form endpoint
src/app/api/newsletter/route.ts      newsletter signup endpoint
public/images/                       all photography used by the site
```
