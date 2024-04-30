import 'chart.js/auto';
import { Radar } from 'react-chartjs-2';
import { Box } from '@mui/material';
import { DashboardData } from '../data/DashboardData.d';

interface Props {
	data: DashboardData;
}
interface ViewsPerBrowserDataPoint {
	browser: string;
	views: number;
}

interface ChartData {
	labels: string[];
	datasets: { data: number[] }[];
}

function mapData(data: ViewsPerBrowserDataPoint[]): ChartData {
	const labels: string[] = [];
	const datasetData: number[] = [];

	data.forEach((item: ViewsPerBrowserDataPoint) => {
		labels.push(item.browser);
		datasetData.push(item.views);
	});

	return {
		labels: labels,
		datasets: [{ data: datasetData }],
	};
}

export default function PolarChart({ data }: Props) {
	const mappedData = mapData(data.viewsPerBrowserData);

	const options = {
		elements: {
			line: {
				tension: 0.5,
				borderWidth: 1.5,
				borderColor: '#6b75ca',
				backgroundColor: 'rgba(107, 117, 202, 0.25)',
				borderRadius: 20,
			},
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
					lineWidth: 1,
					suggestedMin: 0,
					suggestedMax: 40,
				},
				pointLabels: {
					font: {
						size: 12,
					},
				},
				ticks: {
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
			<Box sx={{ width: '100%', height: '100%' }}>
				<Radar redraw={true} options={options} data={mappedData} />
			</Box>
		</>
	);
}
