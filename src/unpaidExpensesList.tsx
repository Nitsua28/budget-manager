
import { Expense, BudgetAction } from "./budget-reducer"
import "./styles.css"

type UnpaidExpensesListProps = {
    list: Expense[]
    dispatch: React.Dispatch<BudgetAction>
}


export function UnpaidExpensesList(props: UnpaidExpensesListProps){
    return (
    <div className="expenseList">
        <h2 className="expenseName" > Unpaid Expenses</h2>
    <ul>
        {props.list.map(i => <li><h6 style= {(i.isEssential) ? {color: 'red'}: {color: 'black'}}>{i.name}</h6>  <h6>{i.cost}</h6>
        <button onClick={()=>props.dispatch({type:"CHECK_PAID", payload:i.id})}>Mark complete</button>
        <button onClick={() =>props.dispatch({type:"DELETE_EXPENSE", payload: i.id, isPaid: false})}>Delete</button></li>)}
    </ul>
    </div>
    )
}