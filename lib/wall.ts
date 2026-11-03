import { TIERS, TIER_SPECS, type Tier } from './tiers'
import { fetchPositions, type WallPosition } from './wall-source'

export type { WallPosition }

export interface Wall {
  /** Minted positions per tier, in mint order, capped at the tier's size. */
  byTier: Record<Tier, WallPosition[]>
  /** Total minted positions across all five tiers. */
  minted: number
}

export const EMPTY_WALL: Wall = {
  byTier: { 'co-organizer': [], platinum: [], gold: [], community: [], wall: [] },
  minted: 0,
}

/**
 * The sponsor line-up as the page needs it.
 *
 * Order within a tier is the mint rank — first come, first served, never
 * alphabetical. A tier that somehow holds more positions than it should is
 * truncated rather than allowed to break the layout.
 *
 * Never throws: if the wall cannot be read the page falls back to the day-one
 * empty state, which the design handles as a first-class state.
 */
/**
 * Sponsors confirmed outside the ON THE WALL mint, added by hand on John's
 * instruction. They print after the minted positions of their tier and do not
 * count towards "positions minted".
 */
const MANUAL_SPONSORS: WallPosition[] = [
  { id: 'manual-gold-yuga-labs', tier: 'gold', name: 'Yuga Labs', order: Number.MAX_SAFE_INTEGER },
]

export async function getWall(): Promise<Wall> {
  let positions: WallPosition[]
  try {
    positions = await fetchPositions()
  } catch (error) {
    console.error('[wall] could not read the ON THE WALL positions', error)
    positions = []
  }

  const byTier = { ...EMPTY_WALL.byTier }
  for (const tier of TIERS) {
    byTier[tier] = positions
      .filter((p) => p.tier === tier)
      .sort((a, b) => a.order - b.order)
      .slice(0, TIER_SPECS[tier].cap)
  }
  const minted = TIERS.reduce((n, tier) => n + byTier[tier].length, 0)

  for (const sponsor of MANUAL_SPONSORS) {
    byTier[sponsor.tier] = [...byTier[sponsor.tier], sponsor]
  }

  return { byTier, minted }
}
