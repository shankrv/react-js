import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id: 'EXP1', title: 'Groceries', date: new Date(2021, 4, 9), price: 270.0 },
    { id: 'EXP2', title: 'House Rent', date: new Date(2021, 4, 1), price: 8000.0 },
    { id: 'EXP3', title: 'Staples', date: new Date(2021, 4, 3), price: 3487.61 },
    { id: 'EXP4', title: 'Internet', date: new Date(2021, 4, 5), price: 1500.0 },
  ];
  return (
    <div>
      <h2> Complete React.js Guide (v17.0.2) </h2>
      <p> React - The Complete Guide (incl Hooks, React Router, Redux) </p>

      <ExpenseItem title={expenses[0].title} date={expenses[0].date} price={expenses[0].price} />
      <ExpenseItem title={expenses[1].title} date={expenses[1].date} price={expenses[1].price} />
      <ExpenseItem title={expenses[2].title} date={expenses[2].date} price={expenses[2].price} />
      <ExpenseItem title={expenses[3].title} date={expenses[3].date} price={expenses[3].price} />
    </div>
  );
}

export default App;
