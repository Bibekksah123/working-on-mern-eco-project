import React, { useContext } from 'react'
import { ContextApi } from '../context/Contextitem'
import { useParams } from 'react-router-dom'
import Breadcurm from '../breadcurm/Breadcurm'
import Productdisplay from '../productdisplay/Productdisplay'
import Description from '../descriptionbox/Description'
import Relatedproduct from '../relatedproduct/Relatedproduct'

function Product() {
 const {all_product}= useContext(ContextApi)
 const {id}=useParams()
 let product=all_product.filter((item)=>item.id==id)
 
  return(
    <div>
      <Breadcurm product={product}/>
      <Productdisplay product={product}/>
      <Description/>
      <Relatedproduct/>
    </div>
  )
}

export default Product