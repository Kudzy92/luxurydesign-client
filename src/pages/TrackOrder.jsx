import React from 'react'
import MobilePageHeader from '../components/MobilePageHeader'

const TrackOrder = () => {
  return (
   <>
   <MobilePageHeader page1={'home'} page2={'shop'} page3={'track order'}/>
   <section className='track-order-form'>
    <div className='container'>
      <div className='wrapper'>
       <div className='to-info'>
        <p>To track your order kindly fill the track order form below with the email and order number which was sent to your email</p>
       </div>
       <div className='to-form-container'>
       <div className='track-order-row'>
       <div className='form-control-container'>
         <span className='form-label'>Your Email</span>
         <div className='form-control'>
            <input type='text' placeholder='info@luxurydesign.co.za'/>
         </div>
         </div>
         <div className='form-control-container'>
         <span className='form-label'>Order Number</span>
         <div className='form-control'>
            <input type='text' placeholder='#4233443543'/>
         </div>
         </div>
        </div>
          <div className='btn-container'>
            <span className='btn' >track your order</span>
          </div>
       </div>

      </div>
    </div>
   </section>
   </>
  )
}

export default TrackOrder