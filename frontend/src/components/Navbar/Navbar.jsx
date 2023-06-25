import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const pages = ['home','products','gallery'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" className='navbar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:'flex',justifyContent:'space-between'}} >
            <Box sx={{display:{ xs: 'none', md: 'flex' }}}>
              <Link to={'/'}><img src={logo} alt="logo" className='nav-logo'/></Link>
            </Box>

            <Box sx={{display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                  <Link to={`/${page === 'home' ? '' : page}`}><Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    className='nav_action'
                  >
                    {page}
                  </Button></Link>
                ))}
            </Box>

          {/* mobile version */}

          <Box sx={{display:{ xs: 'flex', md: 'none'}}}>
            <Link to={'/'}><img src={logo} alt="logo" className='nav-logo'/></Link>
          </Box>

          <Box sx={{display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link to={`/${page === 'home' ? '' : page}`} className='app-link'>{page}</Link></Typography>
                </MenuItem>
              ))}
             
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;