import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

interface Props{
  isMobile: boolean;
  iconPath?: string;
  title: string;
  value: string;
  numberSessions: number;
}

export default function SessionInsightsCard({isMobile, iconPath, title, value, numberSessions }: Props) {

const cardStyle = {
  backgroundColor: 'white',
  borderRadius: isMobile ? '0px 0px 20px 20px' : '20px',
  width: isMobile ? '97vw' : '100%',
  
}

const cardContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-apart',
    alignItems: 'center',
};

  return (
        <Grid item xs={12} md={6}>
          <Card sx={cardStyle}>
            <CardContent sx={{fontSize: '1rem', ...cardContentStyle}} >
            <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
              <Box sx={{marginRight: '15px'}}>
                  <img src={iconPath} alt='icon' style={{width: '25px'}} />
              </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">{title.toUpperCase()}</Typography>
                  <Typography variant="h6" component="div">{value}</Typography>
                </Box>
              </Box>

              <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                <Typography variant="h4" component="div">{numberSessions}</Typography>
                <Typography variant="body2" color="text.secondary">/ sessions</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
  );
};
