// src/components/Introduction.jsx

import {useContext, useState, useEffect} from 'react' // Importamos useState y useEffect
import { LenguageContext } from '../utils/LenguajeContext'
import '../styles/Introduction/Introduction.css'
import { React, Expo, Node, Azure } from '../utils/Logos';

// Mapeo de imágenes por índice de la lista dinámica (4 elementos, 6s / 4 pasos = 1.5s por paso)
const dynamicImages = [
    { name: 'Web', src: React },      // Primer paso, 0s
    { name: 'Mobile', src: Expo },    // Segundo paso, 1.5s
    { name: 'Server', src: Node },    // Tercer paso, 3s
    { name: 'Cloud', src: Azure },     // Cuarto paso, 4.5s
];

const Introduction = () => {
    const {isEnglish} = useContext(LenguageContext)
    const [currentIndex, setCurrentIndex] = useState(0); // Para controlar la imagen

    // Efecto para sincronizar la imagen con la animación CSS (6s / 4 pasos = 1.5s por paso)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % dynamicImages.length);
        }, 1500); // 6000ms / 4 = 1500ms

        return () => clearInterval(intervalId);
    }, []);

  return (
    <div className='zone' id='Introduction'>
      <div className='cont-presentation'>
        <span className='static-txt'>{isEnglish ? "Hi" : "Hola"},</span>
        <span className='hand-rotate'>👋</span>
        <span className='static-txt'>{isEnglish ? "I'm" : "Soy"} Nicolas Navarrete</span>
      </div>
      
      {/* NUEVO CONTENEDOR WRAPPER */}
      <div className='dynamic-content-wrapper'> 
        <div className='wrapper'>
            <ul className='dynamic-txts'>
            <li><span>Web</span></li>
            <li><span>Mobile</span></li>
            <li><span>Server</span></li>
            <li><span>Cloud</span></li>
            </ul>
            <span className='static-txt'>Development</span>
        </div>
        
        {/* IMAGEN DINÁMICA */}
        <div className='dynamic-image-container'>
            <img 
                src={dynamicImages[currentIndex].src} 
                alt={`${dynamicImages[currentIndex].name} Development Icon`} 
                key={currentIndex} // Clave para forzar la re-renderización/transición
            />
        </div>
        
      </div>
      {/* FIN NUEVO CONTENEDOR WRAPPER */}

      <a href="#SendMail" className='contact-button'>
        <div className='button-item'/>
          <h1 className='static-txt'>Contact Me</h1>
      </a>
    </div>
  )
}

export default Introduction