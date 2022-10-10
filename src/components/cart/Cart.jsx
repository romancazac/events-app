import React from 'react'
import Modals from '../Modal'
import Btn from '../ui/Btn'

import './cart.scss'
const Cart = ({ id, img, title, data, hora, adress, descr }) => {
   return (
      <div className='cart__column'>
         <img src={img} alt={title} className="cart__img" />
         <div className="cart__content">
            <h4 className="cart__title">{title}</h4>
            <div className="cart__info">
               <span>{data} | {hora}</span>
            </div>
            <p className="cart__descr">{adress}</p>
            <div className="cart__footer">
               <Modals
                  btn={
                     <Btn
                        className={'form__btn form__btn_cart'}
                        onClick={() => console.log(id)}
                     >
                        Entra
                     </Btn>
                  }>
                  <div className='cart__column'>
                     <img src={img} alt={title} className="cart__img" />
                     <div className="cart__content">
                        <h4 className="cart__title">{title}</h4>
                        <div className="cart__info">
                           <span>{data} | {hora}</span>
                        </div>
                        <p className="cart__descr">{adress}</p>
                        <p className="cart__descr">{descr}</p>
                     </div>
                  </div>
               </Modals>
            </div>
         </div>
      </div>
   )
}

export default Cart