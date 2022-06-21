import React from 'react'
import './UnderHeader.scss'

const UnderHeader = ({ title, image }) => {
   return (
      <div className="under_header">
         <h1>{title}</h1>
         <div className="img_wrapper">
            <div className='houseDesc'>
               <img src={image} alt="" />
            </div>
         </div>
         <div className="houseMobile">
            <img src={image} alt="" />
         </div>
      </div>
   )
}

export default UnderHeader
