import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
import { useState } from "react"
import "./ExpenseForm.css"
const NewExpense=(props)=>{
    const [addState,setAddState]=useState(true);
    const saveHandler=(submitedData)=>{
        props.onUpdateExpense(submitedData)
    }
    const buttonHandler=()=>{
        setAddState((prevstate)=>{
            return !prevstate
        })
    }
    if(addState===true){
        return <div className="new-expense">
        <button onClick={buttonHandler}>Add New Expense</button>
    </div>
    }
    return (<div className="new-expense">
        <ExpenseForm onSaveForm={saveHandler} buttonState={setAddState}/>
    </div>)
}
export default NewExpense