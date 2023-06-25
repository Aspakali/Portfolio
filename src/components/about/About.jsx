import React from 'react'
import './about.css'
import ME from '../../assest/PP-Photo-new.jpg'
import { BiCertification } from 'react-icons/bi'
import { GiAchievement } from 'react-icons/gi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BiCertification className='about__icon' />
              <h5>Certification</h5>
              <small>10+ Verified Certificate</small>
            </article>
            <article className='about__card'>
              <GiAchievement className='about__icon' />
              <h5>Achievement</h5>
              <small>Solving 250+ problem on GeeksforGeek</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>3+ Completed projects</small>
            </article>  
          </div>
          <p> 
            Transformative leader with a proven track
            record of delivering outstanding results in
            fast paced environments. Looking for a
            challenging role that allows me to
            leverage my skills and experience to make
            a positive impact on the organization.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About