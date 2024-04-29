import { Grid } from '@mui/material';
import SessionInsightsCard from './SessionInsightsCard';

const sessionInsightsSectionStyle = {
  //backgroundColor: 'magenta',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  height: '100%',
  width: '100%'

}

export default function SessionInsightsSection() {

  return (
    <Grid item sx={sessionInsightsSectionStyle}>

        <SessionInsightsCard 
            title={'Top Platform'} 
            value={'Windows'} 
            numberSessions={1883} />

        <SessionInsightsCard 
            title={'Top Sources'} 
            value={'Stack Overflow'} 
            numberSessions={420} />

        <SessionInsightsCard 
            title={'Top Browser'} 
            value={'Chrome'} 
            numberSessions={2010} />

        <SessionInsightsCard 
            title={'Top Email'} 
            value={'Outlook'} 
            numberSessions={326} />

    </Grid>
  );
};
