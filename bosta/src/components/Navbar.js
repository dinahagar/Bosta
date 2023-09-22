import { Box, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [trackingNumber, setTrackingNumber] = useState();
    const [content, setContent] = useState([]);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleHomeRoute = () => {
        navigate("/")
    }

    const handleTrackingNo = (e) => {
        setTrackingNumber(e.target.value);
        e.preventDefault();
    }

    const handleSearch = () => {
        setHasSearched(true);
        fetchShipment();
    }

    const fetchShipment = async () => {
        try {
            const res = await axios.get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`);
            setContent(res?.data);
        } catch (error) {
            console.log(error);
            setContent(null);
        }
    };
        
    useEffect(() => {
        if (!hasSearched) return;

        if (content) {
            navigate("/trackingshipment", {
                state: {
                    trackNo: trackingNumber,
                },
            });
        } else {
            navigate("/noshipment", {
                state: {
                    trackNo: trackingNumber,
                },
            });
        }
    }, [content]);    
    
  return (
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
    <Box className="logoBox" onClick={handleHomeRoute}>
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
          <TextField id="outlined-basic" label="TrackingNo." variant="outlined" className='trackTextField' onChange={handleTrackingNo}/>
          <button className='searchBtn' onClick={handleSearch}><SearchIcon /></button>
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

  )
}

export default Navbar