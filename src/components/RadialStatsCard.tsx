
import { Grid, Card, Box, CardContent, Typography } from '@mui/material';
import RadialProgressBar from './RadialProgressBar';

interface Props{
  title: string;
  value: number;
  maxValue: number;
}

export default function RadialStatsCard({title, value, maxValue }: Props) {

const cardStyle = { 
  backgroundColor: 'lavender',
  width: '20vw', 
  borderRadius: '20px',
}

const cardContentStyle = {
    width: '100%', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

  return (
        <Grid item key={title}>
          <Card sx={cardStyle}>
            <CardContent sx={cardContentStyle}>

              <Typography sx={{width: '20%'}} variant="body1" color="text.secondary">{title}</Typography>
              <RadialProgressBar value={value} maxValue={maxValue}/>

              <Box sx={{display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" component="div">MAX {maxValue}</Typography>
                <Typography variant="h4" component="div" sx={{color: '#6b75ca'}}>{value}</Typography>
              </Box>

            </CardContent>
          </Card>
        </Grid>
  );
};
