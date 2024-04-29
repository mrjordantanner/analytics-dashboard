
import { Grid, Box, Card, Typography } from '@mui/material';
import PanelWithMenu from './PanelWithMenu';
import RadialStatsCard from './RadialStatsCard';
import RadarChart from './RadarChart';
//import type { GraphDataProps } from '../App';

interface Props {
    isMobile: boolean;
    graphData: Data;
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



export default function AsideContent({isMobile, graphData}: Props) {

      const asideContainerStyle = {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        justifyContent: 'space-evenly'
      };

    return(
        <>
        {/* Aside Container */}
        <Grid xs={12 } md={true} item sx={asideContainerStyle}style={{height: isMobile ? '35%' : '100%'}}>

            <PanelWithMenu isMobile={isMobile} labelText={'Views by browser'} >
                <RadarChart graphData={graphData}/>
            </PanelWithMenu>

            <PanelWithMenu isMobile={isMobile} labelText={'Statistics'}>

                <RadialStatsCard title={'Online Visitors'} value={312} maxValue={512}></RadialStatsCard>
                <RadialStatsCard title={'New Visitors'} value={136} maxValue={381}></RadialStatsCard>

                <Card sx={{display: 'flex', backgroundColor: 'blue', width: '95%' }}>

                    <Box sx={{display: 'flex', flex: '1'}}>
                        <Typography sx={{width: '20%'}} variant="body1" color="text.secondary">Average Revenue</Typography>
                    </Box>

                    <Box sx={{display: 'flex', flex: '1'}}>
                        <Typography variant="h6" component="div">3076.25</Typography>
                    </Box>

                    <Box sx={{display: 'flex', flex: '1', 
                        flexDirection: 'column', backgroundColor: 'brown', justifyContent: 'space-evenly', alignItems: 'center'}}>

                        <Typography variant="h6" component="div" sx={{backgroundColor: 'mediumslateblue', color: 'white', }}>+21%</Typography>
                    </Box>
                </Card>
            </PanelWithMenu>

        </Grid>
    </>

)};
