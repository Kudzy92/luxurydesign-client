import React, {useState } from 'react'
import {AddOutlined, RemoveOutlined } from '@mui/icons-material'
const ToggleAccordonByIndex = (props) => {
    const [index, setIndex]=useState(1);
    const [isSelected, setIsSelected]=useState(false);
    const handleToggleAccClick=(i)=>{
        setIndex(i);
        setIsSelected(!isSelected);
      }
  return (
    <div className={index===props.i && isSelected ? 'toggle-acc-item active' : 'toggle-acc-item'}>
                            <div className='title' onClick={()=> handleToggleAccClick(props.i)}>
                                <div className='fq-icon'>{index===props.i ? <AddOutlined/> : <RemoveOutlined/>}</div>
                                <h3>{props.title}</h3>
                            </div>
                            <div className="content">
                             <p>{props.description}</p>
                            </div>
                        </div>
  )
}

export default ToggleAccordonByIndex