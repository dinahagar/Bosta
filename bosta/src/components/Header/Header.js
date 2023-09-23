import './Header.css'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { useLocation } from 'react-router-dom';

function Header() {

  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className="navbar" sx={{ backgroundColor: location.pathname === '/noshipment' ? '#f3fafb !important' : '#ffffff !important' }}>
        <Navbar />
      </AppBar>

      <nav>
        <Sidebar />
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