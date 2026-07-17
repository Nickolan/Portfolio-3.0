// src/components/Introduction.jsx

import { useContext, useState, useEffect } from 'react'
import { LenguageContext } from '../utils/LenguajeContext'
import '../styles/Introduction/Introduction.css'
import { React, Expo, Node, Azure, Gemini } from '../utils/Logos'

// Tech icons that cycle with the animated text
const dynamicImages = [
  { name: 'Web',    src: React  },
  { name: 'Mobile', src: Expo   },
  { name: 'Server', src: Node   },
  { name: 'Cloud',  src: Azure  },
  { name: 'AI',     src: Gemini },
]

// ─── Stats shown in the Introduction hero ───────────────────────────────────
const stats = [
  { value: '3+', label_es: 'Años de experiencia', label_en: 'Years of experience' },
  { value: '5+', label_es: 'Proyectos entregados', label_en: 'Projects shipped' },
  { value: '1000h+', label_es: 'Horas de código', label_en: 'Hours of code' },
]

// ─── Core competencies derived from Education & Skills ──────────────────────
const competencies_en = ['Full Stack', 'Cloud & DevOps', 'Mobile (React Native)', 'AI Developer']
const competencies_es = ['Full Stack', 'Cloud & DevOps', 'Mobile (React Native)', 'AI Developer']

const Introduction = () => {
  const { isEnglish } = useContext(LenguageContext)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % dynamicImages.length)
    }, 1200) // 1200ms × 5 items = 6s full cycle
    return () => clearInterval(id)
  }, [])

  const competencies = isEnglish ? competencies_en : competencies_es

  return (
    <div className='zone' id='Introduction'>

      {/* ── LEFT COLUMN ─────────────────────────────────────────────────── */}
      <div className='intro-left'>

        {/* Greeting row */}
        <div className='cont-presentation'>
          <span className='static-txt'>{isEnglish ? 'Hi' : 'Hola'},</span>
          <span className='hand-rotate'>👋</span>
        </div>

        {/* Name */}
        <h1 className='intro-name'>Nicolas Navarrete</h1>

        {/* Animated role row */}
        <div className='dynamic-role-container'>
          <div className='dynamic-role-badge' key={currentIndex}>
            <div className='role-icon-box'>
              <img
                src={dynamicImages[currentIndex].src}
                alt={`${dynamicImages[currentIndex].name} icon`}
              />
            </div>
            <span className='role-title'>{dynamicImages[currentIndex].name}</span>
          </div>
          <span className='static-txt'>Developer</span>
        </div>

        {/* Bio */}
        <p className='intro-bio'>
          {isEnglish
            ? 'Full Stack Developer & AI Developer — building Web, Mobile and AI-powered systems. UTN student (Programming Technician) and Soy Henry bootcamp graduate. I integrate LLMs, automation flows (N8N) and cloud infrastructure into real products.'
            : 'Full Stack Developer & AI Developer — construyo soluciones Web, Mobile y sistemas potenciados con IA. Estudiante de UTN (Técnico en Programación) y egresado de Soy Henry. Integro LLMs, flujos de automatización (N8N) e infraestructura cloud en productos reales.'
          }
        </p>

        {/* Competency pills */}
        <div className='intro-competencies'>
          {competencies.map((c, i) => (
            <span key={i} className='intro-competency-tag'>{c}</span>
          ))}
        </div>

        {/* CTA */}
        <a href="#SendMail" className='contact-button'>
          <div className='button-item' />
          <span className='static-txt'>{isEnglish ? 'Contact Me' : 'Contactame'}</span>
        </a>
      </div>

      {/* ── RIGHT COLUMN — Stats ─────────────────────────────────────────── */}
      <div className='intro-right'>
        <div className='intro-stats'>
          {stats.map((s, i) => (
            <div className='intro-stat-card' key={i}>
              <span className='intro-stat-value'>{s.value}</span>
              <span className='intro-stat-label'>
                {isEnglish ? s.label_en : s.label_es}
              </span>
            </div>
          ))}
        </div>

        {/* Decorative availability badge */}
        <div className='intro-availability'>
          <span className='intro-avail-dot' />
          <span>{isEnglish ? 'Open to opportunities' : 'Abierto a oportunidades'}</span>
        </div>
      </div>

    </div>
  )
}

export default Introduction