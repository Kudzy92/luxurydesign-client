import { LocationOn, Phone ,Email} from '@mui/icons-material';
import React from 'react'
import ContactForm from '../components/ContactForm';
import MapCard from '../components/MapCard';
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
    <PageHeader {...data}/>
    <section className='contact'>
      <div className='container'>
        <div className='store-location'>
        <div className='wrapper'>
         <div className='sl-heading'>
          <span>Our store address </span>
          <h1>Visit us & shop</h1>
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
          <span>contact us </span>
          <h1>GET IN TOUCH & SAY HELLO</h1>
         </div>
         <div className='description'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim</p>
         </div>
         <SocialMedia/>
        </div>
        <div className='right-side'>
          <ContactForm/>
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