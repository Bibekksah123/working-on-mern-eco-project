import React, { useContext } from 'react'
import './Shopp.css'
import { ContextApi } from '../context/Contextitem'
import drop_down from '../component/assests/dropdown_icon.png'
import Item from '../component/item/Item'
function Shopcategor({banner,categor}) {
 const {all_product}=useContext(ContextApi)
  return (
    <div className='subcategory'>
<img className='banner' src={banner} alt="" />
<div className="sub-index">
  <p>
    <span>Showing 1-12</span> out of 26 products
  </p>
  <div className="sub-sort">
    Sort by <img src={drop_down} alt="" />
  </div>
</div>
     <div className="item-sub">
      {
        all_product.map((item,index)=>{
          if(categor==item.category){
            return <Item key={index} Item={item} id={item.id}/>
          }else{
            return null;
          }
        })
      }
     </div>
     <div className="loadmore">
      Explore more
     </div>
    </div>
  )
}

export default Shopcategor