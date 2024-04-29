import { Grid } from '@mui/material';
import SessionInsightsCard from './SessionInsightsCard';

// import { SvgIconProps } from '@mui/material/SvgIcon';
// import WindowsIcon from '@mui/icons-material';
// import StackOverflowIcon from '@mui/icons-material';
// import ChromeIcon from '@mui/icons-material';
// import OutlookIcon from '@mui/icons-material';

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
            isMobile={isMobile}
            //icon={WindowsIcon}
            title={'Top Platform'} 
            value={'Windows'} 
            numberSessions={1883} />

        <SessionInsightsCard 
          isMobile={isMobile}
            title={'Top Sources'} 
            value={'Stack Overflow'} 
            numberSessions={420} />

        <SessionInsightsCard 
          isMobile={isMobile}
            title={'Top Browser'} 
            value={'Chrome'} 
            numberSessions={2010} />

        <SessionInsightsCard 
          isMobile={isMobile}
            title={'Top Email'} 
            value={'Outlook'} 
            numberSessions={326} />

    </Grid>
  );
};
