import { TIERS } from '@/lib/tiers'
import { parsePositions, wallApiUrl } from '@/lib/wall-source'

/**
 * Why the sponsor list is or isn't showing, from inside the deployment.
 *
 * The sponsors section falls back to the day-one empty state whenever it can't
 * read the wall, which is right for visitors and useless for debugging: a
 * missing env var, a refused request and a changed payload shape all look
 * identical on the page. This says which one it is.
 *
 * Everything here is already public: the endpoint is unauthenticated and the
 * sponsor names are printed on the homepage. No secrets pass through.
 */
export const dynamic = 'force-dynamic'

export async function GET() {
  const url = wallApiUrl()
  const startedAt = Date.now()

  if (!url) {
    return json({
      verdict: 'ONTHEWALL_API_URL is not set — the page cannot reach the wall at all',
      fix: 'Set ONTHEWALL_API_URL to https://onthewall.nfcsummit.com in the Vercel project, then redeploy.',
      endpoint: null,
      vercelEnv: process.env.VERCEL_ENV ?? null,
    })
  }

  let res: Response
  try {
    res = await fetch(url, { cache: 'no-store' })
  } catch (error) {
    return json({
      verdict: 'the request to the wall failed before it got a response',
      fix: 'Check the host is reachable and the URL is exactly right.',
      endpoint: url,
      error: error instanceof Error ? error.message : String(error),
      ms: Date.now() - startedAt,
    })
  }

  const body = await res.text()
  const ms = Date.now() - startedAt

  if (!res.ok) {
    return json({
      verdict: `the wall answered ${res.status}`,
      fix: 'Ask whoever runs ON THE WALL why this endpoint is refusing.',
      endpoint: url,
      status: res.status,
      contentType: res.headers.get('content-type'),
      bodyStart: body.slice(0, 400),
      ms,
    })
  }

  let payload: unknown
  try {
    payload = JSON.parse(body)
  } catch {
    return json({
      verdict: 'the wall answered 200 but the body is not JSON',
      fix: 'Likely an HTML error or login page. Open the endpoint in a browser to see it.',
      endpoint: url,
      contentType: res.headers.get('content-type'),
      bodyStart: body.slice(0, 400),
      ms,
    })
  }

  // What the parser is actually looking at, so a contract change is obvious.
  const root = (payload as { sponsors?: unknown })?.sponsors ?? payload
  const shape =
    typeof root === 'object' && root !== null
      ? Object.fromEntries(
          Object.entries(root as Record<string, unknown>).map(([key, value]) => [
            key,
            Array.isArray(value)
              ? `array(${value.length}) first entry keys: ${
                  typeof value[0] === 'object' && value[0] !== null
                    ? Object.keys(value[0]).join(', ')
                    : typeof value[0]
                }`
              : typeof value,
          ]),
        )
      : `not an object: ${typeof root}`

  const positions = parsePositions(payload)
  const perTier = Object.fromEntries(
    TIERS.map((tier) => [tier, positions.filter((p) => p.tier === tier).length]),
  )

  return json({
    verdict:
      positions.length > 0
        ? `reading the wall fine — ${positions.length} positions recognised`
        : 'the wall answered with JSON, but no positions were recognised: the payload shape does not match what the page expects',
    fix:
      positions.length > 0
        ? 'If the page still looks empty, it is serving a cached render — it refreshes within a minute.'
        : 'Compare `receivedShape` below with `expectedShape` and send both to John.',
    endpoint: url,
    ms,
    expectedShape: {
      'sponsors.flag[]': 'co-organizer',
      'sponsors.mural[]': 'platinum',
      'sponsors.house[]': 'gold',
      'sponsors.pfp[]': 'community',
      'sponsors.name[]': 'wall',
      entry: '{ tier, name, order, thumb? }',
    },
    receivedShape: shape,
    recognised: { total: positions.length, perTier },
    sample: positions.slice(0, 3),
  })
}

function json(data: unknown) {
  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex',
    },
  })
}
