// src/components/Projects.jsx

import React, { useContext, useState } from 'react'
import ProjectsJson from '../data/Projects.json'
import { LenguageContext } from '../utils/LenguajeContext'
import '../styles/Projects/Projects.css'

// Banner images (cards)
import DoncaBanner from '../assets/Work/Donca/Banner_Donca.png'
import MNBanner from '../assets/Work/MN/Banner_MN.png'
import Books4AllBanner from '../assets/Work/Books4All/BOOKS4ALL.png'
import FindYourPerritoBanner from '../assets/Work/FindYourPerrito/FindYourPerrito-Title.jpg'
import ModeloRestauranteBanner from '../assets/Work/Restaurante/ModeloRestaurante-Banner.png'
import SaborGestionBanner from '../assets/Work/G&S/sabor&gestion-banner.png'

// Full-size images for modal gallery
import DoncaFull from '../assets/Work/Donca/DoncaImage.png'
import MNFull from '../assets/Work/MN/MNImage.png'
import Books4AllFull from '../assets/Work/Books4All/B4A1.png'
import FindYourPerritoFull from '../assets/Work/FindYourPerrito/FYP.png'

const bannerImages = {
  "DoncaImage.png": DoncaBanner,
  "MNImage.png": MNBanner,
  "Books4AllImage.png": Books4AllBanner,
  "FindYourPerritoImage.png": FindYourPerritoBanner,
  //"ModeloRestaurante-Banner.png": ModeloRestauranteBanner,
  "Sabor&GestionImage.png": SaborGestionBanner
}

const galleryImages = {
  "DoncaImage.png": [DoncaBanner, DoncaFull],
  "MNImage.png": [MNBanner, MNFull],
  "Books4AllImage.png": [Books4AllBanner, Books4AllFull],
  "FindYourPerritoImage.png": [FindYourPerritoBanner, FindYourPerritoFull],
  "Sabor&GestionImage.png": [SaborGestionBanner]
  //"ModeloRestaurante-Banner.png": [ModeloRestauranteBanner],
}

// Map techStack name → GitHub repo URL (only for public ones)
const githubLinks = {
  "Donca": null,
  "M.N Club": null,
  "Books4All": "https://github.com/Nickolan/Books4All-Front",
  "FindYourPerrito": "https://github.com/Nickolan/FindYourPerrito-Client",
  //"Modelo Restaurante": "https://restaurante-modelo-nu.vercel.app",
  "Sabor&Gestion": null
}

// Tech tag colors by category
const techColors = {
  "React": "#61DAFB",
  "React Native": "#61DAFB",
  "Expo": "#000000",
  "Node.js": "#68A063",
  "Express": "#888888",
  "PostgreSQL": "#336791",
  "Azure": "#0078D4",
  "Redux": "#764ABC",
  "HTML": "#E34F26",
  "CSS": "#1572B6",
  "JAVASCRIPT": "#F7DF1E",
  "NestJS": "#E0234E",
  "Google Cloud": "#4285F4",
  "TYPESCRIPT": "#3178c6",
  "Python": "#3776AB",
  "FastAPI": "#009688",
  "Tailwind": "#06B6D4"
}

const getTypeIcon = (techStack) => {
  const isWeb = techStack.includes('React')
  const isMobile = techStack.includes('React Native') || techStack.includes('Expo')
  if (isWeb && isMobile) return '💻📱'
  if (isMobile) return '📱'
  if (isWeb) return '💻'
  return '🛠️'
}

const ProjectModal = ({ project, isEnglish, onClose }) => {
  const [activeImg, setActiveImg] = useState(0)
  const images = galleryImages[project.img] || [bannerImages[project.img]]
  const description = isEnglish ? project.description_en : project.description
  const type = isEnglish ? project.type : project['type-es']
  const githubUrl = githubLinks[project.name]
  const hasWebUrl = project['web-url'] && !project['web-url'].includes('github.com')
  const hasGithub = githubUrl || (project['web-url'] && project['web-url'].includes('github.com'))
  const webUrl = hasWebUrl ? project['web-url'] : null
  const repoUrl = githubUrl || (project['web-url'] && project['web-url'].includes('github.com') ? project['web-url'] : null)

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        {/* Left: Gallery */}
        <div className="modal-gallery">
          <div className="modal-main-img">
            <img
              src={images[activeImg]}
              alt={`${project.name} screenshot ${activeImg + 1}`}
            />
          </div>
          {images.length > 1 && (
            <div className="modal-thumbnails">
              {images.map((img, i) => (
                <button
                  key={i}
                  className={`modal-thumb ${activeImg === i ? 'active' : ''}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt={`thumb ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info */}
        <div className="modal-info">
          {/* Header */}
          <div className="modal-header">
            <div className="modal-type-badge">
              {getTypeIcon(project.techStack)} {type}
            </div>
            <h2 className="modal-title">{project.name}</h2>
          </div>

          {/* Description */}
          <div className="modal-description">
            <h4>{isEnglish ? "About this project" : "Sobre este proyecto"}</h4>
            <p>{description}</p>
          </div>

          {/* Tech Stack */}
          <div className="modal-tech">
            <h4>{isEnglish ? "Tech Stack" : "Tecnologías"}</h4>
            <div className="modal-tech-tags">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="tech-tag"
                  style={{ borderColor: techColors[tech] || '#888', color: techColors[tech] || '#888' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="modal-links">
            {webUrl && (
              <a
                href={webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn modal-btn--primary"
              >
                <span className="modal-btn-icon">🌐</span>
                {isEnglish ? "Live Demo" : "Ver Demo"}
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn modal-btn--secondary"
              >
                <span className="modal-btn-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </span>
                {isEnglish ? "Repository" : "Repositorio"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const { isEnglish } = useContext(LenguageContext)
  const [selectedProject, setSelectedProject] = useState(null)

  const projectsData = ProjectsJson.map(p => ({
    ...p,
    imgSrc: bannerImages[p.img],
    typeDisplay: isEnglish ? p.type : p['type-es'],
    descriptionDisplay: isEnglish ? p.description_en : p.description,
    techStack: p.techStack || []
  }))

  return (
    <div id='Projects' className='zone'>
      <h1>{isEnglish ? "Projects" : "Proyectos"}</h1>

      <div className='project-container'>
        <ul className='project-list'>
          {projectsData.map((p, i) => (
            <li className='project-item' key={i}>
              <div
                className='project-card'
                onClick={() => setSelectedProject(p)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setSelectedProject(p)}
                aria-label={`View details for ${p.name}`}
              >
                <div className='pjt-img-content'>
                  {p.imgSrc && <img src={p.imgSrc} alt={`${p.name} cover`} />}

                  <div className='pjt-overlay'>
                    <div className='pjt-overlay-content'>
                      <span className='pjt-title'>{p.name}</span>
                      <span className='pjt-type-icon'>{getTypeIcon(p.techStack)} {p.typeDisplay}</span>
                      <p className='pjt-summary'>
                        {Array.isArray(p.descriptionDisplay) ? p.descriptionDisplay[0] : p.descriptionDisplay}
                      </p>
                      <button className='pjt-expand-btn'>
                        {isEnglish ? "Explore Project →" : "Ver Proyecto →"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Tech stack preview below card */}
                <div className='pjt-stack-preview'>
                  {p.techStack.slice(0, 4).map((tech, ti) => (
                    <span key={ti} className='pjt-stack-tag'>{tech}</span>
                  ))}
                  {p.techStack.length > 4 && (
                    <span className='pjt-stack-tag pjt-stack-more'>+{p.techStack.length - 4}</span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isEnglish={isEnglish}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

export default Projects