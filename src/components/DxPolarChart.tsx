import { PolarChart, Series, CommonSeriesSettings, ArgumentAxis, ValueAxis, Title, Legend, Tooltip } from 'devextreme-react/polar-chart';
import { DashboardData } from '../data/DashboardData.d';

interface Props {
	data: DashboardData;
}

interface ViewsPerBrowserDataPoint {
    browser: string;
    views: number;
  }

interface MappedDataPoint {
    arg: string;
    val: number;
  }

function mapPolarGraphData(lineGraphData: ViewsPerBrowserDataPoint[]): MappedDataPoint[] {
    return lineGraphData.map(({ browser, views }) => ({
      arg: browser,
      val: views
    }));
}


// TODO pull data from either an API or TestData.js
export default function RadarGraph({data}: Props) {

    const mappedData = mapPolarGraphData(data.viewsPerBrowserData);

    return (
			<PolarChart id='radarGraph' dataSource={mappedData} title=''>
				<CommonSeriesSettings
					type='line'
					line={{
						width: 2,
						color: '#6b75ca',
						dashStyle: 'solid', 
					}}
					point={{ visible: false }}
					area={{
						opacity: 0.5,
						color: '#6b75ca',
					}}
				/>
				<Series />
				<ArgumentAxis
					tickInterval={1}
					label={{
						format: {
							type: 'fixedPoint',
							precision: 0,
						},
					}}
				/>
				<ValueAxis
					tickInterval={10}
					grid={{
						visible: true,
						width: 1,
					}}
				/>
				<Title text='' />
				<Legend visible={false} />
				<Tooltip
					enabled={true}
					customizeTooltip={(arg) => {
						return {
							text: `${arg.argumentText}: ${arg.valueText} views`,
						};
					}}
				/>
			</PolarChart>
		);


};
