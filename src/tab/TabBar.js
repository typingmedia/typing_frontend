import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import OurServices from '../ourservices/OurServices';
import OurClient from '../ourclient/OurClient';
import { styled } from '@mui/material/styles';
import "../tab/TabBar.css"
import About from '../about/About';

const CustomTab = styled(Tab)(({ theme, selected }) => ({
  ...(selected && {
    backgroundColor: '#e6e6e6', // Background color for active tab
    color: '#454545', // Text color for active tab
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  }),
  '&.Mui-selected': {
    backgroundColor: '#e6e6e6', // Ensures active tab has correct background color
    color: '#454545', // Ensures active tab has correct text color
    transition: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'

  },
  // Default styles for inactive tabs
  '&:not(.Mui-selected)': {
    color: theme.palette.text.primary, // Default text color for inactive tabs
  },

  
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',mt:6}}>
      <Box sx={{display: 'flex', justifyContent: 'center', }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          
          <CustomTab sx={{fontSize:'12px'}}
            label="About Us"
            {...a11yProps(0)}
            selected={value === 0}
          />
          <CustomTab sx={{fontSize:'12px'}}
            label="Our Services" 
            {...a11yProps(2)}
            selected={value === 1}
          />
          <CustomTab sx={{fontSize:'12px'}}
            label="Our Clients" 
            {...a11yProps(0)}
            selected={value === 2}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
  <About/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <OurServices />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <OurClient />
      </CustomTabPanel>
     
    </Box>
  );
}
