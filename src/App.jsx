//import { useState } from 'react'
import s from './App.module.scss'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

function App() {
 
  return (
      <div className={s.wrapper}>
        <NewExpense />
        <Expenses />       
      </div>
  )
}

export default App;
