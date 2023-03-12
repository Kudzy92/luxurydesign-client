import React , { useState, useEffect} from 'react'
import MobilePageHeader from '../components/MobilePageHeader'
import {Link , useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartSlice'
import { products } from '../data/placeholderData'
import Price from '../components/Price'
import ProductSocialMediaShare from '../components/ProductSocialMediaShare'
import { ShoppingCart } from '@mui/icons-material'
import ToggleAccordon from '../components/ToggleAccordon'
import ToggleAccordonWithReview from '../components/ToggleAccordonWithReview'


const SingleProduct = () => {
  const [index, setIndex]= useState(0);
  const [quantity, setQuantity]= useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
    const [product,setProduct]=useState({});

const[largeImgPreview, setLargeImgPreview]=useState('');
const handleQtyInc=()=>{
  
}
const handleQtyDec=()=>{
  
}
    //const product  = productList.find((product)=> product._id === id);
    useEffect(() =>{
      function fetchProduct() {
             //await axios.get(`http://localhost:3001/api/products/${id}`).then((res) =>{
              //console.log("SINGLE PRODUCT"+res.data);
             // setProduct(res.data);
              //setLargeImgPreview(res.data.img?.length>0 ? res.data.img[0]: res.data.img);
              //const filteredArr = products?.filter((data) =>  {console.log(data); Object.values(data)?.includes(id)});
   
     //const filteredArr  = products.find((product)=> product.id === id);
     const filteredArr = products?.filter((item) => item.id===id);
     const sproduct=products[0];
 console.log(id+"SINGLE PRODUCT from any array"+sproduct);
       setProduct(sproduct);
      setLargeImgPreview(sproduct.image?.length>0 ? sproduct.image[0]: sproduct.image);
              console.log("Large Image"+largeImgPreview);

              //setProductLoading(false);
           
            console.log("SINGLE PRODUCT"+product);
        }
        fetchProduct()

    },[])
    const handleProductThumbnails=(url,i)=>{
      setLargeImgPreview(url);
      setIndex(i);
     }
     console.log("INDEX"+index+"PRODUCT"+product.name);
  return (
    <>
    <MobilePageHeader page1={'home'} page2={'shop'} page3={'dress 4'}/>
    <section className='single-product-content'>
      <div className='container'>
        <div className='wrapper'>
          <div className='spc-left'>
          <div className="sp-lg-img-container">
  
  <div className="sp-lg-img-wrapper"  style={{backgroundImage:"url("+largeImgPreview+")"}}></div>
  </div>
  <div className="img-thumbnails-wrapper">
 
  {product.image?.length && product.image?.length>1 ? product.image.map((item,i)=>{
   
     return(
          <div key={i}  onClick={()=>handleProductThumbnails(item,i)} className={index===i ? "img-thumbnail-item active" : "img-thumbnail-item"}>
          <div className='img' style={{backgroundImage:"url("+item+")"}}></div>
          </div>
        )
      }): 
      <div  className="img-item-wrapper">
          
      <img src={product.image} object-fit='contain' onClick={()=>handleProductThumbnails(product.image)} alt=""/>
      </div>
    }
  
  
  </div>
          </div>
          <div className='spc-right'>
          <div className='single-product-info'>

          <div className='single-product-info-item'>
            <div className='title'>
            <h3 className='product-name'>{product.name}</h3>
            </div>
            <Price {...product}/>
            </div>
            <div className='single-product-info-item'>
             <div className='description'>
              <p>{product.shortdescription}</p>
             </div>
            </div>
            <div className='single-product-info-item'>
            <div className='title'>
            <h3>Color</h3>
            </div>

            
            </div>
            <div className='single-product-info-item'>
            <div className='title'>
            <h3>Material</h3>
            </div>

            
            </div>
            <div className='single-product-info-item'>
            
            <div className='sp-mini-cart-container'>
              <div className='qty-change'>
        <span className='btn' onClick={()=> handleQtyInc()}>+</span>
        <span className='btn no-bg'>{quantity}</span>
        <span className='btn' onClick={()=> handleQtyDec()}>-</span>
    </div>
              <span className='btn add-to-cart'><ShoppingCart/> Add to cart</span>
            </div>
            
            </div>
            <div className='single-product-info-item'>
             <ul className='p-points'>
              <li><span>SKU</span><p>{product.sku}</p></li>
              <li><span>Barnd</span><p>{product.brand}</p></li>
              <li><span>Catergory</span><p>{product.cat}</p></li>
              <li><span>tagss</span><p>{product.tags?.map((item)=> item+", ")}</p></li>
             </ul>
            </div>
            <div className='single-product-info-item'>
            <div className='title'>
            <h3>Share online</h3>
            </div>
            <ProductSocialMediaShare/>
            
            </div>
            <div className='single-product-info-item'>
            
                <ToggleAccordon  title={'Long description'} description={'des content'}/>
                <ToggleAccordon title={'Long description'} description={'des content'}/>
                <ToggleAccordonWithReview i={1} title={'Long description'} description={'des content'}/>
            
            </div>
            <div className='single-product-info-item'>
            
            </div>
            <div className='single-product-info-item'>

            </div>


          </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default SingleProduct