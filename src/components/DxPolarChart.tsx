import React from 'react';
import { PolarChart, Series, CommonSeriesSettings, ArgumentAxis, ValueAxis, Title, Legend } from 'devextreme-react/polar-chart';

export default function RadarGraph() {
    return (
        <PolarChart
            id="radarGraph"
            dataSource={[
                { argument: 'Argument 1', value: 20 },
                { argument: 'Argument 2', value: 30 },
                { argument: 'Argument 3', value: 50 },
                { argument: 'Argument 4', value: 25 },
            ]}
            title="Circular Radar Graph"
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
