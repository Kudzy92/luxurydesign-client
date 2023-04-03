import React from 'react'
import bgImg from '../images/banner/bg3.jpg'
import HomeSectionHeader from './HomeSectionHeader';

const Testimonial = () => {
  const section_heading_data={
    slogan:"Customer reviews",
    heading1:"What our clients & stakeholders",
    heading2:"Are saying",
  };
  
  return (
    <section className='testimonial' style={{background:"#f5ebe1 url("+bgImg+")"}}>
        <div className='container'>
         <div className="wrapper">
            <div className="tm-left"></div>
            <div className="tm-right">
            <div className="tm-head">
                        <HomeSectionHeader item={section_heading_data}/>
                    </div>
                    <div className="tm-body">
                      <div className='tm-msg-item-wrapper'>

                      <div className='tm-msg-item'>
                        <div className='content'>
                          <p>
                          “ Thank you so much for all your help in finding me the perfect dress for my birthday! I had complements from everyone telling me how beautiful my dress was! I will send you some pictures when they arrive. ”
                          </p>
                        </div>
                        <div className='tm-user'><span className='line-hr'></span><h3>client name</h3></div>
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