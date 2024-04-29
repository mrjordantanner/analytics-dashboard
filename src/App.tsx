import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

import MainContent from './components/MainContent';
import AsideContent from './components/AsideContent';
import Navbar from './components/Navbar';
import OverlayImage from './components/OverlayImage';
//import { testData } from './data/TestData.js';

interface GraphDataProps {
  graphData: Data;
}
interface Data {
  labels: string[];
  datasets: DataSet[];
}
interface DataSet {
  label: string;
  data: number[];
}
export type { GraphDataProps };

const testData = {
  labels: ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12', '13', '14', '15'],
  datasets: [
      {
      id: 1,
      label: 'TestData1',
      data: [5, 6, 70, 65, 12, 15, 56, 79, 90, 380, 260, 270, 180, 90, 50],
      },
  ]
}

export default function App() {

  // Mobile state
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
    marginTop: isMobile ? '60px' : '0px'  // Room for top navbar
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

        <MainContent isMobile={isMobile} selectedTabIndex={selectedTabIndex} graphData={testData} />
        <AsideContent isMobile={isMobile} graphData={testData}/>

    </Grid>

  </>
  );
}
