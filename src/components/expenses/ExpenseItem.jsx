//import Expenses from './Expenses';
import React, { useState } from 'react';
import s from "./ExpenseItem.module.scss";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


// eslint-disable-next-line no-unused-vars

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
  }; 

  return (
    <Card className={s.expense_item}>
    <ExpenseDate date={props.date}/>
    <h2>{title}</h2>
    <div className={s.expense_item__description}>
        <div className={s.expense_item__price}>${props.amount}</div>
    </div>
    <button onClick={clickHandler}>Change title</button>

    </Card>
  )
};

export default ExpenseItem;