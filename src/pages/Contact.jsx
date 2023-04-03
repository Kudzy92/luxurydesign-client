import { LocationOn, Phone ,Email} from '@mui/icons-material';
import React from 'react'
import ContactForm from '../components/ContactForm';
import MapCard from '../components/MapCard';
import MobilePageHeader from '../components/MobilePageHeader'
import  PageHeader  from '../components/PageHeader'
import SocialMedia from '../components/SocialMedia';
import  img1  from '../images/page-header/1.png'
import  img2  from '../images/page-header/4.png'
import  img3  from '../images/page-header/11.png'
const Contact = () => {
  const data=[
    {
      title:'contact us',
      description:'des hjdh djhfhf',
      img:[img1,img2,img3],
    },
  ];
  return (
    <>
    
    <section className='contact'>
    <PageHeader {...data}/>
    <MobilePageHeader page1={'home'} page2={''} page3={'contact us'}/>
      <div className='container'>
        <div className='store-location'>
        <div className='wrapper'>

         <div className='sl-heading'>
         <div className='section-header'>
        <div className="wrapper">
            <div className="sht">
                <div className="heading"><span className='line-hr'></span> <h3>Vist us today to,</h3></div>
                <div className="title">
                <h3>Our store address &</h3>
               <h4>Find out stock in stores.</h4>
                </div>
            </div>
        </div>
    </div>
         </div>
         <div className='sl-content'>
          <div className='sl-item'>
            <p><span><LocationOn/></span><span>shop 1 add</span></p>
            <p><span><Email/></span><span>shop email</span></p>
            <p><span><Phone/></span><span>shop fon</span></p>
           
          </div>
          </div>
        </div>
        </div>
        
        
      </div>
    </section>
    <section className='contact-form'>
      <div className='container'>
        <div className='wrapper'>
        <div className='left-side'>
        <div className='sl-heading'>
        <div className='section-header'>
        <div className="wrapper">
            <div className="sht">
                <div className="heading"><span className='line-hr'></span> <h3>feel free to,</h3></div>
                <div className="title">
                <h3>Get in touch &</h3>
                <h4>Say hello ...</h4>
                </div>
            </div>
        </div>
    </div>
         </div>
         <div className='description'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim</p>
         </div>
         <SocialMedia/>
        </div>
        <div className='right-side'>
          <ContactForm name={"subject"}/>
        </div>
        </div>
        </div>
        </section>
    <section className='contact-map'>
      <div className='container-fluid'>
       <MapCard/> 
      </div>
      </section> 
    </>
  )
}

export default Contact