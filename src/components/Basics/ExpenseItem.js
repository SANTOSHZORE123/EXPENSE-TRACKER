import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "./Card"
function ExpenseItem({ expenseDate, expenseType, expensePrice }) {
    return <Card className="expense-item">
        <ExpenseDate date={expenseDate}/>
        <div className="expense-item__description">
            <h2>{expenseType}</h2>
            <div className="expense-item__price">${expensePrice}</div>
        </div>
    </Card>
}

export default ExpenseItem