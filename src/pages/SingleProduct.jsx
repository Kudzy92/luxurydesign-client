import React , { useState, useEffect} from 'react'
import pnoimg from '../images/products/no_img.png'
import MobilePageHeader from '../components/MobilePageHeader'
import {Link , useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartSlice'
import { products ,
        psize_number,
        psize_bust,
        psize_waist,
        psize_hip,
        psize_length,
        productbysize,
      products2,
    pcats,
     pbrands,
     pimages
    } from '../data/placeholderData'
import Price from '../components/Price'
import ProductSocialMediaShare from '../components/ProductSocialMediaShare'
import { ShoppingCart } from '@mui/icons-material'
import ToggleAccordon from '../components/ToggleAccordon'
import ToggleAccordonWithReview from '../components/ToggleAccordonWithReview'


const SingleProduct = () => {
  const [productPrice, setProductPrice]= useState(0);
  const [index, setIndex]= useState(0);
  const [indexNumberSize, setIndexNumberSize]= useState(0);
  const [indexBustSize, setIndexBustSize]= useState(0);
  const [indexWaistSize, setIndexWaistSize]= useState(0);
  const [indexHipSize, setIndexHipSize]= useState(0);
  const [indexLenSize, setIndexLenSize]= useState(0);

  const [numberSizePrice, setNumberSizePrice]= useState(0);
  const [bustSizePrice, setBustSizePrice]= useState(0);
  const [waistSizePrice, setWaistSizePrice]= useState(0);
  const [hipSizePrice, setHipSizePrice]= useState(0);
  const [lenSizePrice, setLenSizePrice]= useState(0);


  const [quantity, setQuantity]= useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
    const [product,setProduct]=useState({});
     const [productThumbnails,setProductThumbnails]=useState([]);

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
     const filteredProductArr = products2?.filter((item) => item.id===parseInt(id));
     const filteredImageArr = pimages?.filter((item) => item.pid===parseInt(id));

 console.log(id+"SINGLE PRODUCT from any array"+filteredProductArr[0]);
       setProduct(filteredProductArr[0]);
       setProductThumbnails(filteredImageArr);
       console.log(filteredImageArr);
      setLargeImgPreview(filteredImageArr?.length>0 ? filteredImageArr[0].image: pnoimg);
              console.log("Large Image"+largeImgPreview);

              //setProductLoading(false);
              setProductPrice(filteredProductArr[0].nowprice);
            console.log("SINGLE PRODUCT"+product+"Product Price"+productPrice);
        }
        fetchProduct()

    },[id])
    const handleProductThumbnails=(url,i)=>{
      setLargeImgPreview(url);
      setIndex(i);
     }
     console.log("INDEX"+index+"PRODUCT"+product.name+"ID"+id);
     const productbysize_array = productbysize.filter(pbs => {
      return pbs.pid === parseInt(id);
    });
    console.log(productbysize_array);
    //productbysize_array.map(({name, phone}) => ({name, phone}));
//console.log(res);
 const handleProductSize= (index,type,price)=>{
  let p=0;
  switch(type){
    case "numbersize":
      setIndexNumberSize(index);
      setNumberSizePrice(price);
     p =productPrice-numberSizePrice;
    break;
    case "bustsize":
      setIndexBustSize(index);
      setBustSizePrice(price);
      p = productPrice-bustSizePrice;
    break;
    case "waistsize":
      setIndexWaistSize(index);
      setWaistSizePrice(price);
      p = productPrice-waistSizePrice;
    break;
    case "hipsize":
      setIndexHipSize(index);
      setHipSizePrice(price);
      p = productPrice-hipSizePrice;
    break;
    case "lengthsize":
      setIndexLenSize(index);
      setLenSizePrice(price);
      p = productPrice-lenSizePrice;
    break;
  }
  setProductPrice(p+price);
 }

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
 
  {productThumbnails?.length >0 ? productThumbnails.map((item,i)=>{
   
     return(
          <div key={i}  onClick={()=>handleProductThumbnails(item.image,i)} className={index===i ? "img-thumbnail-item active" : "img-thumbnail-item"}>
          <div className='img' style={{backgroundImage:"url("+item.image+")"}}></div>
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
            <h1>{productPrice}</h1>
            </div>
            <div className='single-product-info-item'>
             <div className='description'>
              <p>{product.shortdescription}</p>
             </div>
            </div>

            <div className='single-p-row'>
            <div className='title'>
            <h3>Product Size</h3>
            </div>
            <div className='single-product-info-item'>
            
            <div className="wrapper">

            <div className='spi-item'>
            <div className='title'>
            <h3>Size by Number (UK standard) </h3>
            </div>
            <div className="content">
    
           
              {productbysize_array.map((item,i)=>{
                const psn_array = psize_number.filter(psn => {
                  return psn.id === item.pds_number_id;
                });
                return(
                  <div key={i} className="check-item">
                    <span className={indexNumberSize===i ?'check-box active':'check-box'} 
              onClick={()=>handleProductSize(i,'numbersize',psn_array[0].extraprice)}>
                </span><h3>{psn_array[0].psize}</h3>
            </div>
                )
              })}
              

            </div>


            </div>
            </div>
            </div>


            <div className='single-product-info-item'>
           
            <div className="wrapper">

            <div className='spi-item'>
            <div className='title'>
            <h3>Bust size  </h3>
            </div>
            <div className="content">
            {productbysize_array.map((item,i)=>{
                const psb_array = psize_bust.filter(psb => {
                  return psb.id === item.pds_bust_id;
                });
                return(
                  <div key={i} className="check-item">
                    <span className={indexBustSize===i ?'check-box active':'check-box'} 
              onClick={()=>handleProductSize(i,'bustsize',psb_array[0].extraprice)}>
                </span><h3>{psb_array[0].psize} cm</h3>
            </div>
                )
              })}
            </div>


            </div>
            </div>
            </div>
              

            <div className='single-product-info-item'>
           
           <div className="wrapper">

           <div className='spi-item'>
           <div className='title'>
           <h3>Waist size  </h3>
           </div>
           <div className="content">
           {productbysize_array.map((item,i)=>{
               const psw_array = psize_waist.filter(psw => {
                 return psw.id === item.pds_waist_id;
               });
               return(
                 <div key={i} className="check-item">
                   <span className={indexWaistSize===i ?'check-box active':'check-box'} 
             onClick={()=>handleProductSize(i,'waistsize',psw_array[0].extraprice)}>
               </span><h3>{psw_array[0].psize} cm</h3>
           </div>
               )
             })}
           </div>

           </div>
           </div>
           </div>
      

            <div className='single-product-info-item'>
            
            <div className="wrapper">

            <div className='spi-item'>
            <div className='title'>
            <h3>Hip Size</h3>
            </div>
            <div className="content">
            {productbysize_array.map((item,i)=>{
                const psh_array = psize_hip.filter(psh => {
                  return psh.id === item.pds_hip_id;
                });
                return(
                  <div key={i} className="check-item">
                    <span className={indexHipSize===i ?'check-box active':'check-box'} 
              onClick={()=>handleProductSize(i,'hipsize',psh_array[0].extraprice)}>
                </span><h3>{psh_array[0].psize} cm</h3>
            </div>
                )
              })}
            </div>


            </div>
            </div>
            </div>


            <div className='single-product-info-item'>
           
            <div className="wrapper">

            <div className='spi-item'>
            <div className='title'>
            <h3>Length size</h3>
            </div>
            <div className="content">
            {productbysize_array.map((item,i)=>{
                const psl_array = psize_length.filter(psl => {
                  return psl.id === item.pds_length_id;
                });
                return(
                  <div key={i} className="check-item">
                    <span className={indexLenSize===i ?'check-box active':'check-box'} 
              onClick={()=>handleProductSize(i,'lengthsize',psl_array[0].extraprice)}>
                </span><h3>{psl_array[0].psize} cm</h3>
            </div>
                )
              })}
            </div>


            </div>
            </div>
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