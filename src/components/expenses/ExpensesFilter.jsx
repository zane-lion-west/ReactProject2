import s from './ExpensesFilter.module.scss';

const ExpensesFilter = (props) => {
//    const [selectedItem, setSelectedItem] = useState();
    
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

  return (
    <div className={s.expenses_filter}>
      <div className={s.expenses_filter__control}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;