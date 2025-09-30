import React from 'react'

const SkillsSection = () => {
  const skillCategories = [
    {
      categoria: 'Frontend',
      skills: [
        { nombre: 'React', nivel: 95, icon: '⚛️' },
        { nombre: 'JavaScript', nivel: 90, icon: '🟨' },
        { nombre: 'HTML/CSS', nivel: 95, icon: '🎨' },
        { nombre: 'TypeScript', nivel: 85, icon: '🔷' }
      ]
    },
    {
      categoria: 'Backend',
      skills: [
        { nombre: 'Node.js', nivel: 85, icon: '🟢' },
        { nombre: 'Python', nivel: 80, icon: '🐍' },
        { nombre: 'Express', nivel: 85, icon: '⚡' },
        { nombre: 'MongoDB', nivel: 75, icon: '🍃' }
      ]
    },
    {
      categoria: 'Herramientas',
      skills: [
        { nombre: 'Git', nivel: 90, icon: '📚' },
        { nombre: 'Docker', nivel: 70, icon: '🐳' },
        { nombre: 'AWS', nivel: 65, icon: '☁️' },
        { nombre: 'Figma', nivel: 75, icon: '🎭' }
      ]
    }
  ]

  return (
    <section className="skills-section">
      <div className="section-header">
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle">
          Tecnologías y herramientas que domino para crear soluciones increíbles
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">
              {category.categoria}
            </h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.nombre}</span>
                    <span className="skill-percentage">{skill.nivel}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.nivel}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="certifications">
        <h3>Certificaciones</h3>
        <div className="cert-grid">
          <div className="cert-item">
            <span className="cert-icon">🏆</span>
            <div className="cert-info">
              <h4>React Professional Certificate</h4>
              <p>Meta - 2023</p>
            </div>
          </div>
          <div className="cert-item">
            <span className="cert-icon">🎖️</span>
            <div className="cert-info">
              <h4>AWS Cloud Practitioner</h4>
              <p>Amazon - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection