import React from 'react';
import { Grid, Box, Button } from '@mui/material';
import LineGraph from './LineGraph';
import DxLineGraph from './DXLineGraph';

interface Props {
    isMobile: boolean;
    selectedTabIndex: number;
	graphData: Data
}

// TODO consolidate these Props
interface Data {
	labels: string[];
	datasets: DataSet[];
  }
  
  interface DataSet {
	label: string;
	data: number[];
  }



export default function GraphContainer({isMobile, selectedTabIndex, graphData}: Props) {
    
    const graphContainerStyle = {
        display: 'flex', alignItems: 'center', 
        width: isMobile ? '45vh' :'60vw',
        height: isMobile ? '60vw' :'50vh'
      }

    return (
        <Grid sx={graphContainerStyle}>

        {/* TODO Use cleaner conditional rendering here */}
        {selectedTabIndex === 0 && (
            <Box sx={{
                    width: '100%',
                    height: '100%',
                }}>

                <LineGraph graphData={graphData} />
                {/* <DxLineGraph /> */}

            </Box>
        )}
        {selectedTabIndex === 1 && (
            <Box sx={{
                backgroundColor: 'gray',
                width: '100%',
                height: '100%',
            }}>
                <p>TODO: Content for Tab 2</p>
            </Box>
        )}
        {selectedTabIndex === 2 && (
            <Box sx={{
                backgroundColor: 'lightgray',
                width: '100%',
                height: '100%',
            }}>
                <p>TODO: Content for Tab 3</p>
            </Box>
        )}
        {selectedTabIndex === 3 && (
            <Box sx={{
                backgroundColor: 'darkgray',
                width: '100%',
                height: '100%',
            }}>
                <p>TODO: Content for Tab 4</p>
            </Box>
        )}
    </Grid>
    );
};
