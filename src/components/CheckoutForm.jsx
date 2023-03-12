import React from 'react'

const CheckoutForm = () => {
  return (
    <>
     <div className='checkout-row'>
        <h3 className='title'>Billing details</h3>
       </div>

       <div className='checkout-row'>
       
		<div className="form-control">
		<span className="required">*</span>
        <input 
        type="text" 
        placeholder='your full name' 
        />
		
		</div>
       </div>

       <div className='checkout-row'>
      
		<div className="form-control">
		<span className="required">*</span>
        <input 
        type="text" 
         placeholder='your phone number'
         />
		</div>
		
       </div>

       <div className='checkout-row'>
      
		<div className="form-control">
		<span className="required">*</span>
        <input 
        type="email"  
        placeholder='your email address'
        />
		</div>
		
       </div>

      

       <div className='checkout-row'>
       
		<div className="form-control">
		<span className="required">*</span>
        <input 
        type="text"
         placeholder='your street address'
         />
		</div>
		
       </div>

       <div className='checkout-row'>
       
		<div className="form-control">
		<span className="required">*</span>
        <input 
        type="text"
        placeholder='Apartment, suite, unit, etc.' 
        />
		</div>
       </div>

       <div className='checkout-row'>
       
		<div className="textarea form-control">
		
        <textarea   
        className="box" 
        rows='5'
        placeholder='your message'
        />
		</div>
		
       </div>
    </>
  )
}

export default CheckoutForm