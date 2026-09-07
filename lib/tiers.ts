/**
 * The five sponsor tiers of the provisional nfcsummit.com page, in display
 * order (highest first). The mapping tier <- ON THE WALL campaign was validated
 * by John:
 *
 *   CO-ORGANIZER        the flagship position          1   name, largest type
 *   PLATINUM SPONSORS   the artist murals              2   names
 *   GOLD SPONSORS       the community houses           4   names
 *   COMMUNITY SPONSORS  the PFP wall                  50   square PFP tiles, no names
 *   NAMES ON THE WALL   the names campaign           500   dense mono name wall
 *
 * ORGANIZER / NFT MORNING was removed from the page on John's instruction.
 */

export const TIERS = ['co-organizer', 'platinum', 'gold', 'community', 'wall'] as const

export type Tier = (typeof TIERS)[number]

export interface TierSpec {
  /** Old-school partner-page label, printed in mono above the names. */
  readonly label: string
  /** How many positions this tier holds in total. */
  readonly cap: number
  /** How the filled positions are rendered. */
  readonly render: 'names' | 'pfp'
}

export const TIER_SPECS: Record<Tier, TierSpec> = {
  'co-organizer': { label: 'Co-organizer', cap: 1, render: 'names' },
  platinum: { label: 'Platinum sponsors', cap: 2, render: 'names' },
  gold: { label: 'Gold sponsors', cap: 4, render: 'names' },
  community: { label: 'Community sponsors', cap: 50, render: 'pfp' },
  wall: { label: 'Names on the wall', cap: 500, render: 'names' },
}

/**
 * Copy for the blue link that closes a tier row.
 *
 * A tier that is full says nothing — silence is the reward. Everything else
 * states how many positions are still open, and says so in parentheses so an
 * empty tier reads as deliberately empty rather than broken. The names wall is
 * the one exception once it has started filling: forty names followed by
 * "( 460 open )" reads like a shortfall, "+ 460 more to come" like momentum.
 */
export function openLabel(tier: Tier, filled: number): string | null {
  const remaining = Math.max(0, TIER_SPECS[tier].cap - filled)
  if (remaining === 0) return null
  if (tier === 'wall' && filled > 0) return `+ ${remaining} more to come`
  return remaining === 1 ? '( open )' : `( ${remaining} open )`
}
