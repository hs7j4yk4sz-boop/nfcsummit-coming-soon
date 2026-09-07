import type { Metadata } from 'next'
import ComingSoonPage from '@/components/ComingSoonPage'
import { EMPTY_WALL } from '@/lib/wall'

/**
 * Day one, before a single position is minted. The brief asks for both states
 * to be beautiful, so the empty one is reviewable without emptying the wall.
 */
export const metadata: Metadata = {
  title: 'NFC Summit 2027 — day one (empty state preview)',
  robots: { index: false, follow: false },
}

export default function EmptyStatePreview() {
  return <ComingSoonPage wall={EMPTY_WALL} />
}
