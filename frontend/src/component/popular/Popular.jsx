import React from 'react'
import './Popular.css'
import Item from '../item/Item'
import data_prodcut from '../assests/data'
function Popular() {
  return (
    <div className='popular'>
        <h1>Popular In Women</h1>
        <hr />
        <div className="popular-item">
          {data_prodcut.map((product)=><Item Item={product} key={product.id} id={product.id}/>)}
        </div>
    </div>
  )
}

export default Popular