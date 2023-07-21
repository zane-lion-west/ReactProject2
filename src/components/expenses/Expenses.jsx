import { useState } from 'react';

import z from './Expenses.module.scss';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';


/**
 * @typedef ExpensesProps
 * 
 * @param {ExpensesProps} props
 * @returns {JSX.Element}
 */
const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');
    
    // let filterInfoText = '2019, 2021 & 2022';

    // if (selectedYear === '2019') {
    //   filterInfoText = '2020, 2021 & 2022';
    // } else if (selectedYear === '2021') {
    //   filterInfoText = '2019, 2020 & 2022';
    // } else {
    //   filterInfoText = '2019, 2020 & 2021';}

    const filterChangeHandler = selectedYear => {
      setSelectedYear(selectedYear);
    };

    // <Card className={z.expenses}>
    //     <ExpensesFilter selected={selectedYear} onChange={filterChangeHandler}/>
    //     <p>Data for years {filterInfoText} is hidden..</p>
    //       {props.expenses.filter(expense => selectedYear!='' && expense.date.getFullYear()==selectedYear)?.map(( {id, title, amount, date} ) => (
    //       <ExpenseItem key={id} title={title} amount={amount} date={date}/>
    //     ))}      
    //   </Card>
  

  return (
    <div>
      <Card className={z.expenses}>
        <ExpensesFilter 
        selected={selectedYear} 
        onChange={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id} 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}                
      </Card>
    </div>
  );
};

/*
Mapping the Expense array so that it isnt hard coded as several elements ( the way the instructor did it)

{props.items.map((expense) => (
  <ExpenseItem
    id=
    title={expense.title}
    amount={expense.amount}
    date={expense.dat}
    />
))}

*/

export default Expenses;
