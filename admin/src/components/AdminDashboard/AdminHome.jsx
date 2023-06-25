import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import ProductHome from './ProductHome';
import Dashboard from './Dashboard';
import GalleryImages from './GalleryImages';
import HomeIcon from '@mui/icons-material/Home';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import NavBar from '../Navbar/Navbar'


const AdminHome = () => {

    const [showTab,setShowtab] = useState('home');

    return (
        <>
        <NavBar/>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-2 admin-options">
                        <ul>
                            <li onClick={()=>setShowtab('home')}> <HomeIcon className='icon-select'/> Home</li>
                            <li onClick={()=>setShowtab('product')}><FeaturedPlayListIcon className='icon-select'/> Products</li>
                            <li onClick={()=>setShowtab('image')}><PermMediaIcon className='icon-select'/>Images</li>
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