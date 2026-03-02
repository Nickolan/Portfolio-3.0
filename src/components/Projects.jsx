// src/components/Projects.jsx

import React, {useContext} from 'react'
import ProjectsJson from '../data/Projects.json' // Importamos el JSON de proyectos
import { LenguageContext } from '../utils/LenguajeContext'
import '../styles/Projects/Projects.css'
import DoncaImage from '../assets/Work/Donca/Banner_Donca.png' //
import MNImage from '../assets/Work/MN/Banner_MN.png' //
import Books4AllImage from '../assets/Work/Books4All/BOOKS4ALL.png';
import FindYourPerritoImage from '../assets/Work/FindYourPerrito/FindYourPerrito-Title.jpg';
import ModeloRestauranteImage from '../assets/Work/Restaurante/ModeloRestaurante-Banner.png';

// Objeto para mapear nombres de imágenes a módulos de importación
const projectImages = {
    "DoncaImage.png": DoncaImage,
    "MNImage.png": MNImage,
    "Books4AllImage.png": Books4AllImage,
    "FindYourPerritoImage.png": FindYourPerritoImage,
    "ModeloRestaurante-Banner.png": ModeloRestauranteImage
    // Agrega aquí otras imágenes si las usas en el JSON
};
const Projects = () => {
  const {isEnglish} = useContext(LenguageContext) //

  // Mapeamos los datos para asegurar el contenido bilingüe
  const projectsData = ProjectsJson.map(p => ({
    ...p,
    imgSrc: projectImages[p.img], //
    typeDisplay: isEnglish ? p.type : p['type-es'], //
    descriptionDisplay: isEnglish ? p.description_en : p.description, //
    techStack: p.techStack || [] 
  }));
  
  // Función para determinar el ícono de tipo (Web, Mobile, Both)
  const getTypeIcon = (techStack) => {
      const isWeb = techStack.includes('React');
      const isMobile = techStack.includes('React Native') || techStack.includes('Expo');

      if (isWeb && isMobile) return '💻📱'; // Ambos: Web y Mobile
      if (isMobile) return '📱'; // Mobile App
      if (isWeb) return '💻'; // Web App
      return '🛠️'; // General
  }

return (
    <div id='Projects' className='zone'>
      <h1>{isEnglish ? "Projects" : "Proyectos"}</h1> {/* */}
      <div className='project-container'>
        <ul className='project-list'>
          {projectsData.map((p, i) => (
            <li className='project-item' key={i}>
              <div className='project-card'>
                {/* Contenedor de Imagen y Overlay */}
                <div className='pjt-img-content'>
                  {p.imgSrc && <img src={p.imgSrc} alt={`${p.name} cover`} />} {/* */}
                  
                  {/* Overlay que aparece al hacer hover */}
                  <div className='pjt-overlay'>
                      <div className='pjt-overlay-content'>
                          {/* Título y Tipo de proyecto */}
                          <span className='pjt-title'>{p.name}</span>
                          
                          {/* Ícono de tipo (Web/Mobile/Both) y Subtítulo */}
                          <span className='pjt-type-icon'>{getTypeIcon(p.techStack)} {p.typeDisplay}</span>
                          
                          {/* Descripción Resumida (primer elemento del array de descripción) */}
                          <p className='pjt-summary'>
                            {Array.isArray(p.descriptionDisplay) ? p.descriptionDisplay[0] : p.descriptionDisplay}
                          </p>
                          
                          {/* Botón de Enlace */}
                          <a className='pjt-link-btn' href={p['web-url']} target='_blank' rel="noopener noreferrer">
                            <span>
                              {isEnglish ? "View Project" : "Ver Proyecto"} {/* */}
                            </span>
                          </a>
                      </div>
                  </div>
                </div>

                {/* Ya no necesitamos el pjt-data-content, la info está en el overlay */}
              </div>
            </li>
          ))}
      
        </ul>
      </div>
    </div>
  )
}

export default Projects