
import s from "./ExpenseItem.module.scss";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// eslint-disable-next-line no-unused-vars

const ExpenseItem = (props) => {

  return (
    <Card className={s.expense_item}>
    <ExpenseDate date={props.date}/>
    <h2>{props.title}</h2>
    <div className={s.expense_item__description}>
        <div className={s.expense_item__price}>${props.amount}</div>
    </div>
    </Card>
  )
};

export default ExpenseItem;