import React, {useState } from 'react'
import { Add, PlusOne } from '@mui/icons-material'
const ToggleAccordonByIndex = (props) => {
    const [index, setIndex]=useState(1);
    const handleToggleAccClick=(i)=>{
        setIndex(i);
      }
  return (
    <div className={index===props.i ? 'toggle-acc-item active' : 'toggle-acc-item'}>
                            <div className='title' onClick={()=> handleToggleAccClick(props.i)}>
                                <div className='fq-icon'>{index===props.i ? <Add/> : <PlusOne/>}</div>
                                <h3>{props.title}</h3>
                            </div>
                            <div className="content">
                             <p>{props.description}</p>
                            </div>
                        </div>
  )
}

export default ToggleAccordonByIndex