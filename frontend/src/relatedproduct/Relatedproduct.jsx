import React from 'react'
import './Relatedproduct.css'
import data_product from '../component/assests/data'
import Item from '../component/item/Item'
function Relatedproduct() {
  return (
    <div className='related-product'>
      <h1>Related Product</h1>
      <hr />
      <div className="relatedproduct">
        {data_product.map((product)=>{
          return (
            <Item Item={product} key={product.id} id={product.id}/>
          )
        })}
      </div>

    </div>
  )
}

export default Relatedproduct