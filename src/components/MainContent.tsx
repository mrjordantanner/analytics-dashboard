import { Grid, Typography, Button } from '@mui/material';
import SessionStats from './SessionStats';
import SessionInsights from './SessionInsights';
import GraphContainer from './GraphContainer';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { DashboardData } from '../data/DashboardData.d';

interface Props {
    isMobile: boolean;
    selectedTabIndex: number;
	data: DashboardData;
}

export default function MainContent({isMobile, selectedTabIndex, data}: Props) {
	const mainContainerStyle = {
		//border: '2px solid blue',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	};

	const contentContainerStyle = {
		//border: '2px solid lightgrey',
		display: 'flex',
		width: '97%',
		gap: '10px',
		justifyContent: 'space-between',
	};

	return (
		<>
			<Grid item xs={12} md={8.25} sx={mainContainerStyle}>
				<Grid sx={{ flex: 1, flexDirection: 'row', ...contentContainerStyle }}>
					<SessionStats isMobile={isMobile} data={data} />
				</Grid>

				{/* Graph Header - TODO Add time range tabs */}
				{!isMobile && (
					<Grid
						item
						sx={{ flex: 2, alignItems: 'center', padding: '0px 40px', ...contentContainerStyle }}>
						<Typography variant='h4'>Sessions overview</Typography>
						<Button
							sx={{ backgroundColor: '#393c51' }}
							startIcon={<CloudDownloadIcon />}
							variant='contained'
							color='primary'>
							Download CSV
						</Button>
					</Grid>
				)}

				{/* Middle - Graph Panel changed by Navbar tabs */}
				<GraphContainer
					isMobile={isMobile}
					selectedTabIndex={selectedTabIndex}
					data={data}
				/>

				{/* Bottom Cards - Insights Stats */}
				<Grid
					item
					sx={{ flex: 1, alignItems: 'end', ...contentContainerStyle }}>
					<SessionInsights isMobile={isMobile} data={data} />
				</Grid>
			</Grid>
		</>
	);
}
