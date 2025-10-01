import React, { useState } from 'react'
import './Sidebar.css'

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const menuItems = [
    { id: 'inicio', label: 'Inicio', icon: '🏠' },
    { id: 'proyectos', label: 'Mis Proyectos', icon: '💼' },
    { id: 'sobre-mi', label: 'Sobre Mí', icon: '👨‍💻' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'contacto', label: 'Contacto', icon: '📬' }
  ]

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false) // Cerrar menú en móvil después de seleccionar
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Botón hamburguesa para móviles */}
      <button 
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Overlay para cerrar menú en móvil */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      <div className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="profile-section">
            <div className="profile-avatar">
              <img src="img/me.jpg" alt="Florencia" className="profile-image" />
            </div>
            <h2 className="profile-name">Florencia</h2>
            <p className="profile-title">Desarrolladora Full Stack</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleMenuClick(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="language-selector">
          <button
            className="language-button"
            onClick={() => handleMenuClick('idioma')}
          >
            🌍 IDIOMA
          </button>
        </div>

        <div className="sidebar-footer">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/florencia-c%C3%A9spedes-carneiro-373731189/" className="social-link linkedin-link" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://github.com/florces" className="social-link" target="_blank" rel="noopener noreferrer">🐙</a>
            <a href="mailto:florencia.cespedes@example.com" className="social-link" target="_blank" rel="noopener noreferrer">📧</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar