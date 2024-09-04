import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductDetails from './components/ProductDetails'
import Caart from './components/Caart'
import SearchItems from './components/SearchItems'
import { useState } from 'react'
import { items } from './components/Data'
function App() {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
    <Router>
    <Navbar cart={cart} setData={setData}/>
      <Routes>
        
        <Route path="/" element={<Product cart={cart} setCart={setCart} items={data}/>}/>
        <Route path="/product/:id" element={<ProductDetails  cart={cart} setCart={setCart} />}/>
        <Route path="/search/:term" element={<SearchItems cart={cart} setCart={setCart} />}/>
        <Route path="/cart" element={<Caart cart={cart} setCart={setCart}/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App