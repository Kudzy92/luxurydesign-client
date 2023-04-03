import { LoginOutlined } from '@mui/icons-material'
import React from 'react'

const Reset = () => {
  return (
    <section className='login-section'>
    <div className='container'>
  <div className='wrapper'>
  <div className='reset-form'>
        <div className='reset-row'>
        <div className="title"><h3>Admin Password Reset</h3></div>
        </div>
        <div className='reset-row'>
            <p>Enter your email you registered with then reset. You will receive a reset link to your email.</p>
        </div>
        <div className='reset-row'>
       <div className='form-control-container'>
         <span className='form-label'>Your email address</span>
		<div className="form-control">

        <input 
        type="text"
         />
		</div>
		</div>
       </div>
       <div className='reset-row'>
        <span className='btn'><LockReset/> Reset</span>
        <Link to="/login" className="btn alt"><LoginOutlined/> Login</Link>
       </div>

        </div>
    </div>
    </div>
    </section>
  )
}

export default Reset