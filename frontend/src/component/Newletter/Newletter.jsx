import React from 'react'
import './Newletter.css'
function Newletter() {
  return (
    <div className='newletter'>
      <h1>Get An Execlusive Offer On Your Email</h1>
      <p>Subscribe To Our NewsLetter For More Offer</p>
      <div>
        <input type="email" placeholder='Email' id='email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newletter