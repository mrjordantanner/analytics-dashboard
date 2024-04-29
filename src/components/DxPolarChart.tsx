import { PolarChart, Series, CommonSeriesSettings, ArgumentAxis, ValueAxis, Title, Legend } from 'devextreme-react/polar-chart';

// TODO pull data from either an API or TestData.js
export default function RadarGraph() {
    return (
        <PolarChart
            id="radarGraph"
            dataSource={[
                { argument: 'Firefox', value: 20 },
                { argument: 'Safari', value: 30 },
                { argument: 'Chrome', value: 50 },
                { argument: 'Explorer', value: 25 },
            ]}
            title=""
        >
            <CommonSeriesSettings
                type="line"
            />
            <Series />
            <ArgumentAxis
                tickInterval={1}
                label={{
                    format: {
                        type: 'fixedPoint',
                        precision: 0
                    }
                }}
            />
            <ValueAxis
                tickInterval={10}
            />
            <Title text="" />
            <Legend visible={false} />
        </PolarChart>
    );
};
