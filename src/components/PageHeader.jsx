import React from 'react'

const PageHeader = (item) => {
  return (
    <section className='page-header'>
    <div className='container'>
        <div className='wrapper' style={{backgroundImage:"url("+item[0].img[0]+")"}}>
            <div className='content'>
                <div className='title'><h1>{item[0].title}</h1></div>
                <div className='desc'>
                    <p>
                      {item[0].description}
                   </p>
                </div>
            </div>
            
        </div>
    </div>
    </section>
  )
}

export default PageHeader

