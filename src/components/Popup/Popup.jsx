import React, { useState } from 'react'
import ButtonPlus from '../UI/ButtonPlus/ButtonPlus'
import Slider from "react-slick";
import './Popup.scss'
import Vector from '../../assets/images/Vector.svg'
import Cross from '../../assets/images/blackClose.svg'
import Plus from '../../assets/images/redClose.svg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { smoothScroll } from '../../SmoothScroll';

const PopupProject = ({ arr, button }) => {
   const [activeSlideImage, setActiveSlideImage] = useState(1);
   const [activeSlide, setActiveSlide] = useState(1);


   function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
         <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
         >
            <div className="red_arrow" style={{ display: "flex", height: "100%", width: "100%" }}>
               <div className="nextSlide" style={{ alignSelf: "center" }}>next</div>
               <div className="arrow">
               </div>
            </div>
         </div>
      );
   }

   function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
         <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
         >
            <div className="gray_arrow" style={{ display: "flex", height: "100%", width: "100%" }}>
               <div className="arrow">
               </div>
               <div className="prevSlide" style={{ alignSelf: "center" }}>prev</div>
            </div>
         </div>
      );
   }

   function PrevNextArrow(props) {
      const { className, style, onClick } = props;
      return (
         <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
         >
            <div className="red_arrow" style={{ display: "flex", height: "100%", width: "100%" }}>
               <div className="nextSlide" style={{ alignSelf: "center" }}>next project name</div>
               <div className="nextSlideMobile" style={{ alignSelf: "center" }}>next</div>
               <div className="arrow">
               </div>
            </div>
         </div>
      );
   }

   function PrevPrevArrow(props) {
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
               <div className="prevSlide" style={{ alignSelf: "center" }}>previous project name</div>
               <div className="prevSlideMobile" style={{ alignSelf: "center" }}>prev</div>
            </div>
         </div>
      );
   }

   const settingsImageProject = {
      className: "popupSliderImage",
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
         setActiveSlideImage(i + 1);
      }
   };

   const settings = {
      className: "popupSlider",
      arrow: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <PrevNextArrow />,
      prevArrow: <PrevPrevArrow />,
      afterChange: i => {
         setActiveSlide(i + 1);
      }
   };

   return (
      <Popup trigger={<div> {button} </div>} modal
         nested position="center">
         {close => (
            <div className="popup" id="Previous Projects">
               <div className='close' onClick={() => {
                  close();
               }}>
                  <div className="closeBlock">
                     Close <img className="blackClose" src={Cross} alt="" /><img className="redClose" src={Plus} alt="" />
                  </div>

               </div>
               <Slider {...settings}>
                  {arr.map((project, index) => {
                     return (
                        <div className='popupSlider' key={index}>
                           <div className="popup_body">
                              <div className="body_text">
                                 <h2 className="body_text_title">
                                    <img src={Vector} alt="" />{project.title}
                                 </h2>
                                 <p className="text_desc">
                                    {project.desc}
                                 </p>
                                 <div className="block_price">
                                    {project.price.map((item, index) => (
                                       <div key={index}>{item}</div>
                                    ))}
                                 </div>
                                 <div className="button">
                                    <ButtonPlus onClick={() => { smoothScroll("Contacts"); close(); }} title="Enquire now" plus={true} underline={true} />
                                 </div>
                              </div>
                              <div className="body_slider">
                                 <Slider {...settingsImageProject}>
                                    {project.images.map((slide, index) => {
                                       return (
                                          <div className="popupSliderImage" key={index}>
                                             <div className="slide_img">
                                                <img src={slide} alt="" />
                                             </div>
                                          </div>
                                       )
                                    })}
                                 </Slider>
                                 <div className="countSlide">
                                    <span>{activeSlideImage}</span> / <span>{arr.length}</span>
                                 </div>
                                 <div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     )
                  })}
               </Slider>
               <div className="countSlideAll">
                  <span>{activeSlide}</span> / <span>{arr.length}</span>
               </div>
               <div className='popup_footer'>
                  <div className='popup_footer_left'></div>
                  <div className='popup_footer_right'></div>
               </div>
            </div>
         )}
      </Popup>
   )
}

export default PopupProject
