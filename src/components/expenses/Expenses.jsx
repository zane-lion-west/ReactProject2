import z from './Expenses.module.scss';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import { useState } from 'react';

/**
 * @typedef ExpensesProps
 * 
 * @param {ExpensesProps} props
 * @returns {JSX.Element}
 */
const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');
    
    let filterInfoText = '2019, 2021 & 2022';

    if (selectedYear === '2019') {
      filterInfoText = '2020, 2021 & 2022';
    } else if (selectedYear === '2021') {
      filterInfoText = '2019, 2020 & 2022';
    } else {
      filterInfoText = '2019, 2020 & 2021';}

    const filterChangeHandler = selectedYear => {
      setSelectedYear(selectedYear);
    };

    const expenses = [
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
    
  return (
    <div>
      <Card className={z.expenses}>
        <ExpensesFilter selected={selectedYear} onChange={filterChangeHandler}/>
        <p>Data for years {filterInfoText} is hidden..</p>
          {expenses.filter(expense => selectedYear!='' && expense.date.getFullYear()==selectedYear)?.map(( {id, title, amount, date} ) => (
          <ExpenseItem key={id} title={title} amount={amount} date={date}/>
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
