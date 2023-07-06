import z from './Expenses.module.scss';
import ExpenseItem from './ExpenseItem';

/**
 * @typedef ExpensesProps
 * 
 * @param {ExpensesProps} props
 * @returns {JSX.Element}
 */
const Expenses = () => {
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
    <div className={z.expenses}>
        {expenses?.map(( {id, title, amount, date} ) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date}/>
      ))}      
    </div>
  );
};

export default Expenses;