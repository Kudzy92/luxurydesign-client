import React, {useState } from 'react'
import PageHeader from '../components/PageHeader'
import  img1  from '../images/page-header/1.png'
import  img2  from '../images/page-header/4.png'
import  img3  from '../images/page-header/11.png'
import { faq } from '../data/placeholderData'
import ToggleAccordonByIndex from '../components/ToggleAccordonByIndex'
import MobilePageHeader from '../components/MobilePageHeader'
import ContactForm from '../components/ContactForm'

const Faq = () => {

    const data=[
        {
          title:'faq & help',
          description:'des hjdh djhfhf',
          img:[img1,img2,img3,],
        },
      ];
      
  return (

    <section className='faq'>
        <PageHeader {...data}/>
        <MobilePageHeader page1={'home'} page2={''} page3={'F.A.Q'}/>
        <div className='container'>
            <div className='wrapper'>
                <div className='faq-content'>
                {faq.map((item,i)=>{
                    return(
                        <ToggleAccordonByIndex i={i} title={item.title} description={item.description}/>
            
                    )
                })}
                </div>
                <div className='faq-form'>
                <ContactForm name={"question"}/>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Faq