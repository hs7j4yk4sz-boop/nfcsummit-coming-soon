import ComingSoonPage from '@/components/ComingSoonPage'
import { getWall } from '@/lib/wall'

/** The wall is live: re-read the positions at most once a minute. */
export const revalidate = 60

export default async function Page() {
  return <ComingSoonPage wall={await getWall()} />
}
