// src/components/AboutMe.jsx

import React, {useContext} from 'react';
import me from '../assets/Me.jpeg';
import { LenguageContext } from '../utils/LenguajeContext';
import '../styles/AboutMe/AboutMe.css';

const AboutMe = () => {

  const {isEnglish} = useContext(LenguageContext)

  return (
    <div id='About' className='zone'>
      {/* Nuevo título con acento */}
      <h3>
        {isEnglish ? "Full Stack Developer specializing in " : "Desarrollador Full Stack especializado en "}
        <span className='highlight-title'>{isEnglish ? "Web and Mobile solutions" : "soluciones Web y Mobile"}</span>
      </h3>
      
      {/* Usaremos un solo bloque de texto para el párrafo principal */}
      <div className='content-wrapper'>
          <img src={me} alt="Nicolás Navarrete Profile" className='profileImg'/>
          <div className='description-content'>
            <span id='text' className='main-text'>
              {isEnglish 
                ? "I'm Nicolás Navarrete, a Full Stack Developer specializing in building scalable Web and Mobile solutions. I have over a year and a half of experience creating robust user interfaces (React), developing native mobile applications (React Native/Expo), and designing API/server architectures. My goal is to apply my knowledge across the entire development lifecycle, from the database to the cloud (Azure/Google Cloud), to deliver products that make a real impact."
                : "Soy Nicolás Navarrete, un Desarrollador Full Stack apasionado por la construcción de soluciones Web y Mobile escalables. Cuento con más de año y medio de experiencia trabajando en la creación de interfaces de usuario robustas (React), el desarrollo de aplicaciones móviles nativas (React Native/Expo) y la arquitectura de APIs y servidores. Mi objetivo es aplicar mis conocimientos en el ciclo de vida completo del desarrollo, desde la base de datos hasta la nube (Azure/Google Cloud), para entregar productos que generen un impacto real."}
            </span>
          </div>
      </div>
    </div>
  )
}

export default AboutMe