import { useState } from 'react';

import z from './Expenses.module.scss';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from '../Chart/ExpensesChart';

/**
 * @typedef ExpensesProps
 * 
 * @param {ExpensesProps} props
 * @returns {JSX.Element}
 */
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
  

  return (
    <div>
      <Card className={z.expenses}>
        <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList  items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
