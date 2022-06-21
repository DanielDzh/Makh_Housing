import React, { useRef, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import './Language.scss'

const languages = [
   {
      code: 'Ру',
      name: 'Russian',
      country_code: 'Ру',
   },
   {
      code: 'En',
      name: 'English',
      country_code: 'En',
   },
]

const Language = ({ colorTitle }) => {
   const { t } = useTranslation()
   const [visiblePopup, setVisiblePopup] = useState(false);
   const [change, setChange] = useState(t('language'));
   const sortRef = useRef();

   useEffect(() => {
      document.body.addEventListener("click", handleOutsideClick);

   }, []);


   const handleOutsideClick = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(sortRef.current)) { setVisiblePopup(false) };
   }

   const toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup);
   }

   const changeLang = (name) => {
      setChange(name);
   }
   return (
      <div className='language'>
         <DropdownButton
            align="end"
            id="dropdown-variants-Secondary"
            title={t('language')}
            className={visiblePopup ? 'dropArrowTop' : 'dropArrowDown'}
            style={{ color: colorTitle }}
            ref={sortRef}
            onClick={toggleVisiblePopup}
         >
            {languages.map(({ code, name, country_code }) => (
               <Dropdown.Item
                  href=""
                  key={country_code}
                  onClick={() => { i18next.changeLanguage(code); changeLang(code) }}
                  className={change === code ? "change" : ''}
               >
                  {name}
               </Dropdown.Item>
            ))}
         </DropdownButton>
      </div>
   )
}

export default Language
