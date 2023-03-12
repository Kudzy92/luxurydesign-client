import React, {useState} from 'react'
import{ Link } from 'react-router-dom'

import { products } from '../data/placeholderData'
const Brand = () => {
    const [index,setIndex] = useState(0);
    var counts=[];
    const uniqueBrand=[];
    const uniqueBrandNames=[];
products.map((item)=>{
  var findItem=uniqueBrand.find((x)=> x.brand===item.brand);
  if(!findItem) uniqueBrand.push(item); uniqueBrandNames.push(item.brand);
})
uniqueBrandNames.forEach(x=> counts[x]=(counts[x] || 0)+1);
              console.log(counts);
  return (
    <>
    <div className='title'><h3>Brand{uniqueBrand.length>1 ? 's': ''}</h3></div>
    <div className='content'>
        <ul className='cat-list'>
            {uniqueBrand.map((item,i)=>{
              
                return(
                    <li key={i} onClick={()=> setIndex(i)} >
                      <p className={index===i ? 'cat-link-item active' :'cat-link-item'}>
                      <span className={index===i ? 'check-box active':'check-box'}></span>
                      <span className='cat-name'>{item.brand}</span>
                    <span className='cat-count'>{counts[item.brand]}</span>
                    </p></li>
       
                )
            })}
         </ul>
    </div>
    </>
  )
}

export default Brand