import { AppRegistrationOutlined, LoginOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className='register-section'>
    <div className='container'>
  <div className='wrapper'>
    
    <div className='register-form'>
    <div className='register-row'>
    <div className="title"><h3>Register</h3></div>
    </div>

    <div className='register-row'>
   <div className='form-control-container'>
     <span className='form-label'>Full Name</span>
    <div className="form-control">

    <input 
    type="text"
     />
    </div>
    </div>
   </div>

   <div className='register-row'>
   <div className='form-control-container'>
     <span className='form-label'>Email</span>
    <div className="form-control">

    <input 
    type="text"
     />
    </div>
    </div>
   </div>

   <div className='register-row'>
   <div className='form-control-container'>
     <span className='form-label'>Password</span>
    <div className="form-control">

    <input 
    type="password"
     />
    </div>
    </div>
   </div>

   <div className='register-row'>
   <div className='form-control-container'>
     <span className='form-label'>Confirm password</span>
    <div className="form-control">

    <input 
    type="password"
     />
    </div>
    </div>
   </div>

   <div className='register-row'>
   upload img
   </div>
   <div className='register-row'>
        <span className='btn'><AppRegistrationOutlined/> register</span>
        <Link to="/register" className="btn alt"><LoginOutlined/> Login</Link>
       </div>
   </div>
   </div>
   </div>
   </section>
  )
}

export default Register