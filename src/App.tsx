import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

import MainContent from './components/MainContent';
import AsideContent from './components/AsideContent';
import Navbar from './components/Navbar';
import MockupOverlay from './components/MockupOverlay';
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
  labels: ['15', '16', '17', '18', '19', '20', '21','22', '23', '24', '25', '26', '27', '28', '29', '30'],
  datasets: [
      {
      id: 1,
      label: 'TestData1',
      data: [300, 315, 0, 0, 120, 130, 150, 180, 120, 220, 210, 280, 275, 315, 280, 80, 90],
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
    <MockupOverlay isMobile={isMobile} />
    <Grid container sx={pageContainerStyle}>

        <Navbar 
          isMobile={isMobile} 
          selectedTabIndex={selectedTabIndex} 
          onChange={handleTabChange}
          />

        <MainContent isMobile={isMobile} selectedTabIndex={selectedTabIndex} graphData={testData} />
        <AsideContent isMobile={isMobile} />

    </Grid>

  </>
  );
}
