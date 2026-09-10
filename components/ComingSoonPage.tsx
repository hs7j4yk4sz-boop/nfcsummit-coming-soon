import Hero from './Hero'
import SaveTheDate from './SaveTheDate'
import Sponsors from './Sponsors'
import SiteFooter from './SiteFooter'
import { SITE } from '@/lib/site'
import type { Wall } from '@/lib/wall'

/**
 * The event, in the form search engines read. The page already states the
 * dates and the venue in text; this says the same thing in a way that can
 * surface as an event result.
 */
const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'NFC Summit 2027',
  alternateName: 'Non Fungible Conference',
  description: SITE.description,
  startDate: '2027-05-27',
  endDate: '2027-05-29',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  url: SITE.url,
  location: {
    '@type': 'Place',
    name: 'Unicorn Factory',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lisbon',
      addressCountry: 'PT',
    },
  },
  organizer: { '@type': 'Organization', name: 'NFC Summit', url: SITE.url },
}

/** The whole provisional page, given a state of the wall to render. */
export default function ComingSoonPage({ wall }: { wall: Wall }) {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <Hero />
      <SaveTheDate />
      <Sponsors wall={wall} />
      <SiteFooter />
    </main>
  )
}
