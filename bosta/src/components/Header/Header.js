import './Header.css'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { TextField } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 1200;
// const navItems = ['Home', 'About', 'Contact'];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className="navbar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: 'block', sm: 'block', lg: 'none' }, color: '#475467' }}
            className='menuIcon'
          >
            <MenuIcon />
          </IconButton>
          <Box className="logoBox">
            <MailOutlineIcon className="logoIcon"/>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: 'block' }}
              className="logoTitle"
            >
              bosta
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }} >
            <Box className="dropdown">
              <button className="dropText" >Products<span className='dropTextIcon'><KeyboardArrowDownIcon /></span></button>
              <Box className="dropdown-content">
                <a href="#">Solutions</a>
                <a href="#">Dashboard</a>
                <a href="#">Mobile App</a>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }}  >
            <Box className="dropdown">
              <button className="dropText" >Integrations<span className='dropTextIcon'><KeyboardArrowDownIcon /></span></button>
              <Box className="dropdown-content">
                <a href="#">Shopify</a>
                <a href="#">WooCommerce</a>
                <a href="#">Custom APIs</a>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }}  >
            <Box className="dropdown">
              <button className="dropText" >Use Cases<span className='dropTextIcon'><KeyboardArrowDownIcon /></span></button>
              <Box className="dropdown-content">
                <a href="#">Businesses</a>
                <a href="#">SMEs</a>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }}  >
            <Box className="dropdown">
              <a href="#" className="dropText notDropDown" >Pricing</a>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }}  >
            <Box className="dropdown">
              <a href="#" className="dropText notDropDown" >Blog</a>
            </Box>
          </Box>

          <Box sx={{ display: 'block' }} className="trackSipmentButton" >
            <Box className="dropdown">
              <button className="dropText trackShipment" >Track Shipment<span className='dropTextIcon'><KeyboardArrowDownIcon /></span></button>
              <Box className="dropdown-content trackShipmentDrop">
                <Typography className='trackText'>Track Your Shipment</Typography>
                <TextField id="outlined-basic" label="TrackingNo." variant="outlined" className='trackTextField'/>
                <button className='searchBtn'><SearchIcon /></button>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }}  >
            <Box className="dropdown">
              <button className="dropText" >En<span className='dropTextIcon'><KeyboardArrowDownIcon /></span></button>
              <Box className="dropdown-content">
                <a href="#">English</a>
                <a href="#">Arabic</a>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }}  >
            <Box className="dropdown">
              <button className="dropText notDropDown signInBtn" >Sign In</button>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }}  >
            <Box className="dropdown">
              <button className="dropText notDropDown signUpBtn" >Sign Up</button>
            </Box>
          </Box>

        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor='right'
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              MUI
            </Typography>
            <Divider />
            <List>
              {/* {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))} */}
            </List>
          </Box>
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;