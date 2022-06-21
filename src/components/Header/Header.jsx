import React, { useState } from 'react'
import ButtonPlus from '../UI/ButtonPlus/ButtonPlus'
import './header.scss'
import LogoBlack from '../../assets/images/LogoBlack.svg'
import { Link } from 'react-router-dom'
import { smoothScroll } from '../../SmoothScroll'
import { useTranslation } from 'react-i18next'
import { Language, NavMenu } from '../index'
import Menu from '../Menu/Menu'


const Header = ({ arrNav }) => {
   const [menuActive, setMenuActive] = useState(false);

   const { t } = useTranslation()

   return (
      <div className="header" id="Header">
         <div className="header_container">
            <div className="header_items">
               <div className="header_item">
                  <div className="header_logo">
                     <Link to="/"> <img src={LogoBlack} alt="" /></Link>
                  </div>
               </div>
               <div className="header_item w100">
                  <nav className="navbar navbar-expand-lg">
                     <NavMenu arrNav={arrNav} color="#393939AB" />
                  </nav>
               </div>

               <div className="button">
                  <Language color="#000" />
                  <div className='header_wrapp_butt' onClick={() => smoothScroll("Contacts")}>
                     <ButtonPlus title={t('button.get_a_quote')} plus={true} />
                  </div>
               </div>
               <div className="header_item burger" >
                  <div className={menuActive ? "header_burger active" : "header_burger"} onClick={() => setMenuActive(!menuActive)}>
                  </div>
                  <Menu active={menuActive} setActive={setMenuActive} />
               </div>
            </div>
         </div>
      </div >
   )
}

export default Header
