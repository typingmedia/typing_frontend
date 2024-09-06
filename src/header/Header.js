import React from 'react';
import imageheader from './backimg.png';
import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import logo from "../Image/logoCompany.png";

const Header = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Avatar
        alt="Company Logo"
        src={logo}
        sx={{ 
          width: 75, 
          height: 75, 
          position: 'absolute', 
          top: 16, 
          left: 16, 
          zIndex: 2, 
          zoom: 1.1,
        }}
      />
      <Box 
        sx={{
          backgroundImage: `url(${imageheader})`,
          backgroundSize: 'cover',    
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',   
          height: {
            xs: '70vh',  
            md: '100vh', 
          },
          width: '100%',                   
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',
        
        }}
      >
        <Card sx={{ padding: '50px', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 4}}>
          <CardContent>
            <Typography 
              variant="h4" 
              sx={{
                fontWeight: 800, 
                color: 'black', 
                opacity: 1,  
              }}
            >
              We finish the sentences you start!
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Header;
