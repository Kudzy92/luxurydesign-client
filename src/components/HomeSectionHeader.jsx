import React from 'react'

const HomeSectionHeader = ({item}) => {
  return (
    <div className='section-header'>
        <div className="wrapper">
            <div className="sht">
                <div className="heading"><span className='line-hr'></span> <h3>{item.slogan}</h3></div>
                <div className="title">
                <h3>{item.heading1}</h3>
                <h4>{item.heading2}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSectionHeader