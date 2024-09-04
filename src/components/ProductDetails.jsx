import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { items } from './Data'
import Product from './Product'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ProductDetails({cart,setCart}) {
  const {id}=useParams()
  const [product, setProduct] = useState({})
  const [relatedProducts, setRelatedProducts] = useState([])
  useEffect(() => {
    const filterProduct = items.filter((product)=>product.id==id)
    setProduct(filterProduct[0])
    const relatedProducts = items.filter((p)=>p.category===product.category)
    setRelatedProducts(relatedProducts)
  }, [id , product.category])
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
        id, price, title, description, imgSrc
    }
    setCart([...cart, obj]);
    toast.success('Item added!', {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}
  
  return (
    <>
    <ToastContainer
                position="top-right"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
     <div className="container con">
      <div className="img">
        <img src={product.imgSrc} alt="" />
      </div>
      <div className=" text-center">
      <h1 className="card-title head">{product.title}</h1>
            <p className="card-text">{product.description}</p>
          <button className='btn btn-primary mx-3'>{product.price}{" "}₹</button>
          <button onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)} className='btn btn-warning'>Add to Cart</button>
      </div>
     </div>
     <h1 className='head text-center'>Related Products</h1>
     <Product cart={cart} setCart={setCart}  items={relatedProducts}/>
    </>
  )
}




export default ProductDetails