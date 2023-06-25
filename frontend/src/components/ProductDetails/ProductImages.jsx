
import React,{useEffect, useState} from 'react'
import { baseUrl } from '../Common/common';


const ProductImages = ({product}) => {
    
    const [image,setImage] = useState('')

    const hadleShowImage = (event) =>  {
        let value = event.currentTarget.getAttribute('src')

        if (value) {
            setImage(value);
        }
    }

    useEffect(()=>{
        setImage(`data:${product.image1.contentType};base64,${arrayBufferToBase64(product.image1.data.data)}`)
    },[])

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };


    if (product) {

        
        return (
            <div className='row mt-5'>
                <div className="col-md-7">
                    <div className='product-detail-image-wrapper'>
                        <img src={image} alt="image" />
                    </div> 
                </div>
                <div className="col-md-5">
                    <div className="row product-image-icons">
                        <div className="col-md-6 col-3 card-image-div">
                            <img src={`data:${product.image1.contentType};base64,${arrayBufferToBase64(product.image1.data.data)}`} alt="image" onClick={(event)=>hadleShowImage(event)}/>
                        </div>
                        {product.image2 && product.image2.contentType &&
                            <div className="col-md-6 col-3 card-image-div">
                                <img src={`data:${product.image2.contentType};base64,${arrayBufferToBase64(product.image2.data.data)}`} alt="image" onClick={(event)=>hadleShowImage(event)}/>
                            </div>
                        }
                        {product.image3 && product.image3.contentType &&
                            <div className="col-md-6 col-3 card-image-div">
                                <img src={`data:${product.image3.contentType};base64,${arrayBufferToBase64(product.image3.data.data)}`} alt="image" onClick={(event)=>hadleShowImage(event)}/>
                            </div>
                        }
                        {product.image4 && product.image4.contentType &&
                            <div className="col-md-6 col-3 card-image-div">
                            <img src={`data:${product.image4.contentType};base64,${arrayBufferToBase64(product.image4.data.data)}`} alt="image" onClick={(event)=>hadleShowImage(event)}/>
                            </div>
                        }
                        {product.image5 && product.image5.contentType &&
                            <div className="col-md-6 col-3 card-image-div">
                                <img src={`data:${product.image5.contentType};base64,${arrayBufferToBase64(product.image5.data.data)}`} alt="image" onClick={(event)=>hadleShowImage(event)}/>
                            </div>
                        }
                        {product.image6 && product.image6.contentType && 
                            <div className="col-md-6 col-3 card-image-div">
                                <img src={`data:${product.image6.contentType};base64,${arrayBufferToBase64(product.image6.data.data)}`} alt="image" onClick={(event)=>hadleShowImage(event)}/>
                            </div>
                        }
                    </div>
                </div>
            </div>
          )
    }

  
}

export default ProductImages
