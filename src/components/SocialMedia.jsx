import React from 'react'
import { social } from '../data/placeholderData'
import { Link } from 'react-router-dom'

const SocialMedia = () => {
  return (
    <ul className='social-media'>
        {social.map((item,i)=>{
                    return(
<li key={i}><Link className={'social-icon '+item.class} to={item.url}>{item.icon}</Link></li>
           )
        })}
        
    </ul>
  )
}

export default SocialMedia