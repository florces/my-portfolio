# Mi Portafolio - React + JavaScript

Un entorno de desarrollo React completamente configurado para programar con JavaScript puro.

## 🚀 Características

✅ **React 18** - Última versión con todas las funcionalidades modernas  
✅ **JavaScript ES6+** - Sin TypeScript, programación pura en JS  
✅ **Vite** - Build tool súper rápido con Hot Module Replacement  
✅ **ESLint** - Linter configurado específicamente para React + JS  
✅ **CSS Moderno** - Soporte para variables CSS y temas claro/oscuro  
✅ **Desarrollo Optimizado** - Puerto 3000 y apertura automática del navegador  

## 📋 Requisitos

- Node.js (versión 16 o superior)
- npm o yarn

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📜 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo (puerto 3000)
npm run build    # Build para producción
npm run preview  # Preview del build
npm run lint     # Revisar código con ESLint
```

## 📁 Estructura del Proyecto

```
mi-portafolio/
├── public/           # Archivos estáticos
│   └── react.svg     # Logo de React
├── src/              # Código fuente
│   ├── App.jsx       # Componente principal
│   ├── App.css       # Estilos del App
│   ├── main.jsx      # Punto de entrada
│   └── index.css     # Estilos globales
├── .eslintrc.json    # Configuración de ESLint
├── index.html        # Template HTML
├── package.json      # Dependencias y scripts
└── vite.config.js    # Configuración de Vite
```

## 🎯 Configuración Optimizada

### Vite Config
- Puerto 3000 (como Create React App)
- Apertura automática del navegador
- Source maps habilitados
- Hot Module Replacement

### ESLint Config
- Reglas específicas para React
- Soporte para JSX
- React Hooks optimizado
- PropTypes deshabilitado (opcional en JS)

## 🚀 Empezar a Programar

1. **Instala las dependencias:**
   ```bash
   npm install
   ```

2. **Inicia el servidor:**
   ```bash
   npm run dev
   ```

3. **Abre tu navegador en:** http://localhost:3000

4. **¡Edita `src/App.jsx` y empieza a programar!**

## 🎨 Características del Entorno

- **Hot Reload** - Los cambios se ven instantáneamente
- **Error Overlay** - Errores mostrados en el navegador
- **Linting en Tiempo Real** - ESLint integrado con VS Code
- **CSS Moderno** - Variables CSS y auto-prefixing
- **Optimización de Bundle** - Tree shaking automático

## 🔧 Personalización

### Agregar nuevos componentes:
```javascript
// src/components/MiComponente.jsx
import React from 'react'

function MiComponente({ nombre }) {
  return (
    <div>
      <h2>¡Hola {nombre}!</h2>
    </div>
  )
}

export default MiComponente
```

### Usar el componente:
```javascript
// En App.jsx
import MiComponente from './components/MiComponente.jsx'

function App() {
  return (
    <div>
      <MiComponente nombre="Desarrollador" />
    </div>
  )
}
```

## 🎉 ¡Listo para Programar!

Tu entorno React con JavaScript está completamente configurado y optimizado. ¡Solo ejecuta `npm run dev` y empieza a crear!