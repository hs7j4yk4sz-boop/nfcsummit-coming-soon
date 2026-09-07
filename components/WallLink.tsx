import { ON_THE_WALL_URL, WALL_LIVE, WALL_PENDING } from '@/lib/links'

interface WallLinkProps {
  className?: string
  /** What the link says once the wall is open. */
  children: React.ReactNode
  /**
   * What to show instead while the wall is closed. Omit to keep `children` —
   * that is what the `( open )` tags do: same words, no link. Pass
   * {@link WALL_PENDING} where the link named a destination.
   */
  pending?: string
}

/**
 * Every route to ON THE WALL goes through here, so the testnet URL cannot leak
 * onto the public landing by accident: while `WALL_LIVE` is false this renders
 * a span and never mentions the address at all.
 *
 * The inert span carries `data-pending`, which each stylesheet uses to drop the
 * underline — dead text should not look clickable.
 */
export default function WallLink({ className, children, pending }: WallLinkProps) {
  if (!WALL_LIVE) {
    return (
      <span className={className} data-pending="">
        {pending ?? children}
      </span>
    )
  }
  return (
    <a className={className} href={ON_THE_WALL_URL}>
      {children}
    </a>
  )
}

export { WALL_PENDING }
