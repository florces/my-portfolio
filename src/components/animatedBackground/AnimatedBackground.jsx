import React, { useEffect, useRef, useState } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [circles, setCircles] = useState([]);

  const SHOW_BRANDS = false;
  const SECONDARY_COLOR = '#c36af73c'; // Color de ejemplo, ajusta según tus constantes

  // Actualizar dimensiones del contenedor
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setDimensions({ width: clientWidth, height: clientHeight });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Generar círculos/cuadrados cuando las dimensiones estén disponibles
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const newCircles = Array.from({ length: SHOW_BRANDS ? 40 : 15 }).map((_, index) => ({
      id: index,
      x: Math.random() * (dimensions.width - 60),
      y: -200 - Math.random() * 500, // Posición inicial muy arriba y distribuida
      size: 8 + Math.random() * 400,
      baseOpacity: 0.1 + Math.random() * 0.2,
      speed: 15 + Math.random() * 20, // Velocidad en segundos
      delay: Math.random() * 15, // Delay distribuido en 15 segundos
      scale: 0.5 + Math.random() * 0.8,
    }));

    setCircles(newCircles);
  }, [dimensions, SHOW_BRANDS]);

  const renderCircle = (circle) => {
    const animationStyle = {
      '--fall-duration': `${circle.speed}s`,
      '--delay': `${circle.delay}s`,
      '--base-opacity': circle.baseOpacity,
      '--scale': circle.scale,
      left: `${circle.x}px`,
      top: `${circle.y}px`, // Posición inicial específica
      width: `${circle.size}px`,
      height: `${circle.size}px`,
      backgroundColor: SECONDARY_COLOR,
    };

    return (
      <div
        key={circle.id}
        className="animated-particle"
        style={animationStyle}
      >
        {SHOW_BRANDS && (
          <div className="brand-icon">
            {/* Aquí puedes agregar tus íconos SVG */}
            <svg width={circle.size} height={circle.size} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="currentColor" />
            </svg>
          </div>
        )}
      </div>
    );
  };

  return (
    <div ref={containerRef} className="animated-background">
      {circles.map(renderCircle)}
    </div>
  );
};

export default AnimatedBackground;