import React, {useContext} from 'react'
import ProjectsJson from '../data/Projects.json' // Importamos el JSON de proyectos
import { LenguageContext } from '../utils/LenguajeContext'
import '../styles/Projects/Projects.css'
import DoncaImage from '../assets/Work/Donca/DoncaImage.png'
import MNImage from '../assets/Work/MN/MNImage.png'

// Objeto para mapear nombres de imágenes a módulos de importación
const projectImages = {
    "DoncaImage.png": DoncaImage,
    "MNImage.png": MNImage,
    // Agrega aquí otras imágenes si las usas en el JSON
};


const Projects = () => {
  const {isEnglish} = useContext(LenguageContext)

  // Mapeamos los datos para asegurar el contenido bilingüe
  const projectsData = ProjectsJson.map(p => ({
    ...p,
    // La imagen se resuelve dinámicamente
    imgSrc: projectImages[p.img], 
    // El subtítulo/tipo se selecciona según el idioma
    typeDisplay: isEnglish ? p.type : p['type-es'], 
    // La descripción se selecciona según el idioma (asumiendo que agregarás description_en al JSON)
    descriptionDisplay: isEnglish ? p.description_en : p.description, 
    // La pila de tecnologías se obtiene del JSON
    techStack: p.techStack || [] 
  }));

  return (
    <div id='Projects' className='zone'>
      <h1>{isEnglish ? "Projects" : "Proyectos"}</h1>
      <div className='project-container'>
        <ul className='project-list'>
          {projectsData.map((p, i) => (
            <li className='project-item' key={i}>
              <div className='project-card'>
                {/* Contenido visual: Imagen */}
                <div className='pjt-img-content'>
                  {p.imgSrc && <img src={p.imgSrc} alt={`${p.name} cover`} />}
                </div>

                {/* Contenido de datos y texto */}
                <div className='pjt-data-content'>
                  <span className='pjt-title'>{p.name}</span>
                  <span className='pjt-subtitle'>{p.typeDisplay}</span>
                  
                  <p className='pjt-description'>{p.descriptionDisplay}</p>
                  
                  {/* Nueva sección de tecnologías */}
                  {p.techStack.length > 0 && (
                    <div className='pjt-tech-stack'>
                        {p.techStack.map((tech, idx) => (
                            <span key={idx} className='tech-tag'>{tech}</span>
                        ))}
                    </div>
                  )}

                  {/* Enlace al proyecto */}
                  <a className='pjt-link-btn' href={p['web-url']} target='_blank' rel="noopener noreferrer">
                    <span>
                      {isEnglish ? "View Project" : "Ver Proyecto"}
                    </span>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Projects