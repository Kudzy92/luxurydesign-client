import { Star, StarBorder,LinkOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductTypeCard = ({item}) => {
  return (
    <div className='product-type-card'>
        <div className="ptc-top">
            <img className="img1" src={item.img1} alt={item.name}/>
            <img className="img2" src={item.img2} alt={item.name}/>
            <Link to={`/shop/${item.type}`} className="hci-link"> <LinkOutlined/> </Link>
        </div>
        <div className="ptc-bottom">
           <div className='ptc-title'><h3>{item.name}</h3></div> 
           <div className='ptc-rating'>
            <Star className="full-star"/>
            <Star className="full-star"/>
            <StarBorder className="half-star"/>
            <StarBorder className="half-star"/>
            <StarBorder className="half-star"/>
            </div>
           <div className="ptc-price"><span>start from </span><h3>R {item.startprice}</h3></div>
        </div>
    </div>
  )
}

export default ProductTypeCard