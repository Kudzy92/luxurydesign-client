import React, { useState } from 'react'
import { termscondition } from '../data/placeholderData';
import TcToggleItem from '../components/TcToggleItem'
import MobilePageHeader from '../components/MobilePageHeader';


const TermsAndCondtion = () => {
    const [index,setIndex]=useState(0);
  return (
    <>
    <MobilePageHeader page1={'home'} page2={''} page3={'terms and conditions'}/>
  <section className='tc-ld'>
  <div className='container'>
    <div className='wrapper'>
  <ul className='tc-ld-nav'>
  {termscondition.map((item,i)=>{
    return(
<li key={i} className={index==i ? 'tc-nav-item active': 'tc-nav-item'}><span onClick={()=> setIndex(i)}>{item.itemName}</span></li>
)})}
   
  </ul>
  <div className='tc-ld-container'>
  {termscondition[index].contentList.map((item,i)=>{
    return(
    <TcToggleItem i={i} title={item.heading} description={item.description}/>
    )       
  })}

  </div>

    </div>
  </div>
  </section>
    </>
    )
}

export default TermsAndCondtion

