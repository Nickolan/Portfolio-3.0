import React, { useContext } from 'react' // Importamos useContext
import Jobs from '../data/Jobs.json'
import { LenguageContext } from '../utils/LenguajeContext' // Importamos el contexto
import '../styles/Experience/Experience.css'

// Se actualiza la función para usar isEnglish
// Se actualiza la función para usar isEnglish
function calcularDiferenciaAniosmonths(fechaInicio, fechaFin, isEnglish) {
  // 1. Asegurar el orden de las fechas
  if (fechaInicio > fechaFin) {
    [fechaInicio, fechaFin] = [fechaFin, fechaInicio];
  }

  // 2. Cálculo de la diferencia total en milisegundos
  const diffTime = Math.abs(fechaFin.getTime() - fechaInicio.getTime());

  // Constante para un mes promedio: (365.25 días/12 meses) * 24 horas * 60 minutos * 60 segundos * 1000 milisegundos
  const msInMonth = 2629800000;

  // 3. Si la diferencia es menor a 30 días, retorna "Menos de un mes"
  if (diffTime < (msInMonth / 12 * 30)) { // ~2.592.000.000 ms (30 días)
    return isEnglish ? 'Less than a month' : 'Menos de un mes';
  }

  // 4. Calcular años y meses completos
  let years = fechaFin.getFullYear() - fechaInicio.getFullYear();
  let months = fechaFin.getMonth() - fechaInicio.getMonth();

  // Ajustar meses si el día de inicio es posterior al día de fin
  if (fechaFin.getDate() < fechaInicio.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // El caso de "menos de un mes" ya fue cubierto arriba. Si llegamos aquí, 
  // years o months es mayor o igual a 1 (o 0 si se redondeó a 0).
  if (years < 0) years = 0;
  if (months < 0) months = 0;


  // 5. Formateo de la salida
  const yearLabel = isEnglish ? (years === 1 ? 'year' : 'years') : (years === 1 ? 'año' : 'años');
  const monthLabel = isEnglish ? (months === 1 ? 'month' : 'months') : (months === 1 ? 'mes' : 'meses');
  const conjunction = isEnglish ? '&' : 'y';

  if (years >= 1) {
    return months > 0
      ? `${years} ${yearLabel} ${conjunction} ${months} ${monthLabel}`
      : `${years} ${yearLabel}`;
  } else if (months > 0) {
    return `${months} ${monthLabel}`;
  }

  // Fallback (debería ser innecesario si el paso 3 funciona)
  return isEnglish ? 'Less than a month' : 'Menos de un mes';
}

// Función auxiliar para parsear DD/MM/YYYY
const parseDate = (dateString) => {
  // Si la cadena es nula o vacía, retorna null
  if (!dateString) return null;

  // Divide la cadena en día, mes y año
  const parts = dateString.split('/');
  if (parts.length === 3) {
    // Formato: DD/MM/YYYY -> Month is 0-indexed in Date constructor (Mes - 1)
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Aquí está el detalle clave: Restar 1 al mes
    const year = parseInt(parts[2], 10);

    return new Date(year, month, day);
  }
  // Si el formato no es DD/MM/YYYY, intenta el constructor estándar (como fallback)
  return new Date(dateString);
};

const Experience = () => {
  const { isEnglish } = useContext(LenguageContext) // Obtenemos isEnglish
  const hoy = new Date()

  const experienceData = Jobs.map((job, i) => {
    // CÓDIGO CORREGIDO (ROBUSTO)
    const fechaInicio = parseDate(job['start-date']);
    // Usamos parseDate si hay una fecha de fin, si no, usamos 'hoy'
    const fechaFinal = job['end-date'] ? parseDate(job['end-date']) : hoy;

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