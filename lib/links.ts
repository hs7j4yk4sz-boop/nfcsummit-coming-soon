/** The wall itself. Never printed while `WALL_LIVE` is false — see below. */
export const ON_THE_WALL_URL = 'https://onthewall.nfcsummit.com'

/**
 * The wall is open, so this is on by default and every route to
 * onthewall.nfcsummit.com is a live link.
 *
 * It stays a switch rather than becoming hardcoded, as a kill switch: set
 * `NEXT_PUBLIC_WALL_LIVE=0` and every wall destination reverts to inert text
 * that neither links to the wall nor prints its URL — useful if the wall ever
 * has to go dark again. `NEXT_PUBLIC_*` values are inlined at build time, so
 * flipping it needs a redeploy, not just a save.
 */
export const WALL_LIVE = process.env.NEXT_PUBLIC_WALL_LIVE !== '0'

/** Stands in for every wall destination while the wall is closed. */
export const WALL_PENDING = 'On the wall — opens Sept 10'

/** The two hero CTAs. Both open in a new tab. */
export const SPONSOR_FORM_URL = 'https://form.typeform.com/to/pCm4CZor'
export const NEWSLETTER_URL = 'https://avantgarde.nonfungibleconference.com/'
