import React from 'react'

const ContactForm = () => {
  return (
    <div className='contact-form-container'>
        <div className='contact-row'>
         <div className='form-control'>
            <input type='text' placeholder='Name'/>
         </div>
         <div className='form-control'>
            <input type='text' placeholder='Email'/>
         </div>
         <div className='form-control'>
            <input type='text' placeholder='Subject'/>
         </div>
        </div>
        <div className='contact-row'>
        <div className='form-control'>
        <textarea  cols="40" rows="10"  placeholder="Message"></textarea>
            </div>
        </div>
        <div className='contact-row'>
         <span className='btn'>send a message</span>
        </div>
    </div>
  )
}

export default ContactForm