import React, {createContext, useState, useEffect} from 'react'

export const LenguageContext = createContext();

export const ContextProvider = ({children}) => {

    const lenguages = ["En", 'Es', 'Pt']

    const [isEnglish, setIsEnglish] = useState(true)

    const [indexLenguage, setIndex] = useState(0)

    const [lenguage, setLenguage] = useState(lenguages[0])

    const [isDarkMode, setIsDarkMode] = useState(
      () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
    )

    useEffect(() => {
      document.documentElement.classList.toggle('dark', isDarkMode)
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    }, [isDarkMode])


    const changeLenguage = () => {
      if (indexLenguage + 1 == lenguages.length){
        setIndex(0)
      } else {
        setIndex(indexLenguage + 1)
      }

      setLenguage(lenguages[indexLenguage])
    }

    const toogleLenguage = () =>{
      setIsEnglish(!isEnglish);
    }

    const toggleTheme = () => {
      setIsDarkMode(prev => !prev);
    }

  return (
    <LenguageContext.Provider value={{isEnglish, toogleLenguage, isDarkMode, toggleTheme, lenguage, changeLenguage}}>
      {children}
    </LenguageContext.Provider>
  )
}
