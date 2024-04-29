import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { Box } from '@mui/material';
import { GraphDataProps } from '../App';

// TODO pull data from either an API or TestData.js
export default function LineGraph({graphData}: GraphDataProps) {

	const options = {
		scales: {
			x: {
				grid: {
					display: false,
					tick: {
						stepSize: 100,
					},
				},
			},
			y: {
				grid: {
					display: true,
					color: 'rgba(0, 0, 0, 0.1)',
					lineWidth: 1, 
				},
			},
		},
		elements: {
			line: {
				tension: 0.5,
				borderColor: '#6b75ca',
				borderWidth: 2,
				fill: false,
				pointRadius: 0,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	return (
		<>
			<Box sx={{ width: '100%', height: '100%'}}>
				<Line redraw={true} options={options} data={graphData} />
			</Box>
		</>
	);
}
