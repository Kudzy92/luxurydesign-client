import React from 'react'
import { ppt_data ,pp_type } from '../data/placeholderData'
const PrivacyItemContainer = () => {
  return (
    <div className="ppt-container">
        {pp_type.map((item,i)=>{
            return(
              <div key={i}  className='privacy-policy-item'>
              <div className='ppi-heading'>
              <span className='heading-count'>{++i}</span>
                          <h3>{item.name}</h3>
                      </div>
              {ppt_data.filter(pptd =>{ return item.id===pptd.pptid})
              .map((ppdtitem,index)=>{
                return(
            <div key={index} className='ppi-content-item'>
                        {ppdtitem.heading.length>0 && <div className='ppi-content-title'>
                        <h3>{ppdtitem.heading}</h3>
                        </div>}
                        <div className="ppi-content-desciption">
                {ppdtitem.description}
                        </div>
                      </div>
                  
                      )
              })}
              </div>
    )
    })}
    
    </div>
    
  )
}

export default PrivacyItemContainer



