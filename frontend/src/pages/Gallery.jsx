import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAllImages } from '../store/Features/GallerySlice'
import { baseUrl } from '../components/Common/common'
import { LazyLoadImage } from "react-lazy-load-image-component";


const Gallery = () => {

    let gallery = useSelector(getAllImages);

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    let images = gallery.map((image) => (
        <div className='gallery-f-image'>
            <img key={image._id} src={`data:${image.image.contentType};base64,${arrayBufferToBase64(image.image.data.data)}`}  className='gallery-f-image-view' alt="image" />
        </div>
    ))
    
    
    return (
        <div className='container'>
            <div className='gallery-images-w'>
                {images ? images : "Loading"}
            </div>
        </div>
    )
}

export default Gallery