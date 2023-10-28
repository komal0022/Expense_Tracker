import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';
import Expenses from './components/Expenses/Expenses';

let DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'School Fee',
    amount: 250,
    date: new Date(2021, 5, 12)
  },
  {
    id: 'e2',
    title: 'Books',
    amount: 230,
    date: new Date(2021, 2, 22)
  },
  {
    id: 'e3',
    title: 'House Rent',
    amount: 700,
    date: new Date(2021, 4, 2)
  },
  {
    id: 'e4',
    title: 'Food',
    amount: 540,
    date: new Date(2021, 5, 5)
  }
];

const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);   


/**
useEffect(()=>{
    fetch('http://localhost/sample-api/api/read.php').then(
    response => {
       return response.json();
  }
).then(
  data => {
    console.log(data);
    setExpenses(data);
  }
);
},[]);   

**/


    const addExpenseHandler = (expense) => {
      const updatedExpense = [expense, ...expenses];
      setExpenses(updatedExpense);
    }

  return (
    <div>
         <h1 className='heading'>EXPENSE TRACKER</h1>
         <NewExpense onAddExpense = {addExpenseHandler} /> 
         <Expenses item = {expenses} />
    </div>
  );
}

export default App;
