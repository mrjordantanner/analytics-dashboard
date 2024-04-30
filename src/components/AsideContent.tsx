import { Grid, Box, Typography } from '@mui/material';
import Panel from './Panel';
import RadialStatsCard from './RadialStatsCard';
import StatsCard from './StatsCard';
import GraphWithToggle from './GraphWithToggle';

import { DashboardData } from '../data/DashboardData.d';

interface Props {
	isMobile: boolean;
	selectedTabIndex: number;
	data: DashboardData;
}

export default function AsideContent({ isMobile, data }: Props) {
	const asideContainerStyle = {
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		justfiyContent: 'space-around',

	};

	const cardStyle = {
		backgroundColor: '#eff2f8',
		borderRadius: '20px',
		width: isMobile ? '90vw' : '20vw',
		height: isMobile ? '15vh' : '5vw',
	};

	const cardContentStyle = {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		maxHeight: '200px',
	};

	return (
		<>
			<Grid item xs={12} md={true} sx={asideContainerStyle}>
				<Grid item>
					<Panel>
						<GraphWithToggle data={data} labelText={'Views by browser'} />
					</Panel>
				</Grid>

				<Grid item>
					<Box sx={{ display: 'flex', flex: '1', margin: '0px 15px' }}>
						<Typography variant='h6' component='div'>
							Statistics
						</Typography>
					</Box>
					<Panel>
						<RadialStatsCard
							title={'Online Visitors'}
							value={data.onlineVisitors.current}
							maxValue={data.onlineVisitors.max}
							cardStyle={cardStyle}
							cardContentStyle={cardContentStyle}></RadialStatsCard>

						<RadialStatsCard
							title={'New Visitors'}
							value={data.newVisitors.current}
							maxValue={data.newVisitors.max}
							cardStyle={cardStyle}
							cardContentStyle={cardContentStyle}></RadialStatsCard>

						<StatsCard
							cardStyle={cardStyle}
							cardContentStyle={cardContentStyle}>
							<Box sx={{ display: 'flex', flex: '1' }}>
								<Typography
									sx={{ width: '20%' }}
									variant='h5'
									color='text.secondary'>
									Average Revenue
								</Typography>
							</Box>

							<Box sx={{ display: 'flex', flex: '1', justifyContent:'flex-end' }}>
								<Typography variant='h4' component='div'>
									{data.averageRevenue.value}
								</Typography>
							</Box>

							<Box
								sx={{
									display: 'flex',
									flex: '1',
									flexDirection: 'column',
									justifyContent: 'space-evenly',
									alignItems: 'center',
								}}>
								<Typography
									variant='h6'
									component='div'
									sx={{
										backgroundColor: '#6b75ca',
										color: 'white',
										padding: '5px',
										borderRadius: '5px',
									}}>
									{data.averageRevenue.percentChange}%
								</Typography>
							</Box>
						</StatsCard>
					</Panel>
				</Grid>
			</Grid>
		</>
	);
}
