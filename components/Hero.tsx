import { SITE } from '@/lib/site'
import styles from './Hero.module.css'

/**
 * The coming-soon banner: full-width Anton wordmark on concrete, the street
 * artist dragon multiplied into the background and cropped by the bottom edge,
 * the date block bottom-left. No CTAs — this is an assumed waiting page.
 */
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="frame">
        <div
          className={styles.stage}
          style={
            {
              '--dragon-h': SITE.dragonCrop.height,
              '--dragon-top': SITE.dragonCrop.top,
              '--dragon-h-mobile': SITE.dragonCrop.mobileHeight,
              '--dragon-top-mobile': SITE.dragonCrop.mobileTop,
            } as React.CSSProperties
          }
        >
          <header className={styles.bar}>
            <span>NFC Summit</span>
            <span className={styles.barStatus}>Coming soon</span>
          </header>

          <h1 className={styles.title}>
            <span>NFC</span> <span>Summit</span> <span>2027</span>
          </h1>

          {/*
            The dragon is a grey render on a light ground, so it carries a pale
            halo: `multiply` is what keeps that halo from reading as a white
            box. It is decorative — the page says nothing it does not say in
            text — hence the empty alt.
          */}
          <img className={styles.dragon} src={SITE.dragon} alt="" aria-hidden="true" />

          <p className={styles.meta}>
            27 · 28 · 29 May 2027
            <br />
            Unicorn Factory, Lisbon
          </p>
        </div>
      </div>
    </section>
  )
}
