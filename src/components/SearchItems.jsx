import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';

function SearchItems({cart,setCart}) {
  const {term} = useParams();
  const [filteredData, setfilteredData] = useState([])
  useEffect(() => {
  const filterData=()=>{
    const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()))
    setfilteredData(data)
  }
  filterData()

    
  }, [term])
  
  return (
    
    <Product cart={cart} setCart={setCart}  items={filteredData} />
  )
}

export default SearchItems