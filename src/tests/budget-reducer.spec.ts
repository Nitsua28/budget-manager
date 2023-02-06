
import { budgetReducer, BudgetManagerState } from "../budget-reducer"
import { useReducer } from "react";
import { PaidExpensesList } from "../paidExpensesList";

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


test("TEST_InputBudgetAction", ()=>{

    const nextState = budgetReducer(BudgetManagerState, {type:"INPUT_BUDGET", payload:400});
    expect(nextState.totalCost).toBe(400);
})

test("TEST_InputNameAction", ()=>{

    const nextState = budgetReducer(BudgetManagerState, {type:"INPUT_NAME", payload:"Austin"});
    expect(nextState.nameInput).toBe("Austin");
})

test("TEST_InputCostAction", ()=>{

    const nextState = budgetReducer(BudgetManagerState, {type:"INPUT_COST", payload: 99});
    expect(nextState.costInput).toBe(99);
})

test("TEST_InputEssentialAction", ()=>{

    const nextState = budgetReducer(BudgetManagerState, {type:"INPUT_ESSENTIAL", payload: true});
    expect(nextState.isEssentialInput).toBe(true);
})

test("TEST_CREATEEXPENSEACTION", ()=>{


    const initialState: BudgetManagerState ={
        nameInput: "apple",
        costInput: 23,
        isEssentialInput: true,
      
        unpaidExpenses: [],
        paidExpenses: [],
      
        totalCost: 0,
        result: 0
      }
    const nextState = budgetReducer(initialState, {type:"CREATE_EXPENSE"});
    expect(nextState.unpaidExpenses.length).toBe(1);
    console.log(nextState.unpaidExpenses)
})

test("TEST_CHECK_PAID", ()=>{
    const initialState: BudgetManagerState ={
        nameInput: "apple",
        costInput: 23,
        isEssentialInput: true,
      
        unpaidExpenses: [],
        paidExpenses: [],
      
        totalCost: 0,
        result: 0
      }
    const nextState = budgetReducer(initialState, {type:"CREATE_EXPENSE"});
    nextState.unpaidExpenses[0].id = 44

    const nextnextState = budgetReducer(nextState, {type:"CHECK_PAID", payload:44});

    expect(nextnextState.paidExpenses.length).toBe(1)
    expect(nextnextState.paidExpenses[0].id).toBe(44)
})

test("TEST_Delete", ()=>{
    const initialState: BudgetManagerState ={
        nameInput: "apple",
        costInput: 23,
        isEssentialInput: true,
      
        unpaidExpenses: [],
        paidExpenses: [],
      
        totalCost: 0,
        result: 0
      }
    const nextState = budgetReducer(initialState, {type:"CREATE_EXPENSE"});
    nextState.unpaidExpenses[0].id = 44
    const nextnextState = budgetReducer(nextState, {type:"DELETE_EXPENSE", payload:44, isPaid:false});
    expect(nextnextState.unpaidExpenses.length).toBe(0)
    
})

test("CALCULATE", ()=>{
    const initialState: BudgetManagerState ={
        nameInput: "apple",
        costInput: 23,
        isEssentialInput: true,
      
        unpaidExpenses: [],
        paidExpenses: [],
      
        totalCost: 400,
        result: 0
      }
    const nextState = budgetReducer(initialState, {type:"CREATE_EXPENSE"});
    nextState.unpaidExpenses[0].id = 44

    const nextnextState = budgetReducer(nextState, {type:"CHECK_PAID", payload:44});

    expect(nextnextState.result).toBe(377)
})



