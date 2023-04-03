import React,{ useState } from 'react'
import HomeSectionHeader from './HomeSectionHeader'
import bgImg from '../images/banner/bg-1.jpg'
import { SendOutlined } from '@mui/icons-material';

const HomeBanner1 = () => {
    const handleOnChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      const [values, setValues] = useState({
       homecontactemail: "",
      });
    const section_heading_data={
        slogan:"Ask our stylist",
        heading1:"Great look with",
        heading2:"Our stylist",
      };
       
  return (
    
    <section className="home-banner-1" style={{background:"#f5ebe1 url("+bgImg+")"}}>
        <div className="container">
            <div className="wrapper">
                <div className='hb1-left'>
                    
                </div>
                <div className='hb1-right'>
                    <div className="head">
                        <HomeSectionHeader item={section_heading_data}/>
                    </div>
                    <div className="body">
                        <div className='content'>
                        <p>
                        If you don’t know what to wear and need some styling advice you have an opportunity to book an appointment with one of our stylists.
                        </p>
                        </div>
                        <div className="form-row">
                        <div className='form-control-container'>
                        <div className="form-control">
	                    <input 
                        type="text"
                        name='homecontactemail'
                        onChange={handleOnChange}
                        placeholder='Enter your email' 
                        />
		        </div>
                  </div>
                    <span className="btn"><SendOutlined/> subscribe</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeBanner1