import React, { useEffect, useState } from 'react'
import ProductImages from './ProductImages'
import ProductItems from './ProductItems'
import Title from '../Common/Title'
import { Link, useParams,useNavigate } from 'react-router-dom'
import { AllProducts, getSelectedProduct } from '../../store/Features/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from '@mui/material'

const ProductDetail = () => {

  let [selectItem,setSelectItem] = useState([]);
  let [message,setMessage] = useState('')
  let dispatch = useDispatch()
  let Products = useSelector(AllProducts);
  let { id } = useParams();
  const navigate = useNavigate();

  

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])


  let Product = Products.find((el) => el._id === id);
 
  if (Product) {

    const handleChangeCheckBox = (e,item) => {
      const value = e.target.value;
      if (e.target.checked) {
        setSelectItem([...selectItem, value])
      } else {
        setSelectItem(selectItem.filter((item) => item !== value))
      }
      
    };

    const HandleSubmit = () => {

      if (selectItem.length > 0) {
        dispatch(getSelectedProduct(selectItem));
        navigate('/contact')
      }
      else {
        setMessage("Please select an item from the list.")
      }

      

    }

    let productItems;
    let items = Product.productitems.split(",");
    if (items.length > 0) productItems = items.map((item,index) =><ProductItems item={item} index={index} key={index} onchange={handleChangeCheckBox}/>)

    return (
      <div className='container'>
          <ProductImages product={Product}/>
          <Title title='select' title2='what you want'/>
          <div className="product-items-C">
            {productItems}
          </div>
          <div className='button-center'>
              <button className='button-59  mt-4' onClick={HandleSubmit}>Submit</button>
              {message && <Alert severity="error">{message}</Alert>}
          </div>
          
      </div>
    )
  }
  else {
    return("loading...")
  }
  
}

export default ProductDetail
