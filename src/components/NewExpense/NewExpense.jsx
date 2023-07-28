import ExpenseForm from './ExpenseForm';
import s from './NewExpense.module.scss';

/**
 * @typedef NewExpenseProps
 * 
 * @param {NewExpenseProps} props
 * @returns {JSX.Element}
 */
const NewExpense = (props) => {
    
    const handleExpenseSubmit = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
  return (
    <div className={s.new_expense}>
      <ExpenseForm onSaveExpenseData={handleExpenseSubmit}/>
    </div>
  );
};

export default NewExpense;

