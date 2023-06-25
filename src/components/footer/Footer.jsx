import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ASPAK</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href="https://www.facebook.com/aspakali.08/" target='_blank'><FaFacebook/></a>
        <a href="https://www.instagram.com/aspak.ali08/" target='_blank'><BsInstagram/></a>
        <a href="https://twitter.com/Aspakali08" target='_blank'><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sk Aspak Ali. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer