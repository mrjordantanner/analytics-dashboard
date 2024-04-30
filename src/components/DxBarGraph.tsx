import {
	Chart,
	Series,
	CommonSeriesSettings,
	ArgumentAxis,
	ValueAxis,
	Title,
	Legend,
} from 'devextreme-react/chart';
import { DashboardData } from '../data/DashboardData.d';

interface Props {
	data: DashboardData;
}

interface ViewsPerBrowserDataPoint {
	browser: string;
	views: number;
}

interface MappedDataPoint {
	argument: string;
	value: number;
}

const mapData = (data: ViewsPerBrowserDataPoint[]): MappedDataPoint[] => {
	return data.map((point) => ({
		argument: point.browser,
		value: point.views,
	}));
};

export default function DxBarGraph({ data }: Props) {
	const mappedData = mapData(data.viewsPerBrowserData);

	return (

        <Chart id='bar-chart' dataSource={mappedData} title=''>
            <CommonSeriesSettings argumentField='argument' color='#6b75ca' type='bar'/>
            <Series valueField='value' name='Value'/>
            <ArgumentAxis />
            <ValueAxis />
            <Title />
            <Legend visible={false} />
        </Chart>
	);
}
