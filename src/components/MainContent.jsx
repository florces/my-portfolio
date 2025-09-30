import React from 'react'
import InicioSection from './sections/InicioSection'
import ProyectosSection from './sections/ProyectosSection'
import SobreMiSection from './sections/SobreMiSection'
import SkillsSection from './sections/SkillsSection'
import ContactoSection from './sections/ContactoSection'
import IdiomaSection from './sections/IdiomaSection'
import './MainContent.css'

const MainContent = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return <InicioSection />
      case 'proyectos':
        return <ProyectosSection />
      case 'sobre-mi':
        return <SobreMiSection />
      case 'skills':
        return <SkillsSection />
      case 'contacto':
        return <ContactoSection />
      case 'idioma':
        return <IdiomaSection />
      default:
        return <InicioSection />
    }
  }

  return (
    <main className="main-content">
      <div className="content-container">
        {renderSection()}
      </div>
    </main>
  )
}

export default MainContent