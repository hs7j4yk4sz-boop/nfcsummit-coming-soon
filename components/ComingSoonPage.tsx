import Hero from './Hero'
import SaveTheDate from './SaveTheDate'
import Sponsors from './Sponsors'
import SiteFooter from './SiteFooter'
import type { Wall } from '@/lib/wall'

/** The whole provisional nfcsummit.com, given a state of the wall to render. */
export default function ComingSoonPage({ wall }: { wall: Wall }) {
  return (
    <main>
      <Hero />
      <SaveTheDate />
      <Sponsors wall={wall} />
      <SiteFooter />
    </main>
  )
}
