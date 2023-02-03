import React from 'react'
import CV from'../../assets/CV-Keagnon-GBE.pdf'

const Download_cv_let_talk = () => {
  return (
    <div className='Download_cv_let_talk'>
        <a href={CV} download>Download CV</a>
        <a href='#contact'>Let's talk</a>

    </div>
  )
}

export default Download_cv_let_talk