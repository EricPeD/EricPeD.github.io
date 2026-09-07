import { useEffect, useState } from 'react'
import styles from './Projects.module.css'

const GITHUB_USER = 'EricPeD'

interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  topics?: string[]
  stargazers_count: number
  pushed_at: string
  fork: boolean
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
  })
}

export function Projects() {
  const [repos, setRepos] = useState<Repo[] | null>(null)
  const [selectedRepo, setSelectedRepo] = useState<number | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=100`,
    )
      .then((res) => {
        if (!res.ok) throw new Error('request failed')
        return res.json() as Promise<Repo[]>
      })
      .then((data) => {
        if (cancelled) return
        const owned = data.filter((repo) => !repo.fork)
        setRepos(owned.length > 0 ? owned : data)
        setSelectedRepo(owned[0]?.id ?? data[0]?.id ?? null)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className={styles.section}>
      <p className={styles.command}>
        <span className={styles.prompt}>~$</span> ls -la proyectos/
      </p>

      {error && (
        <p className={styles.status}>
          No se pudo cargar la lista ahora mismo. Puedes verla directamente
          en{' '}
          <a href={`https://github.com/${GITHUB_USER}`} className={styles.link}>
            github.com/{GITHUB_USER}
          </a>
          .
        </p>
      )}

      {!error && !repos && <p className={styles.status}>cargando…</p>}

      {repos && repos.length === 0 && (
        <p className={styles.status}>Todavía no hay repositorios públicos.</p>
      )}

      {repos && repos.length > 0 && (
        <ul className={styles.list}>
          {repos.map((repo) => (
            <li key={repo.id} className={styles.row}>
              <button
                type="button"
                className={styles.rowButton}
                aria-expanded={selectedRepo === repo.id}
                onClick={() =>
                  setSelectedRepo(selectedRepo === repo.id ? null : repo.id)
                }
              >
                <div className={styles.rowMain}>
                  <span className={styles.repoName}>{repo.name}</span>
                  {repo.description && (
                    <span className={styles.repoDesc}>
                      {repo.description}
                    </span>
                  )}
                </div>
                <div className={styles.rowMeta}>
                  {repo.language && (
                    <span className={styles.metaItem}>{repo.language}</span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className={styles.metaItem}>
                      ★ {repo.stargazers_count}
                    </span>
                  )}
                  <span className={styles.metaItem}>
                    {formatDate(repo.pushed_at)}
                  </span>
                </div>
                <span className={styles.expandIcon} aria-hidden="true">
                  {selectedRepo === repo.id ? '−' : '+'}
                </span>
              </button>

              {selectedRepo === repo.id && (
                <div className={styles.details}>
                  <p className={styles.detailsText}>
                    {repo.description ||
                      'Repositorio público de EricPeD. Consulta el código y la evolución del proyecto en GitHub.'}
                  </p>
                  {repo.topics && repo.topics.length > 0 && (
                    <div className={styles.topics} aria-label="Temas">
                      {repo.topics.map((topic) => (
                        <span key={topic} className={styles.topic}>
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.repoLink}
                  >
                    Ver repositorio en GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
