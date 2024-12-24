import React from 'react'
import './Newcollection.css'
import new_collection from '../assests/new_collections'
import Item from '../item/Item'
function Newcollection() {
  return (
    <div className='newcollection'>
      <h1>New Collection</h1>
      <hr />
      <div className="collection">
    {new_collection.map((prodcut)=><Item Item={prodcut} id={prodcut.id} key={prodcut.id}/>)}
      </div>

    </div>
  )
}

export default Newcollection