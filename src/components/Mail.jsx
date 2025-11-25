import React, { useState, useContext } from 'react';
import { LenguageContext } from '../utils/LenguajeContext' // Importamos el contexto de idioma
import '../styles/Mail/Mail.css';
// Importamos iconos (asumimos que tienes estos assets o usa un paquete de iconos)
// import LinkedIn from '../assets/Skills/linkedin-logo.png'; 
// import GitHub from '../assets/Skills/github-logo.png'; 

const Mail = () => {
    const { isEnglish } = useContext(LenguageContext);
    const mail = "nicolassantiagonavarrete.nsn@gmail.com" 
    const linkedInUrl = "https://www.linkedin.com/in/nikolas-navarrete"; // URL de ejemplo
    const githubUrl = "https://github.com/Nickolan"; // URL de ejemplo

    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(mail).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); 
        });
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
                <div className='contact-item email-item' onClick={copyToClipboard}>
                    <span className='icon'>📧</span>
                    <div className='email-info'>
                        <h4 className='mail-title'>{isEnglish ? "Send a Message" : "Enviar un Mensaje"}</h4>
                        <span className={`mail ${copied ? 'copied' : ''}`}>
                            {copied ? (isEnglish ? "Copied!" : "¡Copiado!") : mail}
                        </span>
                    </div>
                </div>

                {/* Opción 2: LinkedIn */}
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className='contact-item social-item'>
                    <span className='icon'>🔗</span>
                    <div className='social-info'>
                        <h4 className='social-title'>LinkedIn</h4>
                        <span className='social-link'>{isEnglish ? "View Profile" : "Ver Perfil"}</span>
                    </div>
                </a>

                {/* Opción 3: GitHub */}
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className='contact-item social-item'>
                    <span className='icon'>💾</span>
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