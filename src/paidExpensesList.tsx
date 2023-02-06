
import { Expense, BudgetAction } from "./budget-reducer"
import "./styles.css"

export type PaidExpensesListProps = {
    list: Expense[],
    dispatch: React.Dispatch<BudgetAction>
}


export function PaidExpensesList(props: PaidExpensesListProps ){
    return (
    <div className="expenseList">
        <h2 className="expenseName" > Paid Expenses</h2>
    <ul>
        {props.list.map(i => <li><h6 style= {(i.isEssential) ? {color: 'red'}: {color: 'black'}}>NAME: {i.name}</h6>  <h6>COST: {i.cost}</h6>
        <button onClick={() =>props.dispatch({type:"DELETE_EXPENSE", payload: i.id, isPaid: true})}>Delete</button>
        </li>)}
    </ul>
    </div>
    )
}