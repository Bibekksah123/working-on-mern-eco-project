import React, { useContext } from 'react'
import './Productdisplay.css'
import star from '../component/assests/star_icon.png'
import { ContextApi } from '../context/Contextitem'
function Productdisplay({product}) {
const {addTocart}=  useContext(ContextApi)
  return (
    <div className='productdisply'>

       <div className="display-left">
          <div className="img-list">
            <img src={product[0].image} alt="" />
            <img src={product[0].image} alt="" />
            <img src={product[0].image} alt="" />
            <img src={product[0].image} alt="" />
          </div>
          <div className="product-img">
            <img className='main-image' src={product[0].image} alt="" />
          </div>
       </div>
       <div className="display-right">
   <h1>{product[0].name}</h1>
   <div className="product-img-star">
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <p>(122)</p>
   </div>
   <div className="product-right-price">
    <div className="old">${product.old_price}</div>
    <div className="new">${product.new_price}</div>
   </div>
   <div className="description">
    {product[0].name}
   </div>
   <div className="size">
    <h1>Select Size</h1>
    <div className="size-select">
      <div>S</div>
      <div>M</div>
      <div>L</div>
      <div>XL</div>
      <div>XXL</div>
    </div>
   </div>
   <button onClick={()=>addTocart(product)}>Add To Cart</button>
   <p className="category"><span>Category:Women,Crop Top,T-shirt</span></p>
   <p className="category"><span>Tags:Modern,Latest,Best Selling</span></p>
       </div>
    </div>
  )
}

export default Productdisplay