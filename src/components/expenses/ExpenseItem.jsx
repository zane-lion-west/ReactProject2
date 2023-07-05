//import Expenses from './Expenses';
import s from "./ExpenseItem.module.scss";
import ExpenseDate from "./ExpenseDate";
// eslint-disable-next-line no-unused-vars

export const ExpenseItem = (props) => {

  return (
    <div className={s.expense_item}>
    <ExpenseDate date={props.date}/>
    <div className={s.expense_item__description}>
        <h2>{props.title}</h2>
        <div className={s.expense_item__price}>${props.amount}</div>
    </div>
    </div>
  )
}
