import { useState } from 'react';
import s from './App.module.scss';
import Expenses from '../components/Expenses/Expenses';
import NewExpense from '../forms/NewExpense/NewExpense';


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


const Dummy_Expenses = [
  {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'New Wank tent (Plastic)',
      amount: 650,
      date: new Date(2022, 5, 12),
    },
  ];

const  App = () => {
 const [expenses, setExpenses] = useState(Dummy_Expenses);
 
 const addExpenseHandler = (expense) => {
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses];
  });
};

  return (
      <div className={s.wrapper}>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses}/>       
      </div>
  )
}

export default App;
