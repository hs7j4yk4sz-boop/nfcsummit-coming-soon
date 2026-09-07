import type { Tier } from './tiers'

/**
 * One minted position on the ON THE WALL venue map.
 *
 * This is the only shape the page knows about.
 */
export interface WallPosition {
  /** Stable key: the campaign group plus the mint rank. */
  id: string
  tier: Tier
  /** Display name. Empty when the position sold without a public name. */
  name: string
  /** Square avatar, community tier only. */
  pfp?: string
  /** Rank of mint. Drives display order: first come, first served. */
  order: number
}

/** Base URL of the ON THE WALL app, e.g. https://onthewall.nfcsummit.com */
const API_BASE = process.env.ONTHEWALL_API_URL

/**
 * The ON THE WALL campaigns, in the order the page shows them.
 *
 * The API groups positions by campaign; the page groups them by sponsor tier.
 * The mapping was validated by John — see lib/tiers.ts.
 */
const CAMPAIGN_TIER: Record<string, Tier> = {
  flag: 'co-organizer', // the flagship
  mural: 'platinum', // the artist murals
  house: 'gold', // the community houses
  pfp: 'community', // the PFP wall
  name: 'wall', // the 500 names
}

/**
 * Reads the minted positions.
 *
 * With `ONTHEWALL_API_URL` set this is the live wall. Without it, local dev and
 * preview fall back to the fictional line-up from the validated mockup so the
 * page still renders its designed mixed state — but never in production, where
 * a fictional sponsor would be a lie on a public page. There, no API means the
 * day-one empty state, which the design handles as a first-class state.
 */
export async function fetchPositions(): Promise<WallPosition[]> {
  if (!API_BASE) {
    if (process.env.VERCEL_ENV === 'production') {
      console.warn('[wall] ONTHEWALL_API_URL is not set in production — rendering the empty state')
      return []
    }
    return STUB_POSITIONS
  }

  const url = `${API_BASE.replace(/\/+$/, '')}/api/sponsors`
  // Cached server-side for a minute; every page load reads through that cache.
  const res = await fetch(url, { next: { revalidate: 60 } })
  if (!res.ok) throw new Error(`ON THE WALL API responded ${res.status} for ${url}`)
  return parsePositions(await res.json())
}

/**
 * Narrows `{ sponsors: { name[], pfp[], house[], mural[], flag[] } }` — each
 * entry `{ tier, name, order, thumb? }` — down to `WallPosition[]`.
 *
 * Deliberately forgiving: one malformed row must not take the sponsors section
 * down with it. Positions that sold without a public name are kept, because
 * they are minted and must still count against the tier's open slots; the
 * text tiers drop them at render time, and a PFP tile needs no name anyway.
 */
function parsePositions(payload: unknown): WallPosition[] {
  const root = (payload as { sponsors?: unknown })?.sponsors ?? payload
  if (typeof root !== 'object' || root === null) return []

  const positions: WallPosition[] = []
  for (const [campaign, tier] of Object.entries(CAMPAIGN_TIER)) {
    const rows = (root as Record<string, unknown>)[campaign]
    if (!Array.isArray(rows)) continue

    rows.forEach((row, index) => {
      if (typeof row !== 'object' || row === null) return
      const { name, order, thumb } = row as Record<string, unknown>
      const rank = typeof order === 'number' && Number.isFinite(order) ? order : index
      positions.push({
        id: `${campaign}-${rank}-${index}`,
        tier,
        name: typeof name === 'string' ? name.trim() : '',
        pfp: typeof thumb === 'string' && thumb ? thumb : undefined,
        order: rank,
      })
    })
  }
  return positions
}

/* -------------------------------------------------------------------------- */
/* Stub data — the validated mockup's mixed state, for local dev and preview.  */
/* Neutral fictional names only. Never reaches production: see fetchPositions. */
/* -------------------------------------------------------------------------- */

const COMMUNITY = [
  'Quiet Signal',
  'Bluewater Guild',
  'Studio Ostra',
  'Tidemark',
  'Grey Lantern',
  'Kiln & Co',
  'Pale Orbit',
  'Halfmoon Press',
  'Sable Works',
  'Ninth Street',
]

const WALL_NAMES = [
  'amara.eth', 'Tomás R.', 'kestrel', 'Lina Voss', 'oakframe', 'Yusuf A.',
  'mira.lisboa', 'Halden', 'Priya N.', 'saltmarsh', 'Jonas K.', 'wren_0x',
  'Beatriz M.', 'cobalt.eth', 'Ilya P.', 'Nadia F.', 'lowtide', 'Marcus O.',
  'ferrous', 'Anneke V.', 'Rui S.', 'quillon', 'Sofia D.', 'greyhaven',
  'Emeka O.', 'Lucía B.', 'northbound', 'Hugo T.', 'ash.and.ink', 'Petra L.',
  'Kenji M.', 'thimble', 'Odile R.', 'Samir H.', 'driftwood.eth', 'Elin S.',
  'Rafael C.', 'lantern9', 'Maya K.', 'Ola W.',
]

let rank = 0

const STUB_POSITIONS: WallPosition[] = [
  { id: 'flag-1', tier: 'co-organizer', name: 'Meridian Labs', order: rank++ },
  { id: 'mural-1', tier: 'platinum', name: 'Northline Studio', order: rank++ },
  { id: 'house-1', tier: 'gold', name: 'Harbour Collective', order: rank++ },
  { id: 'house-2', tier: 'gold', name: 'Fieldnote', order: rank++ },
  ...COMMUNITY.map((name, i) => ({
    id: `pfp-${i + 1}`,
    tier: 'community' as const,
    name,
    pfp: `/pfp/${String(i + 1).padStart(2, '0')}.png`,
    order: rank++,
  })),
  ...WALL_NAMES.map((name, i) => ({
    id: `name-${i + 1}`,
    tier: 'wall' as const,
    name,
    order: rank++,
  })),
]
