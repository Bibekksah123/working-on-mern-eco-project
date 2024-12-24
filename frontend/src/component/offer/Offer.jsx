import React from 'react'
import exclusive from '../assests/exclusive_image.png'
import './Offer.css'
function Offer() {
  return (
    <div className='offer'>
       <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Only For You</h1>
        <p>Only Best Selling Product</p>
        <button>Check Now</button>
       </div>
       <div className="offer-right">
        <img src={exclusive} alt="" />
       </div>
    </div>
  )
}

export default Offer