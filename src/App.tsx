import { useEffect, useState } from 'react'
import { portfolioConfig } from './config'
import './App.css'

function App() {
  const year = new Date().getFullYear()
  const [active, setActive] = useState<'about' | 'projects' | 'contact'>('about')
  const { profile, projects, interns, skills, contacts } = portfolioConfig

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target)
            // Add stagger delay for fade-in effect
            setTimeout(() => {
              entry.target.classList.add('reveal-in')
            }, idx * 80)
          }
        })
      },
      { threshold: 0.12 }
    )

    els.forEach((el) => revealObserver.observe(el))

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (id === 'about') setActive('about')
            else if (id === 'experience' || id === 'intern') setActive('projects')
            else if (id === 'contact') setActive('contact')
          }
        })
      },
      { threshold: 0.6 }
    )

    const sections = document.querySelectorAll<HTMLElement>('#about, #experience, #intern, #contact')
    sections.forEach((s) => sectionObserver.observe(s))

    // Scroll progress bar update
    const onScroll = () => {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      const progress = Math.max(0, Math.min(1, scrollHeight ? scrollTop / scrollHeight : 0))
      const bar = document.querySelector<HTMLDivElement>('.scroll-progress')
      if (bar) bar.style.width = `${progress * 100}%`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <main className="page">
      <div className="scroll-progress" aria-hidden="true" />
      <header className="hero" aria-label="Intro">
        <div className="hero-top reveal">
          <div className="avatar" aria-hidden="true">
            {profile.avatar ? (
              <img src={profile.avatar} alt={profile.name} className="avatar-img" />
            ) : (
              <div className="avatar-default">
                <span className="avatar-ring" />
                <span className="avatar-dot" />
                <span className="avatar-emoji">👨‍💻</span>
              </div>
            )}
          </div>
          <div className="hero-text">
              <h1 className="title">
                {`Hi, I'm ${profile.name}`.split('').map((char, i) => (
                  <span key={i}>{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </h1>
              <p className="subtitle">{profile.subtitle}</p>
          </div>
        </div>

        {/* Contact icons removed per request; handled in bottom navbar */}
      </header>

      <section id="about" className="section reveal">
        <h2 className="section-title">About</h2>
        <p className="section-text">
          {profile.bio}
        </p>
      </section>
      <section id="intern" className="section reveal">
        <h2 className="section-title">Intern Experience</h2>
        <ul className="cards" role="list">
          {interns.map((it) => (
            <li key={it.title} className="card-item">
              <a className="card no-underline" href="#" aria-label={it.title} onClick={(e) => {
                e.preventDefault()
                const modal = document.querySelector<HTMLDialogElement>('#internModal')
                const modalTitle = document.querySelector<HTMLElement>('#internModalTitle')
                const modalDesc = document.querySelector<HTMLElement>('#internModalDesc')
                const modalYear = document.querySelector<HTMLElement>('#internModalYear')
                if (modal && modalTitle && modalDesc && modalYear) {
                  modalTitle.textContent = it.title
                  modalDesc.textContent = it.desc
                  modalYear.textContent = it.duration
                  modal.showModal()
                }
              }}>
                <img src={it.logo} alt={it.title} className="card-logo" />
                <div className="card-content">
                  <div className="card-badge">{it.duration}</div>
                  <h3 className="card-title">{it.title}</h3>
                  <p className="card-desc">{it.desc}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="experience" className="section reveal">
        <h2 className="section-title">Recent Project</h2>
        <ul className="cards" role="list">
          {projects.map((p) => (
            <li key={p.title} className="card-item">
              <a className="card no-underline" href={p.href} aria-label={`Open ${p.title}`} onClick={(e) => {
                e.preventDefault()
                const modal = document.querySelector<HTMLDialogElement>('#projectModal')
                const modalTitle = document.querySelector<HTMLElement>('#modalTitle')
                const modalDesc = document.querySelector<HTMLElement>('#modalDesc')
                const modalYear = document.querySelector<HTMLElement>('#modalYear')
                const viewProjectBtn = document.querySelector<HTMLAnchorElement>('#viewProjectBtn')
                if (modal && modalTitle && modalDesc && modalYear && viewProjectBtn) {
                  modalTitle.textContent = p.title
                  modalDesc.textContent = p.desc
                  modalYear.textContent = p.duration
                  if (p.projectUrl) {
                    viewProjectBtn.href = p.projectUrl
                    viewProjectBtn.style.display = 'inline-flex'
                  } else {
                    viewProjectBtn.style.display = 'none'
                  }
                  modal.showModal()
                }
              }}>
                <img src={p.logo} alt={p.title} className="card-logo" />
                <div className="card-content">
                  <div className="card-badge">{p.duration}</div>
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-desc">{p.desc}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="skills" className="section reveal">
        <h2 className="section-title">Skills</h2>
        <div className="skills">
          {skills.map((s) => (
            <span key={s} className="skill-chip">{s}</span>
          ))}
        </div>
      </section>

      {/* Contact section removed as requested */}

      <nav className="bottom-nav" aria-label="Quick navigation">
        {/* Home (scroll to top) */}
        <a
          href="#about"
          aria-current={active === 'about' ? 'page' : undefined}
          className={active === 'about' ? 'nav-active' : undefined}
          title="Home"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12 3l9 7v11h-6v-6H9v6H3V10l9-7Z"/></svg>
          <span className="nav-label">Home</span>
        </a>
        {/* LinkedIn (external) */}
        <a href={contacts.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M6.94 5.5A2.5 2.5 0 1 0 3.5 9a2.5 2.5 0 0 0 3.44-3.5ZM3 10h3.8v10H3V10Zm6 0h3.5v1.6h.05c.5-1 1.8-2.08 3.7-2.08 3.95 0 4.75 2.66 4.75 6.13V20H20v-5.2c0-1.24-.02-2.84-1.72-2.84-1.73 0-1.99 1.35-1.99 2.75V20H9V10Z"/></svg>
          <span className="nav-label">LinkedIn</span>
        </a>
        {/* GitHub (external) */}
        <a href={contacts.github} target="_blank" rel="noreferrer" title="GitHub">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.162 19.494c.5.092.683-.217.683-.483 0-.237-.009-.867-.013-1.703-2.78.604-3.366-1.34-3.366-1.34-.455-1.157-1.11-1.466-1.11-1.466-.907-.62.069-.607.069-.607 1.003.07 1.53 1.03 1.53 1.03.892 1.528 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.942 0-1.091.39-1.985 1.03-2.685-.103-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.57 9.57 0 0 1 12 7.5c.852.004 1.71.116 2.511.339 1.909-1.294 2.748-1.025 2.748-1.025.547 1.378.203 2.397.1 2.65.642.7 1.028 1.594 1.028 2.685 0 3.842-2.339 4.685-4.566 4.932.359.31.678.92.678 1.855 0 1.338-.012 2.417-.012 2.747 0 .268.18.58.688.481A10 10 0 0 0 12 2Z"/></svg>
          <span className="nav-label">GitHub</span>
        </a>
      </nav>

      <footer className="footer" aria-label="Footer">
        <small>© {year} Rifai — Built with React + Vite</small>
      </footer>

      {/* Project Detail Modal */}
      <dialog id="projectModal" className="detail-modal">
        <div className="modal-header">
          <h3>Project Detail</h3>
          <button onClick={() => {
            const modal = document.getElementById('projectModal') as HTMLDialogElement;
            modal?.classList.add('modal-closing');
            setTimeout(() => { modal?.close(); modal?.classList.remove('modal-closing'); }, 240);
          }} aria-label="Close">✕</button>
        </div>
        <div className="modal-body modal-text-content">
          <div className="detail-badge" id="modalYear"></div>
          <h2 className="detail-title" id="modalTitle"></h2>
          <p className="detail-desc" id="modalDesc"></p>
        </div>
        <div className="modal-footer">
          <a id="viewProjectBtn" href="#" target="_blank" rel="noopener noreferrer" className="btn primary" style={{ display: 'none' }}>View Project</a>
          <button className="btn ghost" onClick={() => {
            const modal = document.getElementById('projectModal') as HTMLDialogElement;
            modal?.classList.add('modal-closing');
            setTimeout(() => { modal?.close(); modal?.classList.remove('modal-closing'); }, 240);
          }}>Close</button>
        </div>
      </dialog>

      {/* Intern Detail Modal */}
      <dialog id="internModal" className="detail-modal">
        <div className="modal-header">
          <h3>Intern Detail</h3>
          <button onClick={() => {
            const modal = document.getElementById('internModal') as HTMLDialogElement;
            modal?.classList.add('modal-closing');
            setTimeout(() => { modal?.close(); modal?.classList.remove('modal-closing'); }, 240);
          }} aria-label="Close">✕</button>
        </div>
        <div className="modal-body modal-text-content">
          <div className="detail-badge" id="internModalYear"></div>
          <h2 className="detail-title" id="internModalTitle"></h2>
          <p className="detail-desc" id="internModalDesc"></p>
        </div>
        <div className="modal-footer">
          <button className="btn ghost" onClick={() => {
            const modal = document.getElementById('internModal') as HTMLDialogElement;
            modal?.classList.add('modal-closing');
            setTimeout(() => { modal?.close(); modal?.classList.remove('modal-closing'); }, 240);
          }}>Close</button>
        </div>
      </dialog>
    </main>
  )
}

export default App
