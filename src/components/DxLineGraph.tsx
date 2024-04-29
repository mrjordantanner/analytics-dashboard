import { Chart, Series, CommonSeriesSettings, Grid, ArgumentAxis, ValueAxis, Title, Legend } from 'devextreme-react/chart';

// TODO pull data from either an API or TestData.js
export default function DxLineGraph() {
    return (
        <Chart
            id="smoothLineGraph"
            dataSource={[
                { arg: 'Sun 15', val: 300 },
                { arg: "Mon 16", val: 315 },
                { arg: "Tue 17", val: 220 },
                { arg: "Wed 18", val: 380 },
                { arg: "Thu 19", val: 270 },
            ]}
            title=""
        >
            <CommonSeriesSettings
                type="spline"
                color="#6b75ca" 
                width={2}
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
            <Legend visible={false} />
        </Chart>
    );
};
