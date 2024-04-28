
import { Grid, Card, CardContent, Typography } from '@mui/material';

interface Props{
  title: string;
  value: string;
  numberSessions: number;

}

export default function SessionInsightsCard({title, value, numberSessions}: Props) {

const cardStyle = {
    minWidth: '250px', 
    height: '100%', 
    borderRadius: '20px'
};

  return (
        <Grid item key={title}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">{title}</Typography>
              <Typography variant="h6" component="div">{value}</Typography>

              <Typography variant="h4" component="div">{numberSessions}</Typography>
              <Typography variant="body2" color="text.secondary">/ Sessions</Typography>
            </CardContent>
          </Card>
        </Grid>
  );
};
