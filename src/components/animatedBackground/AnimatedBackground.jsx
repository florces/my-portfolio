import React, { useEffect, useRef, useState } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [circles, setCircles] = useState([]);

  const SHOW_BRANDS = false;
  const SECONDARY_COLOR = '#6b63ff22'; // Color de ejemplo, ajusta según tus constantes

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
      size: 20 + Math.random() * 400,
      baseOpacity: 0.2 + Math.random() * 0.3,
      speed: 8 + Math.random() * 12, // Velocidad en segundos
      rotationSpeed: 8 + Math.random() * 15, // Velocidad de rotación en segundos
      horizontalRange: 15 + Math.random() * 25,
      delay: Math.random() * 5, // Delay en segundos
      scale: 0.8 + Math.random() * 0.4,
    }));

    setCircles(newCircles);
  }, [dimensions, SHOW_BRANDS]);

  const renderCircle = (circle) => {
    const animationStyle = {
      '--fall-duration': `${circle.speed}s`,
      '--rotation-duration': `${circle.rotationSpeed}s`,
      '--horizontal-duration': `${circle.rotationSpeed}s`,
      '--delay': `${circle.delay}s`,
      '--horizontal-range': `${circle.horizontalRange}px`,
      '--base-opacity': circle.baseOpacity,
      '--scale': circle.scale,
      left: `${circle.x}px`,
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