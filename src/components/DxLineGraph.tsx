import {
	Chart,
	Series,
	CommonSeriesSettings,
	Grid,
	ArgumentAxis,
	ValueAxis,
	Title,
	Legend,
	Tooltip,
} from 'devextreme-react/chart';
import { DashboardData } from '../data/DashboardData.d';

interface Props {
	data: DashboardData;
	color: string;
	showGrid: boolean;
	showAxes: boolean;
}

interface SessionsPerDayDataPoint {
	day: string;
	sessions: number;
}

interface MappedDataPoint {
	arg: string;
	val: number;
}

function mapLineGraphData(lineGraphData: SessionsPerDayDataPoint[]): MappedDataPoint[] {
	return lineGraphData.map(({ day, sessions }) => ({
		arg: day,
		val: sessions,
	}));
}

export default function DxLineGraph({ data, color, showGrid, showAxes }: Props) {
	const mappedData = mapLineGraphData(data.sessionsPerDayData);

	return (
		<Chart id='sessionsPerDayLineGraph' dataSource={mappedData} title=''>
			<CommonSeriesSettings
				type='spline'
				color={color}
				width={2}
				point={{ size: 0, visible: false }}
			/>
			<Series argumentField='arg' valueField='val' />
			<ArgumentAxis visible={showAxes} color='white'>
				<Grid visible={false} />
			</ArgumentAxis>
			<ValueAxis visible={showAxes} color='white'>
				<Grid visible={showGrid} />
			</ValueAxis>
			<Title text='' />
			<Legend visible={false} />
			<Tooltip
				enabled={true}
				customizeTooltip={(arg) => {
					return {
						text: `${arg.argumentText}, Sessions: ${arg.valueText}`,
					};
				}}
			/>
		</Chart>
	);
}
