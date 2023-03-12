import React from 'react'

const Testimonial = () => {
  return (
    <section className='testimonial'>
        <div className='container'>

            <div className='sec-wrapper'>
                <div className='sec-title'>
                    <div className='sec-t-left'>
                     <h3>Quotes & Testimonials</h3>
                     <h1>WHAT THEY SAID</h1>
                    </div>
                    <div className='sec-t-right'>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinci ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className='sec-content'>
                <div className='wrapper'>
                   
                   <div className='t-card-item'>
                    <div className='title'><h3>"Unmatched power"</h3></div>
                    <div className='content'>
                        <p>
                        Her ability to connect people, inspire audience and presentation skills are amazing and very creative.
                        </p>
                    </div>
                    <div className='name'>
                        <span className='line'></span><p>  John Deo</p>
                    </div>
                   </div>

                </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Testimonial