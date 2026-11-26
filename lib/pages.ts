/** Canonical origin of the site. nfcsummit.com (no www) redirects here at the domain level in Vercel. */
export const ORIGIN = 'https://www.nfcsummit.com'

/** The site's pages: public address and the file in `site/` that holds it. The home page and the six worlds, then the practical pages. */
export const PAGES = [
  { path: '/', file: 'index.html' },
  { path: '/fair-play', file: 'fair-play.html' },
  { path: '/kawaii-summit', file: 'kawaii-summit.html' },
  { path: '/conference', file: 'conference.html' },
  { path: '/art-factory', file: 'art-factory.html' },
  { path: '/hackathon', file: 'hackathon.html' },
  { path: '/parties', file: 'parties.html' },
  { path: '/tickets', file: 'tickets.html' },
  { path: '/venue', file: 'venue.html' },
  { path: '/partners', file: 'partners.html' },
  { path: '/about', file: 'about.html' },
  { path: '/faq', file: 'faq.html' },
  { path: '/archive', file: 'archive.html' },
] as const
