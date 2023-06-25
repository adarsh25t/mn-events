import React, { useEffect, useRef, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import upload from '../../images/upload.png'
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { deleteImage, galleryStatus, getAllImages, getGalleryimages, uploadGalleryImage } from '../../store/Features/GallerySlice';
import { baseUrl } from '../Common/common';

// UPLOAD IMAGE MODEL STYLE
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
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

const GalleryImages = () => {

    const [open, setOpen] = useState(false);
    const [loading,setLoading] = useState(false);
    const [loadResult,setLoadResult] = useState(false)
    const [imageFile,setImageFile] = useState('');
    const [showImage,setShowImage] = useState('');
    const [errMessage,setErrMessage] = useState('');
    const [deleteopen, setDeleteOpen] = useState(false);
    const [deletid,setDeleteId] = useState('');
    const [deleteMesg,setDeleteMsg] = useState('Do you want to delete this product?')

    const dispatch = useDispatch();

// GET ALL IMAGES 
    const Allimages = useSelector(getAllImages);

// GET ALL IMAGE LOADING STATUS
    const gelleryStatus = useSelector(galleryStatus);

    const handleClose = () => {
        setOpen(false)
        setShowImage("");
        setImageFile("")
    };

    useEffect(()=>{
        getGalleryImages()
        setLoading(false)
    },[loading]);

// GET ALL GALLERY IMAGES
    const getGalleryImages = () => {
        dispatch(getGalleryimages())
    }

// UPLOAD IMAGE ONCHANGE FUNCTION
    const handleChangeImage = (e) => {
        setImageFile(e.target.files[0])
        imageConvertBase64(e.target.files[0],setShowImage)
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

// UPLOAD IMAGE SUBMIT BUTTON FUNCTION
    async function handleSubmit(event) {
        event.preventDefault();

        if (imageFile != "") {
            setLoadResult(true)
      
            const formData = new FormData()
            formData.append('image',imageFile)

// UPLOAD DATABASE
            let result = await dispatch(uploadGalleryImage(formData));
            if (result.payload.status == "success") {
                setLoading(true);
                setLoadResult(false);
                setOpen(false);
                setShowImage("");
                setImageFile("")
            }   
        }
        else  setErrMessage("add image address")   
    }

// DELETE GALLERY IMAGE OPEN MODAL
    const handleDelete = (id) => {
        setDeleteOpen(true);
        setDeleteId(id)
    }

// DELETE IMAGE CONFIRMATION FUNCTION
    const confirmDeleteimage = async () => {
        await dispatch(deleteImage(deletid));
        setLoading(true);
        setDeleteOpen(false);
    }
    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    return (
        <>
            {   
                gelleryStatus == "success" ?
                    (
                        <div className='container'>
                            <button onClick={()=>setOpen(true)} className="create-product-icon"><AddIcon/></button>
                            <div className="gallery-images pt-5">
                                {
                                    Allimages.map((image) =>{
                                        return(<div className="gallery-image-c">
                                            <img src={`data:${image.image.contentType};base64,${arrayBufferToBase64(image.image.data.data)}`} alt="" />
                                            <p onClick={()=>handleDelete(image._id)} className='gallery-p'><DeleteForeverIcon/></p>
                                        </div>)
                                    })
                                } 
                            </div>
                        </div>
                    )
                    :(
                        <div className='loading-wrapper'>
                            <h6><CircularProgress size={20}/> Loading...</h6>
                        </div>
                    )
            }


{/* UPLOAD IMAGE MODAL  */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="model-login">
                    <form onSubmit={handleSubmit}>
                        <Typography>Upload Image</Typography>

                        <input type="file" class="form-control mb-3 mt-3" id='image1' onChange={handleChangeImage} accept='.png, .jpg, .jpeg' hidden/>
                        <label htmlFor="image1">
                            <div className='upload-image mb-3 mt-3'>
                                <img src={showImage ? showImage : upload} alt="image" /> 
                            </div>
                        </label>
                        {
                            loadResult ? (<button className='btn'><CircularProgress size={20}/></button> )
                            : (<button className='submit-buttin-c' onClick={handleSubmit}>Submit</button>)
                        }
                    </form>
                    {
                         errMessage ? <Alert severity="error">{errMessage}</Alert> : ("")
                    }
                </Box>
            </Modal>

{/* DELETE IMAGE MODAL */}
            <Modal
                open={deleteopen}
                onClose={() =>setDeleteOpen(false)}
            >
                <div style={dstyle}>
                    <Alert severity="error" className='alert-wrapper'>{deleteMesg}  
                        <button onClick={()=>setDeleteOpen(false)}> Cancel</button>
                        <button onClick={confirmDeleteimage}>Ok</button>
                    </Alert>
                </div>
            </Modal>
        </>
    )
}

export default GalleryImages