import { TIERS, type Tier } from './tiers'

/**
 * One minted position on the ON THE WALL venue map.
 *
 * This is the only shape the page knows about. Wiring the real campaign up is
 * a matter of making `fetchPositions()` return these — nothing above this file
 * needs to change.
 */
export interface WallPosition {
  /** Stable id (token id / position id). Used as the React key. */
  id: string
  tier: Tier
  /** Display name as it goes on the wall. Empty for anonymous PFP positions. */
  name: string
  /** Square avatar, community tier only. Any absolute or root-relative URL. */
  pfp?: string
  /** ISO timestamp. Drives the display order: first minted, first listed. */
  mintedAt: string
}

/** Where the live positions come from once the endpoint exists. */
const API_URL = process.env.ONTHEWALL_API_URL

/**
 * Reads the minted positions.
 *
 * Until `ONTHEWALL_API_URL` is set this returns the fictional line-up from the
 * validated mockup, so the page renders its designed "mixed state". Point the
 * env var at the real endpoint and adjust `parsePositions()` to match its
 * payload — that is the whole integration.
 */
export async function fetchPositions(): Promise<WallPosition[]> {
  if (!API_URL) return STUB_POSITIONS

  const res = await fetch(API_URL, { next: { revalidate: 60 } })
  if (!res.ok) throw new Error(`ON THE WALL API responded ${res.status}`)
  return parsePositions(await res.json())
}

/**
 * Narrows the API payload down to `WallPosition[]`, dropping anything that is
 * not a minted position in a tier this page shows. Deliberately forgiving: a
 * malformed row must not take the sponsors section down with it.
 */
function parsePositions(payload: unknown): WallPosition[] {
  const rows = Array.isArray(payload)
    ? payload
    : Array.isArray((payload as { positions?: unknown })?.positions)
      ? (payload as { positions: unknown[] }).positions
      : []

  const positions: WallPosition[] = []
  for (const row of rows) {
    if (typeof row !== 'object' || row === null) continue
    const { id, tier, name, pfp, mintedAt } = row as Record<string, unknown>
    if (typeof id !== 'string' && typeof id !== 'number') continue
    if (typeof tier !== 'string' || !(TIERS as readonly string[]).includes(tier)) continue
    positions.push({
      id: String(id),
      tier: tier as Tier,
      name: typeof name === 'string' ? name.trim() : '',
      pfp: typeof pfp === 'string' && pfp ? pfp : undefined,
      mintedAt: typeof mintedAt === 'string' ? mintedAt : new Date(0).toISOString(),
    })
  }
  return positions
}

/* -------------------------------------------------------------------------- */
/* Stub data — the validated mockup's mixed state.                            */
/* Neutral fictional names only, per the brief. Delete once the API is wired.  */
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

/** Mint times, one minute apart, so the stub exercises the real ordering. */
const MINT_EPOCH = Date.parse('2026-09-01T09:00:00Z')
let cursor = 0
const nextMint = () => new Date(MINT_EPOCH + cursor++ * 60_000).toISOString()

const STUB_POSITIONS: WallPosition[] = [
  { id: 'co-1', tier: 'co-organizer', name: 'Meridian Labs', mintedAt: nextMint() },
  { id: 'pt-1', tier: 'platinum', name: 'Northline Studio', mintedAt: nextMint() },
  { id: 'gd-1', tier: 'gold', name: 'Harbour Collective', mintedAt: nextMint() },
  { id: 'gd-2', tier: 'gold', name: 'Fieldnote', mintedAt: nextMint() },
  ...COMMUNITY.map((name, i) => ({
    id: `cm-${i + 1}`,
    tier: 'community' as const,
    name,
    pfp: `/pfp/${String(i + 1).padStart(2, '0')}.png`,
    mintedAt: nextMint(),
  })),
  ...WALL_NAMES.map((name, i) => ({
    id: `wl-${i + 1}`,
    tier: 'wall' as const,
    name,
    mintedAt: nextMint(),
  })),
]
