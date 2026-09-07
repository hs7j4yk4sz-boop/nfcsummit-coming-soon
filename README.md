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

## Wiring the ON THE WALL API

Everything the page knows about the wall goes through one function:
[`fetchPositions()`](./lib/wall-source.ts). Today it returns the fictional line-up from the
validated mockup, so the page renders its designed mixed state out of the box.

To go live, set `ONTHEWALL_API_URL` and make `parsePositions()` match the real payload. Each
minted position needs an `id`, a `tier`, a `name`, a `mintedAt` timestamp, and — for community
positions — a `pfp` URL. Nothing above that file changes.

[`lib/wall.ts`](./lib/wall.ts) then buckets the positions by tier, orders each tier by mint time
(first come, first served — never alphabetical), and truncates to the tier's size. It never
throws: if the wall can't be read the page falls back to the empty state, which is a designed
state rather than an error.

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

- **Community PFPs** are the grey placeholder squares from the mockup (`public/pfp/`). Real
  avatars arrive with the API.
- **`app/icon.svg` is a placeholder.** The design system's logo files were not in the handoff
  bundle; swap it for the real transparent wordmark when available.
- **No ticket or newsletter link.** The CTAs were cut from the design; onthewall.nfcsummit.com is
  the page's only outbound destination.
