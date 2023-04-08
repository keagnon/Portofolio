import React from 'react'
import './About.css'
import ME from '../../assets/1.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='About'>
      <h5 className='centrer_text'>About</h5>
      <h3 className='centrer_text'>Get to know me</h3>

      <div className="container about__container centrer">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

      <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__card_icon'/> 
              <h5>Expérience</h5>
              <small>+1 Années</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__card_icon'/> 
              <h5>compétences</h5>
              <small>+10 compétences(data sciences & Développement web)</small>
            </article>
            <article className='about__card'>
              <VscFolderActive className='about__card_icon'/> 
              <h5>Projets</h5>
              <small>+6 Terminé</small>
            </article>
            
          </div>

          <p>
          Je suis très curieuse et passionnée par les mathématiques, la programmation ainsi que l’analyse des données. J’aime apprendre et j’occupe mon temps libre à m’auto-former et à lire des romans anglais .

          </p>

          <a href='#contact' className='btn btn-primary'>M'envoyer un message</a>
      </div>


      </div>

    </section>
  )
}

export default About