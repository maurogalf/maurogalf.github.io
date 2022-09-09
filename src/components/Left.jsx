import React from 'react'
import About from './left/About'
import Contact from './left/Contact'
import Technologies from './left/Technologies'

export default function Left() {
  return (
    <div className='left'>
        <About/>
        <Contact/>
        <Technologies/>
    </div>
  )
}
