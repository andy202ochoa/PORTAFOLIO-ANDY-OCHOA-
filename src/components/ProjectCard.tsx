import { useState } from 'react'
import type { Proyecto } from '../data'
import { ExternalIcon, GitHubIcon } from './Icons'

export default function ProjectCard({ proyecto }: { proyecto: Proyecto }) {
  const [sinImagen, setSinImagen] = useState(false)
  const { titulo, etiqueta, descripcion, puntos, tecnologias, imagen, demo, codigo, codigoTexto, codigoExtra } =
    proyecto

  return (
    <article className="card">
      <div className="card-img">
        {sinImagen ? (
          // Si todavía no subiste la captura, se muestra este bloque en su lugar
          <div className="card-placeholder">
            <span>{titulo}</span>
          </div>
        ) : (
          <img src={imagen} alt={`Captura de ${titulo}`} loading="lazy" onError={() => setSinImagen(true)} />
        )}
      </div>

      <div className="card-body">
        <span className="card-tag">{etiqueta}</span>
        <h3>{titulo}</h3>
        <p className="card-desc">{descripcion}</p>

        <ul className="card-points">
          {puntos.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <ul className="chips">
          {tecnologias.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="card-links">
          {demo && (
            <a className="btn btn-primary btn-sm" href={demo} target="_blank" rel="noopener noreferrer">
              <ExternalIcon /> Demo
            </a>
          )}
          {codigo && (
            <a className="btn btn-ghost btn-sm" href={codigo} target="_blank" rel="noopener noreferrer">
              <GitHubIcon size={16} /> {codigoTexto ?? 'Código'}
            </a>
          )}
          {codigoExtra && (
            <a className="btn btn-ghost btn-sm" href={codigoExtra.url} target="_blank" rel="noopener noreferrer">
              <GitHubIcon size={16} /> {codigoExtra.texto}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
