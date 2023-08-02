import { useEffect, useState } from 'react';
import s from './App.module.scss';
import Expenses from '../components/Expenses/Expenses';
import NewExpense from '../components/NewExpense/NewExpense';

/**
 * @typedef Expense
 * @property {string} id - The unique ID of the expense
 * @property {string} title - The title of the expense
 * @property {number} amount - The amount of the expense
 * @property {Date} date - The date of the expense
 */

/**
 * Fetches Dummy Expenses from `/public` folder. A cool tool
 * you can use with Vite. If you put anything in the `/public`
 * folder it will get served up as a static item you can use a
 * fetch request to call
 * @returns {Promise<Expense[]>}
 */
const fetchDummyExpenses = () =>
  fetch('/dummyExpenses.json')
    .then(data => data.json())
    .then(data =>
      data.map(({ date, ...rest }) => ({ ...rest, date: new Date(date) })),
    );

/**
 * @typedef AppProps
 *
 * @property {string} id - The id of the individual dummy expenses array objects
 * @property {string} title - The title of the individual dummy expenses array objects
 * @property {number} amount - The amount for the individual dummy array objects
 * @property {date} date - The date for the individual dummy expenses array objects
 *
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
const App = () => {
  const [expenses, setExpenses] = useState();

  useEffect(() => {
    if (!expenses) {
      fetchDummyExpenses()
        .then(setExpenses)
        .catch(e => console.error('something went wrong', e.message));
    }
  }, [expenses]);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className={s.wrapper}>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses || []} />
    </div>
  );
};

export default App;
