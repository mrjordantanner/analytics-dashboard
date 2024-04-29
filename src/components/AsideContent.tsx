
import { Grid, Box, Typography } from '@mui/material';
import Panel from './Panel';
import RadialStatsCard from './RadialStatsCard';
import RadarChart from './RadarChart';
import StatsCard from './StatsCard';
import HeaderWithMenu from './HeaderWithMenu';

interface Props {
    isMobile: boolean;
}

export default function AsideContent({isMobile}: Props) {

      const asideContainerStyle = {
        //backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      };

      const cardStyle = { 
        backgroundColor: '#eff2f8',
        borderRadius: '20px',
        width: isMobile ? '90vw' : '20vw', 
        height: isMobile ? '15vh' :'5vw'
      }
      
      const cardContentStyle = {
          width: '100%', 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxHeight: '150px'
      };

    return(
        <>
        <Grid item xs={12 } md={3} sx={asideContainerStyle}>

            <Grid item>
                <Panel isMobile={isMobile} >
                    <HeaderWithMenu isMobile={isMobile} labelText={'Views by browser'}/>
                    <RadarChart />
                </Panel>
            </Grid>

            <Grid item>
                <Box sx={{display: 'flex', flex: '1', margin: '0px 15px'}}>
                    <Typography variant="h6" component="div">Statistics</Typography>
                </Box>
                <Panel isMobile={isMobile}>

                    {/* TODO pass in different datasets here when user selects different tabs */}
                    <RadialStatsCard title={'Online Visitors'} value={312} maxValue={512} isMobile={isMobile} cardStyle={cardStyle} cardContentStyle={cardContentStyle}></RadialStatsCard>

                    <RadialStatsCard title={'New Visitors'} value={136} maxValue={381} isMobile={isMobile} cardStyle={cardStyle} cardContentStyle={cardContentStyle}></RadialStatsCard>

                    <StatsCard cardStyle={cardStyle} cardContentStyle={cardContentStyle}>
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
                    </StatsCard>

                </Panel>
            </Grid>

        </Grid>
    </>

)};
