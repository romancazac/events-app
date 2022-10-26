import React from 'react'
import { AppContext } from '../../App'

import Btn from '../ui/Btn'

import './chatHeader.scss'
const CheatHeader = () => {
  const { currentUser } = React.useContext(AppContext)
  return (
    <header className='header-chat'>
      <div className="header-chat__info">
        <img src={currentUser.photoURL} alt={currentUser.displayName} className="header-chat__img" />
        <h2 className="header-chat__name">{currentUser.displayName}</h2>
      </div>

      <Btn>Log out</Btn>
    </header>
  )
}

export default CheatHeader