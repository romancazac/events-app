import React from 'react'
import './footer.scss'
const Footer = () => {
  return (
    <footer className='footer'>

      <div className="container">
        <div className="footer__row">
            <span className="footer__copy">Ellsker 2022 Copyright</span>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Termos de uso</a></li>
              <li><a href="#" className="footer__link">Privacidade</a></li>
            </ul>
        </div> 
      </div>
    </footer>
  )
}

export default Footer