

import React from 'react'
import AddEvent from '../AddEvent'
import Filter from '../filter/Filter'


import './toppanel.scss'
const TopPanel = () => {
  return (
    <div className='top'>
      <Filter />
      <AddEvent />
    </div>
  )
}

export default TopPanel