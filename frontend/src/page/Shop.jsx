import React from 'react'
import Hero from '../component/hero/Hero'
import Popular from '../component/popular/Popular'
import Offer from '../component/offer/Offer'
import Newcollection from '../component/newcollection/Newcollection'
import Newletter from '../component/Newletter/Newletter'

function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <Newcollection/>
      <Newletter/>
    </div>
  )
}

export default Shop