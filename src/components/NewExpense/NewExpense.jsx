import ExpenseForm from './ExpenseForm';
import s from './NewExpense.module.scss';

/**
 * @typedef NewExpenseProps
 * 
 * @param {NewExpenseProps} props
 * @returns {JSX.Element}
 */
const NewExpense = () => {
    const handleExpenseSubmit = (title, amount, date) => {
        console.log(title, amount, date);
        //const savedTitle = title;
        //const savedDate
    }
  return (
    <div className={s.new_expense}>
      <ExpenseForm callback={handleExpenseSubmit}/>
    </div>
  );
};

export default NewExpense;

