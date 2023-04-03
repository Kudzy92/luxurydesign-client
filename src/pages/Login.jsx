import { LoginOutlined, AppRegistrationOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='login-section'>
        <div className='container'>
      <div className='wrapper'>
        
        <div className='login-form'>
        <div className='login-row'>
        <div className="title"><h3>Admin Login</h3></div>
        </div>
        <div className='login-row'>
       <div className='form-control-container'>
         <span className='form-label'>Username</span>
		<div className="form-control">

        <input 
        type="text"
         />
		</div>
		</div>
       </div>
       <div className='login-row'>
       <div className='form-control-container'>
         <span className='form-label'>Password</span>
		<div className="form-control">
        <input 
        type="password"
         />
		</div>
		</div>
       </div>
       <div className='login-row'>
        <span className='btn'><LoginOutlined/> Login</span>
        <Link to="/register" className="btn alt"><AppRegistrationOutlined/> Register</Link>
       </div>
       <div className='login-row'>
        <p>Fogot password  <Link className="password-reset-link" to="/reset">click here to reset</Link></p>
       </div>

        </div>
        </div> 
    </div>
    </section>
   
  )
}

export default Login