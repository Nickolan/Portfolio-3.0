import React, { useContext } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { LenguageContext } from '../utils/LenguajeContext'

const Navbar = () => {
  const { isEnglish, toogleLenguage, isDarkMode, toggleTheme } = useContext(LenguageContext)

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
    <nav className="fixed top-0 left-0 z-[1000] w-full h-[60px] flex items-center justify-between lg:justify-around px-5 md:px-[20px] lg:px-[40px] bg-[rgba(255,255,255,0.98)] dark:bg-[rgba(16,18,26,0.98)] lg:bg-[rgba(255,255,255,0.95)] lg:dark:bg-[rgba(16,18,26,0.92)] lg:backdrop-blur-[5px] shadow-[0_1px_10px_rgba(0,0,0,0.05)] dark:shadow-[0_1px_10px_rgba(0,0,0,0.4)] font-semibold text-black dark:text-[#f2f2f0] transition-all">
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
              className="no-underline text-[#555] dark:text-[#aaa] font-medium text-base hover:text-[var(--secundary-color)] transition-colors duration-300"
            >
              {isEnglish ? link.en : link.es}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex flex-row items-center gap-2">
        {/* Botón de modo oscuro */}
        <button
          type="button"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          className="cursor-pointer p-2.5 rounded-full text-[var(--secundary-color)] hover:bg-[var(--secundary-color)] hover:text-white transition-all duration-300 flex items-center justify-center"
          onClick={() => toggleTheme()}
        >
          {isDarkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
        </button>

        {/* Nuevo botón de cambio de idioma */}
        <div
          className="cursor-pointer w-1 p-6 transition-all duration-300 hover:bg-[var(--secundary-color)]"
          onClick={() => toogleLenguage()}
        >
          <span className="font-semibold lg:font-bold text-xs lg:text-sm text-[var(--secundary-color)] group-hover:text-white transition-colors duration-300">
            {isEnglish ? "ES" : "EN"}
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar