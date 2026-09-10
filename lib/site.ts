/**
 * Per-domain configuration.
 *
 * The same page runs on two domains: nfcsummit.com (a fresh domain) and
 * nonfungibleconference.com (the established one, where this replaces the
 * Webflow homepage and the rest of the site stays on Webflow). Everything that
 * differs between them lives here, selected by `NEXT_PUBLIC_SITE`, so both
 * Vercel projects build from the same branch instead of drifting apart.
 */

export interface NavLink {
  label: string
  href: string
  /** Set for anything off this domain, so it opens in a new tab. */
  external?: boolean
}

export interface SiteConfig {
  /** Canonical origin. Drives `metadataBase`, so OG and canonical URLs resolve. */
  url: string
  /**
   * The hero mascot. The two domains run deliberately different dragons — the
   * pages are otherwise identical twins, and this is what tells them apart at
   * a glance. Grey renders only: on the concrete ground they are multiplied in,
   * and a coloured one would both muddy and break the one-accent rule.
   */
  dragon: string
  /**
   * How the dragon is cropped by the hero. Each render frames its character
   * differently — the street artist has headroom baked in, the host is a full
   * standing body — so the crop that reads as "head and shoulders, cut by the
   * bottom edge" is per-dragon. `height` is relative to the frame, `top` to
   * the hero.
   */
  dragonCrop: {
    height: string
    top: string
    mobileHeight: string
    mobileTop: string
  }
  /** What the footer prints on the right. */
  wordmark: string
  title: string
  description: string
  /**
   * The pages that keep existing elsewhere on the domain.
   *
   * On an established domain the homepage is the main source of internal links:
   * a homepage with no navigation orphans everything below it, and crawl rate
   * and authority on those pages fall away. This footer is what keeps the
   * remaining Webflow pages linked.
   */
  nav: NavLink[]
  social: NavLink[]
}

/**
 * The pages that keep existing on the historic domain. Both sites carry them:
 * the two landings are deliberate twins, and these are the only real pages
 * either of them can point a visitor to.
 */
const NAV: NavLink[] = [
  { label: 'Manifesto', href: 'https://www.nonfungibleconference.com/about' },
  { label: 'Line-up 2026', href: 'https://www.nonfungibleconference.com/line-up' },
  { label: 'FAQ 2026', href: 'https://www.nonfungibleconference.com/faqs' },
  // Deliberate for now, per John: this is the Webflow staging URL, which sends
  // `X-Robots-Tag: noindex` and changes on republish. Point it at a real URL on
  // the domain when the 2026 archive gets one.
  {
    label: 'Previous edition',
    href: 'https://nonfungibleconference24-6cf9592edaaa237.webflow.io/',
    external: true,
  },
]

/** `rel="me"` is what ties the accounts back to the domain as one entity. */
const SOCIAL: NavLink[] = [
  { label: 'X', href: 'https://x.com/NFCsummit' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/78683125/' },
  { label: 'Instagram', href: 'https://www.instagram.com/nonfungibleconference/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@nfcsummit' },
]

const NFC_SUMMIT: SiteConfig = {
  url: 'https://nfcsummit.com',
  dragon: '/dragon-street-artist.gif', // 08 — the street artist
  dragonCrop: { height: '88cqw', top: '29%', mobileHeight: '130cqw', mobileTop: '62%' },
  wordmark: 'nfcsummit.com',
  title: 'NFC Summit 2027 — 27 · 28 · 29 May 2027, Unicorn Factory, Lisbon',
  description:
    'NFC Summit is coming back in 2027. Sixth edition, 27–29 May 2027 at the Unicorn Factory, Lisbon. Get your ticket and put your name on the wall of the venue.',
  nav: NAV,
  social: SOCIAL,
}

const NON_FUNGIBLE_CONFERENCE: SiteConfig = {
  url: 'https://www.nonfungibleconference.com',
  dragon: '/dragon-host.png', // 07 — the host
  dragonCrop: { height: '64cqw', top: '32%', mobileHeight: '108cqw', mobileTop: '57%' },
  wordmark: 'nonfungibleconference.com',
  // Keeps the name the domain actually ranks for. Dropping "Non Fungible
  // Conference" from the strongest page of the site would throw away the brand
  // signal Google has attached to this domain.
  title: 'NFC Summit 2027 — Non Fungible Conference · 27–29 May 2027, Lisbon',
  description:
    'Non Fungible Conference is now NFC Summit. Sixth edition, 27–29 May 2027 at the Unicorn Factory, Lisbon. Get your name on the wall of the venue until October 30.',
  nav: NAV,
  social: SOCIAL,
}

const SITES = {
  nfcsummit: NFC_SUMMIT,
  nonfungibleconference: NON_FUNGIBLE_CONFERENCE,
} satisfies Record<string, SiteConfig>

export const SITE: SiteConfig =
  SITES[process.env.NEXT_PUBLIC_SITE as keyof typeof SITES] ?? NFC_SUMMIT
