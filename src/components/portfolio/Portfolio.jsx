import React from 'react'
import './portfolio.css'
import IMG1 from '../../assest/Sudoku Gif.gif'
import IMG2 from '../../assest/Contact.png'
import IMG3 from '../../assest/Notepad.png'

const Portfolio = () => {
  return (
    <section id='protfolio'>
      <h2>My Works</h2>
      

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">

            <img src={IMG1} alt="" />
          </div>
          <h3>SUDOKU SOLVER</h3>
            <a href="https://github.com/Aspakali/Sudoku-Solver" className='btn' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">

            <img src={IMG2} alt="" />
          </div>
          <h3>CONTACT APP</h3>
            <a href="https://github.com/Aspakali/Contact_app" className='btn' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">

            <img src={IMG3} alt="" />
          </div>
          <h3>NOTEPAD </h3>
            <a href="https://github.com/Aspakali/Simple-NotePad" className='btn' target='_blank'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio