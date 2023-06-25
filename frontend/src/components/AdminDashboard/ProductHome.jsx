import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import upload from '../../images/upload.png'
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { AllProducts, createProduct, deleteProduct, fetchProducts, productStatus, updateProduct } from '../../store/Features/ProductSlice';
import TableComponents from './TableComponents';

// CREATE PRODUCT MODEL STYLE
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

// DELETE PRODUCT ALERT MODEL STYLE
const dstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height:80,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

let baseUrl = `https://nm-backend.onrender.com/uploads/`

const ProductHome = () => {

// STATE VARIABLES
    const [loading,setloading] = useState(true);
    const [loadResult,setloadResult] = useState(false);
    const [open, setOpen] = useState(false);
    const [deleteopen, setDeleteOpen] = useState(false);
    const [deletid,setDeleteId] = useState('');
    const [deleteMesg,setDeleteMsg] = useState('Do you want to delete this product?')
    const [id,setId] = useState('');
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('')
    const [description,setDescription] = useState('');
    const [productitems,setProductitems] = useState('');
    const [image1,setImage1] = useState('');
    const [image2,setImage2] = useState('');
    const [image3,setImage3] = useState('');
    const [image4,setImage4] = useState('');
    const [image5,setImage5] = useState('');
    const [image6,setImage6] = useState('');
    const [simage1,setSImage1] = useState('');
    const [simage2,setSImage2] = useState('');
    const [simage3,setSImage3] = useState('');
    const [simage4,setSImage4] = useState('');
    const [simage5,setSImage5] = useState('');
    const [simage6,setSImage6] = useState('');
    const [errMessage,setErrMessage] = useState('')

    const dispatch = useDispatch();

// REDUX STATE VALUES
    const products = useSelector(AllProducts);
    const status = useSelector(productStatus);
    
// CLOSING MODEL FUNCTION
    const handleClose = () => setOpen(false);
    

    useEffect(()=>{
    
    // FETCHING ALL PRODUCT
        dispatch(fetchProducts());
        setloading(false);
    },[loading])


 // SHOW MODEL AND FILL ALL THE INPUT FIELDS
    const handleCreateProduct = (product) => {
        setOpen(true);
        clearState()
        if ( product != "new" ) {
            
            setTitle(product.title)
            setPrice(product.price)
            setCategory(product.category)
            setDescription(product.description)
            setProductitems(product.productitems)
            setSImage1(`data:${product.image1.contentType};base64,${arrayBufferToBase64(product.image1.data.data)}`)
            setSImage2(product.image2 ? `data:${product.image2.contentType};base64,${arrayBufferToBase64(product.image2.data.data)}` : "")
            setSImage3(product.image3 ? `data:${product.image3.contentType};base64,${arrayBufferToBase64(product.image3.data.data)}` : "")
            setSImage4(product.image4 ? `data:${product.image4.contentType};base64,${arrayBufferToBase64(product.image4.data.data)}` : "")
            setSImage5(product.image5 ? `data:${product.image5.contentType};base64,${arrayBufferToBase64(product.image5.data.data)}` : "")
            setSImage6(product.image6 ? `data:${product.image6.contentType};base64,${arrayBufferToBase64(product.image6.data.data)}` : "")
            setImage1(product.image1)
            setImage2(product.image2)
            setImage3(product.image3)
            setImage4(product.image4)
            setImage5(product.image5)
            setImage6(product.image6)
            setId(product._id)
            
        }
        
    }

    const changeUploadImage = (file,setImage,setSimage) => {
        setImage(file)
        imageConvertBase64(file,setSimage)
    }

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };


// CLEAR ALL STATE VARIABLES
    const clearState = () => {
        setTitle("")
        setPrice("")
        setCategory("")
        setDescription("")
        setProductitems("")
        setImage1("")
        setImage2("")
        setImage3("")
        setImage4("")
        setImage5("")
        setImage6("")
        setSImage1("")
        setSImage2("")
        setSImage3("")
        setSImage4("")
        setSImage5("")
        setSImage6("")
        setId("")
    }


// IMAGE CONVERT TO BASE64 FORMATE
    const imageConvertBase64 = (file,setState) => {
        if (file) { 
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                const base64String = reader.result;
                setState(base64String);
            };
        }
    }


// SUBMIT PRODUCT DETAILS
    const handleSubmit = async (e) => {
        e.preventDefault()
      
        let response;
        if (title !="" && price !="" && image1 !="" && category !== "select") {
            setloadResult(true)
            
            let images = [];
            images.push(image1,image2,image3,image4,image5,image6);

            let obj = {
                title,
                price,
                category,
                description,
                productitems,
                images
            }
            
            if (id != "") {
                obj.id = id
                // CREATE PRODUCT FUNCTION
                response = await dispatch(updateProduct(obj))
            }
            else {
                // CREATE PRODUCT FUNCTION
                response = await dispatch(createProduct(obj))
            }
            
    
            if (response.payload.data.status === 'success') {
                setloadResult(false);
                setloading(true);
                setOpen(false);
                clearState();
            }
        }
        else setErrMessage('Please Fill Required Fields ( Title, Price,Category, Image 1 )')
        
    }


// DELETE PRODUCT FUNCTION
    const handleDeleteProduct = (id) => {
        setDeleteOpen(true);
        setDeleteId(id)
        
    }
    
// DELETE MODEL OK BUTTON FUNCTION ( API CALL THIS FUNCTION )
    const confirmDeleteProduct = async () => {
        await dispatch(deleteProduct(deletid))
        setloading(true);
        setTimeout(() => {
            setDeleteOpen(false);
        }, 100);
    }

    return (
        <>
            {
                status == "success" ? 
                (
                    <div className='conainer'>
                        <div className='pb-5'><button onClick={()=>handleCreateProduct('new')} className="create-product-icon"><AddIcon/></button></div>
                        <div>
                            <TableComponents product={products} handleCreateProduct={handleCreateProduct} handleDeleteProduct ={handleDeleteProduct}/>
                        </div>
                    </div>
                ) :
                (
                    <div className='loading-wrapper'>
                        <h6><CircularProgress size={20}/> Loading...</h6>
                    </div>
                )
                
            }

{/* CREATE AND UPDATE PRODUCT DETAILS MODEL */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="create-product">

                    <form className='row'>
                        <h6>Product Details</h6>
                        <div className="col-12">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-6 mt-3">
                            <div class="form-group">
                                <input type="number" class="form-control" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-6 mt-3">
                            <div class="form-group">
                                <select class="form-control" value={category}  onChange={(e)=>setCategory(e.target.value)}>
                                    <option value="select">select category</option>
                                    <option value="wedding">Wedding</option>
                                    <option value="birthdayparty">Birthday Party</option>
                                    <option value="haldi">Haldi</option>
                                    <option value="engagement">Engagement</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Product Items" value={productitems} onChange={(e)=>setProductitems(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div class="form-group">
                                <textarea class="form-control" value={description} rows="3" onChange={(e)=>setDescription(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="col-12 mt-3 mb-5">
                            <div className="row upload-images">
                                <div className="col-4  image-upload-div">
                                    <label htmlFor="image1">
                                    <p>Image 1</p>
                                    <div className='upload-image'>
                                        <img src={simage1 ? simage1 : upload} alt="image1" />
                                    </div>
                                    </label>
                                    <input type="file" class="form-control" id='image1' accept=".png, .jpg, .jpeg" onChange={(e)=>changeUploadImage(e.target.files[0],setImage1,setSImage1)} hidden/>                                   
                                </div>

                                <div className="col-4  image-upload-div">
                                    <label htmlFor="image2">
                                        <p>Image 2</p>
                                        <div className='upload-image'>
                                            <img src={simage2 ? simage2 : upload} alt="image2" />
                                        </div>
                                    </label>
                                    <input type="file" class="form-control" id='image2' accept=".png, .jpg, .jpeg" onChange={(e)=>changeUploadImage(e.target.files[0],setImage2,setSImage2)} hidden/>                                  
                                </div>

                                <div className="col-4  image-upload-div">
                                    <label htmlFor="image3">
                                        <p>Image 3</p>
                                        <div className='upload-image'>
                                            <img src={simage3 ? simage3 : upload} alt="image3" />
                                        </div>
                                    </label>
                                    <input type="file" class="form-control" id='image3' accept=".png, .jpg, .jpeg" onChange={(e)=>changeUploadImage(e.target.files[0],setImage3,setSImage3)} hidden/>
                                </div>

                                <div className="col-4  image-upload-div">
                                    <label htmlFor="image4">
                                        <p>Image 4</p>
                                        <div className='upload-image'>
                                            <img src={simage4 ? simage4 : upload} alt="image4" />
                                        </div>
                                    </label>
                                    <input type="file" class="form-control" id='image4' accept=".png, .jpg, .jpeg" onChange={(e)=>changeUploadImage(e.target.files[0],setImage4,setSImage4)} hidden/>
                                </div>

                                <div className="col-4  image-upload-div">
                                    <label htmlFor="image5">
                                        <p>Image 5</p>
                                        <div className='upload-image'>
                                            <img src={simage5 ? simage5 : upload} alt="image5" />
                                        </div>
                                    </label>
                                    <input type="file" class="form-control" id='image5' accept=".png, .jpg, .jpeg" onChange={(e)=>changeUploadImage(e.target.files[0],setImage5,setSImage5)} hidden/>
                                </div>

                                <div className="col-4  image-upload-div">
                                    <label htmlFor="image6">
                                        <p>Image 6</p>
                                        <div className='upload-image'>
                                            <img src={simage6 ? simage6 : upload} alt="image6" />
                                        </div>
                                    </label>
                                    <input type="file" class="form-control" id='image6' accept=".png, .jpg, .jpeg" onChange={(e)=>changeUploadImage(e.target.files[0],setImage6,setSImage6)} hidden/>
                                </div>
                            </div>
                        </div>
                            <div className='product-submit'>
                                {
                                    loadResult ? (<button className='btn'><CircularProgress size={20}/></button> )
                                    : (<button className='submit-buttin-c' onClick={handleSubmit}>Submit</button>)
                                }
                            </div>
                            {
                                errMessage && <Alert severity="error">{errMessage}</Alert>
                            }
                    </form>
                </Box>
            </Modal>
            
{/* DELETE PRODUCT CONFIRMATION MODEL */}
            <Modal
                open={deleteopen}
                onClose={() =>setDeleteOpen(false)}
            >
                <div style={dstyle}>
                    <Alert severity="error" className='alert-wrapper'>{deleteMesg}  
                        <button onClick={()=>setDeleteOpen(false)}> Cancel</button>
                        <button onClick={confirmDeleteProduct}>Ok</button>
                    </Alert>
                    
                    
                </div>
            </Modal>
        </>
    )
}

export default ProductHome