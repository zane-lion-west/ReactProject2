import s from './ExpensesList.module.scss';
import ExpenseItem from './ExpenseItem';

/**
 * @typedef ExpensesListProps
 * 
 * @param {ExpensesListProps} props
 * @returns {JSX.Element}
 */
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className={s.expenses_list__fallback}>No expenses found.</h2>
  }

  return <ul className={s.expenses_list}>
    {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id} 
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>

};

export default ExpensesList;
