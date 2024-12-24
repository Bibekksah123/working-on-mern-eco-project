import { createContext, useState } from "react";
import all_product from '../component/assests/all_product'
 

export const ContextApi = createContext({
  all_product,
});
// const getdefault=()=>{
//   let cart={}
//   for (let index = 0; index < all_product.length; index++) {
//     cart[index]=0;
//   }
//   return cart
// }
export const ProviderContext = ({ children }) => {
  const [cartlist, setcartlist] = useState([])

  //  const addTocart=(itemid)=>{
  //   setcartlist(pre => ({ ...pre,[itemid]:pre[itemid]+1}));

  //   console.log(cartlist)
  //  }
  //  const remove=(itemid)=>{
  //   setcartlist(pre => ({ ...pre,[itemid]:pre[itemid]-1}));
  //  }
  const addTocart=(itemid)=>{
    setcartlist({...cartlist,itemid})
  }
  const remove=(itemid)=>{
    setcartlist(pre=>pre.filter((item)=>item.id !=itemid))

  }
console.log(cartlist)
  const contextvalue = {
    all_product,
    remove,
    addTocart,
    cartlist
  }
  return(
    <ContextApi.Provider value={contextvalue}>
      {children}
    </ContextApi.Provider>
  );
};