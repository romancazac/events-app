import { People, Star } from '@mui/icons-material'
import React from 'react'

export const ChatList = () => {
   return (
      <div className='chat'>
         <h3 className="chat__title">Messenger</h3>
         <div className="chat__row">
            <div className="chat__l">
               <People/>
               <img src="" alt="" className="chat__img" />
            </div>
            <div className="chat__r">
               <h5 className="chat__text">Vamos tomar um chopp?</h5>
               <span className="chat__subtext">você: Olá pessoal.</span>
            </div>
         </div>
         <div className="chat__row">
            <div className="chat__l">
               <Star/>
               <img src="" alt="" className="chat__img" />
            </div>
            <div className="chat__r">
               <h5 className="chat__text">Vamos tomar um chopp?</h5>
               <span className="chat__subtext">você: Olá pessoal.</span>
            </div>
         </div>
         <div className="chat__row">
            <div className="chat__l">
               <People/>
               <img src="" alt="" className="chat__img" />
            </div>
            <div className="chat__r">
               <h5 className="chat__text">Vamos tomar um chopp?</h5>
               <span className="chat__subtext">você: Olá pessoal.</span>
            </div>
         </div>
         <div className="chat__row">
            <div className="chat__l">
               <People/>
               <img src="" alt="" className="chat__img" />
            </div>
            <div className="chat__r">
               <h5 className="chat__text">Vamos tomar um chopp?</h5>
               <span className="chat__subtext">você: Olá pessoal.</span>
            </div>
         </div>

      </div>
   )
}
