import { Grid } from '@mui/material';
import SessionStatsCard from './SessionStatsCard';
import PrimaryStatsCard from './PrimaryStatsCard';
import { DashboardData } from '../data/DashboardData.d';


interface Props{
  isMobile: boolean;
  data: DashboardData;
}

export default function SessionStats({isMobile, data}: Props) {

  const sessionStatsSectionStyle = {
    //backgroundColor: 'white',
    display: isMobile ? 'grid(2)' : 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'start',
    height: '100%',
    width: '100%'
  }
    
  const totalSessionsCardStyle = {
    backgroundColor: '#6b75ca', 
    color: 'white',
    width: isMobile ? 'auto' : '17vw', 
    height: '25vh', 
    borderRadius: '0px 0px 20px 20px', 
  }

  const sessionStatsCardStyle = {
    backgroundColor: 'white', 
    width: isMobile ? 'auto' : '10vw', 
    height: '60%', 
    top: '0px', 
    borderRadius: '0px 0px 20px 20px', 
  }

  return (
    <Grid item sx={sessionStatsSectionStyle}>

        <PrimaryStatsCard
            isMobile={isMobile}
            data={data}
            cardStyle={totalSessionsCardStyle}
            title={'Total Sessions'} 
            value={data.totalSessions.value} 
            percentChange={data.totalSessions.percentChange} /> 

        <SessionStatsCard 
            cardStyle={sessionStatsCardStyle}
            title={'Total Visitors'} 
            value={data.totalVisitors.value} 
            percentChange={data.totalVisitors.percentChange} />

        <SessionStatsCard 
            cardStyle={sessionStatsCardStyle}
            title={'Time Spent, Hr'}
            value={data.timeSpent.value} 
            percentChange={data.timeSpent.value} />

        <SessionStatsCard 
            cardStyle={sessionStatsCardStyle}
            title={'Avg requests received'}
            value={data.avgRequestsReceived.value} 
            percentChange={data.avgRequestsReceived.percentChange} />

    </Grid>
  );
};
