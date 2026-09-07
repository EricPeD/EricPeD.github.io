import styles from './Hero.module.css'

export function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Eric · Desarrollador Junior</p>
        <h1 className={styles.name}>EricPeD</h1>
        <p className={styles.bio}>
          Construyo herramientas para problemas concretos: bots de
          Telegram, Discord, Automatizaciones, APIs. Con base en España, casi todo lo que
          hago acaba publicado en{' '}
          <a
            className={styles.link}
            href="https://github.com/EricPeD"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <a
          className={styles.cta}
          href="https://discord.gg/gAkFuMgVzc"
          target="_blank"
          rel="noreferrer"
        >
          Únete al Discord →
        </a>
      </div>

      <div className={styles.terminal} aria-hidden="true">
        <div className={styles.terminalBar}>
          <span className={styles.dot} style={{ background: '#e8654a' }} />
          <span className={styles.dot} style={{ background: '#e8b23d' }} />
          <span className={styles.dot} style={{ background: '#5aa96b' }} />
        </div>
        <pre className={styles.terminalBody}>
          <span className={styles.prompt}>~$</span> whoami{'\n'}
          Eric | Tris{'\n\n'}
          <span className={styles.prompt}>~$</span> cat bio.txt{'\n'}
          Discord para devs etc...{'\n'}
          Ubicación: España{'\n\n'}
          <span className={styles.prompt}>~$</span> ls proyectos/{'\n'}
          pomodoro-time/{'\n'}
          token-tracker-bot/{'\n'}
          fastapi-cv/{'\n'}
          <span className={styles.cursor}>▍</span>
        </pre>
      </div>
    </header>
  )
}
