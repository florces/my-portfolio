import React, { useState } from 'react'
import './Sidebar.css'

const Sidebar = ({ activeSection, setActiveSection, currentTheme, setCurrentTheme, themes }) => {
  const menuItems = [
    { id: 'inicio', label: 'Inicio', icon: '🏠' },
    { id: 'proyectos', label: 'Mis Proyectos', icon: '💼' },
    { id: 'sobre-mi', label: 'Sobre Mí', icon: '👨‍💻' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'contacto', label: 'Contacto', icon: '📬' }
  ]

  const themeNames = {
    professional: 'Profesional',
    modern: 'Moderno', 
    creative: 'Creativo',
    minimal: 'Minimalista'
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="profile-section">
          <div className="profile-avatar">
            <span>FL</span>
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
            onClick={() => setActiveSection(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="theme-selector">
        <h3 className="theme-title">🎨 Tema</h3>
        <div className="theme-options">
          {themes.map((theme) => (
            <button
              key={theme}
              className={`theme-option ${currentTheme === theme ? 'active' : ''}`}
              onClick={() => setCurrentTheme(theme)}
              data-theme={theme}
            >
              <div className="theme-preview">
                <div className="theme-color primary"></div>
                <div className="theme-color accent"></div>
              </div>
              <span className="theme-name">{themeNames[theme] || theme}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="language-selector">
        <button 
          className="language-button"
          onClick={() => setActiveSection('idioma')}
        >
          🌍 IDIOMA
        </button>
      </div>

      <div className="sidebar-footer">
        <div className="social-links">
          <a href="#" className="social-link">💼</a>
          <a href="#" className="social-link">🐙</a>
          <a href="#" className="social-link">📧</a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar