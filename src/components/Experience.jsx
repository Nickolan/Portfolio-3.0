import React, {useContext} from 'react' // Importamos useContext
import Jobs from '../data/Jobs.json'
import { LenguageContext } from '../utils/LenguajeContext' // Importamos el contexto
import '../styles/Experience/Experience.css'

// Se actualiza la función para usar isEnglish
function calcularDiferenciaAniosmonths(fechaInicio, fechaFin, isEnglish) { // [cite: 321, 322]
  if (fechaInicio > fechaFin) {
    [fechaInicio, fechaFin] = [fechaFin, fechaInicio];
  }

  let years = fechaFin.getFullYear() - fechaInicio.getFullYear();
  let months = fechaFin.getMonth() - fechaInicio.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearLabel = isEnglish ? (years === 1 ? 'year' : 'years') : (years === 1 ? 'año' : 'años');
  const monthLabel = isEnglish ? (months === 1 ? 'month' : 'months') : (months === 1 ? 'mes' : 'meses');
  const conjunction = isEnglish ? '&' : 'y';

  if (years >= 1) {
    return months > 0
      ? `${years} ${yearLabel} ${conjunction} ${months} ${monthLabel}` // 1 year & 5 months
      : `${years} ${yearLabel}`; // 1 year
  } else if (months > 0) {
    return `${months} ${monthLabel}`; // 5 months
  }
  return isEnglish ? 'Less than a month' : 'Menos de un mes';
}

const Experience = () => {
  const {isEnglish} = useContext(LenguageContext) // Obtenemos isEnglish
  const hoy = new Date()

  const experienceData = Jobs.map((job, i) => {
    const fechaInicio = new Date(job['start-date']);
    // 'end-date' debe ser una fecha válida o null/undefined.
    const fechaFinal = job['end-date'] && job['end-date'].includes('/') ? new Date(job['end-date']) : hoy;
    
    // Si 'end-date' está en el futuro, mostrar la duración completa.
    // Si no está en el futuro, es 'end-date' o 'hoy'.
    const isCurrent = !job['end-date'] || (new Date(job['end-date']) >= hoy)

    const duration = calcularDiferenciaAniosmonths(fechaInicio, fechaFinal, isEnglish);
    
    // Generar el lapso de tiempo basado en el idioma (si tienes campos lapse-es, lapse-en)
    const lapseDisplay = isEnglish ? job.lapse : (job['lapse-es'] || job.lapse);

    // Determinar el lado para el estilo (si se mantiene la línea de tiempo)
    const side = i % 2 === 0 ? 'left' : 'right';

    return {
      ...job,
      duration,
      lapseDisplay,
      side,
      isCurrent,
    };
  });


  return (
    <div className='zone' id='Experience'>
      <h1>{isEnglish ? "Experience" : "Experiencia"}</h1> {/* [cite: 336] */}
      <div className='jobs-content'>
        {experienceData.map((j, i) => {
          return (
            <div className={`job-item ${j.side}`} key={i}>
              <div className='timeline-dot'></div>
              <div className='job-info'>
                <h4 className='job-title'>{j.corp} - {j.title}</h4>
                <div className='job-lapse'>
                  <span className='job-text'>
                    {j.lapseDisplay} - ({j.duration}) 
                    {j.isCurrent && ` (${isEnglish ? 'Present' : 'Actualidad'})`}
                  </span>
                </div>
                <div>
                  {
                    // La descripción debe ser traducida en el JSON, o renderizada condicionalmente
                    (isEnglish ? j.description_en : j.description).map((d, s) => { 
                      return (
                        <p key={s}>{d}</p>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Experience