import React from 'react'
import Slider from "react-slick";
import slide from '../../assets/images/Specification.png'
import './Specification.scss'
import Back from '../../assets/images/SpecifBackground.png'

const Specification = () => {

   const settings = {
      arrow: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 426,
            settings: {
               dots: true,
            }
         },
      ],
      customPaging: function (i) {
         return (
            <div className="in">
               <div className="">

               </div>
            </div>
         )
      },
      dotsClass: "slick-dots dots",
   };
   return (
      <div className="specification" id="Specifications">
         <img src={Back} alt="" />
         <h1 className="specific_title">
            Numeric data (specification)
         </h1>
         <div className="specific_body">
            <Slider {...settings}>
               <div className="slide">
                  <div className="slide_img">
                     <img src={slide} alt="" />
                     <div className='slide_img_content_wrapp_1 desc'>
                        <span className='slide_line'>
                           <span className='slide_circle'><span></span></span>
                        </span>
                        <div className='slide_img_text'>
                           <h3 className='slide_title'>Title will be here</h3>
                           <p className='slide_desc'>Hybrid balloon framing provides additional rigidity</p>
                        </div>
                     </div>
                     <div className='number_1 mobile'>
                        01
                     </div>

                     <div className='slide_img_content_wrapp_2'>
                        <span className='slide_line'>
                           <span className='slide_circle'><span></span></span>
                        </span>
                        <div className='slide_img_text'>
                           <h3 className='slide_title'>Title will be here</h3>
                           <p className='slide_desc'>Hybrid balloon framing provides additional rigidity</p>
                        </div>
                     </div>
                     <div className='number_2 mobile'>
                        02
                     </div>

                     <div className='slide_img_content_wrapp_3'>
                        <div className='slide_img_text'>
                           <h3 className='slide_title'>Title will be here</h3>
                           <p className='slide_desc'>Hybrid balloon framing provides additional rigidity</p>
                        </div>
                        <span className='slide_line'>
                           <span className='slide_circle'><span></span></span>
                        </span>
                     </div>
                     <div className='number_3 mobile'>
                        03
                     </div>
                     <div className='specific_desc_wrapp mobile'>
                        <div className='specific_desc'>
                           <h3><span>01.</span> Title will be here</h3>
                           <p>Hybrid balloon framing provides additional rigidity</p>
                        </div>
                        <div className='specific_desc'>
                           <h3><span>02.</span> Title will be here</h3>
                           <p>Hybrid balloon framing provides additional rigidity</p>
                        </div>
                        <div className='specific_desc'>
                           <h3><span>03.</span> Title will be here</h3>
                           <p>Hybrid balloon framing provides additional rigidity</p>
                        </div>
                     </div>
                  </div>

               </div >
               <div className="slide">
                  <div className="slide_img">
                     <img src={slide} alt="" />
                     <div className='slide_img_content_wrapp_1'>
                        <span className='slide_line'>
                           <span className='slide_circle'><span></span></span>
                        </span>
                        <div className='slide_img_text'>
                           <h3 className='slide_title'>Title will be here</h3>
                           <p className='slide_desc'>Hybrid balloon framing provides additional rigidity</p>
                        </div>
                     </div>

                     <div className='slide_img_content_wrapp_2'>
                        <span className='slide_line'>
                           <span className='slide_circle'><span></span></span>
                        </span>
                        <div className='slide_img_text'>
                           <h3 className='slide_title'>Title will be here</h3>
                           <p className='slide_desc'>Hybrid balloon framing provides additional rigidity</p>
                        </div>
                     </div>

                     <div className='slide_img_content_wrapp_3'>
                        <div className='slide_img_text'>
                           <h3 className='slide_title'>Title will be here</h3>
                           <p className='slide_desc'>Hybrid balloon framing provides additional rigidity</p>
                        </div>
                        <span className='slide_line'>
                           <span className='slide_circle'><span></span></span>
                        </span>
                     </div>
                  </div>
               </div>
               <div className="slide">
                  <div className="slide_img">
                     <img src={slide} alt="" />
                     <div className='slide_img_content_wrapp_1'>
                        <span className='slide_line'>
                           <span className='slide_circle'><span></span></span>
                        </span>
                        <div className='slide_img_text'>
                           <h3 className='slide_title'>Title will be here</h3>
                           <p className='slide_desc'>Hybrid balloon framing provides additional rigidity</p>
                        </div>
                     </div>

                     <div className='slide_img_content_wrapp_2'>
                        <span className='slide_line'>
                           <span className='slide_circle'><span></span></span>
                        </span>
                        <div className='slide_img_text'>
                           <h3 className='slide_title'>Title will be here</h3>
                           <p className='slide_desc'>Hybrid balloon framing provides additional rigidity</p>
                        </div>
                     </div>

                     <div className='slide_img_content_wrapp_3'>
                        <div className='slide_img_text'>
                           <h3 className='slide_title'>Title will be here</h3>
                           <p className='slide_desc'>Hybrid balloon framing provides additional rigidity</p>
                        </div>
                        <span className='slide_line'>
                           <span className='slide_circle'><span></span></span>
                        </span>
                     </div>
                  </div>
               </div>
            </Slider >
         </div >
      </div >
   )
}

export default Specification
