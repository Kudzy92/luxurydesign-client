import React from 'react'
import { Link } from 'react-router-dom'

const MobilePageHeader = (props) => {
  return (
   <section className='mobile-page-header'>
    <div className='container'>
        <div className='wrapper'>
            <div className='mph-left'>
                <Link to='/' className='link'>{props.page1}</Link>
            </div>
            <div className='mph-right'>
                <Link to='/shop' className='link'>{props.page2}</Link>
                <span></span>
                <span>{props.page3}</span>
            </div>
        </div>
    </div>
   </section>
  )
}

export default MobilePageHeader