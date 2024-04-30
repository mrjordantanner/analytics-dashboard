import { Grid, Box } from '@mui/material';
import DxLineGraph from './DxLineGraph';
import { DashboardData } from '../data/DashboardData.d'

interface Props {
    isMobile: boolean;
    selectedTabIndex: number;
	data: DashboardData;
}

export default function GraphContainer({ isMobile, data }: Props) {
    
    const graphContainerStyle = {
        //border: '1px solid blue',
        display: 'flex', 
        alignItems: 'center', 
        width: isMobile ? '45vh' : '97%',
        height: isMobile ? '100%' :'50vh',
        margin: isMobile ? '20px 0px' : '0px 20px'
      }

    return (
        <Grid sx={graphContainerStyle}>
            <Box sx={{
                width: '100%',
                height: isMobile ? '50vh': '100%',
            }}>
                <DxLineGraph data={data} color={'#6b75ca'} showGrid={true} showAxes={true}/>
            </Box>
        </Grid>
    );
};
