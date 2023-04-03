import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { bottomBarLink } from "../data/placeholderData"
import { Close, Menu, Search, ShoppingCart } from '@mui/icons-material'
import CartCard from "./CartCard"
import SiteLogo from "./SiteLogo"
import { useSelector } from 'react-redux';
import { openCartDialog,showOverLay,showScroll,reset } from '../redux/dialogSlice'
import { useDispatch } from 'react-redux'


const BottomBar = () => {
	const dispatch = useDispatch();
	const quantity = useSelector(state=> state.cart.cartTotalQuantity);
	const cart = useSelector(state=> state.cart);
	const cartDialog = useSelector(state=> state.dialog.cartDialog);
	const overlay = useSelector(state=> state.dialog.overlay);
	const bodyScroll = useSelector(state=> state.dialog.bodyScroll);
	const dialogStatus = useSelector(state=> state.dialog.cartDialog);
  console.log("HEADER QTY"+quantity+"dialogStatus"+dialogStatus);
  const [isMenuOpen, setIsMenuOpen]=useState(false);
  
  const [selectedIndex, setSelectedIndex]=useState(0);

 const handleShowCart=()=>{
	dispatch(openCartDialog(!cartDialog));
	dispatch(showOverLay(!overlay));
	dispatch(showScroll(!bodyScroll));
 }
 const handleOpenMenu=()=>{
	console.log("Overlay State after menu open clicked"+overlay);
	//dispatch(reset());
	dispatch(showOverLay(!overlay));
	dispatch(showScroll(!bodyScroll));
	setIsMenuOpen(!isMenuOpen);
 }
 const handleCloseMenu=()=>{
	setIsMenuOpen(false);
	dispatch(reset());
 }
 const handleClickMenuLink =(i)=>{
	setSelectedIndex(i);
	dispatch(reset());
	setIsMenuOpen(false);
 }
  //const screenWidth=MobileQuery.
  //const screenWidth=500;
 const [screenWidth, setScreenWidth]=useState(window.innerWidth);
 useEffect(()=>{
  window.addEventListener('resize', e =>{
	setScreenWidth(window.innerWidth);
  })
 },[window.innerWidth]);
 
 console.log("Window Width"+window.innerWidth+"screen with"+screenWidth);
  return (
    <>
   
	
	<div  className="bottom-bar">
		{(dialogStatus && cart.cartItems.length>0) && <CartCard/>}
<div className="container">
	<div className='wrapper'>
		<SiteLogo/>
<div className={screenWidth<=992 ? "mobile-site-menu" : "site-menu"}>
<nav  className={isMenuOpen ? "site-navigation open " : "site-navigation"}>
{screenWidth<=992 && isMenuOpen ?<Close className="close-menu-btn" onClick={()=>handleCloseMenu()}/> :''}
{isMenuOpen  ?  screenWidth<=992 && <ul  className="menu">
	
{bottomBarLink.map((item,i)=>{
	return(
<li key={i} className="menu-item"><Link to={item.url}  onClick={()=> handleClickMenuLink(i)} className={selectedIndex===i ? "menu-link active" : "menu-link"}>{item.name}</Link></li>
	)
})}

</ul>: screenWidth>992 && <ul  className="menu active">
{bottomBarLink.map((item,i)=>{
	return(
<li key={i} className="menu-item"><Link  onClick={()=> handleClickMenuLink(i)}  to={item.url} className={selectedIndex===i ? "menu-link active" : "menu-link"}>{item.name}</Link></li>
	)
})}
</ul>
}	
</nav>
	</div>
	<div className="header-icon">
		<div className='hd-icon'>
			<Search/>
		</div>
		<div className='hd-icon cart' onClick={handleShowCart}>
			<ShoppingCart/>
			<span className="cart-count">{cart.cartItems.length}</span>
		</div>
	</div>
	{screenWidth<=992 && !isMenuOpen ?<Menu className="menu-btn"   onClick={()=>handleOpenMenu()}/>:''}

</div>
</div>
</div>

</>
  )
}

export default BottomBar