import React, { useEffect } from 'react'
import LogoWhite from '../../assets/images/LogoWhite.svg'
import './Footer.scss'
import Down from '../../assets/images/arrowTop.svg'
import { Link } from 'react-router-dom'
import { smoothScroll } from '../../SmoothScroll'
import { Language, NavMenu } from '../index'
import NavMenuDark from '../NavMenuDark/NavMenuDark'




const Footer = ({ arrNav }) => {

   useEffect(() => {
      window.onscroll = scroll1;
      var pos = document.getElementById('Specifications').getBoundingClientRect().top;
      function scroll1() {
         var toTop = document.getElementById('toTop');

         window.scrollY >= pos ? toTop.style.display = 'block' : toTop.style.display = 'none';
      }
   }, [])

   return (
      <div className="footer">
         <div className="footer_logo">
            <Link to="/">
               <img src={LogoWhite} alt="" />
            </Link>
            <Language colorTitle="#fff" />
         </div>
         <p className="footer_text">
            Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore
         </p>
         <div className="footer_nav">

            <NavMenu arrNav={arrNav} colorText="#FFFFFF" />
            <Language colorTitle="#fff" />

            <NavMenuDark colorText="#FFFFFF2E" />
         </div>
         <div className="under_footer">
            <div>
               © 2021 All Rights Reserved
            </div>
            <div>
               privacy Policy
            </div>
            <div>
               <img src={Down} className='toTop' id="toTop" onClick={() => smoothScroll('Header')} alt=''></img>
            </div>
         </div>
      </div>
   )
}

export default Footer
