import { useState } from 'react'
import { perfil, proyectos, habilidades, experiencias, formacion } from './data'
import ProjectCard from './components/ProjectCard'
import { GitHubIcon, LinkedInIcon, MailIcon, MenuIcon } from './components/Icons'

const secciones = [
  { id: 'sobre-mi', texto: 'Sobre mí' },
  { id: 'proyectos', texto: 'Proyectos' },
  { id: 'tecnologias', texto: 'Tecnologías' },
  { id: 'trayectoria', texto: 'Trayectoria' },
  { id: 'contacto', texto: 'Contacto' },
]

export default function App() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#inicio" className="nav-logo">
            <span className="accent">&lt;</span>AO<span className="accent"> /&gt;</span>
          </a>

          <button
            className="nav-toggle"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Abrir menú"
            aria-expanded={menuAbierto}
          >
            <MenuIcon open={menuAbierto} />
          </button>

          <nav className={`nav-links ${menuAbierto ? 'open' : ''}`}>
            {secciones.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={() => setMenuAbierto(false)}>
                {s.texto}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* INICIO */}
        <section id="inicio" className="hero">
          <div className="container">
            <p className="hero-hello">Hola, soy</p>
            <h1>{perfil.nombre}</h1>
            <h2 className="hero-role">{perfil.rol}</h2>
            <p className="hero-text">{perfil.frase}</p>
            <p className="hero-location">📍 {perfil.ubicacion} · Disponible para trabajar</p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#proyectos">Ver proyectos</a>
              <a className="btn btn-ghost" href={perfil.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon /> GitHub
              </a>
              <a className="btn btn-ghost" href={perfil.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon /> LinkedIn
              </a>
              {perfil.cv && (
                <a className="btn btn-ghost" href={perfil.cv} target="_blank" rel="noopener noreferrer">
                  Descargar CV
                </a>
              )}
            </div>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section id="sobre-mi" className="section">
          <div className="container narrow">
            <h2 className="section-title"><span className="accent">01.</span> Sobre mí</h2>
            {perfil.sobreMi.map((p) => (
              <p key={p} className="about-text">{p}</p>
            ))}
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="section">
          <div className="container">
            <h2 className="section-title"><span className="accent">02.</span> Proyectos</h2>
            <div className="grid-projects">
              {proyectos.map((p) => (
                <ProjectCard key={p.titulo} proyecto={p} />
              ))}
            </div>
          </div>
        </section>

        {/* TECNOLOGÍAS */}
        <section id="tecnologias" className="section">
          <div className="container">
            <h2 className="section-title"><span className="accent">03.</span> Tecnologías</h2>
            <div className="grid-skills">
              {habilidades.map((h) => (
                <div key={h.grupo} className="skill-box">
                  <h3>{h.grupo}</h3>
                  <ul className="chips">
                    {h.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRAYECTORIA */}
        <section id="trayectoria" className="section">
          <div className="container">
            <h2 className="section-title"><span className="accent">04.</span> Trayectoria</h2>
            <div className="grid-two">
              <div>
                <h3 className="sub-title">Formación</h3>
                <ul className="timeline">
                  {formacion.map((f) => (
                    <li key={f.titulo}>
                      <span className="timeline-date">{f.fecha}</span>
                      <strong>{f.titulo}</strong>
                      <span className="muted">{f.lugar}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="sub-title">Otras experiencias</h3>
                <ul className="timeline">
                  {experiencias.map((e) => (
                    <li key={e.titulo}>
                      <span className="timeline-date">{e.fecha}</span>
                      <strong>{e.titulo}</strong>
                      <span className="muted">{e.texto}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section contact">
          <div className="container narrow center">
            <h2 className="section-title center-title"><span className="accent">05.</span> Contacto</h2>
            <p className="about-text">
              ¿Tienes una oportunidad o quieres hablar de algún proyecto? Escríbeme y te respondo pronto.
            </p>
            <div className="hero-actions center-actions">
              <a className="btn btn-primary" href={`mailto:${perfil.email}`}>
                <MailIcon /> {perfil.email}
              </a>
              <a className="btn btn-ghost" href={perfil.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon /> LinkedIn
              </a>
              <a className="btn btn-ghost" href={perfil.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {perfil.nombre} · Hecho con React, TypeScript y Vite</p>
        </div>
      </footer>
    </>
  )
}
