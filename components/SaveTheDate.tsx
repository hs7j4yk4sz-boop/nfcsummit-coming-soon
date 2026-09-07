import { NEWSLETTER_URL, SPONSOR_FORM_URL } from '@/lib/links'
import WallLink, { WALL_PENDING } from './WallLink'
import styles from './SaveTheDate.module.css'

/**
 * The update block under the hero, on ink: the announcement, the date, and the
 * things a visitor can already do while the site is a waiting page.
 */
export default function SaveTheDate() {
  return (
    <section className={styles.section}>
      <div className="frame">
        <div className={styles.stage}>
          <div className={styles.head}>
            <p className={styles.eyebrow}>Save the date</p>
            <h2 className={styles.title}>NFC is coming back in 2027</h2>
            <p className={styles.date}>
              <span>27 · 28 · 29 May 2027</span>
              <span className={styles.dateSep}> · </span>
              <span>Unicorn Factory, Lisbon</span>
            </p>
          </div>

          <div className={styles.foot}>
            <p className={styles.lead}>
              In the meantime, you can already get your ticket — and put your name on the wall of the
              venue.
            </p>
            <nav className={styles.links}>
              <a
                className={styles.link}
                href={SPONSOR_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a sponsor
              </a>
              <a
                className={styles.link}
                href={NEWSLETTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Newsletter &amp; news
              </a>
              <WallLink className={styles.link} pending={WALL_PENDING}>
                <span className={styles.linkLead}>More info </span>→ onthewall.nfcsummit.com
              </WallLink>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
