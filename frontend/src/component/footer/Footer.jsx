import React from 'react'
import './Footer.css'
import footer_logo from '../assests/logo_big.png'
import insta from '../assests/instagram_icon.png'
import whatsapp from '../assests/whatsapp_icon.png'

import pinster from '../assests/pintester_icon.png'

function Footer() {
  return (
    <div className='footer'>
  <div className="footer-logo">
    <img src={footer_logo} alt="" />
    <p>SHOPPER</p>
  </div>
<ul className="footer-link">
  <li>Company</li>
  <li>Products</li>
  <li>Offer</li>
  <li>About</li>
  <li>Contact</li>
  <li>Reward</li>
</ul>
  <div className="footer-socail-icons">
    <div className="footer-container-icon">
     <img src={insta} alt="" />
    </div>
    <div className="footer-container-icon">
     <img src={whatsapp} alt="" />
    </div>
    <div className="footer-container-icon">
     <img src={pinster} alt="" />
    </div>
  </div>
  <div className="copy-right">
 
    <hr />
    <p>copyright@2002-All Right Reserved.</p>
  </div>
    </div>
  )
}

export default Footer