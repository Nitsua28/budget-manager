import React, {useReducer, useEffect} from 'react';
import { BudgetManagerState, budgetReducer, Expense } from './budget-reducer';
import { UnpaidExpensesList } from './unpaidExpensesList';
import { PaidExpensesList } from './paidExpensesList';
import "./styles.css"
// export type Expense ={
//   id: number
//   name: string 
//   cost: number
//   isEssential: boolean
//   isPaid: boolean
// }
const initialState: BudgetManagerState ={
  nameInput: "",
  costInput: 0,
  isEssentialInput: false,

  unpaidExpenses: [],
  paidExpenses: [],

  totalCost: 0,
  result: 0
}

function App() {
  const [BudgetManagerState, dispatch] = useReducer(budgetReducer, initialState );

  useEffect(() => {
    dispatch({type:"CALCULATE"})
  }, [BudgetManagerState.unpaidExpenses]);

  
  return (
    <>
      

      <div className="container">
        <div className="budget-input-container">
          <label>BUDGET</label>
          <input onChange={e => (dispatch({type:"INPUT_BUDGET", payload:parseInt(e.target.value)}))}></input>
        </div>
        <div className="expense-input-container">
          <label>NAME</label>
          <input onChange={e => (dispatch({type:"INPUT_NAME", payload:e.target.value}))}></input>
          <label>COST</label>
          <input onChange={e => (dispatch({type:"INPUT_COST", payload:parseInt(e.target.value)}))}></input>
          <label>ESSENTIAL</label>
          <input id="eCheck"type="checkbox" onChange={e => {(BudgetManagerState.isEssentialInput) ? (dispatch({type:"INPUT_ESSENTIAL", payload: false})) : (dispatch({type:"INPUT_ESSENTIAL", payload: true}))}}></input>
          <button onClick={e =>dispatch({type:"CREATE_EXPENSE"})}>CREATE EXPENSE</button>
          
        </div>
        <div className="totalcost-container">
          <h1>RESULT: {BudgetManagerState.result}</h1>
        </div>
        <div className="expense-output-container">
          <div>
            <UnpaidExpensesList list= {BudgetManagerState.unpaidExpenses} dispatch={dispatch}/>
          </div>
          <div>
            <PaidExpensesList list= {BudgetManagerState.paidExpenses} dispatch={dispatch}/>
          </div>
        </div>
      </div>
    </>
    
    
  );
}

export default App;
