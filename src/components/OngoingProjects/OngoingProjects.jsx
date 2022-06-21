import React, { useState } from 'react'
import Slider from 'react-slick'
import './OngoingProjects.scss'
import Vector from '../../assets/images/Vector.svg'
import Plus from '../../assets/images/Plus.svg'
import { PopupProject } from '../index'

const OngoingProjects = ({ title, projects }) => {

   const [changeSlide, setChangeSlide] = useState(1);

   function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
         <div className='arrow_circle'>
            <div className='circle_wrapp'>
               <div
                  className={className}
                  style={{ ...style, display: "block" }}
                  onClick={onClick}
               >
                  <div style={{ display: "flex", height: "100%", width: "100%" }}>
                     <div className="ongoing_arrow">
                        <span className="arrow_prev_first"></span>
                        <span className="arrow_prev_second"></span>
                     </div>
                  </div>

               </div>
               drag
               <div
                  className="slick-arrow slick-next"
                  style={{ ...style, display: "block" }}
               >
                  <div style={{ display: "flex", height: "100%", width: "100%" }}>
                     <div className="ongoing_arrow">
                        <span className="arrow_next_first"></span>
                        <span className="arrow_next_second"></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }

   const settings = {
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrow: true,
      infinite: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 426,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
               arrows: false,
            }
         },
      ],
      // nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      dotsClass: "slick-dots ongoing_dots",
      beforeChange: (current, next) => setChangeSlide(next + 1),
      afterChange: current => setChangeSlide(current + 1),
   };

   return (
      <div className="ongoingProjects" id="OngoingProjects">
         <h1 className="ongoing_title">
            <img src={Vector} alt="" /> {title}
         </h1>
         <div className="ongoing_slider">
            <Slider {...settings}>
               {projects.map((project, index) => {
                  return (
                     <div className="ongoing_slide" key={index}>
                        <h2>{project.title}</h2>
                        <div className="ongoing_slide_img">
                           <img src={project.images[0]} alt="" />
                        </div>
                        <div className='ongoing_button_wrapp desc'>
                           <PopupProject arr={projects} button={
                              <button style={{ display: index === changeSlide || (index === 0 && changeSlide === projects.length) ? "block" : "none" }} type="submit" className="ongoing_button">
                                 <img src={Plus} alt="" />
                              </button>
                           } />
                        </div>
                        <div className='ongoing_button_wrapp mobile'>
                           <PopupProject arr={projects} button={
                              <button type="submit" className="ongoing_button">
                                 <img src={Plus} alt="" />
                              </button>
                           } />
                        </div>
                     </div>
                  )
               })}
            </Slider>
         </div>
      </div>
   )
}

export default OngoingProjects
