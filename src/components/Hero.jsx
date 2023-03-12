import { EastOutlined, WestOutlined } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { homeHero } from '../data/placeholderData'
const Hero = () => {
  const [index,setIndex]=useState(0);
  const prevSlide =()=>{
    setIndex(index ===0 ? homeHero.length-1 : (prev)=> prev -1);
  }
  const nextSlide =()=>{
    setIndex(index ===homeHero.length-1 ? 0 : (prev)=> prev +1);
  }
  const widthStyle={
    width:`${homeHero.length*100}vw`
  }
  const transformStyle={
    transform: `translateX(-${index * 100}vw)`
  }
 
    useEffect(()=>{
      const tick=()=> setIndex(i=> i< homeHero.length-1 ? i+1 : 0);
      const id=setInterval(tick,8000);
      return ()=> clearInterval(id);
    },[]);
   
  return (
  <section className='home-hero' style={{...widthStyle,...transformStyle}}>
        {homeHero.map((item,i)=>{
          return(
            <div  className={item.id===index+1 ? 'hero-item active' : 'hero-item'} key={i} style={{backgroundImage:"url("+item.img+")"}} >
            <div className='container'>
             <div className='wrapper'>
             <div className='hero-content-box'>
              <div className='title1'><h3>{item.heading1}</h3></div>
              <div className='title2'><h1>{item.heading2}</h1></div>
              <div className='description'><p>{item.description}</p></div>
              <div className='hero-btn'>
                <span className='btn'>{item.btn}</span>
              </div>
             </div>
             </div>
            </div>
            </div>
          )
        })}
    
    </section>
    
  )
}

export default Hero