import React from 'react'
import { NavLink } from 'react-router-dom'
import { smoothScroll } from '../../../SmoothScroll'
import './NavMenu.scss'

const NavMenu = ({ arrNav, colorText }) => {
   return (
      <nav className="navbar navbar-expand-lg">
         <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav">
                  <div className='navbar-nav'>
                     {arrNav.map((item, index) => {
                        return (
                           <NavLink style={{ color: colorText }} key={index} onClick={() => smoothScroll(item.url)} to="/">{item.name}</NavLink>
                        )
                     })}
                  </div>
               </div>
            </div>
         </div>
      </nav>
   )
}

export default NavMenu
