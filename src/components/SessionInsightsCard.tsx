
import { Grid, Card, CardContent, Typography } from '@mui/material';

interface Props{
  title: string;
  value: string;
  numberSessions: number;

}

export default function SessionInsightsCard({title, value, numberSessions}: Props) {

const cardStyle = {
    height: '150',   //20vw
    borderRadius: '20px',
    margin: '1vh'
};

  return (
        <Grid item xs={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent sx={{border: '2px solid cyan'}}>
              <Typography variant="body2" color="text.secondary">{title}</Typography>
              <Typography variant="h6" component="div">{value}</Typography>

              <Typography variant="h4" component="div">{numberSessions}</Typography>
              <Typography variant="body2" color="text.secondary">/ sessions</Typography>
            </CardContent>
          </Card>
        </Grid>
  );
};
