import React from 'react';
import Title from '../Common/Title';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { AllProducts, productStatus } from '../../store/Features/ProductSlice';
import CircularProgress from '@mui/material/CircularProgress';


const Products = () => {

    let Products = useSelector(AllProducts);
    let status = useSelector(productStatus);
    
    let products = Products.map((product,index) => {
        if (index < 4) {
            return(
                <div className="col-md-3">
                    <ProductCard id={product._id} image={product.image1} category={product.category} name={product.title} fee={product.price} items={product.productitems.split(",")}/>
                </div>
            )
        }
    })

    return (
        <>
            <Title title={"Our"} title2={'Products'} />
            <div className="container">
                <div className="row">
                    {status === "success" ? products : <CircularProgress size={20}/>}
                </div>
                <div className='col gallery-button-wrapper'>
                        <Link to={'/products'} className='link-btn'><button className='button-59 gallery-button '>VIEW MORE PRODUCTS</button></Link>
                </div>
            </div>
        </>
    )
}

export default Products
