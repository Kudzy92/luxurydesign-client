import React, {useState, useEffect } from 'react'
import CheckoutForm from '../components/CheckoutForm'
import MobilePageHeader from '../components/MobilePageHeader'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"
import QtyChange  from '../components/QtyChange'
import { removeProduct,getTotals } from '../redux/cartSlice'
import { Close } from '@mui/icons-material';
import { BASE_URL } from "../utils/apiURL";
import axios from 'axios'
import moment from 'moment'

const Checkout = () => {
    const navigate= useNavigate();
  const dispatch=useDispatch();
    const cart= useSelector((state)=> state.cart);
    const checkoutForm= useSelector((state)=> state.checkout.checkoutform);
    console.log("CheckoutForm"+checkoutForm)
  const [paymethod,setPaymethod] =useState('eft');
  useEffect(()=>{
    dispatch(getTotals());
  },[cart,dispatch]);
  const handleRemoveCart=(item)=>{
    console.log("CLOSE CART");
    
    dispatch(removeProduct(item));
    //dispatch(reset());
       }
  const handleSaveCheckout = async ()=>{
 const newCheckout={
 fullname : checkoutForm.fullname,
phonenumber: checkoutForm.phonenumber,
email: checkoutForm.email,
streetaddress: checkoutForm.streetaddress,
unitaddress: checkoutForm.unitaddress,
message: checkoutForm.message,
paymethod: paymethod,
totalamount: cart.cartTotalVATInc,
deliveryamount: 100.50,
vatamount: cart.cartVAT,
ordermethod: "placed",
orderstatus: "pending",
pqty:cart.cartTotalQuantity,
deliverykm:checkoutForm.deliverykm,
orderdate:moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
orderid:Date.now(),
 };
    try{
      await axios.post(`${BASE_URL}/orders`, newCheckout);
      console.log("Brand saved");
    }catch(err){
      console.log(err);
    }
  }
  return (
    <section className='ad-checkout'>
      <MobilePageHeader page1={'home'} page2={'shop'} page3={'checkout'}/>
      <div className='checkout-section'>
        <div className='container'>
            <div className='wrapper'>
    <div className='checkout-left'>
      <CheckoutForm/>


    </div>
    <div className='checkout-right'>
        <div className='cart-top'>
        <h3 className='title'>Selected Products</h3>
        <span className='cart-count'>{cart.cartItems.length} item{cart.cartItems.length>1 ? 's':''}</span>
        </div>
        <div className={cart.cartItems.length>3 ? 'cart-body scroll' : 'cart-body'}>
            <div className='cart-body-inner'>
            
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
        <div className='box-item pay-method'>
        <div className='box-item-row'><h3 className='title'>Choose payment method</h3></div>
        
        <div className='box-item-row'>
        <div className='pay-method-title'><span className={paymethod==='eft'?'check-box active':'check-box'} onClick={()=>setPaymethod('eft')}></span><h3>Direct bank transfer</h3></div>
        <div className='des-pay-method'> {paymethod==='eft' ? <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be deliverd until the funds have cleared in our account.</p> : ''}</div>
        </div>
        
        <div className='box-item-row'>
        <div className='pay-method-title'><span className={paymethod==='cash'?'check-box active':'check-box'} onClick={()=>setPaymethod('cash')}></span><h3>Cash on delivery</h3></div>
        <div className='des-pay-method'>{paymethod==='cash' ? <p>Pay with cash upon delivery.</p>: ''}</div>
        </div>

        <div className='box-item-row'>
            <div className='pay-method-title'><span className={paymethod==='payfast'?'check-box active':'check-box'} onClick={()=>setPaymethod('payfast')}></span><h3>Pay via payfast</h3></div>
            <div className='des-pay-method'>{paymethod==='payfast' ? <p>Kindly use payfast as the payment gateway</p>: ''}</div>
        </div>
        <div className='box-item-row'>
            <div className='pay-method-title'><span className={paymethod==='float'?'check-box active':'check-box'} onClick={()=>setPaymethod('float')}></span><h3>Pay in installments using float</h3></div>
            <div className='des-pay-method'>{paymethod==='payfast' ? <p>
              Enjoy now, pay later & pay with credit cards only in installments.
              You must have full amount of your purchase available in your credit limit.
              You will be redirected to Float to securely complete your payment.
            </p>: ''}</div>
        </div>

        <div className='box-item-row'>
        <div className='pay-method-title'><span className={paymethod==='peach'?'check-box active':'check-box'} onClick={()=>setPaymethod('peach')}></span><h3>Pay via peach payments</h3></div>
            <div className='des-pay-method'>{paymethod==='peach' ? <p>Kindly use peachpay as the payment gateway.</p>: ''}</div>
        </div>

        </div>
        <div className='box-item'>
            <div className='box-item-row'>
                <Link href={paymethod==='payfast' ? 'https://www.payfast.co.za/anniesdesign' :''}>
                    <span className='btn' onClick={handleSaveCheckout}>
                    {paymethod==='eft' ? 'Place order' : ''}
                    {paymethod==='cash' ? 'Place order' : ''}
                    {paymethod==='payfast' ? 'Proceed to payfast' : ''}
                    {paymethod==='peach' ? 'Proceed to peach' : ''}
                </span></Link>
            </div>
        </div>
    </div>
  </div>
  </div>
  </div>
    </section>
  )
}

export default Checkout