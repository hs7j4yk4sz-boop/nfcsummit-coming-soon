# www.nfcsummit.com

The site of **NFC Summit 2027** (27–29 May 2027, Unicorn Factory, Lisbon), and the
`/api/sponsors` relay that the nonfungibleconference.com home page reads.

## How it is deployed (checked on 25 November 2026)

| What | Where |
|---|---|
| Hosting | Vercel, project `nfcsummit-coming-soon` in the Vercel team **`nfcsummit`** (not the team `john-8809` that hosts kawaiisummit.com and nonfungibleconference.com). |
| Production branch | **`feat/coming-soon-page`**. Every production deployment GitHub lists for this repository was built from a commit of that branch; the live one is `634491b` (3 November 2026). `main` only holds the old Claude Design bundle and has never been deployed to production. `qa` stops at `19acbab`, an older commit of the same line. |
| Previews | Every other branch pushed to GitHub gets a preview deployment, at `nfcsummit-coming-soon-<id>-nfcsummit.vercel.app`. Previews are behind Vercel Authentication: open them signed in to Vercel with an account of the `nfcsummit` team. |
| Domains | `www.nfcsummit.com` serves the site. `nfcsummit.com` answers `308` to `https://www.nfcsummit.com` with the same path (Vercel domain setting). DNS is at NameBright. Nothing in this repository changes DNS. |
| Not here | `onthewall.nfcsummit.com` is the ON THE WALL app, repository `hs7j4yk4sz-boop/nameonehtewall`, its own Vercel project. |

## What is in the repository

| Path | What it is |
|---|---|
| `site/` | **The site.** Thirteen static HTML pages and their images and videos: the home page and the six worlds, from the design made with John (handoff of 25 November 2026), and six practical pages on the same template (tickets, venue, partners, about, FAQ, archive). Edit the pages here. |
| `scripts/build-site.mjs` | Copies `site/` into `public/` before every `dev` and `build` (see below). |
| `lib/pages.ts` | The addresses and their files. Used by `next.config.ts` and the sitemap. |
| `next.config.ts` | Clean addresses, redirects, cache headers. |
| `app/api/sponsors` | The ON THE WALL sponsor feed, relayed with CORS. Read by the nonfungibleconference.com home page. Keep it answering. |
| `app/api/wall-debug` | Says why the sponsor feed does or does not read, from inside a deployment. `noindex`. |
| `app/not-found.tsx` | The 404 page (status 404, link to the home page). |
| `app/robots.ts`, `app/sitemap.ts` | `/robots.txt` and `/sitemap.xml`. |
| `public/og.jpg` | The 1200 × 630 share image, made from the home page hero. |
| `public/google350079851e7e5df8.html` | Google Search Console's proof of ownership for `https://www.nfcsummit.com/`. Never remove it: the property would lose its verification. |

## Addresses

| Address | File |
|---|---|
| `/` | `site/index.html` |
| `/fair-play` | `site/fair-play.html` |
| `/kawaii-summit` | `site/kawaii-summit.html` |
| `/conference` | `site/conference.html` |
| `/art-factory` | `site/art-factory.html` |
| `/hackathon` | `site/hackathon.html` |
| `/parties` | `site/parties.html` |
| `/tickets` | `site/tickets.html` |
| `/venue` | `site/venue.html` |
| `/partners` | `site/partners.html` |
| `/about` | `site/about.html` |
| `/faq` | `site/faq.html` |
| `/archive` | `site/archive.html` |

No `.html`, no trailing slash (`/parties/` answers `308` to `/parties`). Every other address is a
real `404`. To add a page: put the file in `site/`, add a line to `lib/pages.ts`, and give it its
title, description, canonical and sharing tags like the others.

## Ticketing

Every "Get your ticket" button (menu, page buttons, the floating ticket card) opens the
Eventbrite event in a new tab:
`https://www.eventbrite.com/e/nfc-summit-2027-tickets-2001761025112?aff=nfcsummitsite`
(`aff` lets Eventbrite report the sales that come from this site). The same address, without
`aff`, is the `offers.url` of the Event data on the home page. The link is written in each page of
`site/`: to change it, replace it in every file.

## Caching

- **Images and videos** are copied to `public/a/<hash>/`, where `<hash>` comes from their content.
  If any media file changes, they all get a new address. They are served with a one-year
  `immutable` cache.
- **Pages** keep their address when they change, so they are served with
  `max-age=0, must-revalidate`: the browser checks for a new version on every visit.

Never put a long cache on a file whose name does not change with its content.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
npm run lint
npm run typecheck
```

## Environment

| Variable | Value | Effect |
|---|---|---|
| `ONTHEWALL_API_URL` | `https://onthewall.nfcsummit.com` | Where `/api/sponsors` reads the feed (`{base}/api/sponsors`). Without it the relay answers `503`. |

## History

Until November 2026 the site was a one-page "coming soon" with a live sponsor list. That page,
its design bundle and the Webflow embed are in the history of the branch `feat/coming-soon-page`
(commit `634491b`).
