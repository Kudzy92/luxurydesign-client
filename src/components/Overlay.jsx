import React from 'react'
import { useSelector } from 'react-redux'
const Overlay = () => {
    const overlay = useSelector(state=> state.dialog.overlay);
    console.log("Overlay State"+overlay);
  return (
    <div className={overlay ? "overlay active":'overlay'}></div>
  )
}

export default Overlay