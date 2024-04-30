import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import PercentChangeLabel from './PercentChangeLabel';
import DxLineGraph from './DxLineGraph';
import { DashboardData } from '../data/DashboardData.d';

interface Props {
	title: string;
	value: number;
	percentChange: number;
	cardStyle: React.CSSProperties;
	data: DashboardData;
}

export default function PrimaryStatsCard({title, value, percentChange, cardStyle, data}: Props) {

  return (
		<Grid item key={title}>
			<Card sx={{ fontSize: '1rem', ...cardStyle }}>
				<CardContent>
					<Typography variant='h3' fontWeight={'bold'} component='div'>
						{value}
					</Typography>
					<Typography variant='h5' fontSize={10} color='text.secondary'>
						{title.toUpperCase()}
					</Typography>
					<PercentChangeLabel percentChange={percentChange} />

					<Box sx={{display: 'flex'}}>
						<DxLineGraph data={data} color={'white'} showGrid={false} showAxes={false}/>
					</Box>
				</CardContent>
			</Card>
		</Grid>
	);
};
