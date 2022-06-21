import React, { useState } from 'react'
import './Services.scss'
import Vector from '../../assets/images/Vector.svg'
import { Accordion } from 'react-bootstrap';

const Secvices = ({ obj }) => {
   const [activeItem, setActiveItem] = useState(0);

   return (
      <div className="services" id="Services">
         <h1 className="service_title">
            <img src={Vector} alt="" /> Services
         </h1>
         <div className="secvices_img">
            <img src={obj[activeItem].img} className="" alt="..." />
         </div>
         <div className="block">
            {
               obj.map((item, index) => (
                  <div
                     onClick={() => setActiveItem(index)}
                     className={activeItem + 2 === index ? "item_slide_wrapper color" : activeItem === index ? "item_slide_wrapper active" : "item_slide_wrapper"}
                     key={index}
                  >
                     {activeItem === index ? <h1 className="countMobile" style={{ color: "#E34600" }}>{"0" + (index + 1)}</h1> : ''}
                     <div className={
                        (activeItem === index && index === 0) ?
                           "item_slide active padd" :
                           (activeItem === index) ? 'item_slide active' :
                              "item_slide"
                     }>
                        {activeItem === index ? <h1 className="countDesc" style={{ color: "#E34600" }}>{"0" + (index + 1)}/{"0" + obj.length}</h1> : ''}
                        <h2 className={activeItem === index ? "title myFont" : 'title'}>{item.title}</h2>
                        {activeItem === index ? <p>{item.desc}</p> : <h1>{"0" + (index + 1)}</h1>}

                     </div>
                  </div>
               ))
            }
         </div>
         <Accordion defaultActiveKey={0}>
            {
               obj.map((item, index) => (
                  <Accordion.Item
                     eventKey={index}
                     onClick={() => setActiveItem(index)}
                     key={index}
                  >
                     <Accordion.Header className={activeItem === index ? "item_slide active" : "item_slide"}>
                        <h1 className="" style={{ color: activeItem === index ? "#E34600" : "#C4C4C4" }}>{"0" + (index + 1)}</h1>
                        <h2 className='title'>{item.title}</h2>
                     </Accordion.Header>
                     <Accordion.Body>
                        <p>
                           {item.desc}
                        </p>
                     </Accordion.Body>
                  </Accordion.Item>
               ))
            }
         </Accordion>

      </div >
   )
}

export default Secvices
