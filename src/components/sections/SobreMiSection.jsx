import React from 'react'

const SobreMiSection = () => {
  return (
    <section className="sobre-mi-section">
      <div className="section-header">
        <h2 className="section-title">Sobre Mí</h2>
        <p className="section-subtitle">
          Conoce más sobre mi trayectoria y pasión por el desarrollo
        </p>
      </div>

      <div className="sobre-mi-content">
        <div className="sobre-mi-text">
          <div className="intro-text">
            <h3>¡Hola! Soy un desarrollador apasionado por la tecnología</h3>
            <p>
              Con más de 3 años de experiencia en desarrollo web, me especializo en 
              crear soluciones digitales innovadoras que combinan funcionalidad 
              excepcional con diseños atractivos.
            </p>
            <p>
              Mi enfoque se centra en escribir código limpio, escalable y mantenible, 
              siempre buscando las mejores prácticas y tecnologías más actuales 
              para entregar productos de calidad superior.
            </p>
          </div>

          <div className="experience-timeline">
            <h4>Mi Trayectoria</h4>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2024</div>
                <div className="timeline-content">
                  <h5>Desarrollador Full Stack Senior</h5>
                  <p>Liderando proyectos de React y Node.js</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2022</div>
                <div className="timeline-content">
                  <h5>Desarrollador Frontend</h5>
                  <p>Especialización en React y TypeScript</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2021</div>
                <div className="timeline-content">
                  <h5>Inicio en Desarrollo Web</h5>
                  <p>Primeros pasos con HTML, CSS y JavaScript</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sobre-mi-visual">
          <div className="interests-grid">
            <div className="interest-item">
              <span className="interest-icon">💻</span>
              <h4>Coding</h4>
              <p>Desarrollo web moderno</p>
            </div>
            <div className="interest-item">
              <span className="interest-icon">🎨</span>
              <h4>Design</h4>
              <p>UI/UX atractivo</p>
            </div>
            <div className="interest-item">
              <span className="interest-icon">🚀</span>
              <h4>Innovation</h4>
              <p>Tecnologías emergentes</p>
            </div>
            <div className="interest-item">
              <span className="interest-icon">🌱</span>
              <h4>Learning</h4>
              <p>Crecimiento continuo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMiSection