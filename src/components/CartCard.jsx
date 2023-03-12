import { Close, ShoppingCartCheckout } from '@mui/icons-material';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { openCartDialog,reset } from '../redux/dialogSlice'
import { removeProduct,getTotals } from '../redux/cartSlice'
import QtyChange from './QtyChange';


const CartCard = () => {
  const quantity = useSelector(state=> state.cart.cartTotalQuantity);
  const cartDialog = useSelector(state=> state.dialog.cartDialog);
	const overlay = useSelector(state=> state.dialog.overlay);
	const bodyScroll = useSelector(state=> state.dialog.bodyScroll);

  const navigate= useNavigate();
  const dispatch = useDispatch();
  const cart= useSelector((state)=> state.cart);
  useEffect(()=>{
    dispatch(getTotals());
  },[cart,dispatch]);
   const handleCloseCart=()=>{
console.log("CLOSE CART");
dispatch(openCartDialog(false));
dispatch(reset());
	//dispatch(showScroll(bodyScroll));
   }
   const handleRemoveCart=(item)=>{
    console.log("CLOSE CART");
    
    dispatch(removeProduct(item));
    //dispatch(reset());
       }
       const handleNavigateToCheckOut=()=>{
        dispatch(reset());
        //navigate(`/orders/${res.data._id}`);
        navigate('/checkout');
       }
  return (
    <div className='cart-card'>
        <div className='cart-top'>
         <h3>Your Cart</h3>
         <span className='cart-count'>{cart.cartItems.length} item{cart.cartItems.length>1 ? 's':''}</span>
        </div>
        <div className={cart.cartItems.length>3 ? 'cart-body scroll' : 'cart-body'}>
        {(cart.cartItems && cart.cartItems.length) ?
         cart.cartItems.map((item,i)=>{
            return(
              <div key={i} className='box-item-row'>
              <div className='checkout-product'>
              <div className='cp-left'>
                <div className='img-box'><div  className='img' style={{backgroundImage:"url("+item.image[0]+")"}}></div></div>
              <div className='cp-details'>
              
                  <h3>{item.name}</h3>
                  <span className='qty'> {item.cartQuantity+' X '+ item.nowprice}</span>
              </div>
              <QtyChange {...item}/>
              </div>
                  <div className='cp-right'>
                  <h3>{item.nowprice*item.cartQuantity}</h3>
                  <span className='remove-cart-item-btn' onClick={()=> handleRemoveCart(item)}><Close/></span>
                  </div>
              </div>
          </div>
            )
         })
         : ''}
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
          <div className='cart-btn-wrapper'>
            <span className='btn close-cart' onClick={()=> handleCloseCart()}><Close/> Close Cart</span>
          <span className='btn' onClick={()=>handleNavigateToCheckOut()} ><ShoppingCartCheckout/> checkout</span>
          </div>
        
        </div>
    </div>
  )
}

export default CartCard