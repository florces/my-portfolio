import React from 'react'

const InicioSection = () => {
  return (
    <section className="inicio-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            ¡Hola! soy <span className="accent-text">Florencia</span>
          </h1>
          <h2 className="hero-subtitle">
            Desarrolladora Full Stack especializada en React
          </h2>
          <p className="hero-description">
            Transformo ideas en experiencias digitales excepcionales. Con pasión por el código limpio y las soluciones innovadoras, creo aplicaciones web que marcan la diferencia.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Años de experiencia</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Proyectos completados</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfacción del cliente</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn btn-primary">
              Ver mis proyectos
            </button>
            <button className="btn btn-secondary">
              Descargar CV
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-preview">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="code-title">portfolio.js</span>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="code-keyword">const</span> 
                <span className="code-variable"> developer</span> 
                <span className="code-operator"> = </span>
                <span className="code-string">{"{"}</span>
              </div>
              <div className="code-line code-indent">
                <span className="code-property">name:</span> 
                <span className="code-string">'Florencia'</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-property">skills:</span> 
                <span className="code-string">['React', 'Node.js', 'Python']</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-property">passion:</span> 
                <span className="code-string">'Crear experiencias increíbles'</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-property">available:</span> 
                <span className="code-boolean">true</span>
              </div>
              <div className="code-line">
                <span className="code-string">{"}"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InicioSection