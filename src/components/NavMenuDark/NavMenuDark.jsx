import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavMenuDark.scss'

const NavMenuDark = ({ colorText }) => {
   return (
      <nav aria-label="breadcrumb" id="breadcrumb">
         <ol className="breadcrumb" style={{ color: colorText }}>
            <li className="breadcrumb-item"><NavLink to="/">Facebook</NavLink></li>
            <li className="breadcrumb-item"><NavLink to="/">Twitter</NavLink></li>
            <li className="breadcrumb-item"><NavLink to="/">Linkedin</NavLink></li>
         </ol>
      </nav>
   )
}

export default NavMenuDark
