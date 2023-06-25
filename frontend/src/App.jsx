import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link,Navigate } from 'react-router-dom';

import NavBar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer/Footer';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import LoadingPage from './pages/LoadingPage';
import Admin from './pages/Admin';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, productStatus } from './store/Features/ProductSlice';
import { galleryStatus, getGalleryimages } from './store/Features/GallerySlice';
import Gallery from './pages/Gallery';



function App() {

  const [isLoading,setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const pstatus = useSelector(productStatus);
  const gstatus = useSelector(galleryStatus);

  
  useEffect(()=>{
    
    if (pstatus != "success") {
      dispatch(fetchProducts());
    }
    else setIsLoading(true)
    dispatch(getGalleryimages());
    
  },[pstatus])

  return (
   <BrowserRouter>
      {isLoading ?<>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route  path="products" element={<Products/>}/>
            <Route path="product/:id" element={<ProductDetails/>}/>
            <Route path="gallery" element={<Gallery/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="adminnm" element={<Admin/>}/>
          </Routes>
        <Footer/>
      </> : <LoadingPage/>}
    </BrowserRouter>
    
  );
}

export default App;
