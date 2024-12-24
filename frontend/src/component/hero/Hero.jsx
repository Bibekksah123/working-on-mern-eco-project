import React from 'react'
import './Hero.css'
import handimage from '../assests/hand_icon.png'
import arr_icon from '../assests/arrow.png'
import hero_img from '../assests/hero_image.png'
function Hero() {
  return (
    <div className='hero poiret-one-regular'>
   <div className="hero-left">
<h2>NEW AARRIVAL ONLY</h2>
<div>
  <div className="hero-and-icon">
    <p>New</p>
    <img src={handimage} alt="" />
 </div>
  <p>Collection</p>
  <p>For Everyone</p>
 
  </div>
  <div className="hero-latest-collection">
    <p>Latest Collection</p>
    <img src={arr_icon} alt="" />
  </div>
   </div>
   <div className="hero-right">
      <img src={hero_img} alt="" />
   </div>
    </div>
  )
}

export default Hero