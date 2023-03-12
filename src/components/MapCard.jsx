import React from 'react'

const MapCard = () => {
  return (
    <div className="site-map">
    <div className="gmap-canvas">
    <iframe className="gmap-iframe" 
     frameBorder="0"
      scrolling="no" 
      marginHeight="0"
       marginWidth="0" 
       src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Shop%20L304%20Legacy%20Corner,%20Level%203%20Davinci%20Mall,%20Cnr%205th%20&amp;,%20Maude%20St,%20Sandton,%202031+(LuxuryDesign)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
     
     </div>
     
     </div>
  )
}

export default MapCard