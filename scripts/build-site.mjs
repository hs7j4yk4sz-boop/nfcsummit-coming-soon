// Copies the static site in `site/` into `public/`, where Next.js serves it.
//
// - Pages go to `public/_site/<name>.html`. `next.config.ts` maps the clean
//   addresses (`/`, `/fair-play`, ...) onto them.
// - Images and videos go to `public/a/<hash>/img|vid/`, where <hash> is taken
//   from their content. Any change to a media file gives them a new address,
//   so they can be cached for a year without a visitor ever seeing an old one.
//   Pages keep fixed names and are revalidated on every visit.
//
// Runs before `next dev` and `next build` (see package.json). The output is
// not committed.

import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const src = path.join(root, 'site')
const pub = path.join(root, 'public')

const media = ['img', 'vid'].flatMap((d) =>
  fs.readdirSync(path.join(src, d)).sort().map((f) => path.join(d, f)),
)

const hash = crypto.createHash('sha256')
for (const f of media) hash.update(f).update(fs.readFileSync(path.join(src, f)))
const version = hash.digest('hex').slice(0, 10)
const base = `/a/${version}`

fs.rmSync(path.join(pub, '_site'), { recursive: true, force: true })
fs.rmSync(path.join(pub, 'a'), { recursive: true, force: true })
fs.mkdirSync(path.join(pub, '_site'), { recursive: true })

for (const f of media) {
  const to = path.join(pub, base, f)
  fs.mkdirSync(path.dirname(to), { recursive: true })
  fs.copyFileSync(path.join(src, f), to)
}

const pages = fs.readdirSync(src).filter((f) => f.endsWith('.html'))
for (const page of pages) {
  const html = fs
    .readFileSync(path.join(src, page), 'utf8')
    // "img/x.webp", 'img/' + name, url(img/x.webp) -> /a/<hash>/img/...
    .replace(/(["'(])(img|vid)\//g, `$1${base}/$2/`)
  fs.writeFileSync(path.join(pub, '_site', page), html)
}

console.log(`site: ${pages.length} pages, ${media.length} media files under ${base}`)
