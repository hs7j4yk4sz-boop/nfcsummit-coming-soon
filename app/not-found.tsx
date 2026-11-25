import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page not found · NFC Summit 2027',
  robots: { index: false },
}

/* Colours and type from the site's pages (site/index.html, :root). */
const INK = '#0E2A6E'
const YELLOW = '#F6B800'
const FONTS =
  'https://fonts.googleapis.com/css2?family=Anton&family=Cormorant+Garamond:ital@1&family=Space+Grotesk:wght@500;600&display=swap'

export default function NotFound() {
  return (
    <>
      {/* The same stylesheet as the pages. */}
      <link rel="stylesheet" href={FONTS} />
      <main
        style={{
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
          padding: '40px 20px',
          textAlign: 'center',
          background: '#FFFFFF',
          color: INK,
          fontFamily: "'Space Grotesk', 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <a href="/" aria-label="NFC Summit, home" style={{ fontSize: 40, lineHeight: 1, color: INK, textDecoration: 'none' }}>
          ✦
        </a>
        <h1
          style={{
            margin: 0,
            fontFamily: "'Anton', Impact, 'Arial Narrow', sans-serif",
            fontWeight: 400,
            fontSize: 'min(40vw, 260px)',
            lineHeight: 0.9,
          }}
        >
          404
        </h1>
        <p style={{ margin: 0, fontFamily: "'Cormorant Garamond', 'Times New Roman', serif", fontStyle: 'italic', fontSize: 34 }}>
          This page is not on the map.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-flex',
            borderRadius: 40,
            padding: '16px 28px',
            background: YELLOW,
            color: INK,
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: '.04em',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          Back to NFC Summit 2027
        </a>
      </main>
    </>
  )
}
