import React from 'react'
import './ButtonPlus.scss'

const ButtonPlus = ({ title, plus, underline, onClick }) => {
   return (
      <div onClick={onClick} className={underline ? "button_custom underline" : "button_custom"}>
         <div className={plus ? "button_custom_title plus_button" : "button_custom_title red_arrow"}>
            {title}
         </div>
      </div>
   )
}

export default ButtonPlus
