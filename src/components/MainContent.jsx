import React from 'react'
import InicioSection from './sections/InicioSection'
import ProyectosSection from './sections/ProyectosSection'
import SobreMiSection from './sections/SobreMiSection'
import SkillsSection from './sections/SkillsSection'
import ContactoSection from './sections/ContactoSection'
import IdiomaSection from './sections/IdiomaSection'
import './MainContent.css'
import AnimatedBackground from './animatedBackground/AnimatedBackground'

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
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          height: '100vh',
          overflow: 'hidden'
        }}>
          <AnimatedBackground />
          <div style={{ 
            position: 'relative', 
            zIndex: 10,
            height: '100%',
            width: '100%'
          }}>
            {renderSection()}
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainContent