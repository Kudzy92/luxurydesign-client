import { ArrowBackIos } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='not-found-page'>
      <div className='container'>
        <div className='wrapper'>
          <div className='big-status-code'></div>

          <div className="not-found-msg">
            <div className='title'>
            <h1>page not found</h1>
            </div>
            <div className='nfp-msg'>
              <p>It looks like you may have a wrong turn. Don't worry... it happens to the best of us.</p>
            </div>
          </div>
          <div className='back-to-home-link'>
            <Link to='/' className='btn'><ArrowBackIos/> back to home</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound