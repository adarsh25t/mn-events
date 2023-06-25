import React, { useState } from 'react'
import servicelog from '../../images/event-logo.png'
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts, sendEmailforProductsandDetails } from '../../store/Features/ProductSlice';
import { Alert, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {

    let [loading,setloading] = useState(false);
    let [error,setError] = useState("");
    let [message,setMessage] = useState("Submit")
    let [name,setName] = useState('');
    let [email,setEmail] = useState('');
    let [phone,setPhone] = useState('');
    let [date,setDate] = useState('');
    let [address,setAddress] = useState('');

    let dispatch = useDispatch();
    let selectedProduct = useSelector(selectedProducts);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        if (name === "" || phone === "" || date === "") {
            setError("Fill all the required fields")
        }
        else {
            setError("");
            setloading(true)
            await dispatch(sendEmailforProductsandDetails({name,email,phone,date,address,selectedProduct}));
            setloading(false)
            clearInputs();
            setMessage("Successfully Submitted ")
            setTimeout(() => {
                navigate('/')
            },300);
    
        }
       
    }

    const clearInputs = () => {
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setAddress("");
    }

    return (
        <div className='contact-wrapper'>
            <img src={servicelog} alt="" />
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, quod aliquid! Libero temporibus sunt vel?</p>
            <form className='contact-form'>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <TextField id="outlined-basic" className='contact-input' value={name} label="Enter Name" variant="outlined" type='text' size="small" onChange={(e)=>setName(e.target.value)} required/>
                    </div>
                    <div className="col-md-6 mt-3">
                        <TextField id="outlined-basic" className='contact-input' value={email} label="Enter Email" variant="outlined" type='email'  size="small" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="col-md-6 mt-3">
                        <TextField id="outlined-basic" className='contact-input' value={phone} label="Enter Phone" variant="outlined" type='number'  size="small" onChange={(e)=>setPhone(e.target.value)} required/>
                    </div>
                    <div className="col-md-6 mt-3">
                        <TextField id="outlined-basic" className='contact-input' value={date} label="Wedding Date" variant="outlined" type='date' size="small" onChange={(e)=>setDate(e.target.value)} required/>
                    </div>
                    <div className="col-md-12 mt-3">
                        <TextField id="outlined-basic" className='contact-input' value={address} label="Enter Address..." variant="outlined" type='text' size="small" onChange={(e)=>setAddress(e.target.value)} />
                    </div>
                </div>
            
            {loading ? <button className='btn mt-4'><CircularProgress size={20}/></button> :
            <button type="submit" className="button-59 mt-4" onClick={handleSubmit}>{message}</button>}
            </form>
            {error && <Alert severity="error" className='alert-wrapper mt-3'>{error}</Alert>}
        </div>
    )
}

export default ContactForm
