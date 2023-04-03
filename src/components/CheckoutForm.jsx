import { AccessTimeOutlined, GavelOutlined, LocationCityOutlined, TimeAccesTimeOutline } from '@mui/icons-material';
import { Paper } from '@mui/material';
import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { checkoutFormValues} from '../redux/checkoutSlice'

const CheckoutForm = () => {
 

  const dispatch = useDispatch();
  const [dcOption,setdcOption]=useState("dddelivery");
  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if(e.target.name=="message" && e.target.value?.length>0){
      dispatch(checkoutFormValues(values));
    }
  };
  const [values, setValues] = useState({
   fullname: "",
   phonenumber: "",
      email: "",
      streetaddress: "",
      unitaddress: "",
      deliverykm:"",
       message: "",
  });
  dispatch(checkoutFormValues(values));
  return (
    <>
     <div className='checkout-row'>
        <h3 className='title'>Billing details</h3>
       </div>

       <div className='checkout-row'>
       <div className='form-control-container'>
         <span className='form-label'>Your Full Name</span>
		<div className="form-control">
		<span className="required">*</span>
        <input 
        type="text" 
        name='fullname'
        onChange={handleOnChange}
        placeholder='your full name' 
        />
		
		</div>
        </div>
       </div>

       <div className='checkout-row'>
       <div className='form-control-container'>
         <span className='form-label'>Your Phone Number</span>
		<div className="form-control">
		<span className="required">*</span>
        <input 
        type="text" 
        name='phonenumber'
        onChange={handleOnChange}
         placeholder='07654545445'
         />
		</div>
		</div>
       </div>

       <div className='checkout-row'>
       <div className='form-control-container'>
         <span className='form-label'>Your Email Address</span>
		<div className="form-control">
		<span className="required">*</span>
        <input 
        type="email"  
        name='email'
        onChange={handleOnChange}
        placeholder='info@luxurydesign.co.za'
        />
		</div>
		</div>
       </div>
       <div className='checkout-row'>
       <div className='form-control-container delivery-choices'>
       <span className='form-label'>Delivery / Collection options</span>
       <div className='dc-option-container'>
       <div className='dc-option-item'><span className={dcOption==='dddelivery'?'check-box active':'check-box'} onClick={()=>setdcOption('dddelivery')}></span><h3>Door to door delivery</h3></div>
       <div className='dc-option-item'><span className={dcOption==='spickup'?'check-box active':'check-box'} onClick={()=>setdcOption('spickup')}></span><h3>Shop pickup</h3></div>
       
       </div>
        </div>
        </div>
      
       {dcOption==='spickup' && 
       <div className='shop-pickup-collection'>
          
          <div className='ddd-row'>
            <div className='ddd-left'><LocationCityOutlined/></div>
            <div className='ddd-right'>
            <h3>Collection address</h3>
              <span>Shop address</span>
              <span>Sandon</span>
              <span>Johannesburg</span>
            </div>
          </div>
          <div className='ddd-row'>
            <div className='ddd-left'><AccessTimeOutlined/></div>
            <div className='ddd-right'>
            <h3>Collection time</h3>
              <span>Shop address</span>
              <span>Sandon</span>
              <span>Johannesburg</span>
            </div>
          </div>
          <div className='ddd-row'>
            <div className='ddd-left'><GavelOutlined/></div>
            <div className='ddd-right'>
            <h3>Collection terms & conditions</h3>
              <p>Thirdparty can only collect orders provided bring original Idenitification documents and  receipt copy.
                In adition we we'll confirm first with buyer before you collect.
              </p>
            </div>
          </div>
       </div>}
{dcOption==='dddelivery' && <div className="door-door-delivery-details">
       <div className='checkout-row'>
       <div className='form-control-container'>
         <span className='form-label'>Your Street Address</span>
		<div className="form-control">
		<span className="required">*</span>
        <input 
        type="text"
        name='streetaddress'
        onChange={handleOnChange}
         placeholder='153 Cedar Street, Fourways'
         />
		</div>
		</div>
       </div>

       <div className='checkout-row'>
       <div className='form-control-container'>
         <span className='form-label'>Apartment, suite, unit, etc</span>
		<div className="form-control">
		<span className="required">*</span>
        <input 
        type="text"
        name='unitaddress'
        onChange={handleOnChange}
        placeholder='block 1, unit 8' 
        />
		</div>
        </div>
       </div>

       <div className='checkout-row'>
       <div className='form-control-container'>
         <span className='form-label'>Delivery Kilometers from the Our Shop</span>
		<div className="form-control">
		<span className="required">*</span>
        <input 
        type="text"
        name='deliverykm'
        onChange={handleOnChange}
        placeholder='15.8' 
        />
		</div>
        </div>
       </div>

       </div>}
       <div className='checkout-row'>
       <div className='form-control-container'>
         <span className='form-label'>Your Message</span>
		<div className="textarea form-control">
		
        <textarea   
        className="box" 
        name='message'
        onChange={handleOnChange}
        rows='5'
        placeholder='type your message ...'
        />
		</div>
		</div>
       </div>
    </>
  )
}

export default CheckoutForm