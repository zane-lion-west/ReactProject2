import s from './ChartBar.module.scss';

/**
 * @typedef ChartBarProps
 *
 * @property {number} value - Chart Value for expenses monthly bar graph
 * @property {number} maxValue - Maximum value for expenses monthly bar graph
 * @property {string} label - Monthly label for expenses monthly bar graph
 *
 *
 * @param {ChartBarProps} props
 * @returns {JSX.Element}
 */

const ChartBar = props => {
  /**
   * @type {string} barPercentageLevel
   * @default '0%'
   *
   */
  let barPercentageLevel = '0%';

  if (props.maxValue > 0) {
    barPercentageLevel = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className={s.chart_bar}>
      <div className={s.chart_bar__inner}>
        <div
          className={s.chart_bar__fill}
          style={{ height: barPercentageLevel }}></div>
      </div>
      <div className={s.chart_bar__label}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
