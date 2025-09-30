import React, { useState } from 'react'

const ContactoSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    // Aquí implementarías el envío del formulario
  }

  return (
    <section className="contacto-section">
      <div className="section-header">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          ¡Hablemos sobre tu próximo proyecto!
        </p>
      </div>

      <div className="contacto-content">
        <div className="contacto-info">
          <h3>¿Tienes un proyecto en mente?</h3>
          <p>
            Estoy siempre interesado en nuevas oportunidades y 
            proyectos desafiantes. No dudes en contactarme.
          </p>

          <div className="contact-methods">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-details">
                <h4>Email</h4>
                <p>tu.email@ejemplo.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div className="contact-details">
                <h4>Teléfono</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-details">
                <h4>Ubicación</h4>
                <p>Tu Ciudad, País</p>
              </div>
            </div>
          </div>

          <div className="social-networks">
            <h4>Sígueme en:</h4>
            <div className="social-links-extended">
              <a href="#" className="social-link-ext">💼 LinkedIn</a>
              <a href="#" className="social-link-ext">🐙 GitHub</a>
              <a href="#" className="social-link-ext">🐦 Twitter</a>
            </div>
          </div>
        </div>

        <div className="contacto-form">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu.email@ejemplo.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Cuéntame sobre tu proyecto..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Enviar Mensaje 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactoSection