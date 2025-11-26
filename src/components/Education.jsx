// src/components/Education.jsx

import React, { useContext } from 'react';
import { LenguageContext } from '../utils/LenguajeContext';
import EducationData from '../data/Education.json';
import '../styles/Education/Education.css';

const Education = () => {
    const { isEnglish } = useContext(LenguageContext);

    // Mapeo simple de datos, sin calcular el 'side'
    const educationItems = EducationData.map((item) => {
        const title = isEnglish ? item.title_en : item.title_es;
        const status = isEnglish ? item.status_en : item.status_es;
        const lapse = isEnglish ? item.lapse_en : item.lapse_es;
        const details = isEnglish ? item.details_en : item.details_es;
        
        return {
            ...item,
            title,
            status,
            lapse,
            details,
            // Eliminamos la propiedad 'side'
        };
    });

    return (
        <div className='zone' id='Education'>
            <h1>{isEnglish ? "Education" : "Educación"}</h1>
            
            <div className='education-content'>
                {educationItems.map((item, i) => {
                    // Identificar si está 'En curso' para aplicar un estilo destacado
                    const isCurrent = item.status_es === 'En curso' || item.status_en === 'In Progress';

                    // Utilizamos una clase única 'education-card'
                    return (
                        <div className={`education-card ${isCurrent ? 'current' : ''}`} key={i}>
                            <div className='education-info'>
                                <h4 className='education-title'>{item.institution}</h4>
                                <h5 className='education-degree'>{item.title}</h5>
                                
                                <div className='education-lapse'>
                                    <span className='education-text'>
                                        {item.lapse} - ({item.status})
                                    </span>
                                </div>
                                
                                <ul className='education-details'>
                                    {item.details.map((detail, s) => (
                                        <li key={s}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Education;