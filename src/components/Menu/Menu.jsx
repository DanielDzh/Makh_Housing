import React from 'react'
import './Menu.scss'
import LogoBlack from '../../assets/images/LogoBlack.svg'
import { AllNav, ButtonPlus, Language } from '../index'
import { useTranslation } from 'react-i18next'
import NavMenuDark from '../NavMenuDark/NavMenuDark'
import { smoothScroll } from '../../SmoothScroll'
import { useEffect } from 'react'


const Menu = ({ active, setActive }) => {
   const { t } = useTranslation()

   const allNav = [
      {
         name: t("nav_menu.about"),
         url: "About"
      },
      {
         name: t("nav_menu.specification"),
         url: "Specifications"
      },
      {
         name: t("nav_menu.previous_projects"),
         url: "PreviousProjects"
      },
      {
         name: t("nav_menu.services"),
         url: "Services"
      },
      {
         name: t("nav_menu.ongoing_projects"),
         url: "OngoingProjects"
      },
      {
         name: t("nav_menu.contacts"),
         url: "Contacts"
      }
   ]

   useEffect(() => {
      let body = document.querySelector('body');
      let menuList = document.querySelector('.menu');

      if (active) {
         body.classList.add('lock');
         menuList.classList.add('unLock');
      } else {
         body.classList.remove('lock');
         menuList.classList.remove('unLock');
      }
   }, [active])

   return (
      <div className={active ? "menu active" : "menu"} >
         <div className="blur" onClick={() => setActive(false)}></div>
         <div className="menu__content">
            <div className="header">
               <div className='content_img_wrapp'>
                  <img src={LogoBlack} alt="" />
               </div>
            </div>
            <div onClick={() => setActive(false)}>
               <AllNav arr={allNav} />
            </div>
            <div className='menuButton'>
               <ButtonPlus title={t('button.get_a_quote')} plus={true} onClick={() => smoothScroll('Contacts')} />
            </div>
            <NavMenuDark colorText="#C4C4C4" />
            <div className="menuLang">
               <span>Language: </span>
               <Language colorTitle="#E34600" />
            </div>
         </div>
      </div>
   )
}

export default Menu
