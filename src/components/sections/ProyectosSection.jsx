import React from 'react'

const ProyectosSection = () => {
  const proyectos = [
    {
      id: 1,
      titulo: 'E-commerce React',
      descripcion: 'Plataforma de comercio electrónico completa con carrito de compras, autenticación y pagos.',
      tecnologias: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imagen: '🛒',
      enlace: '#',
      github: '#'
    },
    {
      id: 2,
      titulo: 'App de Gestión de Tareas',
      descripcion: 'Aplicación web para gestión de proyectos con equipos, deadlines y colaboración en tiempo real.',
      tecnologias: ['React', 'Firebase', 'Material-UI'],
      imagen: '📋',
      enlace: '#',
      github: '#'
    },
    {
      id: 3,
      titulo: 'Dashboard Analytics',
      descripcion: 'Panel de control interactivo con gráficos en tiempo real y reportes personalizables.',
      tecnologias: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      imagen: '📊',
      enlace: '#',
      github: '#'
    }
  ]

  return (
    <section className="proyectos-section">
      <div className="section-header">
        <h2 className="section-title">Mis Proyectos</h2>
        <p className="section-subtitle">
          Una selección de mis trabajos más destacados
        </p>
      </div>

      <div className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="proyecto-card">
            <div className="proyecto-imagen">
              <span className="proyecto-icon">{proyecto.imagen}</span>
            </div>
            
            <div className="proyecto-content">
              <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
              <p className="proyecto-descripcion">{proyecto.descripcion}</p>
              
              <div className="proyecto-tecnologias">
                {proyecto.tecnologias.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="proyecto-acciones">
                <a href={proyecto.enlace} className="btn btn-outline">Ver Demo</a>
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