import s from './ExpenseForm.module.scss';
import { useState } from 'react';

/**
 * @typedef ExpenseFormProps
 * 
 * @param {ExpenseFormProps} props
 * @returns {JSX.Element}
 */
const ExpenseForm = ({callback}) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('')


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        callback(enteredTitle, enteredDate, enteredAmount);
    }

  return (
    <form onSubmit={onSubmitHandler}>
        <div className={s.new_expense__controls}>
            <div className={s.new_expense__control}>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className={s.new_expense__control}>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className={s.new_expense__control}>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2025-12-31" onChange={dateChangeHandler}/>    
            </div> 
        </div>
        <div className={s.new_expense__actions}>
            <button type='submit' >Add Expense</button>
        </div>
    </form>
  );
};

export default ExpenseForm;
