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
            <h3>¡Hola! Soy un desarrollador apasionado</h3>
            <p>
              Me especializo en crear experiencias web modernas y funcionales. Con años de experiencia en desarrollo frontend y backend, disfruto transformando ideas en soluciones digitales innovadoras.
            </p>
            <p>
              Mi enfoque se centra en escribir código limpio, escalable y mantener las mejores prácticas de desarrollo. Siempre estoy aprendiendo nuevas tecnologías y explorando formas de mejorar mis habilidades.
            </p>
          </div>

          <div className="experience-timeline">
            <h4>Mi Trayectoria</h4>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2024</div>
                <div className="timeline-content">
                  <h5>Desarrollador Senior</h5>
                  <p>Liderando proyectos complejos y mentoring a desarrolladores junior</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2022</div>
                <div className="timeline-content">
                  <h5>Desarrollador Frontend</h5>
                  <p>Especializándome en React, Vue y tecnologías modernas</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2021</div>
                <div className="timeline-content">
                  <h5>Inicio en Desarrollo Web</h5>
                  <p>Comenzando mi aventura en el mundo del desarrollo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sobre-mi-visual">
          <div className="interests-grid">
            <div className="interest-item">
              <span className="interest-icon">💻</span>
              <h4>Programación</h4>
              <p>JavaScript, TypeScript, Python, Java y más</p>
            </div>
            <div className="interest-item">
              <span className="interest-icon">🎨</span>
              <h4>Diseño</h4>
              <p>UI/UX, responsive design y experiencia de usuario</p>
            </div>
            <div className="interest-item">
              <span className="interest-icon">🚀</span>
              <h4>Innovación</h4>
              <p>Siempre buscando nuevas tecnologías y soluciones</p>
            </div>
            <div className="interest-item">
              <span className="interest-icon">🌱</span>
              <h4>Aprendizaje</h4>
              <p>Constante actualización y mejora continua</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMiSection