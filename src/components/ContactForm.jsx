import { SendOutlined } from '@mui/icons-material'
import React,{useState } from 'react'

const ContactForm = ({name}) => {
    const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const [values, setValues] = useState({
   fullname: "",
   phonenumber: "",
      email: "",
      formpurpose: "",
      message: "",
  });
  return (
    <div className='contact-form-container'>
        <div className='contact-row'>
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
        <div className='form-control-container'>
         <span className='form-label'>Your Email</span>
		<div className="form-control">
		
        <input 
        type="email" 
        name='email'
        onChange={handleOnChange}
        placeholder='your email' 
        />
		
		</div>
        </div>
        <div className='form-control-container'>
         <span className='form-label'>Your Phone Number</span>
		<div className="form-control">
		
        <input 
        type="text" 
        name='phonenumber'
        onChange={handleOnChange}
        placeholder='your phone number' 
        />
		
		</div>
        </div>
        <div className='form-control-container'>
         <span className='form-label'>Your {name}</span>
		<div className="form-control">
		<span className="required">*</span>
        <input 
        type="text" 
        name='formpurpose'
        onChange={handleOnChange}
        placeholder= {"your "+name} 
        />
		
		</div>
        </div>
        </div>
        <div className='contact-row'>
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
        <div className='contact-row'>
         <span className='btn'><SendOutlined/> send a message</span>
        </div>
    </div>
  )
}

export default ContactForm