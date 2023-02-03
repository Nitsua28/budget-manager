import React, {useReducer} from 'react';
import { BudgetManagerState, budgetReducer, Expense } from './budget-reducer';

// export type Expense ={
//   id: number
//   name: string 
//   cost: number
//   isEssential: boolean
//   isPaid: boolean
// }
const initalState: BudgetManagerState ={
  nameInput: "",
  costInput: 0,
  isEssentialInput: false,

  unpaidExpenses: [],
  paidExpenses: [],

  totalCost: 0,
  result: 0
}

function App() {
  const [BudgetManagerState, dispatch] = useReducer(budgetReducer, initalState );
  const unpaidExpenses = BudgetManagerState.unpaidExpenses.map((i) =>(<li>i.name</li>))
  const paidExpenses = BudgetManagerState.paidExpenses.map((i) =>(<li>i.name</li>))
  return (
    <>
      <label>NAME</label>
      <input onChange={e => (dispatch({type:"INPUT_NAME", payload:e.target.value}))}></input>
      <label>COST</label>
      <input onChange={e => (dispatch({type:"INPUT_COST", payload:parseInt(e.target.value)}))}></input>
      <label>ESSENTIAL</label>
      <input id="eCheck"type="checkbox" onChange={e => (dispatch({type:"INPUT_ESSENTIAL", payload: true}))}></input>
      <button onClick={e =>dispatch({type:"CREATE_EXPENSE"})}>CREATE EXPENSE</button>
      <div>
        <ul>
          {unpaidExpenses}
        </ul>
      </div>
      <div>
          {paidExpenses}
      </div>
    </>
    
    
  );
}

export default App;
