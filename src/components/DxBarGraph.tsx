import { Chart, Series, CommonSeriesSettings, ArgumentAxis, ValueAxis, Title, Legend } from 'devextreme-react/chart';

export default function DxBarGraph() {
    return (
        <Chart
            id="barGraph"
            dataSource={[
                { argument: 'Firefox', value: 20 },
                { argument: 'Chrome', value: 30 },
                { argument: 'Safari', value: 10 },
                { argument: 'Explorer', value: 25 },
            ]}
            title=""
        >
            <CommonSeriesSettings
                type="bar"
                color="#6b75ca" 
                width={5}
            />
            <Series />
            <ArgumentAxis />
            <ValueAxis />
            <Title text="" />
            <Legend visible={false} />
        </Chart>
    );
};
