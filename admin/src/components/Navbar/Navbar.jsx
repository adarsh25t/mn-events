import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo from '../../images/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';


function NavBar() {

  let navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem('user');
    return navigate('/');
  }

  
  return (
    <AppBar position="sticky" className='navbar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:'flex',justifyContent:'space-between'}} >
            <Box sx={{display:{ xs: 'none', md: 'flex' }}}>
              <Link to={'/'}><img src={logo} alt="logo" className='nav-logo'/></Link>
            </Box>

            <Box sx={{display: { xs: 'none', md: 'flex' } }}>
                <Typography className='nav-icon'><EmailIcon className='nav-icon-icon'/></Typography>
                <Typography className='nav-icon'><NotificationsIcon className='nav-icon-icon'/></Typography>
                <Typography className='nav-icon' onClick={logoutHandler}><LoginIcon className='nav-icon-icon'/> Log Out</Typography>
            </Box>


        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;