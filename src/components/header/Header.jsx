import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assest/Me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Aspak</h1>
        <h5 className="text-light">Forntend Devloper</h5>
        <CTA/>
        <HeaderSocial/>

          <div className="me">
            <img src={ME} alt="" me/>
          </div>


          <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header