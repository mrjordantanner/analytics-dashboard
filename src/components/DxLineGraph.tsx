import React from 'react';
import { Chart, Series, CommonSeriesSettings, Grid, ArgumentAxis, ValueAxis, Title } from 'devextreme-react/chart';

const testData = {
    labels: ['Sun 15', 'Mon 16', 'Tue 17', 'Wed 18', 'Thu 19', 'Fri 20', 'Sat 21', 'Sun 22', 'Mon 23', 'Tue 24', 'Wed Thu 25', 'Fri 26', 'Sat 27', 'Sun 28', 'Mon 29', 'Tue 30'],
    datasets: [
        {
        id: 1,
        label: 'TestData1',
        data: [300, 315, 0, 0, 120, 130, 150, 180, 120, 220, 210, 280, 275, 315, 280, 80, 90],
        },
    ]
  }

export default function DxLineGraph() {
    return (
        <Chart
            id="smoothLineGraph"
            dataSource={[
                { arg: 'Sun 15', val: 300 },
                { arg: "Mon 16", val: 315 },
                { arg: 3, val: 30 },
                { arg: 4, val: 40 },
                { arg: 5, val: 50 },

            ]}
            title=""
        >
            <CommonSeriesSettings
                type="spline"
                color="#800080" // Purple line color
                width={2} // Medium thickness
            />
            <Series argumentField="arg" valueField="val" />
            <Grid visible={true} />
            <ArgumentAxis>
                <Grid visible={false} />
            </ArgumentAxis>
            <ValueAxis>
                <Grid visible={true} />
            </ValueAxis>
            <Title text="" />
        </Chart>
    );
};
