import { Grid } from '@mui/material';
import SessionInsightsCard from './SessionInsightsCard';

//import windows from '../assets/windows.png';
// import chrome from '../assets/chrome.png';
// import outlook from '../assets/outlook.png';
// import stackOverflow from '../assets/stack_overflow.png';

interface Props {
  isMobile: boolean;
}

export default function SessionInsightsSection({isMobile}: Props) {

  const sessionInsightsSectionStyle = {
    //backgroundColor: 'magenta',
    display: 'flex',
    gap: '10px', 
    alignItems: 'center',
    flexDirection: isMobile ? 'column' : 'row',
    width: '100%',
    //height: isMobile ? '50vw': '20vh'
};


  return (
    <Grid item sx={sessionInsightsSectionStyle}>

        <SessionInsightsCard 
            iconPath={'src/assets/windows.png'}
            isMobile={isMobile}
            title={'Top Platform'} 
            value={'Windows'} 
            numberSessions={1883} />

        <SessionInsightsCard 
            iconPath={'src/assets/stack_overflow.png'}
            isMobile={isMobile}
            title={'Top Sources'} 
            value={'Stack Overflow'}
            numberSessions={420} />

        <SessionInsightsCard 
            iconPath={'src/assets/chrome.png'}
          isMobile={isMobile}
            title={'Top Browser'} 
            value={'Chrome'} 
            numberSessions={2010} />

        <SessionInsightsCard 
            iconPath={'src/assets/outlook.png'}
          isMobile={isMobile}
            title={'Top Email'} 
            value={'Outlook'} 
            numberSessions={326} />

    </Grid>
  );
};
