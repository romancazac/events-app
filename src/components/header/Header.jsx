import React from 'react'
import './header.scss'
const Header = ({children, className}) => {
   return (
      <header className={className}>
         {children}
      </header>
   )
}

export default Header