import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Footer from '../components/Footer'
import Header from '../components/Header'
import About from './About'
import Home from './Home'
import Shop from './Shop'
import NotFound from './NotFound'
import Contact from './Contact'
import Faq from './Faq'
import SingleProduct from './SingleProduct'
import Checkout from './Checkout'

const Pages = () => {
  return (
  <>
  <Router>
  <Header/>
  <Routes>
  <Route exact path='/' element={<Home/>} />
          <Route exact path='/about-us' element={<About/>} />
          <Route exact path='/shop' element={<Shop/>} />
          <Route exact path='/faq' element={<Faq/>} />
          <Route exact path='/products/:id' element={<SingleProduct/>} />
          <Route exact path='/contact-us' element={<Contact/>} />
          <Route exact path='/checkout' element={<Checkout/>} />
          <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </Router>
  </>
  )
}

export default Pages