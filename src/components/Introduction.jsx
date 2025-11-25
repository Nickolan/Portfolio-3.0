import React, {useContext} from 'react'
import { LenguageContext } from '../utils/LenguajeContext'
import '../styles/Introduction/Introduction.css'

const Introduction = () => {
    const {isEnglish} = useContext(LenguageContext)
  return (
    <div className='zone' id='Introduction'>
      <div className='cont-presentation'>
        <span className='static-txt'>{isEnglish ? "Hi" : "Hola"},</span>
        <span className='hand-rotate'>👋</span>
        <span className='static-txt'>{isEnglish ? "I'm" : "Soy"} Nicolas Navarrete</span>
      </div>
      <div className='wrapper'>
        <ul className='dynamic-txts'>
          <li><span>Web</span></li>
          <li><span>Mobile</span></li>
          <li><span>Server</span></li>
          <li><span>Cloud</span></li>
        </ul>
        <span className='static-txt'>Development</span>
      </div>

      <a href="#SendMail" className='contact-button'>
          <div className='button-item'/>
          <h1 className='static-txt'>Contact Me</h1>
      </a>
    </div>
  )
}

export default Introduction
