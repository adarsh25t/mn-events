import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import LoadingPage from './pages/LoadingPage';
import Admin from './pages/Admin';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, productStatus } from './store/Features/ProductSlice';
import { galleryStatus, getGalleryimages } from './store/Features/GallerySlice';
import AdminLogin from './components/Login/AdminLogin';



function App() {

  const [isLoading,setIsLoading] = useState(false);
  const [login,setLogin] = useState(false)
  const dispatch = useDispatch();
  const pstatus = useSelector(productStatus);
  const gstatus = useSelector(galleryStatus);
  
  useEffect(()=>{
    
    if (pstatus != "success" && gstatus != "success") {
      dispatch(fetchProducts());
      dispatch(getGalleryimages());
    }
    else setIsLoading(true);

    let user = localStorage.getItem('user')
    if (user) setLogin(true)

  },[pstatus,gstatus,login])

  return (
   <BrowserRouter>
      {isLoading ?<>
          <Routes>
            <Route exact path="/" element={<AdminLogin/>}/>
            <Route path="admin" element={<Admin/> }/>
          </Routes>
        <Footer/> 
      </> : <LoadingPage/>}
    </BrowserRouter>
    
  );
}

export default App;
