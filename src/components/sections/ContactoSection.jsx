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
          ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
        </p>
      </div>

      <div className="contacto-content">
        <div className="contacto-info">
          <h3>¿Tienes un proyecto en mente?</h3>
          <p>
            Me encantaría escuchar sobre tu próximo proyecto. Ya sea una aplicación web, una landing page o cualquier idea que tengas, estoy aquí para ayudarte a convertirla en realidad.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-text">
                <h4>Email</h4>
                <p>tu@email.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div className="contact-text">
                <h4>Teléfono</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-text">
                <h4>Ubicación</h4>
                <p>Ciudad, País</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h4>Sígueme</h4>
            <div className="social-grid">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>

        <div className="contacto-form-container">
          <form className="contacto-form" onSubmit={handleSubmit}>
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
                placeholder="tu@email.com"
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