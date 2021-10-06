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

type Props = {
  chartData: ChartData[]
}
const BarChart: React.FC<Props> = ({ chartData }) => {
  
  return (
    <Paper>
      <Chart
        data={chartData}
      >
        <ArgumentAxis />
        <ValueAxis />

        <BarSeries
          valueField="temperature"
          argumentField="time"
        />
        <Title text="" />
        <Animation />
      </Chart>
    </Paper>
  );
}

export default BarChart;
