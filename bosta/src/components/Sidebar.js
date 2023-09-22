import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { Box, Typography } from '@mui/material';


const Sidebar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
  
    const drawerWidth = 1200;
    // const navItems = ['Home', 'About', 'Contact'];

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    
    const container = window !== undefined ? () => window().document.body : undefined;
    
  return (
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

  )
}

export default Sidebar