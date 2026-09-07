import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} EricPeD</span>
      <div className={styles.links}>
        <a href="https://github.com/EricPeD" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://discord.gg/gAkFuMgVzc"
          target="_blank"
          rel="noreferrer"
        >
          Discord
        </a>
      </div>
    </footer>
  )
}
