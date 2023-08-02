import s from './ExpenseForm.module.scss';
import { useState } from 'react';

/**
 * @typedef ExpenseFormProps
 *
 * @property {string} title - Title of the expenses array objects
 * @property {number} amount - Amount for the expenses array objects
 * @property {date} date - Date for the expenses array object
 *
 * @param {ExpenseFormProps} props
 * @returns {JSX.Element}
 */
const ExpenseForm = props => {
  const [showForm, setShowForm] = useState(false);

  const proceedButtonHandler = () => {
    setShowForm(true);
  };

  const cancelButtonHandler = () => {
    setShowForm(false);
  };

  let addExpensePopup;

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  if (showForm) {
    addExpensePopup = (
      <form onSubmit={onSubmitHandler}>
        <div className={s.new_expense__controls}>
          <div className={s.new_expense__control}>
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className={s.new_expense__control}>
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className={s.new_expense__control}>
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2025-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className={s.new_expense__actions}>
          <button type="button" onClick={cancelButtonHandler}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }

  if (showForm === false) {
    addExpensePopup = (
      <div className={s.new_expense__controls_2}>
        <div className={s.new_expense__actions_2}>
          <button onClick={proceedButtonHandler}>Add New Expense</button>
        </div>
      </div>
    );
  }

  return <div>{addExpensePopup}</div>;
};

export default ExpenseForm;
