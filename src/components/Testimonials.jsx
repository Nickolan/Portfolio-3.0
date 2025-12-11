// src/components/Testimonials.jsx

import React, { useContext, useState } from 'react';
import TestimonialsData from '../data/Testimonials.json';
import { LenguageContext } from '../utils/LenguajeContext';
import '../styles/Testimonials/Testimonials.css';

// ASUMIMOS que los avatares están en src/assets/Testimonials/
// Como no tenemos los archivos, usaremos un placeholder.
import GonzaloAvatar from '../assets/People/gonzalo-ordenes-reyes.jpg';
const avatars = { 'gonzalo-ordenes-reyes': GonzaloAvatar };

const Testimonials = () => {
    const { isEnglish } = useContext(LenguageContext);
    const [activeIndex, setActiveIndex] = useState(0);

    const data = TestimonialsData[activeIndex];

    // Contenido traducido
    const testimonial = isEnglish ? data.testimonial_en : data.testimonial_es;
    const position = isEnglish ? data.position_en : data.position_es;

    // Navegación simple para el carrusel (botones)
    const handleNext = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === TestimonialsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? TestimonialsData.length - 1 : prevIndex - 1
        );
    };


    return (
        <div id='Testimonials' className='zone'>
            <h2 className='section-title'>
                {isEnglish ? "Testimonials" : "Testimonios"}
            </h2>
            <p className='section-subtitle'>
                {isEnglish ? "People I've worked with have said some nice things..." : "Personas con las que he trabajado han dicho cosas agradables..."}
            </p>

            <div className='testimonial-slider'>

                {/* La tarjeta de testimonio */}
                <div className='testimonial-card' key={data.id}>

                    {/* Placeholder de Imagen (Avatar) */}
                    {/* Usarías {avatars[data.avatar]} si estuvieran importados */}
                    <div className='avatar-container'>
                        <img
                            src={avatars[data.avatar]}
                            alt={`Avatar de ${data.name}`}
                            className='avatar-image' // Nueva clase para estilizar la imagen
                        />
                    </div>

                    {/* Testimonio */}
                    <p className='testimonial-text'>{testimonial}</p>

                    {/* Nombre y Puesto/Empresa */}
                    <h3 className='testimonial-name'>{data.name}</h3>
                    <p className='testimonial-position'>{position}, {data.company}</p>
                </div>

                {/* Navegación (Puntos Deslizables) */}
                <div className='slider-dots'>
                    {TestimonialsData.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        ></span>
                    ))}
                </div>

                {/* Botones de navegación (opcional, si no usas el click en los puntos) 
                <button onClick={handlePrev} className='slider-arrow left'>&lt;</button>
                <button onClick={handleNext} className='slider-arrow right'>&gt;</button>
                */}

            </div>
        </div>
    );
};

export default Testimonials;