
import { Grid, Box, Button } from '@mui/material';
import SessionStatsSection from './SessionStatsSection';
import SessionInsightsSection from './SessionInsightsSection';
import LineGraph from './LineGraph';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
//import type { GraphDataProps } from '../App';

interface Props {
    isMobile: boolean;
    selectedTabIndex: number;
	graphData: Data
}

// TODO consolidate these Props
interface Data {
	labels: string[];
	datasets: DataSet[];
  }
  
  interface DataSet {
	label: string;
	data: number[];
  }

export default function MainContent({isMobile, selectedTabIndex, graphData}: Props) {

    const mainContainerStyle = {
        //backgroundColor: 'lightblue',
		//border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        //justifyContent: 'space-evenly',
        alignItems: 'center',
    }

      const contentContainerStyle = {
        //backgroundColor: 'gray',
		//border: '1px solid lightgrey',
        height: '40%',
        width: '97%',
        //margin: '5px',
        display: 'flex',
        justifyContent: 'space-between'
    }
     
    return (
			<>
				<Grid item xs={12} md={8.25} sx={{ height: isMobile ? '65%' : '100%', ...mainContainerStyle }}>

					{/* Top content container - SESSION STATS */}
					<Grid
						sx={{ flex: '1', flexDirection: 'row', ...contentContainerStyle }}>
						<SessionStatsSection isMobile={isMobile} />
					</Grid>

					<Grid
						item
						sx={{alignItems: 'center', ...contentContainerStyle,
						}}>
						<h3>Sessions overview</h3>
						<Button sx={{backgroundColor: 'midnightblue'}} startIcon={<CloudDownloadIcon />} variant='contained' color='primary'>
							Download CSV
						</Button>
					</Grid>

					{/* Middle content container - TAB PANEL toggles Graph and other content */}
					<Grid item sx={{ flex: '2', alignItems: 'center', ...contentContainerStyle }}>

						{/* TODO Use switch/case or another method for conditional rendering here */}
						{selectedTabIndex === 0 && (
							<Box
								sx={{
									backgroundColor: '#6b75ca',
									width: '100%',
									height: '100%',
								}}>
								<LineGraph graphData={graphData} />
							</Box>
						)}
						{selectedTabIndex === 1 && (
							<Box>
								<p>TODO: Content for Tab 2</p>
							</Box>
						)}
						{selectedTabIndex === 2 && (
							<Box>
								<p>TODO: Content for Tab 3</p>
							</Box>
						)}
						{selectedTabIndex === 3 && (
							<Box>
								<p>TODO: Content for Tab 4</p>
							</Box>
						)}
					</Grid>

					{/* Bottom content container - INSIGHTS STATS */}
					<Grid
						item
						sx={{ flex: '1', alignItems: 'end', ...contentContainerStyle }}>
						<SessionInsightsSection />
					</Grid>
				</Grid>
			</>
		);}
