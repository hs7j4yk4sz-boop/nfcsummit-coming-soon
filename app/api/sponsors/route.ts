import { wallApiUrl } from '@/lib/wall-source'

/**
 * A CORS-enabled relay for the ON THE WALL feed.
 *
 * The Webflow homepage on nonfungibleconference.com reads the sponsor list from
 * the visitor's browser, so the response needs an `Access-Control-Allow-Origin`
 * header. The ON THE WALL endpoint does not send one, and only its owners can
 * add it — but this app already reads the same feed server-side, where CORS
 * does not apply. So it can hand the payload on with the header attached.
 *
 * The payload is passed through untouched: the page that consumes this expects
 * the upstream contract, and a relay that reshapes data is a second contract to
 * keep in step.
 *
 * This is a workaround, not the destination. It makes one site's homepage
 * depend on another site staying up. Once ON THE WALL sends the header, point
 * the embed back at it directly and delete this route.
 *
 * Nothing here is private: the upstream endpoint is unauthenticated and every
 * name it returns is printed on both homepages.
 */
export const revalidate = 60

const CORS = {
  // The feed carries no credentials and is public, so any origin may read it.
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Cache-Control': 'public, max-age=0, s-maxage=60, stale-while-revalidate=300',
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS })
}

export async function GET() {
  const url = wallApiUrl()
  if (!url) {
    return json({ error: 'ONTHEWALL_API_URL is not configured on this deployment' }, 503)
  }

  try {
    const res = await fetch(url, { next: { revalidate: 60 } })
    if (!res.ok) {
      return json({ error: `the wall answered ${res.status}` }, 502)
    }
    // Pass the upstream body through verbatim rather than re-serialising it.
    return new Response(await res.text(), {
      headers: { 'content-type': 'application/json; charset=utf-8', ...CORS },
    })
  } catch (error) {
    console.error('[wall] relay could not reach the wall', error)
    return json({ error: 'could not reach the wall' }, 502)
  }
}

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', ...CORS },
  })
}
