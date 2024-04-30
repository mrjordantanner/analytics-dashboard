import { Grid, Card, CardContent, Typography } from '@mui/material';
import PercentChangeLabel from './PercentChangeLabel';

interface Props {
	title: string;
	value: number;
	percentChange: number;
	cardStyle: React.CSSProperties;
}

export default function SessionStatsCard({title, value, percentChange, cardStyle}: Props) {

  return (
		<Grid item key={title}>
			<Card sx={{ fontSize: '1rem', ...cardStyle }}>
				<CardContent>
					<Typography variant='h5' fontWeight={'bold'} component='div'>
						{value}
					</Typography>
					<Typography variant='body2' fontSize={10} color='text.secondary'>
						{title.toUpperCase()}
					</Typography>
					<PercentChangeLabel percentChange={percentChange} />
				</CardContent>
			</Card>
		</Grid>
	);
};
