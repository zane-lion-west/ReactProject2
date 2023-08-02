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
      <Card className={s.expenseItem}>
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className={s.description}>
          <div className={s.price}>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
