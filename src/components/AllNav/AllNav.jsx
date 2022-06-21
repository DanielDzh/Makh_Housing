import React, { useState } from 'react'
import './AllNav.scss'
import Vector from '../../assets/images/Vector.svg'
import { smoothScroll } from '../../SmoothScroll';

const AllNav = ({ arr }) => {
   const [active, setActive] = useState(0);

   const changeState = (index) => {
      setActive(index);
   }

   return (
      <div className="fix">
         <ul className="fix_container">
            {
               arr.map((item, index) => (
                  <div className={active === index ? "item color" : "item"} key={index}>
                     {active === index ?
                        <img className="dBlock" src={Vector} alt="vector" />
                        :
                        <span className="circle"></span>
                     }
                     <li onClick={() => changeState(index)}>
                        <span onClick={() => smoothScroll(item.url)}>

                           {item.name}
                        </span>
                     </li>
                  </div>
               ))
            }
         </ul >
      </div >
   )
}

export default AllNav
