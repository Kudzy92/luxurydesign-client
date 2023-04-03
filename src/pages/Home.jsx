import React from 'react'
import Hero from '../components/Hero'
import HomeBanner1 from '../components/HomeBanner1'
import HomeCat from '../components/HomeCat'
import HomeProductType from '../components/HomeProductType'
import SubscribeToNewsLetters from '../components/SubscribeToNewsLetters'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <>
   <Hero/>
   <HomeCat/>
   <HomeBanner1/>
   <HomeProductType/>
   
   <Testimonial/>
   <SubscribeToNewsLetters/>
   </>
  )
}

export default Home