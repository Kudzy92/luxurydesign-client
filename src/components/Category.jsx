import React, {useState} from 'react'
import{ Link } from 'react-router-dom'

import { products } from '../data/placeholderData'
const Category = () => {
    const [index,setIndex] = useState(0);
    var counts=[];
    const uniqueCat=[];
    const uniqueCatNames=[];
products.map((item)=>{
  var findItem=uniqueCat.find((x)=> x.cat===item.cat);
  if(!findItem) uniqueCat.push(item); uniqueCatNames.push(item.cat);
})
uniqueCatNames.forEach(x=> counts[x]=(counts[x] || 0)+1);
              console.log(counts);
  return (
    <>
    <div className='title'><h3>Categor{uniqueCat.length>1 ? 'ies': 'y'}</h3></div>
    <div className='content'>
        <ul className='cat-list'>
            {uniqueCat.map((item,i)=>{
              
                return(
                    <li key={i} onClick={()=> setIndex(i)} >
                      <p className={index===i ? 'cat-link-item active' :'cat-link-item'}>
                      <span className={index===i ? 'check-box active':'check-box'}></span>
                      <span className='cat-name'>{item.cat}</span>
                    <span className='cat-count'>{counts[item.cat]}</span>
                    </p></li>
       
                )
            })}
         </ul>
    </div>
    </>
  )
}

export default Category