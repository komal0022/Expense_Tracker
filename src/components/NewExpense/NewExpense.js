import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) =>{

    const ExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        console.log(expenseData);

    };

    return(

        <div className="new-expense">
             <ExpenseForm onSaveExpenseData = {ExpenseDataHandler} />
        </div>
    );

}

export default NewExpense;