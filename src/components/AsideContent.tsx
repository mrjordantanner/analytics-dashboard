
import { Grid, Box, Card } from '@mui/material';
import StatsPanel from './StatsPanel';

interface Props {
    isMobile: boolean;
}

export default function AsideContent({isMobile}: Props) {

      const asideContainerStyle = {
        backgroundColor: 'lightgreen',
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        justifyContent: 'space-evenly'
      };

    return(
        <>
        {/* Aside Container */}
        <Grid xs={12 } md={true} item sx={asideContainerStyle}style={{height: isMobile ? '35%' : '100%'}}>

            <StatsPanel isMobile={isMobile} labelText={'Views by browser'}></StatsPanel>
            <StatsPanel isMobile={isMobile} labelText={'Statistics'}></StatsPanel>

        </Grid>
    </>

)};
