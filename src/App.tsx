import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

import MainContent from './components/MainContent';
import AsideContent from './components/AsideContent';
import Navbar from './components/Navbar';
import OverlayImage from './components/OverlayImage';


export default function App() {

  const breakpointValue = 900;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for window resize and set 'isMobile' accordingly.  
    // Empty dependency array means it only runs once on mount.
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpointValue);
    };

    handleResize();
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  // Navbar tabs
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setSelectedTabIndex(index);

  };

  const pageContainerStyle = {
    backgroundColor: 'lavender',
    height: '100vh',
    padding: '10px',
    marginTop: isMobile ? '60px' : '0px'
  };

	return (
  <>
    <OverlayImage isMobile={isMobile} />
    <Grid container sx={pageContainerStyle}>

        <Navbar 
          isMobile={isMobile} 
          selectedTabIndex={selectedTabIndex} 
          onChange={handleTabChange}
          />

        <MainContent isMobile={isMobile} selectedTabIndex={selectedTabIndex} />
        <AsideContent isMobile={isMobile} />
        


    </Grid>

  </>
  );
}
