import React, { useState } from 'react'
import './Sidebar.css'
import { FaHome, FaBriefcase, FaUser, FaBolt, FaEnvelope, FaLinkedin, FaGithub, FaTiktok, FaGlobe } from 'react-icons/fa'

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const menuItems = [
    { id: 'inicio', label: 'Inicio', icon: <FaHome /> },
    { id: 'proyectos', label: 'Mis Proyectos', icon: <FaBriefcase /> },
    { id: 'sobre-mi', label: 'Sobre Mí', icon: <FaUser /> },
    { id: 'skills', label: 'Skills', icon: <FaBolt /> },
    { id: 'contacto', label: 'Contacto', icon: <FaEnvelope /> }
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
              <img src="/me.jpg" alt="Florencia" className="profile-image" />
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
            <FaGlobe /> IDIOMA
          </button>
        </div>

        <div className="sidebar-footer">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/florencia-c%C3%A9spedes-carneiro-373731189/" className="social-link linkedin-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/florces" className="social-link github-link" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://www.tiktok.com/@florenciadev" className="social-link tiktok-link" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar