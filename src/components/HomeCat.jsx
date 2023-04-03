import React from 'react'
import HomeSectionHeader from './HomeSectionHeader'
import HomeCategoryItem from './HomeCategoryItem'
import { services } from '../data/placeholderData'
const HomeCat = () => {
  const section_heading_data={
    slogan:"your dress",
    heading1:"Welcome to",
    heading2:"luxury design",
  };
  return (
    <section className='home-cat'>
      <div className='container'>
    <HomeSectionHeader item={section_heading_data}/>
    <div className="home-cat-item-container">
{services.map((item,i)=>{
  return(
    <HomeCategoryItem key={i} item={item}/>
  )
})}
       

    </div>

    </div>
    </section>
  )
}

export default HomeCat