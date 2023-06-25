import React from 'react'
import './testimonials.css'
import AVAT1 from '../../assest/resized-image-Promo.jpeg'
import AVAT2 from '../../assest/Asik-image-Promo.jpeg'
import AVAT3 from '../../assest/Soyel-image-Promo.jpeg'


// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVAT1,
    name: 'Syed rehan',
    review: 'I recently had the pleasure of using a service-making website for my business, and I must say it has been a game changer! This platform has not only simplified the process of creating and managing services but has also elevated the overall'
  },

  {
    avatar: AVAT2,
    name: 'Asik Ikbal',
    review: 'The website boasts an intuitive and user-friendly interface that made it incredibly easy for me to navigate through the various features and functionalities. Even as a non-technical person, I could effortlessly create, edit, and customize my services to align with my business requirements.'
  },

  {
    avatar: AVAT3,
    name: 'Soyel Habib',
    review: 'The customer support provided by this service-making website was exceptional. Whenever I had a question or encountered an issue, their support team was prompt, knowledgeable, and dedicated to resolving my concerns. Their commitment to customer satisfaction truly sets them apart from other platforms I have used in the past.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide  key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials