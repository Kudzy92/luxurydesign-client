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
import Search from './Search'
import TrackOrder from './TrackOrder'
import TermsAndCondtion from './TermsAndCondtion'
import Login from './Login'
import Register from './Register'
import PrivacyPolicy from './PrivacyPolicy'
import Cart from './Cart'

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
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/products/:id' element={<SingleProduct/>} />
          <Route exact path='/contact-us' element={<Contact/>} />
          <Route exact path='/checkout' element={<Checkout/>} />
          <Route exact path='/track-order' element={<TrackOrder/>} />
          <Route exact path='/terms-and-conditions' element={<TermsAndCondtion/>} />
		  <Route path = "/search/:searchTerm" element = {<Search />} />
          <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </Router>
  </>
  )
}

export default Pages