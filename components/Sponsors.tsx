import { ON_THE_WALL_URL } from '@/lib/links'
import { TIERS, TIER_SPECS, openLabel, type Tier } from '@/lib/tiers'
import type { Wall, WallPosition } from '@/lib/wall'
import styles from './Sponsors.module.css'

/** Per-tier type scale — the only hierarchy this section has. */
const ROW_CLASS: Record<Tier, string> = {
  'co-organizer': styles.co,
  platinum: styles.platinum,
  gold: styles.gold,
  community: styles.community,
  wall: styles.wall,
}

/**
 * SPONSORS 2027 — a deliberately traditional conference partner page, except
 * the entries come from the ON THE WALL venue map in mint order. Text only,
 * no logos, no cards; size decreases with the tier. An empty tier shows its
 * label and a parenthesis, and nothing else: on day one the whole section is
 * legitimately empty and says so.
 */
export default function Sponsors({ wall }: { wall: Wall }) {
  return (
    <section className={styles.section}>
      <div className="frame">
        <div className={styles.stage}>
          <div className={styles.head}>
            <div className={styles.headText}>
              <p className={styles.eyebrow}>Already sponsors for 2027 · live from the wall</p>
              <h2 className={styles.title}>Sponsors 2027</h2>
            </div>
            <p className={styles.stat}>
              <span className={styles.statLine}>{wall.minted} positions minted</span>
              <span className={styles.statSep}> · </span>
              <span className={styles.statLine}>
                Order of mint<span className={styles.statLive}> · updates live</span>
              </span>
            </p>
          </div>

          <div className={styles.tiers}>
            {TIERS.map((tier) => (
              <TierRow key={tier} tier={tier} positions={wall.byTier[tier]} />
            ))}
          </div>

          <div className={styles.closer}>
            <p className={styles.closerText}>
              Every sponsor above bought a piece of the venue — painted for real, recorded on-chain.
            </p>
            <a className={styles.closerLink} href={ON_THE_WALL_URL}>
              → Get on the wall
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function TierRow({ tier, positions }: { tier: Tier; positions: WallPosition[] }) {
  const spec = TIER_SPECS[tier]
  const open = openLabel(tier, positions.length)

  return (
    <div className={`${styles.row} ${ROW_CLASS[tier]}`}>
      <p className={styles.label}>{spec.label}</p>
      <div className={styles.content}>
        {spec.render === 'pfp' ? (
          <PfpGrid positions={positions} />
        ) : tier === 'wall' ? (
          <NameWall positions={positions} />
        ) : (
          positions.map((p) => (
            <span key={p.id} className={styles.name}>
              {p.name}
            </span>
          ))
        )}
        {open && (
          <a className={styles.open} href={ON_THE_WALL_URL}>
            {open}
          </a>
        )}
      </div>
    </div>
  )
}

/** Community sponsors: square black-and-white avatars, no names under them. */
function PfpGrid({ positions }: { positions: WallPosition[] }) {
  if (positions.length === 0) return null
  return (
    <div className={styles.grid}>
      {positions.map((p) => (
        <div key={p.id} className={styles.tile}>
          {p.pfp && <img src={p.pfp} alt={p.name} loading="lazy" />}
        </div>
      ))}
    </div>
  )
}

/** The 500-name campaign: one dense mono paragraph, names separated by a middot. */
function NameWall({ positions }: { positions: WallPosition[] }) {
  if (positions.length === 0) return null
  return <p className={styles.wallText}>{positions.map((p) => p.name).join(' · ')}</p>
}
