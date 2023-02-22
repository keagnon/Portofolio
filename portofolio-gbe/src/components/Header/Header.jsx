import React from 'react'
import './Header.css' 
import CTA from './CTA'
import ME from '../../assets/1.png'
import HeaderSocialsIcon from './header_socials_icon'
const Header = () => {
  return (
    <header>
        <div className="container_div">

          <h5>Hello I'm</h5>
          <h1>Grâce GBE</h1>
          <h5 className="text-light">Alternant Data scientist & développeur Front-End</h5>
          <CTA /> 
        </div>

        <div  className='header_picture_icons'>
          <div><HeaderSocialsIcon /></div>
          <div className='me'>
                <img  src={'./'.ME} alt="Me"/>
          </div>
          <div>
             <a href="#contact" className='scroll_down'>scroll_dowwn</a>
          </div>
         
        </div>
        

       
    </header>
    
  )
}

export default Header