import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import ProductHome from './ProductHome';
import Dashboard from './Dashboard';
import GalleryImages from './GalleryImages';

const AdminHome = () => {

    const [showTab,setShowtab] = useState('home') 

    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-2 admin-options">
                        <ul>
                            <li onClick={()=>setShowtab('home')}>Home</li>
                            <li onClick={()=>setShowtab('product')}>Products</li>
                            <li onClick={()=>setShowtab('image')}>Images</li>
                        </ul>
                    </div>
                    <div className="col-10 mt-4">
                        {showTab == "home" ? (<Dashboard/>) : ""}
                        {showTab == "product" ? (<ProductHome/>) : ""}
                        {showTab == "image" ? (<GalleryImages/>) : ""}
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default AdminHome