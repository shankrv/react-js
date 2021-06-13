import Expense from './components/Expense/Expense';
import NewExpense from './components/Expense/NewExpense/NewExpense';

function App() {
  const expenses = [
    { id: 'EXP1', title: 'Groceries', date: new Date(2021, 4, 9), price: 270.48 },
    { id: 'EXP2', title: 'House Rent', date: new Date(2021, 4, 1), price: 8000.23 },
    { id: 'EXP3', title: 'Staples', date: new Date(2021, 4, 3), price: 3487.61 },
    { id: 'EXP4', title: 'Internet', date: new Date(2021, 4, 5), price: 1500.59 },
  ];

  const addNewExpense = (data) => {
    console.log('in App.js : ', data);
  };

  return (
    <div>
      <h2> Complete React.js Guide (v17.0.2) </h2>
      <p> React - The Complete Guide (incl Hooks, React Router, Redux) </p>
      <hr />
      <NewExpense onNewExpense={addNewExpense} />
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
