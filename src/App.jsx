//import { useState } from 'react'
import s from './App.module.scss'
import Expenses from './components/expenses/Expenses'

function App() {
 
  return (
      <div className={s.wrapper}>
        <Expenses />       
      </div>
  )
}

export default App;
