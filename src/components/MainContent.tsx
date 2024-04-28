
import { Grid, Box, Card } from '@mui/material';
import SessionStatsSection from './SessionStatsSection';
import SessionInsightsSection from './SessionInsightsSection';

interface Props {
    isMobile: boolean;
    selectedTabIndex: number;
}

export default function MainContent({isMobile, selectedTabIndex}: Props) {

    const mainContainerStyle = {
        backgroundColor: 'lightblue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }

      const contentContainerStyle = {
        backgroundColor: 'gray',
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
					<Grid
						item
                        direction="row"
                        spacing={3}
						sx={{
							flex: '1',
							flexDirection: 'row',
							//alignItems: 'ce',
							...contentContainerStyle,
						}}>

                        <SessionStatsSection />

					</Grid>

					{/* Middle content container - TAB PANEL toggles Graph and other content */}
					{}
					<Grid item sx={{ flex: '2', alignItems: 'center', ...contentContainerStyle }}>

						{selectedTabIndex === 0 && (
							<Box sx={{ backgroundColor: 'mediumslateblue', width: '100%', height: '100%'}}>
								{/* Content for Tab 1 */}
								<h3>INTERACTIVE GRAPH</h3>
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
					<Grid
						item
						sx={{ flex: '1', alignItems: 'end', ...contentContainerStyle }}>
						<SessionInsightsSection />
					</Grid>
				</Grid>
			</>
		);}
