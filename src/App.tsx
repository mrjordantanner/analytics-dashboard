import 'devextreme/dist/css/dx.light.css';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

import MainContent from './components/MainContent';
import AsideContent from './components/AsideContent';
import Navbar from './components/Navbar';
import MockupOverlay from './components/MockupOverlay';
//import { testData } from './data/TestData.js';

// import Chart, {
//   ArgumentAxis,
//   Series,
//   Legend
// } from 'devextreme-react/chart'

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
  labels: ['Sun 15', 'Mon 16', 'Tue 17', 'Wed 18', 'Thu 19', 'Fri 20', 'Sat 21', 'Sun 22', 'Mon 23', 'Tue 24', 'Wed Thu 25', 'Fri 26', 'Sat 27', 'Sun 28', 'Mon 29', 'Tue 30'],
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
    backgroundColor: '#eff2f8',
    height: '100vh',
    marginTop: isMobile ? '60px' : '0px'
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
