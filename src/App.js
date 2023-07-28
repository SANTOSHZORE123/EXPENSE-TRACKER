import { useState } from "react";
import Expenses from "./components/Basics/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const date1 = new Date(2023, 6, 10);
const date2 = new Date(2023, 6, 8);
const date3 = new Date(2023, 6, 6);
const DUMMY_ARRAY=[
     {
      expenseDate: date1,
      expenseType: "Car Insurance",
      expensePrice: "294.57",
    },
    {
      expenseDate: date2,
      expenseType: "Life Insurance",
      expensePrice: "254.7",
    },
    {
      expenseDate: date3,
      expenseType: "Medical Insurance",
      expensePrice: "876.7",
    }
]
function App() {
  const [ExpenseArray, setExpenseArray] = useState(DUMMY_ARRAY);

  const updateHandler = (newExpense) => {
    // Use the spread operator (...) to add the newExpense to the existing ExpenseArray
    setExpenseArray((prevState) => [newExpense,...prevState]);
  };
  return (
    <div>
      <NewExpense onUpdateExpense={updateHandler} />
      <Expenses ExpenseArray={ExpenseArray}/>
    </div>
  );
}

export default App;
