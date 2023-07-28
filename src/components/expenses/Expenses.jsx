import { useState } from 'react';

import z from './Expenses.module.scss';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

/**
 * @typedef ExpensesProps
 * 
 * @param {ExpensesProps} props
 * @returns {JSX.Element}
 */
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    
    // let filterInfoText = '2019, 2021 & 2022';

    // if (selectedYear === '2019') {
    //   filterInfoText = '2020, 2021 & 2022';
    // } else if (selectedYear === '2021') {
    //   filterInfoText = '2019, 2020 & 2022';
    // } else {
    //   filterInfoText = '2019, 2020 & 2021';}

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    // <Card className={z.expenses}>
    //     <ExpensesFilter selected={selectedYear} onChange={filterChangeHandler}/>
    //     <p>Data for years {filterInfoText} is hidden..</p>
    //       {props.expenses.filter(expense => selectedYear!='' && expense.date.getFullYear()==selectedYear)?.map(( {id, title, amount, date} ) => (
    //       <ExpenseItem key={id} title={title} amount={amount} date={date}/>
    //     ))}      
    //   </Card>
  
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
