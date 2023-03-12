import { Email, LocationOn, Phone } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import React from 'react'
import { sitemap } from '../data/placeholderData'
import SocialMedia from './SocialMedia'
import SiteLogo from './SiteLogo'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='container'>
        <div className='wrapper'>
        <div className='footer-item'>
          <div className='title'>
            <SiteLogo/>
          </div>
          <div className='content'>
           <div className='contact-item'>
           <LocationOn/>
           <p><Link to=''>company location</Link></p>
           </div>
           <div className='contact-item'>
           <Email/>
           <p><a href='mailto:comanymail'>info@luxuydesign.co.za</a></p>
           </div>
           <div className='contact-item'>
           <Phone/>
           <p><a href='tel:+2781528423'>company phone</a></p>
           </div>
           <div className='contact-item'>
           <SocialMedia/>
           </div>
          </div>
        </div>
        <div className='footer-item'>
          <div className='title'>
            <h3>Site map</h3>
          </div>
          <div className='content'>
           <ul>
            {sitemap.map((item,i)=>{
              return(
              <li key={i}><Link className='f-link' to={item.url}>{item.name}</Link></li>
              )
            })}

           </ul>
          </div>
        </div>

        <div className='footer-item'>
          <div className='title'>
            Logo
          </div>
          <div className='content'>
           
          </div>
        </div>

        <div className='footer-item'>
          <div className='title'>
            <h3>Instagram</h3>
          </div>
          <div className='content'>
           
          </div>
        </div>

        </div>
      </div>
    </section>
  )
}

export default Footer