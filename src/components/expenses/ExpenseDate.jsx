import s from './ExpenseDate.module.scss';

/**
 * @typedef ExpenseDateProps
 * 
 * @param {ExpenseDateProps} props
 * @returns {JSX.Element}
 */
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-UK', { month: 'long' });
    const day = props.date.toLocaleString('en-UK', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
    <div className={s.expense_date}>
          <div className={s.expense_date__month}>{month}</div>
          <div className={s.expense_date__year}>{year}</div>
          <div className={s.expense_date__day}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
