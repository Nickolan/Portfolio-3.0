// src/components/ContactForm.jsx
import React, { useContext, useState } from 'react';
import { LenguageContext } from '../utils/LenguajeContext';
import '../styles/ContactForm/ContactForm.css';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const ContactForm = () => {
    const { isEnglish } = useContext(LenguageContext);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        asunto: '',
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
            user_name: formData.name,
            user_email: formData.email,
            asunto: formData.asunto, // Asegúrate de tener esta variable en tu plantilla de EmailJS
            user_message: formData.message,
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((result) => {
                alert(isEnglish ? "Message sent successfully!" : "¡Mensaje enviado con éxito!");
                setFormData({ name: '', email: '', asunto: '', message: '' });
            }, (error) => {
                alert(isEnglish ? "An error occurred, please try again." : "Ocurrió un error.");
            });
    };

    return (
        <div id='ContactForm'>
            <h2>{isEnglish ? "Send Me a Message" : "Envíame un Mensaje"}</h2>
            <p className='form-intro'>
                {isEnglish ? "Do you have a project?" : "¿Tienes un proyecto?"}
            </p>

            <form className='contact-form-grid' onSubmit={handleSubmit}>
                {/* Nombre */}
                <div className='form-group'>
                    <label>{isEnglish ? "Name" : "Nombre"}</label>
                    <input 
                        type="text" 
                        name="name"
                        placeholder={isEnglish ? "Your name..." : "Tu nombre..."}
                        value={formData.name}
                        onChange={handleChange}
                        required 
                    />
                </div>
                
                {/* Correo */}
                <div className='form-group'>
                    <label>{isEnglish ? "Email" : "Correo electrónico"}</label>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="example@mail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                </div>

                {/* ASUNTO (Ocupa todo el ancho para seguir el estilo de la imagen) */}
                <div className='form-group full-width'>
                    <label>{isEnglish ? "Subject" : "Asunto"}</label>
                    <input 
                        type="text" 
                        name="asunto"
                        placeholder={isEnglish ? "What is this about?" : "¿De qué trata este mensaje?"}
                        value={formData.asunto}
                        onChange={handleChange}
                        required 
                    />
                </div>
                
                {/* Mensaje */}
                <div className='form-group full-width'>
                    <label>{isEnglish ? "Message" : "Mensaje"}</label>
                    <textarea 
                        name="message"
                        rows="5"
                        placeholder={isEnglish ? "Write here..." : "Escribe aquí..."}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <button type="submit" className='submit-btn'>
                    {isEnglish ? "Send Message" : "Enviar Mensaje"}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;