import React from 'react';
import { contact } from '../../contact';
import linkedin from "../../logos/linkedin.png";
import github from "../../logos/github.png";


const Contact = () => {
    return (
        <div className='about'>
            <h2>Contact</h2>
            <ul>
                <li><span>Domicilio:</span> {contact.domicilio}</li>
                <li><span>Teléfono:</span> {contact.telefono}</li>
                <li><span>Email:</span> {contact.email}</li>
                <li><span>Edad: {contact.edad}</span></li>
            </ul>
            <div>
                <a href={contact.linkedin} target="_blank" rel="noreferrer">
                    <h5><img className='logos' src={linkedin} alt="linkedin" />{contact.linkedin}</h5>
                </a>
                <a href={contact.github} target="_blank" rel="noreferrer">
                    <h5><img className='logos' src={github} alt="github" />{contact.github}</h5>
                </a>
            </div>
        </div>
    );
}

export default Contact;
