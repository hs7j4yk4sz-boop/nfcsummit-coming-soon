import type { NextConfig } from 'next'
import { PAGES } from './lib/pages'

/**
 * The site's pages are static HTML, built from `site/` into `public/_site/` by
 * `scripts/build-site.mjs`. These rules give them their public addresses.
 */
const pageRewrites = PAGES.map(({ path, file }) => ({ source: path, destination: `/_site/${file}` }))

const REVALIDATE = 'public, max-age=0, must-revalidate'

const nextConfig: NextConfig = {
  // `site/` is copied into `public/` at build time; the functions never read it.
  outputFileTracingExcludes: { '*': ['./site/**'] },

  async rewrites() {
    // beforeFiles: checked before the app's own routes and the public folder.
    return { beforeFiles: pageRewrites, afterFiles: [], fallback: [] }
  },

  async redirects() {
    // The built files are an implementation detail: never let them be a second address.
    return PAGES.map(({ path, file }) => ({ source: `/_site/${file}`, destination: path, permanent: true }))
  },

  async headers() {
    return [
      // Media live under a folder named after their content (see build-site.mjs):
      // a new version always has a new address, so they can be kept a year.
      { source: '/a/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      // Pages keep their address when they change: the browser must ask each time.
      ...PAGES.map(({ path }) => ({ source: path, headers: [{ key: 'Cache-Control', value: REVALIDATE }] })),
    ]
  },
}

export default nextConfig
