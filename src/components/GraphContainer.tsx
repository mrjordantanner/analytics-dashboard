import { Grid, Box } from '@mui/material';
import LineGraph from './LineGraph';
import DxLineGraph from './DxLineGraph';

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

        {/* TODO Use cleaner conditional rendering */}
        {selectedTabIndex === 0 && (
            <Box sx={{
                    width: '100%',
                    height: '100%',
                }}>

                <LineGraph graphData={graphData} />
            </Box>
        )}
        {selectedTabIndex === 1 && (
            <Box sx={{
                width: '100%',
                height: '100%',
            }}>
                <DxLineGraph />
            </Box>
        )}
        {selectedTabIndex === 2 && (
            <Box sx={{
                width: '100%',
                height: '100%',
            }}>
                <h3>TODO</h3>
            </Box>
        )}
    </Grid>
    );
};
