import styles from './SiteFooter.module.css'

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="frame">
        <div className={styles.stage}>
          <span>
            <span className={styles.brand}>NFC Summit · </span>Sixth edition
          </span>
          <span>nfcsummit.com</span>
        </div>
      </div>
    </footer>
  )
}
