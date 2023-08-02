import s from './ExpenseDate.module.scss';

/**
 * @typedef ExpenseDateProps
 *
 * @property {date} month - Month of the expenses objects date
 * @property {day} day - Day of the expenses object date
 * @property {year} year - Year of the expenses object date
 *
 * @param {ExpenseDateProps} props
 * @returns {JSX.Element}
 */
const ExpenseDate = props => {
  const month = props.date.toLocaleString('en-UK', { month: 'long' });
  const day = props.date.toLocaleString('en-UK', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className={s.expense_date}>
      <div className={s.month}>{month}</div>
      <div className={s.year}>{year}</div>
      <div className={s.day}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
