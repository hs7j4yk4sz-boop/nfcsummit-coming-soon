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

const NFC_SUMMIT: SiteConfig = {
  url: 'https://nfcsummit.com',
  wordmark: 'nfcsummit.com',
  title: 'NFC Summit 2027 — 27 · 28 · 29 May 2027, Unicorn Factory, Lisbon',
  description:
    'NFC Summit is coming back in 2027. Sixth edition, 27–29 May 2027 at the Unicorn Factory, Lisbon. Get your ticket and put your name on the wall of the venue.',
  nav: [],
  social: [],
}

const NON_FUNGIBLE_CONFERENCE: SiteConfig = {
  url: 'https://www.nonfungibleconference.com',
  wordmark: 'nonfungibleconference.com',
  // Keeps the name the domain actually ranks for. Dropping "Non Fungible
  // Conference" from the strongest page of the site would throw away the brand
  // signal Google has attached to this domain.
  title: 'NFC Summit 2027 — Non Fungible Conference · 27–29 May 2027, Lisbon',
  description:
    'Non Fungible Conference is now NFC Summit. Sixth edition, 27–29 May 2027 at the Unicorn Factory, Lisbon. Get your name on the wall of the venue until October 30.',
  nav: [
    { label: 'Manifesto', href: 'https://www.nonfungibleconference.com/about' },
    { label: 'Line-up 2026', href: 'https://www.nonfungibleconference.com/line-up' },
    { label: 'FAQ 2026', href: 'https://www.nonfungibleconference.com/faqs' },
    // Deliberate for now, per John: this is the Webflow staging URL, which
    // sends `X-Robots-Tag: noindex` and changes on republish. Point it at a
    // real URL on the domain when the 2026 archive gets one.
    {
      label: 'Previous edition',
      href: 'https://nonfungibleconference24-6cf9592edaaa237.webflow.io/',
      external: true,
    },
  ],
  social: [
    { label: 'X', href: 'https://x.com/NFCsummit' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/78683125/' },
    { label: 'Instagram', href: 'https://www.instagram.com/nonfungibleconference/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@nfcsummit' },
  ],
}

const SITES = {
  nfcsummit: NFC_SUMMIT,
  nonfungibleconference: NON_FUNGIBLE_CONFERENCE,
} satisfies Record<string, SiteConfig>

export const SITE: SiteConfig =
  SITES[process.env.NEXT_PUBLIC_SITE as keyof typeof SITES] ?? NFC_SUMMIT
