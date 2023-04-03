import React from 'react'
import { Link } from 'react-router-dom'
import { LinkOutlined } from '@mui/icons-material'
const HomeCategoryItem = ({item}) => {
  return (
    <div className='home-cat-item'>
        <div className='wrapper'>
            <div className="home-cat-img-box">
            <img className='home-cat-img' src={item.img} />
            <Link to="" className="hci-link"> <LinkOutlined/> </Link>
            </div>
            <div className='home-cat-info'>
                <div className='home-cat-title'><h3>{item.name}</h3></div>
                <div className='home-cat-desc'>
                    <p>
                    {item.description}
                    </p>
                </div>
                <div className='home-cat-link-container'><Link  className='btn' to={item.btnurl}>{item.btntext}</Link></div>
            </div>
        </div>
    </div>
  )
}

export default HomeCategoryItem