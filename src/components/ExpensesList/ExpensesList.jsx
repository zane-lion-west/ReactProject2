import s from './ExpensesList.module.scss';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

/**
 * @typedef ExpensesListProps
 *
 * @param {ExpensesListProps} props
 * @returns {JSX.Element}
 */
const ExpensesList = props => {
  if (props.items.length === 0) {
    return <h2 className={s.fallback}>No expenses found.</h2>;
  }

  return (
    <ul className={s.expensesList}>
      {props.items.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
