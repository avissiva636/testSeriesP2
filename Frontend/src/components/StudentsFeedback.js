import React from 'react';
import Slider from 'react-slick';
import { useInspiroCrud } from "./context/InspiroContext";
// import "./css/StudentsFeedback.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../components/css/images/img1.jpg"

const StudentFeedback = () => {
  const { Testimonial } = useInspiroCrud();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show three cards at a time
    slidesToScroll: 1,
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 3000, 
  };
  

  return (
    <div className="testimonial__content">
      <aside className="testimonial__header">
        <h1>Testimonial</h1>
        <h3>What Our Students Say</h3>
      </aside>
      <div className="test1">
        <Slider {...settings}>
          {Testimonial.map((review, index) => (
             <div className="team__card" key={index}>
               <div className="card__bg-photo">
        <div className="card__face-photo"></div>
        </div>
        <div className='card__text-container'>
        <h3 className="card__text-header">{review.name}</h3>
        <p className="card__text-position">{review.desc}</p>
      </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
  );
};

export default StudentFeedback;
