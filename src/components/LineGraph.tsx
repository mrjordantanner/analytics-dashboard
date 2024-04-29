import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { Box } from '@mui/material';
import { GraphDataProps } from '../App';


// TODO consolidate chart/graph components
export default function LineGraph({graphData}: GraphDataProps) {

    // TODO re-render on window resize
	return (
		<>
			<Box sx={{ backgroundColor: 'lavender', width: '100%', height: '100%'}}>
				<Line data={graphData} />
			</Box>
		</>
	);
}
