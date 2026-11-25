/** Canonical origin of the site. nfcsummit.com (no www) redirects here at the domain level in Vercel. */
export const ORIGIN = 'https://www.nfcsummit.com'

/** The site's pages: public address and the file in `site/` that holds it. */
export const PAGES = [
  { path: '/', file: 'index.html' },
  { path: '/fair-play', file: 'fair-play.html' },
  { path: '/kawaii-summit', file: 'kawaii-summit.html' },
  { path: '/conference', file: 'conference.html' },
  { path: '/art-factory', file: 'art-factory.html' },
  { path: '/hackathon', file: 'hackathon.html' },
  { path: '/parties', file: 'parties.html' },
] as const
