import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AdminHome from '../AdminDashboard/AdminHome';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

// LOGIN INPUT MODAL STYLE
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

const AdminLogin = () => {

  const [login,setLogin] = useState(false)
  const [open, setOpen] = useState(false);
  const [userid,setUserid] = useState('');
  const [password,setpassword] = useState('');
  const [errMessage,setErrMessage] = useState('')
  let navigate = useNavigate()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(()=>{

    document.documentElement.scrollTop = 0;
  },[])

// LOGIN SUBMIT FUNCTION 
  const Loginhandler = (e) => {
    e.preventDefault()

    if (userid === "admin@90" && password === "password@90") {
      setOpen(false)
      setLogin(true);
      localStorage.setItem('user',JSON.stringify({id:'admin@90',password:'password@90'}));
      navigate('/admin')
    }
    else setErrMessage("Enter Login Details")
    
  }

  return (
    <>
      <div>
        {!login &&
          <div  className="login-btn-wrapper">
            <Button onClick={handleOpen}>Login to continue</Button>
          </div>
        }
      </div>

{/* LOGIN INPUT MODAL  */}
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="model-login">
        <form>
          <Typography>Login</Typography>
          <div class="form-group  mt-3">
              <input type="text" className="form-control" placeholder="Enter email" value={userid} onChange={(e)=>setUserid(e.target.value)}/>
          </div>
          <div class="form-group mt-3 mb-3">
              <input type="password" class="form-control" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
          </div>
          <button class="btn" onClick={Loginhandler}>Submit</button>
        </form>
        {errMessage && <Alert severity="error">{errMessage}</Alert>}
      </Box>
      </Modal>
    </>
  );
}

export default AdminLogin
