import React, { useState } from 'react'
import { contact } from '../../data/contact'

export default function About() {
  const [caracteres, setCaracteres] = useState(219);

  const handelCaracteres = () => {
    caracteres === 219 ? setCaracteres(999) : setCaracteres(219);
  }
  return (
    <div className="about">
        <h2>About me</h2>
        <p>{contact.about.substring(0, caracteres)} <span style={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={handelCaracteres}>{caracteres === 219 ? "...leer más." : " Mostrar menos."}</span> </p>
    </div>
  )
}
