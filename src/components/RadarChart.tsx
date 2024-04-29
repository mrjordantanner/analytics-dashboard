import 'chart.js/auto';
import { Radar } from 'react-chartjs-2';
import { Box } from '@mui/material';
//import { GraphDataProps } from '../App';


// TODO consolidate chart/graph components
export default function RadarChart() {

	const testData = {
		labels: ['Firefox', 'Explorer', 'Chrome', 'Safari'],
		datasets: [
			{
			id: 1,
			label: 'Browsers',
			data: [32, 30, 38, 12],
			},
		]
	}

	const options = {
		elements: {
			line: {
				tension: .3,
				borderWidth: 1.5,
				borderColor: '#6b75ca',
				backgroundColor: 'rgba(107, 117, 202, 0.25)', 
				borderRadius: 20, 
			}
		},
		scales: {
			r: {
				angleLines: {
					display: true,
					color: 'rgba(0, 0, 0, 0.1)', 
				},
				grid: {
					circular: true,
					color: 'rgba(0, 0, 0, 0.1)',
					lineWidth: 1, // Set grid line width
					drawBorder: false, // Hide the border of the grid area
					borderDash: [2, 2], // Set border dash pattern
					step: 10
				},
				pointLabels: {
					font: {
						size: 12, 
					},
				},
				ticks: {
					beginAtZero: true, 
					backdropColor: 'rgba(0, 0, 0, 0)', 
					
				},
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
			<Box sx={{ backgroundColor: 'lavender', width: '100%', height: '100%'}}>
				<Radar redraw={true} options={options} data={testData} />
			</Box>
		</>
	);
}
