import { useState } from "react"
import "./ExpenseForm.css"
const ExpenseForm=(props)=>{
    const [enteredTitle,setTitle]=useState("")
    const [enteredPrice,setPrice]=useState("")
    const [enteredDate,setDate]=useState("")
    const titleChangeHandler=(event)=>{
        setTitle(event.target.value);
    }
    const priceChangeHandler=(event)=>{
        setPrice(event.target.value);
    }
    const dateChangeHandler=(event)=>{
        setDate(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault()
        const expenseData={
            expenseType:enteredTitle,
            expensePrice:enteredPrice,
            expenseDate:new Date(enteredDate)
        }
        props.onSaveForm(expenseData)
        buttonHandlercheck();
        setDate('')
        setPrice('')
        setTitle('')
    }
    const buttonHandlercheck=()=>{
        props.buttonState((prevstate)=>{
            return !prevstate;
        })
    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"  value={enteredTitle }onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredPrice} onChange={priceChangeHandler} min="0.01"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate}min="2019-01-01" onChange={dateChangeHandler} max="2023-07-24" />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={buttonHandlercheck}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}
export default ExpenseForm