import React from 'react'

const Btn = ({children, type, className, onClick}) => {
  return (
   <button onClick={onClick} className={`form__btn ${className}`} type={type}>{children}</button>
  )
}

export default Btn