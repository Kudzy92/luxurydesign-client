import React from 'react'
import { incrementProduct, decreaseProduct } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

const QtyChange = (item) => {
    const dispatch = useDispatch();
    const handleQtyInc=(item)=>{
        dispatch(incrementProduct(item));
    }
    const handleQtyDec=(item)=>{
        dispatch(decreaseProduct(item));
    }
  return (
    <div className='qty-change'>
        <span className='btn' onClick={()=> handleQtyInc(item)}>+</span>
        <span className='btn no-bg'>{item.cartQuantity}</span>
        <span className='btn' onClick={()=> handleQtyDec(item)}>-</span>
    </div>
  )
}

export default QtyChange