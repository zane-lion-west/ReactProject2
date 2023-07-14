import ExpenseForm from './ExpenseForm';
import s from './NewExpense.module.scss';

/**
 * @typedef NewExpenseProps
 * 
 * @param {NewExpenseProps} props
 * @returns {JSX.Element}
 */
const NewExpense = () => {
    const handleExpenseSubmit = (title, date, amount) => {
        console.log(title, date, amount);
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

