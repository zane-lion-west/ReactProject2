import Chart from './Chart';
import s from './ExpensesChart.module.scss';

/**
 * @typedef ExpensesChartProps
 * 
 * @property {string} label - The label for the individual month on the chart
 * @property {number} value - The base value for the individual chart elements
 * 
 * @property {date} expenseMonth - Iterated month from dummy expenses array for the chart
 * @property {number} chartDataPoints - collecting and transforming dummy expenses value for the monthly value of the chart
 * 
 * @param {ExpensesChartProps} props
 * @returns {JSX.Element}
 */
const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0},
    { label: 'Feb', value: 0},
    { label: 'Mar', value: 0},
    { label: 'Apr', value: 0},
    { label: 'May', value: 0},
    { label: 'Jun', value: 0},
    { label: 'Jul', value: 0},
    { label: 'Aug', value: 0},
    { label: 'Sep', value: 0},
    { label: 'Oct', value: 0},
    { label: 'Nov', value: 0},
    { label: 'Dec', value: 0},
  ];
  
  for  (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // 0 index => Jan = 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  
  return ( <Chart dataPoints={chartDataPoints}/>
  );
};

export default ExpensesChart;
