import type { Metadata } from 'next'

/**
 * The site's pages are static HTML (see `site/`), so this layout only wraps
 * what the app itself renders: today, the 404 page.
 */
export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
