import React,{useEffect, useState} from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Pagination from '@mui/material/Pagination';
import Title from '../components/Common/Title'
import ProductCard from '../components/Products/ProductCard'
import g1 from '../images/g1.jpg'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AllProducts } from '../store/Features/ProductSlice';

let productsFilter = [
    {
        key:'wedding',
        text:"Wedding"
    },
    {
        key:'birthdayparty',
        text:"Birthday Party"
    },
    {
        key:'haldi',
        text:"Haldi"
    },
    {
        key:'engagement',
        text:"Engagement"
    }
]


const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [products,setProducts] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState(null);

    let Products = useSelector(AllProducts);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        let filterProduct = Products.filter((el) => el.category == "wedding");
        setSelectedFilter("wedding")
        setProducts(filterProduct)
    },[])


    const handleFilter = (value) => {
        setSelectedFilter(value)
        let newProduct = Products.filter((el) => el.category == value);
        setProducts(newProduct);
        setCurrentPage(1)
    }

    const itemsPerPage = 6;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = products.slice(startIndex, endIndex);

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const handlePageChange = (e) => {
        setCurrentPage(e.target.textContent);
    };

    const itemElements = pageItems.map((product, index) => {
        if (pageItems.length >= 1) {
            return(<div className='col-md-3 mb-4'>
                <ProductCard id={product._id} image={product.image1} category={product.category} name={product.title} fee={product.price} items={product.productitems.split(",")} key={index}/>
            </div>)
        }
        else return <div>Empty</div>

    });


    return (
        <>
            <AnimatePresence>
                <Title title='All' title2='Products'/>
                <motion.div className="container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="filter-products pb-4">
                        {
                            productsFilter.map((item) => {
                                return( <div id='wedding' className={selectedFilter === item.key ? 'selected-filter' : ''} key={item.key} onClick={()=>handleFilter(item.key)}>{item.text}</div>)
                            })
                        }
                    </div>
                    <div className="row all-products-wrapper">
                        {itemElements}
                    </div>
                    <div className="row ">
                        <div className="col-md-12 pagination-wrapper">
                            <Pagination count={totalPages} variant="outlined" color="primary" shape="rounded" onClick={handlePageChange} hideNextButton hidePrevButton/>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default Products


/**
 *<option value="wedding">Wedding</option>
                                    <option value="birthdayparty">Birthday Party</option>
                                    <option value="haldi">Haldi</option>
                                    <option value="engagement">Engagement</option>
 */