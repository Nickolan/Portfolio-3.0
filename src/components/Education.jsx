import React, { useContext } from 'react';
import { LenguageContext } from '../utils/LenguajeContext';
import EducationData from '../data/Education.json'; // Importa el archivo de datos
import '../styles/Education/Education.css'; // Importa los estilos

const Education = () => {
    const { isEnglish } = useContext(LenguageContext);

    // Prepara los datos para la renderización bilingüe y estilos
    const educationItems = EducationData.map((item, i) => {
        const title = isEnglish ? item.title_en : item.title_es;
        const status = isEnglish ? item.status_en : item.status_es;
        const lapse = isEnglish ? item.lapse_en : item.lapse_es;
        const details = isEnglish ? item.details_en : item.details_es;
        
        // Determinar el lado (left/right) para el estilo de la línea de tiempo
        const side = i % 2 === 0 ? 'left' : 'right';

        return {
            ...item,
            title,
            status,
            lapse,
            details,
            side,
        };
    });

    return (
        <div className='zone' id='Education'>
            <h1>{isEnglish ? "Education" : "Educación"}</h1>
            <div className='education-content'>
                {educationItems.map((item, i) => {
                    // Identificar si está 'En curso' para aplicar un estilo destacado
                    const isCurrent = item.status_es === 'En curso' || item.status_en === 'In Progress';

                    return (
                        <div className={`education-item ${item.side} ${isCurrent ? 'current' : ''}`} key={i}>
                            <div className='timeline-dot'></div>
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