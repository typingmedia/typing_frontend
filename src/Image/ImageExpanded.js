import React, { useEffect, useState } from 'react';
import logo from './logoCompany.png';
import { Box } from '@mui/material';
import './ImageExpanded.css';

const ImageExpanded = () => {
  const [animationClass, setAnimationClass] = useState('img-zoom');

  useEffect(() => {

    setAnimationClass('img-zoom animate');
  }, []);

  return (
    <Box className="box-img" sx={{
      height: {
        xs: "90vh", 
        md: "100vh", 
      },
    }}>
      <img
        src={logo}
        alt='logo'
        className={animationClass}
      />
    </Box>
  );
};

export default ImageExpanded;
