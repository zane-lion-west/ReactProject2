import ExpenseForm from './ExpenseForm';
import s from './NewExpense.module.scss';

/**
 * @typedef NewExpenseProps
 * 
 * @param {NewExpenseProps} props
 * @returns {JSX.Element}
 */
const NewExpense = () => {
  return (
    <div className={s.new_expense}>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;

