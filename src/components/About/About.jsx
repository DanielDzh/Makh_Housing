import React from 'react'
import ButtonPlus from '../UI/ButtonPlus/ButtonPlus'
import Vector from '../../assets/images/Vector.svg'
import './About.scss'
import { smoothScroll } from '../../SmoothScroll'
import { useTranslation } from 'react-i18next'


const About = ({ title, desc, image, arr }) => {
   const { t } = useTranslation()

   return (
      <div className="About" id="About">
         <div className="header_about">
            <div className="header_about_title">
               <h1>{title}</h1>
               <div className="about_button_desc" onClick={() => smoothScroll("Contacts")}><ButtonPlus title={t('button.get_a_quote')} plus={true} /></div>
            </div>
            <p>{desc}</p>
            <div className="about_button_mobile" onClick={() => smoothScroll("Contacts")}><ButtonPlus title={t('button.get_a_quote')} plus={true} /></div>
         </div>
         <div className="about_body">
            <div className="about_body_img">
               <img src={image} alt="" />
            </div>
            <div className="about_body_grid">
               {
                  arr.map((item, index) => (
                     <div className="grid_item" key={index}>
                        <h3><img src={Vector} alt="" />{item.title}</h3>
                        <p>{item.desc}</p>
                     </div>
                  ))
               }
            </div>
         </div>
      </div>
   )
}

export default About
