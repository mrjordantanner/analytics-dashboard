import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface Props{
  isMobile: boolean;
  icon?: React.ReactElement<SvgIconProps>;
  title: string;
  value: string;
  numberSessions: number;
}

export default function SessionInsightsCard({isMobile, icon, title, value, numberSessions }: Props) {

const cardStyle = {
  backgroundColor: '#eff2f8',
  borderRadius: '20px',
  //height: isMobile ? '15vh' :'10vw',
  width: isMobile ? '40vh' : '100%',
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
            <CardContent sx={cardContentStyle}>
            <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                <Box>
                  {icon && icon}
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
