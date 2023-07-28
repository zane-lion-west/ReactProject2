import s from './Chart.module.scss';

import ChartBar from './ChartBar';

/**
 * @typedef ChartProps
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
