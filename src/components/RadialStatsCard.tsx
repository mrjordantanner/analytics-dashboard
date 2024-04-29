
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
  width: '100%', 
  borderRadius: '20px',
  border: '2px solid purple',
}

const cardContentStyle = {

    width: '100%', 
    display: 'flex',
    flex: 1,
    justifyContent: 'space-apart',
    alignItems: 'center'
};

  return (
        <Grid item key={title}>
          <Card sx={cardStyle}>
            <CardContent sx={cardContentStyle}>

              <Typography sx={{width: '20%'}} variant="body1" color="text.secondary">{title}</Typography>
              <RadialProgressBar value={value} maxValue={maxValue}/>

              <Box sx={{backgroundColor: 'yellow', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" component="div">Max {maxValue}</Typography>
                <Typography variant="h3" component="div" sx={{color: 'mediumslateblue'}}>{value}</Typography>
              </Box>

            </CardContent>
          </Card>
        </Grid>
  );
};
