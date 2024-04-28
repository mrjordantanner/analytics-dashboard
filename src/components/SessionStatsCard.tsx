
import { Grid, Card, CardContent, Typography } from '@mui/material';

interface Props {
  title: string;
  value: string;
  percentChange: string;
  cardStyle: React.CSSProperties;

}


export default function SessionStatsCard({title, value, percentChange, cardStyle}: Props) {

  return (
        <Grid item key={title}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" component="div">{value}</Typography>
              <Typography variant="body2" color="text.secondary">{title}</Typography>
              <Typography variant="h4" component="div">{percentChange}</Typography>
            </CardContent>
          </Card>
        </Grid>
  );
};
