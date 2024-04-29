
import { Grid, Box, Card, Typography } from '@mui/material';
import PanelWithMenu from './PanelWithMenu';
import RadialStatsCard from './RadialStatsCard';
import RadarChart from './RadarChart';

interface Props {
    isMobile: boolean;
}

export default function AsideContent({isMobile}: Props) {

      const asideContainerStyle = {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        height: isMobile ? '35%' : '100%',
        justifyContent: 'space-evenly',
        width: '100%'
      };

    return(
        <>
        <Grid item xs={12 } md={3} sx={asideContainerStyle}>

            <Grid item>
                <PanelWithMenu isMobile={isMobile} labelText={'Views by browser'} >
                    <RadarChart />
                </PanelWithMenu>
            </Grid>

            <Grid item>
            <PanelWithMenu isMobile={isMobile} labelText={'Statistics'}>

                <RadialStatsCard title={'Online Visitors'} value={312} maxValue={512}></RadialStatsCard>
                <RadialStatsCard title={'New Visitors'} value={136} maxValue={381}></RadialStatsCard>

                <Card sx={{display: 'flex', backgroundColor: 'lavender', width: '95%' }}>

                    <Box sx={{display: 'flex', flex: '1'}}>
                        <Typography sx={{width: '20%'}} variant="body1" color="text.secondary">Average Revenue</Typography>
                    </Box>

                    <Box sx={{display: 'flex', flex: '1'}}>
                        <Typography variant="h6" component="div">3076.25</Typography>
                    </Box>

                    <Box sx={{display: 'flex', flex: '1', 
                        flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}>

                        <Typography variant="h6" component="div" sx={{backgroundColor: '#6b75ca', color: 'white', }}>+21%</Typography>
                    </Box>
                </Card>
            </PanelWithMenu>
            </Grid>

        </Grid>
    </>

)};
