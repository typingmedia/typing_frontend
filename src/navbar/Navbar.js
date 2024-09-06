import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from "../Image/logoCompany.png"
import { Avatar } from '@mui/material';
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0,opacity:0.5}}>
        <Toolbar variant="dense" sx={{  backgroundColor:'#F2F2F2',p:1}}>
          <Typography variant="h5" component="div" sx={{ color: '#454545' }}>
         
            
          </Typography>
        </Toolbar>
      </AppBar>
      
      
    </Box>
  );
};

export default Navbar;
