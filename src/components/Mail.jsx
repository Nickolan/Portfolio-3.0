// src/components/Mail.jsx (CON LOS ICONOS REACT-ICONS INCLUIDOS)

import React, { useState, useContext } from 'react';
import { LenguageContext } from '../utils/LenguajeContext' // Importamos el contexto de idioma
import '../styles/Mail/Mail.css';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Añadimos FaEnvelope

const Mail = () => {
    const { isEnglish } = useContext(LenguageContext); //
    const mail = "nicolassantiagonavarrete.nsn@gmail.com" //
    const linkedInUrl = "https://www.linkedin.com/in/nikolas-navarrete"; //
    const githubUrl = "https://github.com/Nickolan"; //

    const [copied, setCopied] = useState(false); //

    const copyToClipboard = () => { //
        navigator.clipboard.writeText(mail).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); 
        }); //
    };

    return (
        <div id='SendMail' className='zone contact-section'>
            <h2>{isEnglish ? "Let's Connect & Collaborate" : "Conectemos y Colaboremos"}</h2>
            <p className='contact-intro'>
                {isEnglish ? 
                "Feel free to reach out via email or connect with me on professional platforms." : 
                "No dudes en contactarme por correo electrónico o conectarte conmigo en plataformas profesionales."}
            </p>

            <div className='contact-options'>
                {/* Opción 1: Correo electrónico con Copy to Clipboard */}
                <div className={`contact-item email-item ${copied ? 'copied' : ''}`} onClick={copyToClipboard}>
                    <span className='icon email-icon'><FaEnvelope /></span>
                    <div className='email-info'>
                        {/* El título se convierte en el texto que indica que fue copiado */}
                        <h4 className='mail-title'>
                             {isEnglish ? "Send a Message" : "Enviar un Mensaje"}
                        </h4>
                        
                        {/* Manejamos el correo largo en una línea adaptable */}
                        <span className={`mail-address`}> 
                            {mail}
                        </span>
                        
                        {/* Nuevo elemento visual para el estado de copiado */}
                        <span className='copy-status'>
                            {copied ? (isEnglish ? "Copied to clipboard!" : "¡Copiado al portapapeles!") : (isEnglish ? "Click to Copy" : "Click para Copiar")}
                        </span>
                    </div>
                </div>

                {/* Opción 2: LinkedIn */}
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className='contact-item social-item'>
                    <span className='icon social-icon'><FaLinkedin color='#0e76a8' /></span>
                    <div className='social-info'>
                        <h4 className='social-title'>LinkedIn</h4>
                        <span className='social-link'>{isEnglish ? "View Profile" : "Ver Perfil"}</span>
                    </div>
                </a>

                {/* Opción 3: GitHub */}
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className='contact-item social-item'>
                    <span className='icon social-icon'><FaGithub color='black' /></span>
                    <div className='social-info'>
                        <h4 className='social-title'>GitHub</h4>
                        <span className='social-link'>{isEnglish ? "View Projects" : "Ver Proyectos"}</span>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Mail;