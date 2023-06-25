import React from 'react'
import { AllProducts } from '../../store/Features/ProductSlice';
import { useSelector } from 'react-redux';
import { getAllImages } from '../../store/Features/GallerySlice';

const Dashboard = () => {

  const products = useSelector(AllProducts);
  const images = useSelector(getAllImages);

  return (
    <div className='container dashboard-wrapper'>
          <div className='dashbord-div'>
              <p>{products.length}</p><p>Products</p>
          </div>
          <div className='dashbord-div'>
              <p>{images.length}</p><p>Images</p>
          </div>
    </div>
  )
}

export default Dashboard