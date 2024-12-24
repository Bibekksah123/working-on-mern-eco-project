import React, { useContext } from 'react'
import './Cartitem.css'
import remove_icons from '../component/assests/cart_cross_icon.png'
import { ContextApi } from '../context/Contextitem'
function Cartitem() {
 const {remove,all_product,cartlist} =useContext(ContextApi)
  return (
    <div className='cartitems'>
      <div className="cart-item-form">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
            <div>
            <div className="cart-itemformate cart-item-form">
              <img src={cartlist.itemid[0].image} className='icons-main-image' alt="" />
              <p>{cartlist.itemid[0].name}</p>
              <p>{cartlist.itemid[0].new_price}</p>
              <button className='item-quantity'>{all_product[0].id}</button>
              <p>
                {cartlist.itemid[0].new_price}
              </p>
              <img onClick={()=>remove(cartlist[0].id)}  src={remove_icons} alt="" />
            </div>
            <hr />
            </div>
          
      

    </div>
  )
}

export default Cartitem