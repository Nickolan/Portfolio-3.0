import React, {createContext, useState} from 'react'

export const LenguageContext = createContext();

export const ContextProvider = ({children}) => {

    const lenguages = ["En", 'Es', 'Pt']

    const [isEnglish, setIsEnglish] = useState(true)
    const [thisColor, setThisColor] = useState(true)

    const [indexLenguage, setIndex] = useState(0)

    const [lenguage, setLenguage] = useState(lenguages[0])


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

    const toogleColor = () =>{
        setThisColor(!thisColor);
    }

  return (
    <LenguageContext.Provider value={{isEnglish, toogleLenguage, toogleColor, thisColor, lenguage, changeLenguage}}>
      {children}
    </LenguageContext.Provider>
  )
}