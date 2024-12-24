import React from 'react'
import './Breadcurm.css'
import arrow from '../component/assests/breadcrum_arrow.png'
function Breadcurm({product}) {
  return (
    <div className='breadcrum'>
       HOME <img src={arrow} alt="" />Shop <img src={arrow} alt="" />
       {product[0].category} <img src={arrow} alt="" />{product[0].name}
    </div>
  )
}

export default Breadcurm