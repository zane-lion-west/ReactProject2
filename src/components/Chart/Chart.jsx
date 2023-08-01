import s from './Chart.module.scss';

import ChartBar from './ChartBar';

/**
 * @typedef ChartProps
 * 
 * @property {number} dataPointValues - Pre mapped value for the bar graph
 * @property {number} totalMaximum - Pre mapped value for the maximum value of the bar graph
 * 
 * @property {string} key - Key for the bar graph, it is using the label currently 
 * @property {string} label - Month label for the bar graph
 * @property {number} value - Value for the bar graph
 * @property {number} maxValue - Maximum value for the bar graph
 *  
 * @param {ChartProps} props
 * @returns {JSX.Element}
 */
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  
  return ( 
    <div className={s.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}  
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
        ))}
  </div>
  );
};

export default Chart;
