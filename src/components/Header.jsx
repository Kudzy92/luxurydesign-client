import React , {useState,useEffect } from 'react'

import TopBar from './TopBar'
import BottomBar from './BottomBar'

const Header = () => {
  const [isScrollValueMoreThan, setIsScrollValueMoreThan]=useState(false);
  useEffect(()=>{
    const handleScroll= ()=>{
      setIsScrollValueMoreThan(window.scrollY>100);
    }
    window.addEventListener('scroll', handleScroll);
    return ()=> window.removeEventListener('scroll',handleScroll);
     },[]);
  return (
  <>
    <header className={!isScrollValueMoreThan ? "site-header" : "site-header fixed-on-scroll" }>
        
   {!isScrollValueMoreThan && <TopBar/>}
   <BottomBar/>
   </header>
  </>
  )
}

export default Header