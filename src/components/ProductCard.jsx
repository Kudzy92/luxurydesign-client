import { ShoppingCart, Storage } from '@mui/icons-material'
import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartSlice'
import Price from './Price'

const ProductCard = (item) => {
 
  const dispatch = useDispatch();
    const handleAddToCart=(item)=>{
        
        console.log("Product Clicked");
        
        console.log("ITEM"+item);
        dispatch(addProduct(item));
    }
    const handlePlaceOrder=(item)=>{
     
      console.log("Product ordered");
  }
  
  return (
    <div key={item.id} className='product-card'>
        <div className='pc-top'>
          {(item.discount>0 && item.stock>1) ? <div className='product-badge product-special'>
            <span>Special</span>
            <h3>{item.discount} <span>%</span></h3>
          </div> : ''}
          {(item.discount===0 && item.stock<1) ? <div className='product-badge product-out-of-stock'>
            <span>out</span>
            <h3>Stock</h3>
          </div> : ''}
        <Link to={'/products/'+item.id} className={item.image.length<2 ? 'only-one-img':'img-1'} style={{backgroundImage:"url("+item.image[0]+")"}} ></Link>
        {item.image.length>1 && <Link to={'/product/'+item.id} className='img-2' style={{backgroundImage:"url("+item.image[1]+")"}}></Link>}
                
        {item.stock>0 && <span className={item.discount>0 ? 'btn special-product':'btn add-to-cart'} onClick={()=> handleAddToCart(item)}><ShoppingCart/> Add to cart</span>}
        {item.stock<1 && <span className='btn place-an-order' onClick={()=> handlePlaceOrder(item)}><Storage/> place an order</span>}
        </div>
        <div className='pc-bottom'>
            <h3>{item.name}</h3>
            <Price {...item}/>
        </div>
    </div>
  )
}

export default ProductCard