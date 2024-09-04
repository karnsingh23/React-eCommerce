import React from 'react';
import { items } from './Data';
import {Link,useLocation,useNavigate} from 'react-router-dom'
import { useState } from 'react';
import "./Navbar.css"

const Navbar=({setData,cart})=> {
  const location = useLocation();

  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const filterByCategory=(category)=>{
    const element = items.filter((product)=>product.category===category)
    setData(element)
  }
  const filterByPrice=(price)=>{
    const element=items.filter((product)=>product.price>=price)
    setData(element)
  }
  const  handleSubmit=(e)=>{
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
  }
  return (
    <header className='sticky-top'>
         <div className="navbar flex justify-between px-3 font-bold">
        <Link to={'/'} className="brand">E-COMMERCE</Link>
        <form onSubmit={handleSubmit} className="search">
            <input
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
             type="text"
              placeholder="Search Products" 
              className="px-4 py-2 border rounded" />
        </form>
        <Link to={'/cart'} className="cart"><button type="button" className="btn btn-primary position-relative">
  Cart
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button></Link>
    </div>
    {
      location.pathname == '/' &&(
        <div className="nav-bar-wrapper">
        <div className="items">Filter by{"->"}</div>
        <div onClick={()=>setData(items)} className="items">No Filter</div>
        <div onClick={()=>filterByCategory('mobiles')} className="items">Mobiles</div>
        <div  onClick={()=>filterByCategory('laptops')} className="items">Laptops</div>
        <div  onClick={()=>filterByCategory('tablets')}  className="items">Tablets</div>
        <div onClick={()=>filterByPrice(49999)} className="items">{">="}49999</div>
        <div onClick={()=>filterByPrice(69999)} className="items">{">="}69999</div>
        <div onClick={()=>filterByPrice(89999)} className="items">{">="}89999</div>
        </div>
      )
    }
   
    </header>
   
  );
}

export default Navbar;
