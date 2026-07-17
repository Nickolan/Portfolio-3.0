// src/components/AboutMe.jsx

import React, {useContext} from 'react';
import me from '../assets/yo.png';
import { LenguageContext } from '../utils/LenguajeContext';
import '../styles/AboutMe/AboutMe.css';

const AboutMe = () => {

  const {isEnglish} = useContext(LenguageContext)

  return (
    <div id='About' className='zone'>
      {/* Nuevo título con acento */}
      <h3>
        {isEnglish ? "Full Stack & AI Developer building " : "Full Stack & AI Developer construyendo "}
        <span className='highlight-title'>{isEnglish ? "Web, Mobile & AI systems" : "sistemas Web, Mobile e IA"}</span>
      </h3>
      
      {/* Usaremos un solo bloque de texto para el párrafo principal */}
      <div className='content-wrapper'>
          {/* Animated liquid blob behind the transparent profile image */}
          <div className='profile-container-3d'>
            <div className='profile-blob-bg'></div>
            <img src={me} alt="Nicolás Navarrete Profile" className='profileImg-3d'/>
          </div>
          <div className='description-content'>
            <span id='text' className='main-text'>
              {isEnglish 
                ? "I'm Nicolás Navarrete — Full Stack Developer & AI Developer. I build scalable Web and Mobile products (React, Node.js, React Native/Expo) and integrate AI into real workflows: LLMs, automation pipelines (N8N) and cloud infrastructure (Azure / Google Cloud). My goal is to cover the full development lifecycle and ship products that generate real impact."
                : "Soy Nicolás Navarrete — Full Stack Developer & AI Developer. Construyo productos Web y Mobile escalables (React, Node.js, React Native/Expo) e integro IA en flujos reales: LLMs, pipelines de automatización (N8N) e infraestructura cloud (Azure / Google Cloud). Mi objetivo es cubrir el ciclo completo de desarrollo y entregar productos que generen impacto real."}
            </span>
          </div>
      </div>
    </div>
  )
}

export default AboutMe