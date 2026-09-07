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
 * Order within a tier is order of mint — first come, first served, never
 * alphabetical. A tier that somehow holds more positions than it should is
 * truncated rather than allowed to break the layout.
 *
 * Never throws: if the wall cannot be read the page falls back to the day-one
 * empty state, which the design handles as a first-class state.
 */
export async function getWall(): Promise<Wall> {
  let positions: WallPosition[]
  try {
    positions = await fetchPositions()
  } catch (error) {
    console.error('[wall] could not read the ON THE WALL positions', error)
    return EMPTY_WALL
  }

  const byTier = { ...EMPTY_WALL.byTier }
  for (const tier of TIERS) {
    byTier[tier] = positions
      .filter((p) => p.tier === tier)
      .sort((a, b) => a.mintedAt.localeCompare(b.mintedAt))
      .slice(0, TIER_SPECS[tier].cap)
  }

  return { byTier, minted: TIERS.reduce((n, tier) => n + byTier[tier].length, 0) }
}
