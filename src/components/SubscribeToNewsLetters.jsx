import { SendOutlined } from '@mui/icons-material';
import React,{ useState } from 'react'

const SubscribeToNewsLetters = () => {
    const handleOnChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      const [values, setValues] = useState({
        homesubscribetonewsletter: "",
      });
  return (

    <section className="subscribe-to-news-letters">
        <div className='container'>
            <div className="wrapper">
                <div className='stnl-heading'>
                    <h3>Subsbribe to our newsletters</h3>
                </div>
    <div className='stnl-container'>
    <div className="form-row">
                        <div className='form-control-container'>
                        <div className="form-control">
	                    <input 
                        type="text"
                        name='homesubscribetonewsletter'
                        onChange={handleOnChange}
                        placeholder='Enter your email' 
                        />
		        </div>
                <span className="btn"><SendOutlined/> contact us</span>
                  </div>
                   
                        </div>
    </div>
    </div>
    </div>
    </section>
  )
}

export default SubscribeToNewsLetters