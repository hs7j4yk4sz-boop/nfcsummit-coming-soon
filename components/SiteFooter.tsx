import { SITE } from '@/lib/site'
import styles from './SiteFooter.module.css'

/**
 * On nonfungibleconference.com this page replaces a homepage that carried the
 * whole site's navigation, while the other pages stay on Webflow. Without these
 * links those pages lose their main internal link source — so the footer is
 * load-bearing for crawl and authority, not decoration.
 */
export default function SiteFooter() {
  const { nav, social, wordmark } = SITE

  return (
    <footer className={styles.footer}>
      <div className="frame">
        <div className={styles.stage}>
          {nav.length > 0 && (
            <nav className={styles.nav} aria-label="Site">
              {nav.map((link) => (
                <a
                  key={link.href}
                  className={styles.navLink}
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {social.length > 0 && (
            <nav className={styles.social} aria-label="Social">
              {social.map((link) => (
                <a
                  key={link.href}
                  className={styles.navLink}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          <div className={styles.meta}>
            <span>
              <span className={styles.brand}>NFC Summit · </span>Sixth edition
            </span>
            <span>{wordmark}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
