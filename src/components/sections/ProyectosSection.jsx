import React from 'react'

const ProyectosSection = () => {
  const proyectos = [
    {
      id: 1,
      titulo: 'Plataforma E-commerce',
      descripcion: 'Una aplicación de comercio electrónico completa con carrito de compras, pagos seguros y panel de administración.',
      tecnologias: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imagen: '🛒',
      enlace: '#',
      github: '#'
    },
    {
      id: 2,
      titulo: 'Gestor de Tareas',
      descripcion: 'Aplicación de productividad para gestionar tareas y proyectos con colaboración en tiempo real.',
      tecnologias: ['React', 'Firebase', 'Material-UI'],
      imagen: '📋',
      enlace: '#',
      github: '#'
    },
    {
      id: 3,
      titulo: 'Dashboard Analytics',
      descripcion: 'Panel de análisis de datos interactivo con visualizaciones avanzadas y reportes personalizables.',
      tecnologias: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      imagen: '📊',
      enlace: '#',
      github: '#'
    }
  ]

  return (
    <section className="proyectos-section">
      <div className="section-header">
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">
          Algunos de mis trabajos más destacados y proyectos personales
        </p>
      </div>

      <div className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="proyecto-card">
            <div className="proyecto-imagen">
              <span className="proyecto-emoji">{proyecto.imagen}</span>
            </div>
            <div className="proyecto-content">
              <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
              <p className="proyecto-descripcion">{proyecto.descripcion}</p>
              <div className="proyecto-tecnologias">
                {proyecto.tecnologias.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="proyecto-enlaces">
                <a href={proyecto.enlace} className="btn btn-outline">Demo</a>
                <a href={proyecto.github} className="btn btn-primary">Código</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProyectosSection