import React from 'react'
import MobilePageHeader from '../components/MobilePageHeader'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"
import QtyChange  from '../components/QtyChange'
import { removeProduct,getTotals } from '../redux/cartSlice'
import { Close } from '@mui/icons-material';
const Cart = () => {
    const navigate= useNavigate();
    const dispatch=useDispatch();
      const cart= useSelector((state)=> state.cart);
      const handleRemoveCart=(item)=>{
        console.log("CLOSE CART");
        
        dispatch(removeProduct(item));
        //dispatch(reset());
           }
  return (
    <section className="cart-page">
    <MobilePageHeader page1={'home'} page2={'shop'} page3={'cart'}/>
    <div className='container'>
        <div className='cart-wrapper'>
        <div className='cart-top'>
        <h3 className='title'>Selected Products</h3>
        <span className='cart-count'>{cart.cartItems.length} item{cart.cartItems.length>1 ? 's':''}</span>
        </div>
        <div className={cart.cartItems.length>3 ? 'cart-body scroll' : 'cart-body'}>
            <div className='cart-body-inner'>
            <div className='box-item-row'>
                    <div className='checkout-product'>
                    <div className='cp-left'>
                      <div className='img-box'><h1>Product Image</h1></div>
                    <div className='cp-details'>
                        <h1>Product Details</h1>
                    </div>
                   
                   <div className='pqty'><h1>Product quanitity</h1></div>
                    </div>
                        <div className='cp-right'>
                        
                        <h1> Action</h1>
                        </div>
                    </div>
                </div>
            {cart.cartItems?.map((item,i)=>{
                return(
                    <div key={i} className='box-item-row'>
                    <div className='checkout-product'>
                    <div className='cp-left'>
                      <div className='img-box'><div className='img' style={{backgroundImage:"url("+item.image[0]+")"}}></div></div>
                    <div className='cp-details'>
                        <h3>{item.name}</h3>
                        <span className='qty'> {item.cartQuantity+' X '+ item.nowprice}</span>
                    </div>
                   
                    <QtyChange {...item}/>
                    </div>
                        <div className='cp-right'>
                        <span>{item.nowprice*item.cartQuantity}</span>
                        <span className='remove-cart-item-btn' onClick={()=> handleRemoveCart(item)}><Close/></span>
                  
                        </div>
                    </div>
                </div>
                )
            })}
            </div>



            <div className='cart-bottom'>
          <div className='cart-total-wrapper'>
          <div className='box-item-row'>
                <h3 className='total'>Subtotal</h3>
                <span className='total'>R {cart.cartTotalAmount}</span>
            </div>
            <div className='box-item-row'>
                <h3 className='total'>VAT</h3>
                <span className='total'>R {cart.cartVAT}</span>
            </div>
            <div className='box-item-row'>
                <h3 className='total'>Total</h3>
                <span className='total'>R {cart.cartTotalVATInc}</span>
            </div>
          </div>
            </div>

        </div>
        </div>
    </div>
    </section>
  )
}

export default Cart