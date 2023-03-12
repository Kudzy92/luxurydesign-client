import { Filter9Plus } from '@mui/icons-material'
import React from 'react'
import { useSelector } from 'react-redux';
import { openCartDialog,showOverLay,showScroll, openShopFilterDialogDialog } from '../redux/dialogSlice'
import { useDispatch } from 'react-redux'

const ShopTopBar = () => {
  const dispatch = useDispatch();
  const shopFilterDialog = useSelector(state=> state.dialog.shopFilter);
	const overlay = useSelector(state=> state.dialog.overlay);
	const bodyScroll = useSelector(state=> state.dialog.bodyScroll);
  const handleToogleShopFilter=()=>{
    
      dispatch(openShopFilterDialogDialog(!shopFilterDialog));
      dispatch(showOverLay(!overlay));
      dispatch(showScroll(!bodyScroll));

  }
  return (
    <section className='shop-top-bar'>
      <div className='stb-left'>
      <Filter9Plus onClick={()=> handleToogleShopFilter()} className='shop-filter-btn'/>
    <div className='showing-items'><p>Showing 1–12 of 36 results</p></div>
      </div>
      <div className='stb-right'>
    <div className='shop-sorting'>Sorting</div>
    </div>
    </section>
  )
}

export default ShopTopBar