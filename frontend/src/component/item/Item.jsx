import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
function Item({Item,id}) {
  ///product/:id
  return (
    <div className='item' key={id}>
      <Link to={`/product/${id}`}><img  src={Item.image} alt="" /></Link>
      <p>{Item.name}</p>
      <div className="item-prices">
        <div className="item-new-price">
         ${Item.new_price}
        </div>
        <div className="item-old-price">
          ${Item.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item