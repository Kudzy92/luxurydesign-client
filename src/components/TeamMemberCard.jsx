import React from 'react'
import SocialMedia from './SocialMedia'
import { Link } from 'react-router-dom'
import { LinkOutlined } from '@mui/icons-material'


const TeamMemberCard = ({item}) => {
  return (
    <div className='team-member-card'>
        <div className="tmc-top">
            <div className="overlay"></div>
            <img className="img1" src={item.img} alt={item.name}/>
            <Link to={`/shop/${item.name}`} className="hci-link"> <LinkOutlined/> </Link>
        </div>
        <div className="tmc-bottom">
           <div className='tmc-title'><h3>{item.name}</h3></div> 
           <div className='tmc-desc'><p>{item.description}</p></div> 
           <div className='tmc-social'>
           <SocialMedia/>
            </div>
        </div>
    </div>
  )
}

export default TeamMemberCard