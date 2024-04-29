
import { Grid, Card, Box, CardContent, Typography } from '@mui/material';
import RadialProgressBar from './RadialProgressBar';

interface Props{
  title: string;
  value: number;
  maxValue: number;
  cardStyle: React.CSSProperties;
  cardContentStyle: React.CSSProperties;
}

export default function RadialStatsCard({title, value, maxValue, cardStyle, cardContentStyle }: Props) {


  return (
        <Grid item key={title} xs={12}>
          <Card sx={cardStyle}>
            <CardContent sx={cardContentStyle}>

            <Box sx={{display: 'flex'}}>
              <Typography sx={{width: '20%'}} variant="body1" color="text.secondary"> 
                {title}
              </Typography>
              </Box>

              <Box sx={{display: 'flex'}}>
                <RadialProgressBar value={value} maxValue={maxValue}/>
              </Box>

              <Box sx={{display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" component="div">MAX {maxValue}</Typography>
                <Typography variant="h4" component="div" sx={{color: '#6b75ca'}}>{value}</Typography>
              </Box>

            </CardContent>
          </Card>
        </Grid>
  );
};
