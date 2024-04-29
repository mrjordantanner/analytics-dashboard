
import { Grid, Box } from '@mui/material';
import SessionStatsSection from './SessionStatsSection';
import SessionInsightsSection from './SessionInsightsSection';
import LineGraph from './LineGraph';
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
		border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }

      const contentContainerStyle = {
        //backgroundColor: 'gray',
		border: '1px solid lightgrey',
        height: '40%',
        width: '97%',
        margin: '5px',
        display: 'flex',
        justifyContent: 'space-evenly'
    }
     
    return (
			<>
				{/* Main Container */}
				<Grid
					xs={12}
					md={8.25}
					item
					sx={mainContainerStyle}
					style={{ height: isMobile ? '65%' : '100%' }}>

					{/* Top content container - SESSION STATS */}
					<Grid sx={{flex: '1', flexDirection: 'row', ...contentContainerStyle}}>
                        	<SessionStatsSection isMobile={isMobile}/>
					</Grid>

					{/* Middle content container - TAB PANEL toggles Graph and other content */}
					<Grid item sx={{ flex: '2', alignItems: 'center', ...contentContainerStyle }}>

						{/* Content for Tab 1 */}
						{selectedTabIndex === 0 && (
							<Box sx={{ backgroundColor: 'mediumslateblue', width: '100%', height: '100%'}}>
								
								<LineGraph graphData={graphData}/>
							</Box>
						)}
						{selectedTabIndex === 1 && (
							<Box>
								{/* Content for Tab 2 */}
								<p>This is content for Tab 2</p>
							</Box>
						)}
						{selectedTabIndex === 2 && (
							<Box>
								{/* Content for Tab 3 */}
								<p>This is content for Tab 3</p>
							</Box>
						)}
                        {selectedTabIndex === 3 && (
							<Box>
								{/* Content for Tab 4 */}
								<p>This is content for Tab 4</p>
							</Box>
						)}

					</Grid>

					{/* Bottom content container - INSIGHTS STATS */}
					<Grid item sx={{ flex: '1', alignItems: 'end', ...contentContainerStyle }}>
						<SessionInsightsSection />
					</Grid>
				</Grid>
			</>
		);}
