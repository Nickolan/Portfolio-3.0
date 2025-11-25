import React, {useContext} from 'react'
import '../styles/Navbar/Navbar.css'
import {ContextProvider, LenguageContext} from '../utils/LenguajeContext'

const Navbar = () => {
  const {isEnglish, toogleLenguage} = useContext(LenguageContext)

  // Array de enlaces para renderizar fácilmente el menú
  const navLinks = [
    { href: '#About', en: 'About', es: 'Sobre Mí' },
    { href: '#Skills', en: 'Skills', es: 'Habilidades' },
    { href: '#Experience', en: 'Experience', es: 'Experiencia' },
    { href: '#Education', en: 'Formation', es: 'Educación' },
    { href: '#Projects', en: 'Projects', es: 'Proyectos' }, // Añadimos Proyectos
    { href: '#SendMail', en: 'Contact', es: 'Contacto' },
  ];

  return (
    <nav>
        <div className='nicolas'>
         
          <a href='#Introduction' className='nav-title'>Nicolás Navarrete</a>
          {/* El control de idioma se mueve a la derecha, junto a los enlaces */}
        </div>
        

        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className='nav-title'>
                {isEnglish ? link.en : link.es}
              </a>
            </li>
          ))}
        </ul>

        {/* Nuevo botón de cambio de idioma */}
        <div className='lenguageCont' onClick={() => toogleLenguage()}>
            <span className='lang-text'>{isEnglish ? "ES" : "EN"}</span>
        </div>
        
    </nav>
  )
}

export default Navbar