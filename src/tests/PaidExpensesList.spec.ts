import React, {useReducer} from "react";
import { render, screen } from "@testing-library/react";
import { PaidExpensesList, PaidExpensesListProps } from "../paidExpensesList";
import { BudgetManagerState, budgetReducer, Expense } from '../budget-reducer';


// export type PaidExpensesListProps = {
//     list: Expense[],
//     dispatch: React.Dispatch<BudgetAction>
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

const [BudgetManagerState, dispatch] = useReducer(budgetReducer, initialState );
test("Displays expenses", async ()=>{
    
    const arr:Expense[] =[
            {
                id: 44,
                name: "apple",
                cost: 34,
                isEssential: true,
                isPaid: true
            },
            {
                id: 45,
                name: "orange",
                cost: 64,
                isEssential: true,
                isPaid: true
            }]
    
    

    //render(<PaidExpensesList list={arr}, dispatch={dispatch}/>)
    
    // const elementDishes = await screen.findByText(/Dishes/);
    // const elementLaundry = await screen.findByText(/Laundry/);

    // expect(elementDishes.innerHTML).toBe("Dishes ");
    // expect(elementLaundry.innerHTML).toBe("Laundry ");
    
})