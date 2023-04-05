import React from 'react'
import PageHeader from '../components/PageHeader'
import  img1  from '../images/page-header/1.png'
import  img2  from '../images/page-header/4.png'
import  img3  from '../images/page-header/11.png'
import MobilePageHeader from '../components/MobilePageHeader'
import PrivacyItemContainer from '../components/PrivacyItemContainer'

const DeliveryTerms = () => {
    
    const data=[
        {
          title:'privacy policy',
          description:'des hjdh djhfhf',
          img:[img1,img2,img3,],
        },
      ];
  return (
  
    <section className='ld-privacy-policy'>
    <PageHeader {...data}/>
        <MobilePageHeader page1={'home'} page2={''} page3={'Delivery / Shipping '}/>
        <div className='container'>
            <div className='wrapper'>
          
                <PrivacyItemContainer/>
          

     </div>
    </div>
    </section>
   
  )
}

export default DeliveryTerms