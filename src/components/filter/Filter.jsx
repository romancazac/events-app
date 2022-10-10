import { People, Star } from '@mui/icons-material'
import React from 'react'
import Sort from '../sort/Sort'

import './filter.scss'
const Filter = () => {
   return (
      <div className='top__left'>
         <nav className='nav'>
            <button className="nav__btn nav__btn_active ">
               todos
            </button>
            <button className="nav__btn">
               <Star />
               eventos
            </button>
            <button className="nav__btn">
               <People />
               rolês
            </button>
         </nav>
         <Sort/>
      </div>

   )
}

export default Filter