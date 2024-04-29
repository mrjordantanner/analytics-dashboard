
import { Grid, Box, Button } from '@mui/material';
import SessionStatsSection from './SessionStatsSection';
import SessionInsightsSection from './SessionInsightsSection';
import GraphContainer from './GraphContainer';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import type { GraphDataProps } from '../App';

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
        alignItems: 'center',
		//height: '100vh'
    }

      const contentContainerStyle = {
        //backgroundColor: 'gray',
		//border: '1px solid lightgrey',
        display: 'flex',
        width: '97%',
        gap: '10px',
        justifyContent: 'space-between'
    }
     
    return (
		<>
			<Grid item xs={12} md={8.25} sx={mainContainerStyle}>

				{/* Top Cards - SESSION STATS */}
				<Grid
					sx={{ flex: 1, flexDirection: 'row', ...contentContainerStyle }}>
					<SessionStatsSection isMobile={isMobile} />
				</Grid>

				{/* Graph Header - TODO Add time range tabs */}
				<Grid item sx={{ flex: 2, alignItems: 'center', ...contentContainerStyle, }}>
					<h3>Sessions overview</h3>
					<Button sx={{backgroundColor: 'midnightblue'}} startIcon={<CloudDownloadIcon />} variant='contained' color='primary'>
						Download CSV
					</Button>
				</Grid>

				{/* Middle - Tab Panel toggled by Navbar tabs switches Graph content */}
				<GraphContainer isMobile={isMobile} selectedTabIndex={selectedTabIndex} graphData={graphData}/>

				{/* Bottom Cards - INSIGHTS STATS */}
				<Grid
					item
					sx={{ flex: 1, alignItems: 'end', ...contentContainerStyle }}>
					<SessionInsightsSection isMobile={isMobile} />
				</Grid>
			</Grid>
		</>
		);}
