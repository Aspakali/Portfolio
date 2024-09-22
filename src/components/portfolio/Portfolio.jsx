import React from 'react';
import './portfolio.css';
import IMG1 from '../../assest/Sudoku Gif.gif';
import IMG2 from '../../assest/Contact.png';
import IMG3 from '../../assest/Notepad.png';
import IMG4 from '../../assest/human gait.jpeg'; 

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My Works</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Sudoku Solver" />
          </div>
          <h3>SUDOKU SOLVER</h3>
          <a href="https://github.com/Aspakali/Sudoku-Solver" className='btn' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Contact App" />
          </div>
          <h3>CONTACT APP</h3>
          <a href="https://github.com/Aspakali/Contact_app" className='btn' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Notepad" />
          </div>
          <h3>NOTEPAD</h3>
          <a href="https://github.com/Aspakali/Simple-NotePad" className='btn' target='_blank'>Github</a>
        </article>

        {/* New project added here */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Human Gait Analysis" />
          </div>
          <h3>HUMAN GAIT ANALYSIS</h3>
          <a href="https://github.com/Aspakali/Human-Gait-Analysis" className='btn' target='_blank'>Github</a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
