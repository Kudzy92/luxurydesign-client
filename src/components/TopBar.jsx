import React from 'react'
import { LoacationOn,LocationOn,Phone } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { topBarLink } from '../data/placeholderData'
import SocialMedia from './SocialMedia'
const TopBar = () => {
  return (
    <section className='top-bar'>
        <div className='container'>
            <div className='wrapper'>
            <div className='left-side'>
                <div className='ls-item'>
                    <LocationOn/>
                    <span>Company location</span>
                </div>
                <div className='ls-item'>
                    <Phone/>
                    <span>Company phone</span>
                </div>
            </div>
         
            <div className='right-side'>
                <ul>
                {topBarLink.map((item,i)=>{
                    return(
                        <li key={i}><Link className='tb-link' to={item.url}>{item.name}</Link></li>
                    )
                })}
                </ul>
               <SocialMedia/>
            </div>
            </div>
        </div>
    </section>
  )
}

export default TopBar