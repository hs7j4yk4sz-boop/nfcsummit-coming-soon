import { ON_THE_WALL_URL } from '@/lib/links'
import styles from './SaveTheDate.module.css'

/**
 * The update block under the hero, on ink: the announcement, the date, and the
 * one thing a visitor can already do while the site is a waiting page.
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
            <a className={styles.link} href={ON_THE_WALL_URL}>
              <span className={styles.linkLead}>More info </span>→ onthewall.nfcsummit.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
