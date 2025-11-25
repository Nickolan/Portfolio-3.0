// src/components/Skills.jsx

import React, { useState, useContext } from 'react';
import { LenguageContext } from '../utils/LenguajeContext';
import SkillsData from '../data/Skills.json'; // Importamos los datos categorizados
import * as Logos from '../utils/Logos'; // Importamos todos los logos por nombre [cite: 603]
import '../styles/Skills/Skills.css';

const categories = [
    { key: 'All', es: 'Todas', en: 'All' },
    { key: 'Frontend', es: 'Frontend', en: 'Frontend' },
    { key: 'Backend', es: 'Backend', en: 'Backend' },
    { key: 'Mobile', es: 'Mobile', en: 'Mobile' },
    { key: 'Databases', es: 'Bases de Datos', en: 'Databases' },
    { key: 'DevOps', es: 'DevOps & Cloud', en: 'DevOps & Cloud' },
    { key: 'AI/Tools', es: 'IA / Herramientas', en: 'AI / Tools' }
];

// Función para obtener la URL del logo de forma segura
const getLogoSrc = (name) => {
    // Ejemplo: "PostgreSQL" se busca como Logos.PostgreSQL [cite: 602, 603]
    const logoKey = name.replace(/ /g, ''); // Remover espacios (e.g., Google Cloud -> GoogleCloud)
    return Logos[logoKey] || null;
};

const Skills = () => {
    const { isEnglish } = useContext(LenguageContext);
    const [activeCategory, setActiveCategory] = useState('All');

    // Filtrar habilidades basadas en la categoría activa
    const filteredTools = SkillsData.filter(t => 
        activeCategory === 'All' || t.category === activeCategory
    );

    return (
        <div id='Skills' className='zone'>
            <h1>{isEnglish ? "Technical Skills" : "Habilidades Técnicas"}</h1>

            {/* Selector de Categorías (Pestañas) */}
            <div className="category-tabs">
                {categories.map(cat => (
                    <button 
                        key={cat.key}
                        className={`tab-button ${activeCategory === cat.key ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat.key)}
                    >
                        {isEnglish ? cat.en : cat.es}
                    </button>
                ))}
            </div>

            {/* Cuadrícula de Habilidades Filtradas */}
            <div className="wrapper-skills">
                {
                    filteredTools.map((t, i) => {
                        const logoSrc = getLogoSrc(t.name);
                        if (!logoSrc) return null; // No renderizar si no encuentra el logo

                        return (
                            <div className="tool-item" key={i}>
                                <img src={logoSrc} alt={t.name} />
                                <span className="tool-name">{t.name}</span>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Skills;