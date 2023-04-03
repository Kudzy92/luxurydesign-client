import React from 'react'
import HomeSectionHeader from './HomeSectionHeader';
import { product_types } from '../data/placeholderData';
import ProductTypeCard from './ProductTypeCard';
const HomeProductType = () => {
    const section_heading_data={
        slogan:"For Any Occasion",
        heading1:"Find Gorgeous Dress",
        heading2:"For Any Size at afforable prices",
      };
    
  return (
    <section className='home-product-type'>
      <div className='container'>
        <div className='section-heading'>
        <HomeSectionHeader item={section_heading_data}/>
        <span className="btn">view all dress types</span>
        </div>
   
    <div className="home-product-type-container">
{product_types?.map((item,i)=>{
  return(
    <ProductTypeCard item={item} key={i}/>
  )
})}
    </div>

    </div>
    </section>
  )
}

export default HomeProductType