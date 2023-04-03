import React from 'react'
import PageHeader from '../components/PageHeader'
import  img1  from '../images/page-header/1.png'
import  img2  from '../images/page-header/4.png'
import  img3  from '../images/page-header/11.png'
import Category from '../components/Category'
import SearchInput from '../components/SearchInput'
import PriceSlide from '../components/PriceSlide'
import ByView from '../components/ByView'
import ShopTopBar from '../components/ShopTopBar'
import { products } from '../data/placeholderData'
import ProductCard from '../components/ProductCard'
import Brand from '../components/Brand'
import ByMaterial from '../components/ByMaterial'
import MobilePageHeader from '../components/MobilePageHeader'
import ByColor from '../components/ByColor'
import { Close, Filter1, ResetTv } from '@mui/icons-material'
import { useSelector } from 'react-redux';
 import { reset } from '../redux/dialogSlice'
 import { useDispatch } from 'react-redux'



const Shop = () => {
  const dispatch = useDispatch();
  const shopFilterDialog = useSelector(state=> state.dialog.shopFilter);
   const data=[ {
    title:'Online fashion shop',
    description:'We welcome to you to LuxuryDESIGN where you can shop your dream , modern and custom fashion.',
    img:[img1,img2,img3],
  },
];
const dataInput=[ {
  text:'search products',
  }];
  return (
   
    <section className='shop'>
    <PageHeader {...data}/>
    <MobilePageHeader page1={'home'} page2={''} page3={'our shop'}/>
      <div className='container'>
        <div className='wrapper'>
          <div className={shopFilterDialog ? 'shop-filter active': 'shop-filter'}>
            <div className='title'>
              <h3>Product Filter</h3>
              <Close onClick={()=>dispatch(reset())} className='close-btn'/>
            </div>
            <div className='filter-body scroll'>
            <div className='filter-shop-item'>
            <Category/>
            </div>
            <div className='filter-shop-item'>
            <Brand/>
            </div>
            <div className='filter-shop-item'>
            <SearchInput {...dataInput}/>
            </div>

            <div className='filter-shop-item'>
            <PriceSlide/>
            </div>
            <div className='filter-shop-item'>
            <ByColor/>
            </div>
            <div className='filter-shop-item'>
            <ByMaterial/>
            </div>
            <div className='filter-shop-item'>
            <ByView/>
            </div>
            </div>
            <div className='filter-shop-bottom'>
            <span className='btn'><ResetTv/> Reset</span>
            <span className='btn'><Filter1/> Filter</span>
            </div>
          </div>
          <div className='shop-content'>
            <ShopTopBar/>
            <section className='shop-product-wrapper'>
              {products.map((item,i)=>{
                return(
                  <ProductCard key={i} {...item}/>
                )
              })}
            </section>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Shop