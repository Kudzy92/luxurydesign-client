import React, {useState } from 'react'
import { Add, PlusOne } from '@mui/icons-material'
const ToggleAccordon = (props) => {
    const [isOpen, setIsOpen]=useState(false);
    const handleToggleAccClick=(i)=>{
        setIsOpen(!isOpen);
      }
  return (
    <div className={!isOpen ? 'toggle-acc-item active' : 'toggle-acc-item'}>
                            <div className='title' onClick={()=> handleToggleAccClick(props.i)}>
                                <div className='fq-icon'>{!isOpen ? <Add/> : <PlusOne/>}</div>
                                <h3>{props.title}</h3>
                            </div>
                            <div className="content">
                             <p>{props.description}</p>
                            </div>
                        </div>
  )
}

export default ToggleAccordon