import React from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import{ Route,Routes, BrowserRouter} from 'react-router-dom'
import Shop from './page/Shop'
import Shopcategor from './page/Shopcategor'
import Product from './page/Product'
import Cart from './page/Cart'
import Login from './page/Login'
import Footer from './component/footer/Footer'
import men from '../src/component/assests/banner_mens.png'
import women from '../src/component/assests/banner_women.png'
import kids from '../src/component/assests/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Men' element={<Shopcategor banner={men} categor={"men"}/>}/>
        <Route path='/Women' element={<Shopcategor banner={women} categor={"women"}/>}/>
        <Route path='/Kids' element={<Shopcategor banner={kids} categor={"kid"}/>}/>
        <Route path='/product/:id' element={<Product />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App