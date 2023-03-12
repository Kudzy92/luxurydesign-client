import React,{ useState } from 'react'
import { products } from '../data/placeholderData';
import { Link } from 'react-router-dom'
const ByView = () => {
    const[viewCount,setViewCount]=useState(9);
  return (
    <>
    <div className='title'><h3>Recently viewed</h3></div>
    <div className='content'>
       {products.map((item,i)=>{
        return(
            <Link to={'product/'+item.id} key={i} className={item.view > viewCount ? 'product-viewed-item active' : 'product-viewed-item'}>
                <div className='left-side'>
                    <div className={item.image.length<2 ? 'only-one-img':'img-1'}  style={{backgroundImage:"url("+item.image[0]+")"}} ></div>
                   {item.image.length>1 && <div className='img-2' style={{backgroundImage:"url("+item.image[1]+")"}}></div>}
                </div>
                <div className='right-side'>
                    <h3>{item.name}</h3>
                    <p><span>{item.nowprice[0]}</span></p>
                </div>
            </Link>
        )
       })}
    </div>
    </>
  )
}

export default ByView