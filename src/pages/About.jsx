import React from 'react'
import PageHeader from '../components/PageHeader';
import HomeSectionHeader from '../components/HomeSectionHeader';
import Testimonial from '../components/Testimonial'
import  img1  from '../images/page-header/1.png'
import  img2  from '../images/page-header/4.png'
import  img3  from '../images/page-header/11.png'
import  bg_img_1  from '../images/banner/bg-4.jpg'
import signature from '../images/signature.png'
import { team_memebers } from '../data/placeholderData'
import MobilePageHeader from '../components/MobilePageHeader'
import TeamMemberCard from '../components/TeamMemberCard';

 
const About = () => {
  const section_heading_data={
    slogan:"who are we",
    heading1:"Know more about Luxury design,",
    heading2:"home of quality fashion",
  };
  const section_heading_data2={
    slogan:"our perfect team",
    heading1:"Our professionals,",
    heading2:"Can help you until you're statified",
  };
  const data=[
    {
      title:'About us',
      description:'Get to know more about us',
      img:[img1,img2,img3],
    },
  ];
  return (
   
        <section className='about-page'>
        <PageHeader {...data}/>
        <MobilePageHeader page1={'home'} page2={''} page3={'about us'}/>
      <div className='container'>
       <div className='wrapper about-content-container'>
         <div className='about-row two-columns'>
           <div className="ld-about-content-left">
           <HomeSectionHeader item={section_heading_data}/>
           <div className='content-text'>
            <p>We have a wide selection of dresses from international designers. All dresses are 100% exclusive and in new collaction. If you are looking to hire designer dresses you can hire dresses that are fitting for your life’s most special occasions. We help women look fabulous at an affordable price, coupled with a sleek and efficient service perfect for solving that dress dilemma; even if it’s your first dress hire experience. Look amazing at your event!</p>
           </div>
           <div className='ld-signature'>
            <div className="lds-img-box"><img src={signature} alt="" /></div>
               <div className="ld-ceo-name">
                <span className='line-hr'></span>
                <h3>Masondo Nomthandazo</h3>
               </div>
           </div>
           </div>
           <div className="ld-about-content-right">
            <div className="about-c-img-box-container">
              <img src={bg_img_1} alt="bg img 1"/>
            </div>
           </div>
         </div>
         <div className='about-row testimonial'>
          <Testimonial/>
         </div>
         <div className='about-row'>
         <HomeSectionHeader item={section_heading_data2}/>
         <div className='ld-team-container'>
          {team_memebers.map((item,i)=>{
            return(
              <TeamMemberCard key={i} item={item}/>
            )
          })}
         </div>
         </div>
       </div>
      </div>
      </section>
    
  )
}

export default About