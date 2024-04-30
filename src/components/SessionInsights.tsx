import { Grid } from '@mui/material';
import SessionInsightsCard from './SessionInsightsCard';
import { DashboardData } from '../data/DashboardData.d';

interface Props {
  isMobile: boolean;
  data: DashboardData;
}

export default function SessionInsights({isMobile, data}: Props) {

  const sessionInsightsSectionStyle = {
    //backgroundColor: 'magenta',
    //gridTemplateColumns: 'minmax(100px, 1fr) 3fr',
    display: isMobile ? 'grid(2)' : 'flex',
    height: isMobile ? '65vh': '20vh',
    flexDirection: 'row',
    gap: '10px', 
    width: '100%',
};


  return (
    <Grid item sx={sessionInsightsSectionStyle}>

        <SessionInsightsCard 
            iconPath={'/assets/windows.png'}
            isMobile={isMobile}
            title={'Top Platform'} 
            value={'Windows'} 
            numberSessions={data.windowsSessions} />

        <SessionInsightsCard 
            iconPath={'/assets/stack_overflow.png'}
            isMobile={isMobile}
            title={'Top Sources'} 
            value={'Stack Overflow'}
            numberSessions={data.stackOverflowSessions} />

        <SessionInsightsCard 
            iconPath={'/assets/chrome.png'}
          isMobile={isMobile}
            title={'Top Browser'} 
            value={'Chrome'} 
            numberSessions={data.chromeSessions} />

        <SessionInsightsCard 
            iconPath={'/assets/outlook.png'}
            isMobile={isMobile}
            title={'Top Email'} 
            value={'Outlook'} 
            numberSessions={data.outlookSessions} />

    </Grid>
  );
};
