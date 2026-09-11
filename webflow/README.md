# The coming-soon homepage, as a Webflow embed

`homepage-embed.html` is the whole page — styles, markup and the live sponsor
list — as a single block you paste into Webflow. It is the alternative to
running the Next.js app behind a Cloudflare Worker: nothing sits in front of
the domain, the other ~400 Webflow pages are untouched, and your team can edit
the page in Webflow afterwards.

The trade-off is that the sponsor list is fetched in the browser rather than
rendered on the server. See **CORS** below — it is the one thing that can stop
this working.

## Before you paste

**1. Upload the dragon.** `public/dragon-host.png` in this repo (0.96 MB) —
dragon 07, the host. Upload it to Webflow assets and copy the URL.

This domain deliberately runs a *different* dragon from nfcsummit.com, which
runs 08, the street artist. The two pages are otherwise identical twins on two
well-ranked domains, and the mascot is what tells them apart at a glance. The
crop in the embed's CSS (`.nfc-dragon`, `top` and `height`, desktop and mobile)
is tuned to this particular render — 07 is a full standing body, so it needs a
smaller height and lower top than the street artist, or the frame fills with
head and the suit is lost. Swapping in a different render means retuning those
four values.

**2. Add the fonts.** Webflow Site Settings → Fonts → add **Anton**, **IBM Plex
Mono** (400, 500) and **Inter** (300, 400, 500) from Google Fonts. The embed
also `@import`s them so it works if you skip this, but loading them from
Webflow puts them in the `<head>`, where they arrive far sooner and the page
does not flash a fallback face.

**3. Make the page blank.** The embed is a complete page including its own
footer. Hide the Webflow nav and footer on this page, and set the body to zero
padding, or you will get the site chrome wrapped around it.

## Paste it

Drop one full-width **HTML Embed** on the page and paste the entire contents of
`homepage-embed.html`. It is 23 KB, well under Webflow's 50,000-character
embed limit.

Then fill in the three settings at the top of the `<script>`:

```js
var DRAGON_SRC = '';                                  // the asset URL from step 1
var API_BASE   = 'https://onthewall.nfcsummit.com';   // the ON THE WALL app
var WALL_LIVE  = true;                                // see below
```

`WALL_LIVE` is the switch: while it is `false` the page neither links to
onthewall.nfcsummit.com nor prints its URL anywhere — every wall destination
becomes inert text reading "ON THE WALL — OPENS SEPT 10", and the `( open )`
tags keep their words but stop being links. Set it to `true` on launch day.
That is the only edit needed.

## Page settings in Webflow

The embed cannot set the page's `<title>` or meta description — those are
Webflow page settings, and on an established domain they matter. Use:

- **Title** — `NFC Summit 2027 — Non Fungible Conference · 27–29 May 2027, Lisbon`
- **Description** — `Non Fungible Conference is now NFC Summit. Sixth edition, 27–29 May 2027 at the Unicorn Factory, Lisbon. Get your name on the wall of the venue until October 30.`

Keeping "Non Fungible Conference" in the title is deliberate: it is the name
this domain ranks for, and the page never says it otherwise.

Then paste this into the page's **custom code, before `</body>`**, so the event
can surface as an event result:

```html
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Event","name":"NFC Summit 2027",
"alternateName":"Non Fungible Conference",
"startDate":"2027-05-27","endDate":"2027-05-29",
"eventStatus":"https://schema.org/EventScheduled",
"eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode",
"url":"https://www.nonfungibleconference.com",
"location":{"@type":"Place","name":"Unicorn Factory",
"address":{"@type":"PostalAddress","addressLocality":"Lisbon","addressCountry":"PT"}},
"organizer":{"@type":"Organization","name":"NFC Summit","url":"https://www.nonfungibleconference.com"}}
</script>
```

## CORS — confirmed, and worked around

This did happen. The ON THE WALL endpoint does not send the header, so the
browser blocks the response and the list stays empty. `API_BASE` therefore
points at `https://nfcsummit.com`, which reads the same feed server-side — where
the rule does not apply — and relays it with the header attached
(`app/api/sponsors/route.ts`).

That relay makes this homepage depend on nfcsummit.com staying up. It is a
workaround, not the destination: once ON THE WALL sends
`Access-Control-Allow-Origin: *`, point `API_BASE` back at
`https://onthewall.nfcsummit.com` and delete the route.

**To check which is happening**, add `?walldebug=1` to the page URL. If the list
fails to load, a panel appears at the top naming the cause. It distinguishes a
CORS block from an unreachable host by re-requesting with `mode: 'no-cors'`: if
that succeeds where the normal request failed, the server is reachable and the
browser is withholding the response, which can only be CORS. Visitors never see
the panel — it needs the query string.

## The original CORS note

The page reads `{API_BASE}/api/sponsors` from the visitor's browser, on a
different origin. That only works if the ON THE WALL app returns

```
Access-Control-Allow-Origin: https://www.nonfungibleconference.com
```

(or `*`) on that route. If it does not, the browser blocks the response and
**the sponsor names never appear** — the section falls back to the day-one
empty state, which is a designed state, so the page still looks right, but it
will never fill in. This was not needed by the Next.js version, which reads the
API server-side.

Ask whoever runs ON THE WALL to add the header, then confirm: open the page,
open the console, and check there is no `[wall]` error.

## What it renders

The tier mapping, the mint ordering and the open-position labels are the same
rules as the Next.js app:

| Tier | Campaign group | Size |
| --- | --- | ---: |
| Co-organizer | `flag` | 1 |
| Platinum sponsors | `mural` | 2 |
| Gold sponsors | `house` | 4 |
| Community sponsors | `pfp` | 50 |
| Names on the wall | `name` | 500 |

Entries are ordered by `order`, the mint rank — first come, first served, never
alphabetical. A position sold without a public name still counts against its
tier's open slots; it just is not printed in the text tiers. A full tier shows
nothing after it; anything else shows `( N open )`, except the names wall once
it starts filling, which shows `+ N more to come`.

## Verified

Tested in Chromium inside a host page carrying deliberately hostile Webflow-ish
globals (serif body font, centred text, underlined blue links) to confirm
nothing bleeds in or out, at 1440 and 390:

- 77 minted, 12 PFP tiles, 59 of 61 names (two anonymous, correctly skipped),
  mint order respected, correct open labels — against a fixture matching the
  documented API contract.
- With the API unreachable, the page degrades cleanly to the empty state.
- No horizontal overflow and no clipped headline, with fonts loaded **and**
  with Google Fonts blocked entirely.

Not tested: the real ON THE WALL API. This environment's egress policy blocks
onthewall.nfcsummit.com, so the adapter is validated against the contract, not
against live Sepolia data. Check that on the real page.
