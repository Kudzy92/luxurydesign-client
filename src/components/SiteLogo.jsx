import React from 'react'
import Logo  from '../images/logo.png'
import { Link } from "react-router-dom"

const SiteLogo = () => {
  return (
    <div className="site-logo">
		<Link className='logo-wrapper' to="/">
		<div className="logo-img">
			<img src={Logo} alt='Luxury Design Logo'/>
		</div>
		<div className="logo-text">
		<h1>luxury<span>DESIGN</span></h1>
		<p>home of <span>quality fashion</span></p>
		</div>
		</Link>
		</div>
  )
}

export default SiteLogo