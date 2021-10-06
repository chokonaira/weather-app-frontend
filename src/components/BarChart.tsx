import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { ChartData } from '../constants/types';
import { dafaultChartData } from "./../constants/defaultChartData";

type Props = {
  chartData: ChartData[]
}
const BarChart: React.FC<Props> = ({ chartData }) => {

  const data = () => {
    if(chartData?.length > 0) {
      return chartData
    } else {
      return dafaultChartData
    }
  }

  return (
    <Paper>
      <Chart
        data={data()}
      >
        <ArgumentAxis />
        <ValueAxis />

        <BarSeries
          valueField="temperature"
          argumentField="time"
        />
        <Title text="Click weather to card to see preview" />
        <Animation />
      </Chart>
    </Paper>
  );
}

export default BarChart;
