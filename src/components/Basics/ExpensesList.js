import ExpenseItem from "./ExpenseItem"
import "./ExpensesList.css"
const ExpensesList=(props)=>{
    if(props.filterArray.length===0){
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }
    return props.filterArray.map((element,index) => (
        <ul className="expenses-list">
             <ExpenseItem
              key={index}
              expenseDate={element.expenseDate}
              expenseType={element.expenseType}
              expensePrice={element.expensePrice}
            />
        </ul>
      ))
}
export default ExpensesList