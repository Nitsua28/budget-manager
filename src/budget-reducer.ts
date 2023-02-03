
export type Expense ={
    id: number
    name: string 
    cost: number
    isEssential: boolean
    isPaid: boolean
}

export type BudgetManagerState = {
    nameInput: string
    costInput: number
    isEssentialInput: boolean

    unpaidExpenses: Expense[]
    paidExpenses: Expense[]

    totalCost: number
    result: number
}
type InputBudgetAction = {type:"INPUT_BUDGET", payload: number};
type InputNameAction = {type:"INPUT_NAME", payload: string};
type InputCostAction = {type:"INPUT_COST", payload: number};
type InputEssentialAction = {type:"INPUT_ESSENTIAL", payload: boolean};
type CreateExpenseAction = {type:"CREATE_EXPENSE"};
type CheckPaidAction = {type:"CHECK_PAID", payload: number};
type DeleteExpenseAction = {type:"DELETE_EXPENSE", payload: number, isPaid: boolean};
type CalculateAction = {type:"CALCULATE"};
type BudgetAction = InputBudgetAction | InputNameAction |
 InputCostAction | InputEssentialAction | CreateExpenseAction | CheckPaidAction |
 DeleteExpenseAction | CalculateAction

export function budgetReducer(state: BudgetManagerState, action: BudgetAction ): BudgetManagerState {
    let newState: BudgetManagerState = JSON.parse(JSON.stringify(state));


    switch(action.type){
        case "INPUT_BUDGET": {
            newState.totalCost = action.payload;
            return newState;
        }
        case "INPUT_NAME": {
            newState.nameInput = action.payload;
            return newState;
        }
        case "INPUT_COST": {
            newState.costInput = action.payload;
            return newState;
        }
        case "INPUT_ESSENTIAL": {
            newState.isEssentialInput = action.payload;
            return newState;
        }
        case "CREATE_EXPENSE": {
            let newExpense: Expense = {
                id: Math.random(),
                name: newState.nameInput,
                cost: newState.costInput,
                isEssential: newState.isEssentialInput,
                isPaid: false

            }
            newState.unpaidExpenses.push(newExpense)
            
            return newState;
        }
        case "CHECK_PAID": {
            let arr = newState.unpaidExpenses;
            newState.unpaidExpenses = arr.filter(expenses => expenses.id != action.payload)
            let expense = arr.filter(expenses => expenses.id != action.payload)[0]
            expense.isPaid = true;
            newState.paidExpenses.push(expense)
            
            return newState;
        }

        case "DELETE_EXPENSE": {
            (action.isPaid) ? 
            newState.paidExpenses = newState.paidExpenses.filter(expenses => expenses.id != action.payload):
            newState.unpaidExpenses = newState.unpaidExpenses.filter(expenses => expenses.id != action.payload)
            return newState;
        }

        case "CALCULATE": {
            let result = newState.totalCost
            newState.paidExpenses.forEach((expense) =>{result -= expense.cost})
            newState.result = result
            return newState;
        }
        
    }
}