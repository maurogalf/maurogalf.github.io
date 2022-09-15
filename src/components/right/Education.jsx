import React from 'react';
import { education } from '../../data/education';

const Education = () => {
    return (
        <div className="about">
            <h2>Educación</h2>
            <ul>
                <li><span>Secundario:</span> {education.formal.secundario}</li>
                <li><span>Universitario:</span> {education.formal.universitario}</li>
            </ul>
            <h3>Otros estudios</h3>
            <ul>
                {education.cursos.map(c => {
                    return (
                        <li key={c.tema}><span>{c.tema}</span> - {c.institucion}</li>
                        
                    )
                })}
            </ul>
        </div>
    );
}

export default Education;
