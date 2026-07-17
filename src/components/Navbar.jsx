import React, { useContext } from 'react'
import { LenguageContext } from '../utils/LenguajeContext'

const Navbar = () => {
  const { isEnglish, toogleLenguage } = useContext(LenguageContext)

  // Array de enlaces para renderizar fácilmente el menú
  const navLinks = [
    { href: '#About', en: 'About', es: 'Sobre Mí' },
    { href: '#Skills', en: 'Skills', es: 'Habilidades' },
    { href: '#Experience', en: 'Experience', es: 'Experiencia' },
    { href: '#Education', en: 'Formation', es: 'Educación' },
    { href: '#Projects', en: 'Projects', es: 'Proyectos' },
    { href: '#SendMail', en: 'Contact', es: 'Contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 z-[1000] w-full h-[60px] flex items-center justify-between lg:justify-around px-5 md:px-[20px] lg:px-[40px] bg-[rgba(255,255,255,0.98)] lg:bg-[rgba(255,255,255,0.95)] lg:backdrop-blur-[5px] shadow-[0_1px_10px_rgba(0,0,0,0.05)] font-semibold text-black transition-all">
      <div className="flex flex-row items-center">
        <a 
          href='#Introduction' 
          className="no-underline text-[var(--secundary-color)] font-bold lg:font-extrabold text-lg md:text-xl lg:text-2xl tracking-[0.5px] font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif]"
        >
          Nicolás Navarrete
        </a>
      </div>

      <ul className="hidden md:flex flex-row list-none justify-between gap-5 lg:gap-[30px] m-0 p-0">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              className="no-underline text-[#555] font-medium text-base hover:text-[var(--secundary-color)] transition-colors duration-300"
            >
              {isEnglish ? link.en : link.es}
            </a>
          </li>
        ))}
      </ul>

      {/* Nuevo botón de cambio de idioma */}
      <div 
        className="cursor-pointer border border-[var(--secundary-color)] lg:border-2 px-[10px] py-[5px] lg:px-[15px] lg:py-[8px] rounded-full transition-all duration-300 hover:bg-[var(--secundary-color)] group"
        onClick={() => toogleLenguage()}
      >
        <span className="font-semibold lg:font-bold text-xs lg:text-sm text-[var(--secundary-color)] group-hover:text-white transition-colors duration-300">
          {isEnglish ? "ES" : "EN"}
        </span>
      </div>
    </nav>
  )
}

export default Navbar