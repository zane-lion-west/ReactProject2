import s from './ExpenseItem.module.scss';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';

// eslint-disable-next-line no-unused-vars

/**
 * @typedef ExpenseItemProps
 *
 * @param {ExpenseItemProps} props
 * @returns
 */

const ExpenseItem = props => {
  return (
    <li>
      <Card className={s.expense_item}>
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className={s.expense_item__description}>
          <div className={s.expense_item__price}>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
