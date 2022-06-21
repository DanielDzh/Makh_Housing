import React, { useState } from 'react'
import './ContactUs.scss'
import Vector from '../../assets/images/Vector.svg'
import ButtonPlus from '../UI/ButtonPlus/ButtonPlus'
import location from '../../assets/images/Location.svg'
import phoneIcon from '../../assets/images/Phone.svg'
import emailIcon from '../../assets/images/Email.svg'
import locationPoint from '../../assets/images/LocationPoint.svg'

const ContsctUs = ({ title, image }) => {
   const [name, setName] = useState(null);
   const [email, setEmail] = useState(null);
   const [message, setMessage] = useState(null);
   const [phone, setPhone] = useState(null);

   const changeName = (event) => {
      setName(event.target.value);
   }
   const changeEmail = (event) => {
      setEmail(event.target.value);
   }
   const changePhone = (event) => {
      setPhone(event.target.value);
   }
   const changeMessage = (event) => {
      setMessage(event.target.value);
   }

   return (
      <div className="contact_us" id="Contacts">
         <div className="contact_us_body">
            <div className="contact_us_body_form">
               <h1 className="form_title"><img src={Vector} alt="" style={{ marginRight: "10px" }} />{title}</h1>
               <form className="row g-3 form">
                  <div className="">
                     <label htmlFor="validationTextarea" className="form-label" style={{ display: name ? "block" : "none" }}>Name</label>
                     <input onChange={changeName} type="text" className="form-control" id="validationServer01" placeholder="Name" required />
                  </div>
                  <div className="">
                     <label htmlFor="validationTextarea" className="form-label" style={{ display: email ? "block" : "none" }}>Email</label>
                     <input onChange={changeEmail} type="text" className="form-control" id="validationServer01" placeholder="Email" required />
                  </div>
                  <div className="">
                     <label htmlFor="validationTextarea" className="form-label" style={{ display: phone ? "block" : "none" }}>Phone Number</label>
                     <input onChange={changePhone} type="number" className="form-control" id="validationServer01" placeholder="Phone Number" required />
                  </div>
                  <div className="message">
                     <label htmlFor="validationTextarea" className="form-label" style={{ display: message ? "block" : "none" }}>Message</label>
                     <textarea onChange={changeMessage} className="form-control" id="validationTextarea" placeholder="Message" required></textarea>
                  </div>
                  <div className="end">
                     <ButtonPlus title="Submit" plus={false} />
                  </div>
               </form>
            </div>
            <div className="contact_us_body_img">
               <div className='contact_us_body_img_wrap'>
                  <div className='white_squer'>
                     <h2><img src={location} alt="" />Adress will be here</h2>
                     <h2><img src={phoneIcon} alt="" />+1 344 3453 554</h2>
                     <h2><img src={emailIcon} alt="" />makh@email.com</h2>
                  </div>
                  <div className="contact_us_body_img_img">
                     <img src={image} alt="" />
                     <img src={locationPoint} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}

export default ContsctUs
