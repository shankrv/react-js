import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const newExpenseData = (data) => {
    data.id = 'EXP5';
    props.onNewExpense(data);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseFormSubmit={newExpenseData} />
    </div>
  );
};

export default NewExpense;
