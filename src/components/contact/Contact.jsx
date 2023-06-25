import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_19oi3ke', 'template_n2bzqkv', form.current, 'j0LBrO89uhy2egf6s')
      

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>aspakali9091@gmail.com</h5>
              <a href="mailto:aspakali9091@gmail.com">Send a message </a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Sk Biki Ali</h5>
              <a href="https://m.me/aspakali.08" target='_blank'>Send a message </a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>Aspak</h5>
              <a href="https://wa.me/+919091087195" target='_blank'>Send a message </a>
          </article>
          
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn'>Send Message</button>
        </form>
      </div>
      
    </section>
  )
}

export default Contact