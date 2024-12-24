import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assests/logo.png'
import cart from '../assests/cart_icon.png'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menu, setmenu] = useState("shop")
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>setmenu("Shop")}> <Link style={{textDecoration:"none",color:'black'}} to={"/"}>Shop</Link> {menu=="Shop"?<hr></hr>:<></>}</li>
        <li onClick={()=>setmenu("Men")}><Link style={{textDecoration:"none",color:'black'}} to={"/Men"}>Men</Link>{menu=="Men"?<hr></hr>:<></>}</li>
        <li onClick={()=>setmenu("Women")}><Link style={{textDecoration:"none",color:'black'}} to={"/Women"}>Women</Link>{menu=="Women"?<hr></hr>:<></>}</li>
        <li onClick={()=>setmenu("Kids")}><Link style={{textDecoration:"none",color:'black'}} to={"/Kids"}>Kids</Link>{menu=="Kids"?<hr></hr>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
       <Link to={"/login"}><button>Login</button></Link>
       <Link to={"/cart"}> <img src={cart} alt="" /></Link>
        <Link to={"/cart"}><div className="nav-cart-count">0</div></Link>
      </div>
    </div>
  )
}

export default Navbar