import React from 'react'

const IdiomaSection = () => {
  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸', description: 'Idioma nativo' },
    { code: 'en', name: 'English', flag: '🇺🇸', description: 'International language' },
    { code: 'pt', name: 'Português', flag: '🇧🇷', description: 'Língua portuguesa' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦', description: 'اللغة العربية' }
  ]

  const handleLanguageSelect = (langCode) => {
    console.log(`Idioma seleccionado: ${langCode}`)
    // Aquí implementarás la lógica de cambio de idioma después
  }

  return (
    <section className="idioma-section">
      <div className="section-header">
        <h2 className="section-title">Idioma</h2>
        <p className="section-subtitle">
          Selecciona tu idioma preferido para una mejor experiencia
        </p>
      </div>

      <div className="idioma-grid">
        {languages.map((lang) => (
          <button
            key={lang.code}
            className="idioma-card"
            onClick={() => handleLanguageSelect(lang.code)}
          >
            <div className="idioma-flag">{lang.flag}</div>
            <h3 className="idioma-name">{lang.name}</h3>
            <p className="idioma-description">{lang.description}</p>
          </button>
        ))}
      </div>

      <div className="idioma-info">
        <div className="info-card">
          <h4>🌍 Soporte Multiidioma</h4>
          <p>
            Este portafolio está diseñado para ser accesible en múltiples idiomas. 
            Selecciona tu idioma preferido para ver todo el contenido traducido.
          </p>
        </div>
      </div>
    </section>
  )
}

export default IdiomaSection