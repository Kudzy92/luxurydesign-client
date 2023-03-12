import React,{ useState } from 'react'

const PriceSlide = () => {
  const [index,setIndex] = useState(0);
  const handlePriceRange=(i)=>{
   setIndex(i);
  }
  return (
    <>
    <div className='title'><h3>Price filter</h3></div>
    <div className='content price'>
    <p onClick={()=> handlePriceRange(0)} className={index===0 ? 'cat-link-item active' :'cat-link-item'}>
                      <span className={index===0 ? 'check-box active':'check-box'}></span>
                      <span className='single-price'>any price</span>
                    
                    </p>
                    <p onClick={()=> handlePriceRange(1)} className={index===1 ? 'cat-link-item active' :'cat-link-item'}>
                      <span className={index===1 ? 'check-box active':'check-box'}></span>
                      <span className='min-price'>1000</span>
                      <span className='price-dashed'></span>
                      <span className='min-price'>5000</span>
                    
                    </p>
                    <p onClick={()=> handlePriceRange(2)} className={index===2 ? 'cat-link-item active' :'cat-link-item'}>
                      <span className={index===2 ? 'check-box active':'check-box'}></span>
                      <span className='single-price'>5000 +</span>
                    
                    </p>
    </div>
    </>
  )
}

export default PriceSlide