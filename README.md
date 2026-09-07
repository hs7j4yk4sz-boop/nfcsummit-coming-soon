# nfcsummit.com — provisional page

Coming-soon page for **NFC Summit 2027** (27–29 May 2027, Unicorn Factory, Lisbon), with a
`SPONSORS 2027` section fed live from the ON THE WALL venue map.

Built from the Claude Design handoff in `project/` — see [HANDOFF.md](./HANDOFF.md) and the
transcript in `chats/`. Those files are the design record and are not part of the app build.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
npm run lint
npm run typecheck
```

| Route            | What it is                                                              |
| ---------------- | ----------------------------------------------------------------------- |
| `/`              | The page. Reads the wall, revalidates every 60s.                         |
| `/preview/empty` | Day one, nothing minted yet. `noindex` — kept so the empty state is reviewable. |

## Environment

| Variable                | Value                                                      | Effect                                                                                  |
| ----------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `ONTHEWALL_API_URL`     | `https://onthewall.nfcsummit.com`                          | Base URL of the wall. The page reads `{base}/api/sponsors`.                              |
| `NEXT_PUBLIC_WALL_LIVE` | `1` on launch day, otherwise unset                          | Turns the links to onthewall.nfcsummit.com on. See below.                                |

### The wall link switch

Until the wall opens, onthewall.nfcsummit.com serves **testnet**, so the public landing must
neither link to it nor print its URL.

- **Unset or `0`** — every wall destination is inert text with no address. `MORE INFO → …` and
  `→ GET ON THE WALL` become `ON THE WALL — OPENS SEPT 10` in the same slot, mono, without the
  underline. The `( open )` tags keep their words and their blue, but are plain spans, not links.
- **`1`** — the links to `https://onthewall.nfcsummit.com` come back and `OPENS SEPT 10`
  disappears.

One flag, no code change on the day. It is enforced in one place —
[`WallLink`](./components/WallLink.tsx) — which is the only component that knows the address, so
the URL cannot reach the page by another route. **`NEXT_PUBLIC_*` values are inlined at build
time**, so setting the variable in Vercel needs a redeploy to take effect; setting it alone
changes nothing.

## Reading the wall

Everything the page knows about the wall goes through
[`fetchPositions()`](./lib/wall-source.ts), which reads `GET {ONTHEWALL_API_URL}/api/sponsors`.
The response is `{ sponsors: { name[], pfp[], house[], mural[], flag[] } }`, each entry
`{ tier, name, order, thumb? }`. The campaign groups map onto the page's tiers:

`flag` → co-organizer · `mural` → platinum · `house` → gold · `pfp` → community · `name` → wall

`order` is the mint rank and drives display order. `thumb` is the community tier's avatar. A
position that sold **without a public name** (`name: null`) is kept — it is minted, so it must
still count against the tier's open slots — and simply isn't printed in the text tiers; a PFP
tile needs no name anyway. Parsing is deliberately forgiving: one malformed row must not take the
sponsors section down.

[`lib/wall.ts`](./lib/wall.ts) buckets the positions by tier, sorts each tier by mint rank
(first come, first served — never alphabetical), and truncates to the tier's size. It never
throws: if the wall can't be read the page falls back to the empty state, which is a designed
state rather than an error. Responses are cached server-side for 60s, so every page load reads
through that cache.

### The stub never reaches production

Without `ONTHEWALL_API_URL`, local dev and preview fall back to the fictional line-up from the
mockup so the page still renders its designed mixed state. In production
(`VERCEL_ENV === "production"`) the same situation renders the **empty state** instead and logs a
warning — a fictional sponsor on a public page would be a lie. Proof: a production build with no
API URL contains zero fictional names and reads `0 positions minted`.

## The tiers

Validated by John; the mapping lives in [`lib/tiers.ts`](./lib/tiers.ts).

| Tier                 | ON THE WALL campaign | Size | Rendered as              |
| -------------------- | -------------------- | ---: | ------------------------ |
| `CO-ORGANIZER`       | the flagship         |    1 | name, largest type       |
| `PLATINUM SPONSORS`  | artist murals        |    2 | names                    |
| `GOLD SPONSORS`      | community houses     |    4 | names                    |
| `COMMUNITY SPONSORS` | the PFP wall         |   50 | square B&W tiles, no names |
| `NAMES ON THE WALL`  | the names campaign   |  500 | dense mono name wall     |

An unfilled tier shows its label and a blue parenthesis linking to onthewall.nfcsummit.com —
`( open )`, `( 4 open )` — and nothing else. A full tier says nothing. The names wall, once it
has started filling, says `+ N more to come` instead. `ORGANIZER / NFT MORNING` was removed from
the page on John's instruction and is not part of the mapping.

## Layout

Each section bleeds its background edge to edge and holds its content in a `.frame`
(`app/globals.css`), capped at 1760px. The frame is the **query container**, so every fluid size
in the CSS modules is the `cqw` value taken straight from the artboards: the page is
pixel-identical to the 1440 desktop mockup at a 1440 frame, and to the 390 mockup at 390.
Nothing inside a frame may declare `container-type`, or those units re-anchor.

Breakpoints are container queries, not media queries: `max-width: 1023px` stacks the sponsors
heading, `max-width: 767px` switches to the mobile artboard.

Type is Anton / IBM Plex Mono / Inter per brief v2, which deliberately overrides the 2027 design
system's Space Grotesk / Space Mono. Colour, rules and spacing come from the system's own token
files, copied verbatim into `styles/tokens/`. The single accent on the page is dragon blue
`#2E7FD6`, and it only ever marks what is still open.

## Still open

- **`app/icon.svg` is a placeholder.** The design system's logo files were not in the handoff
  bundle and no logo file was supplied since; swap it for the real transparent wordmark when
  available.
- **`public/pfp/` holds the mockup's grey placeholder squares.** They are only used by the stub
  line-up — the live community tiles come from each position's `thumb` URL.
