/** The wall itself. Never printed while `WALL_LIVE` is false — see below. */
export const ON_THE_WALL_URL = 'https://onthewall.nfcsummit.com'

/**
 * Until the wall opens, onthewall.nfcsummit.com serves testnet, so the public
 * landing must neither link to it nor show its URL. While this is false every
 * wall destination on the page becomes inert text, and the two CTAs that name
 * a destination say `WALL_PENDING` instead.
 *
 * Set `NEXT_PUBLIC_WALL_LIVE=1` on launch day to bring the links back. Note
 * that `NEXT_PUBLIC_*` values are inlined at build time: changing the variable
 * needs a redeploy, not just a save — no code change either way.
 */
export const WALL_LIVE = process.env.NEXT_PUBLIC_WALL_LIVE === '1'

/** Stands in for every wall destination while the wall is closed. */
export const WALL_PENDING = 'On the wall — opens Sept 10'

/** The two hero CTAs. Both open in a new tab. */
export const SPONSOR_FORM_URL = 'https://form.typeform.com/to/pCm4CZor'
export const NEWSLETTER_URL = 'https://avantgarde.nonfungibleconference.com/'
