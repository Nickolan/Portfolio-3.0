// src/components/ContactForm.jsx

import React, { useContext, useState } from 'react';
import { LenguageContext } from '../utils/LenguajeContext';
import '../styles/ContactForm/ContactForm.css';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;      // ID del Servicio (Paso 1)
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;    // ID de la Plantilla (Paso 2)
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const ContactForm = () => {
    const { isEnglish } = useContext(LenguageContext);
    
    // Estado simple para manejar los datos del formulario (opcional, pero buena práctica)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
        user_name: formData.name,       // Coincide con {{user_name}} en la plantilla
        user_email: formData.email,     // Coincide con {{user_email}}
        user_message: formData.message, // Coincide con {{user_message}}
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            alert(isEnglish ? "Message sent successfully!" : "¡Mensaje enviado con éxito!");
            setFormData({ name: '', email: '', message: '' });
        }, (error) => {
            console.log(error.text);
            alert(isEnglish ? "An error occurred, please try again." : "Ocurrió un error, por favor inténtalo de nuevo.");
        });
};

    return (
        <div id='ContactForm' className='zone'>
            <h2>{isEnglish ? "Send Me a Message" : "Envíame un Mensaje"}</h2>
            <p className='form-intro'>
                {isEnglish ? 
                "Do you have a project or a question? Feel free to reach out!" : 
                "¿Tienes un proyecto o una pregunta? ¡No dudes en contactarme!"}
            </p>

            <form className='contact-form-grid' onSubmit={handleSubmit}>
                {/* Campo Nombre */}
                <div className='form-group'>
                    <label htmlFor="name">{isEnglish ? "Name" : "Nombre"}</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                    />
                </div>
                
                {/* Campo Correo Electrónico */}
                <div className='form-group'>
                    <label htmlFor="email">{isEnglish ? "Email" : "Correo Electrónico"}</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                </div>
                
                {/* Campo Mensaje (Ocupa todo el ancho) */}
                <div className='form-group full-width'>
                    <label htmlFor="message">{isEnglish ? "Message" : "Mensaje"}</label>
                    <textarea 
                        id="message" 
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                {/* Botón de Envío */}
                <button type="submit" className='submit-btn'>
                    {isEnglish ? "Send Message" : "Enviar Mensaje"}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;