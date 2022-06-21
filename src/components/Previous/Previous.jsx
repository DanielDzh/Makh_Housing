import React, { useState } from 'react'
import ButtonPlus from '../UI/ButtonPlus/ButtonPlus'
import Slider from "react-slick";
import './Previous.scss'
import Vector from '../../assets/images/Vector.svg'
import { PopupProject } from '../index'
import { smoothScroll } from '../../SmoothScroll';

const Previous = ({ title, projects }) => {
   const [activeSlide, setActiveSlide] = useState(1);



   function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
         <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
         >
            <div className="red_arrow" style={{ display: "flex", height: "100%", width: "100%" }}>
               <div style={{ alignSelf: "center" }}>next</div>
               <div className="arrow">
               </div>
            </div>
         </div >
      );
   }

   function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
         <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
         >
            <div className="gray_arrow" style={{ display: "flex", height: "100%", width: "100%" }}>
               <div className="arrow">
               </div>
               <div style={{ alignSelf: "center" }}>prev</div>
            </div>
         </div>
      );
   }

   const settings = {
      className: "previous_slider",
      arrow: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      customPaging: function (i) {
         return (
            <div className="in">
               <div className="">

               </div>
            </div>
         )
      },
      dotsClass: "slick-dots dots",
      afterChange: i => {
         setActiveSlide(i + 1);
      }
   };

   return (
      <div className="previous" id="PreviousProjects">
         <h1 className="previous_title">
            {title}
         </h1>
         <div className="previous_body">
            <div className="body_slider">
               <Slider {...settings}>
                  {projects.map((project, index) => {
                     return (
                        <div className="slide" key={index}>
                           <div className='slide_wrapper'>
                              <div className="body_text">
                                 <h2 className="body_text_title">
                                    <img src={Vector} alt="" /> {project.title}
                                 </h2>
                                 <p className="text_desc">
                                    {project.desc}
                                 </p>
                                 <div className="block_price">
                                    {
                                       project.price.map((item, index) => (
                                          <div key={index}>{item}</div>
                                       ))
                                    }
                                 </div>
                                 <div className="button">
                                    <ButtonPlus title="Enquire now" plus={true} underline={true} onClick={() => smoothScroll("Contacts")} />
                                 </div>
                              </div>
                              <div className="slide_img">
                                 <PopupProject arr={projects} button={<img src={project.images[0]} alt="" />} />
                              </div>
                           </div>
                        </div>
                     )
                  })}
               </Slider>
               <div className="countSlide">
                  <span>{activeSlide}</span> / <span>{projects.length}</span>
               </div>
               <div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Previous
