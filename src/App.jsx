import { useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [currentTheme, setCurrentTheme] = useState('professional')

  const themes = {
    professional: {
      primary: '#2C3E50',
      secondary: '#34495E',
      accent: '#3498DB',
      background: '#FFFFFF',
      text: '#2C3E50',
      textLight: '#7F8C8D'
    },
    modern: {
      primary: '#1A1A2E',
      secondary: '#16213E',
      accent: '#E94560',
      background: '#0F0F23',
      text: '#FFFFFF',
      textLight: '#BDC3C7'
    },
    creative: {
      primary: '#6C5CE7',
      secondary: '#A29BFE',
      accent: '#FD79A8',
      background: '#DDD6FE',
      text: '#2D3748',
      textLight: '#4A5568'
    },
    minimal: {
      primary: '#000000',
      secondary: '#1A1A1A',
      accent: '#FF6B6B',
      background: '#FFFFFF',
      text: '#000000',
      textLight: '#666666'
    }
  }

  return (
    <div className="App" data-theme={currentTheme}>
      <style>
        {`
          :root {
            --primary-color: ${themes[currentTheme].primary};
            --secondary-color: ${themes[currentTheme].secondary};
            --accent-color: ${themes[currentTheme].accent};
            --background-color: ${themes[currentTheme].background};
            --text-color: ${themes[currentTheme].text};
            --text-light-color: ${themes[currentTheme].textLight};
          }
        `}
      </style>
      
      <Sidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        themes={Object.keys(themes)}
      />
      
      <MainContent activeSection={activeSection} />
    </div>
  )
}

export default App