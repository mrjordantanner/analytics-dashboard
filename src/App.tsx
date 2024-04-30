import 'devextreme/dist/css/dx.light.css';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

import MainContent from './components/MainContent';
import AsideContent from './components/AsideContent';
import Navbar from './components/Navbar';
import MockupOverlay from './components/MockupOverlay';

import dataset1 from './data/DashboardData'
import dataset2 from './data/DashboardData2'
import dataset3 from './data/DashboardData3'

import { DashboardData } from './data/DashboardData.d';


export default function App() {
  
  // Dataset state
  const [currentDataset, setCurrentDataset] = useState<DashboardData>(dataset1); 

  // Mobile state
  const breakpointValue = 800;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpointValue);
    };

    handleResize();
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, [breakpointValue]);

  // Navbar tabs change the current dataset
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const handleTabChange = (index: number) => {
    setSelectedTabIndex(index);

    switch (index) {
      case 0:
        setCurrentDataset(dataset1);
        break;
      case 1:
        setCurrentDataset(dataset2);
        break;
      case 2:
          setCurrentDataset(dataset3);
          break;
      default:
        setCurrentDataset(dataset1);
        break;
    }
  };

  const pageContainerStyle = {
    backgroundColor: '#eff2f8',
    height: isMobile?  '100%' : '100vh',
    marginBottom: isMobile ? '160px' : '0px',
    overflow: 'hidden'
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

        <MainContent isMobile={isMobile} selectedTabIndex={selectedTabIndex} data={currentDataset} />
        <AsideContent isMobile={isMobile} selectedTabIndex={selectedTabIndex} data={currentDataset} />

    </Grid>

  </>
  );
}
