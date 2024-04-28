import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import SessionStatsCard from './SessionStatsCard';



export default function SessionStatsSection() {

  const sessionStatsSectionStyle = {
    //backgroundColor: 'magenta',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'start',
    height: '100%',
    width: '100%'
  }
    
  const totalSessionsCardStyle = {
    backgroundColor: 'mediumslateblue', 
    color: 'white',
    width: '17vw', 
    height: '25vh', 
    borderRadius: '0px 0px 20px 20px', 
  }

  const sessionStatsCardStyle = {
    backgroundColor: 'white', 
    width: '10vw', 
    height: '60%', 
    top: '0px', 
    borderRadius: '0px 0px 20px 20px', 
  }


  return (
    <Grid item direction="row" spacing={3} sx={sessionStatsSectionStyle}>

        <SessionStatsCard
            cardStyle={totalSessionsCardStyle}
            title={'Total Sessions'} 
            value={'2100'} 
            percentChange={''} />

        <SessionStatsCard 
            cardStyle={sessionStatsCardStyle}
            title={'Total Visitors'} 
            value={'1228'} 
            percentChange={'-3%'} />

        <SessionStatsCard 
            cardStyle={sessionStatsCardStyle}
            title={'Time Spent, Hr'}
            value={'1228'} 
            percentChange={'1%'} />

        <SessionStatsCard 
            cardStyle={sessionStatsCardStyle}
            title={'Avg requests received'}
            value={'1228'} 
            percentChange={'+21%'} />

    </Grid>
  );
};
