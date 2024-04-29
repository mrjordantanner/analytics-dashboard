import { Grid } from '@mui/material';
import SessionStatsCard from './SessionStatsCard';

interface Props{
  isMobile: boolean;
}


export default function SessionStatsSection({isMobile}: Props) {

  const sessionStatsSectionStyle = {
    //backgroundColor: 'magenta',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'start',
    height: '100%',
    width: '100%'
  }
    
  const totalSessionsCardStyle = {
    backgroundColor: '#6b75ca', 
    color: 'white',
    width: '17vw', 
    height: '25vh', 
    borderRadius: '0px 0px 20px 20px', 
  }

  const sessionStatsCardStyle = {
    backgroundColor: 'white', 
    width: isMobile ? '100%' : '10vw', 
    height: '60%', 
    top: '0px', 
    borderRadius: '0px 0px 20px 20px', 
  }

  return (
    <Grid item sx={sessionStatsSectionStyle}>

        <SessionStatsCard
            cardStyle={totalSessionsCardStyle}
            title={'Total Sessions'} 
            value={'2100'} 
            percentChange={14} />

        <SessionStatsCard 
            cardStyle={sessionStatsCardStyle}
            title={'Total Visitors'} 
            value={'1228'} 
            percentChange={-3} />

        <SessionStatsCard 
            cardStyle={sessionStatsCardStyle}
            title={'Time Spent, Hr'}
            value={'6.92'} 
            percentChange={1} />

        <SessionStatsCard 
            cardStyle={sessionStatsCardStyle}
            title={'Avg requests received'}
            value={'2.3'} 
            percentChange={21} />

    </Grid>
  );
};
