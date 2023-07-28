
import "./Expenses.css"
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesFilter.css"
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  // const [ExpenseArrays,setExpenseArray]=useState(props.ExpenseArray)
  const [CurrYear,setYear]=useState('2022')
  const changeHandler=(year)=>{
    setYear(year)
  }
  const filterArray=props.ExpenseArray.filter((element)=>{
      return element.expenseDate.getFullYear().toString()===CurrYear
  })
  return (
    <>
    <Card className="expenses">
    <ExpensesFilter selected={CurrYear} onchangeFilter={changeHandler}/>
      <ExpensesChart filterExpenses={filterArray}/>
      <ExpensesList filterArray={filterArray}/>
      </Card>
    </>
  );
}

export default Expenses;