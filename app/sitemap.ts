import type { MetadataRoute } from 'next'
import { ORIGIN, PAGES } from '@/lib/pages'

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path }) => ({ url: path === '/' ? `${ORIGIN}/` : `${ORIGIN}${path}` }))
}
