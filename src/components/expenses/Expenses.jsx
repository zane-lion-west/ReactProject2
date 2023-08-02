import { useState } from 'react';
import z from './Expenses.module.scss';
import Card from '../Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from '../ExpensesChart/ExpensesChart';
import ExpensesList from '../ExpensesList/ExpensesList';

/**
 * @typedef ExpensesProps
 *
 * @param {ExpensesProps} props
 * @returns {JSX.Element}
 */
const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
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
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
