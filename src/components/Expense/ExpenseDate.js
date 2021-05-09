import './ExpenseDate.css';

function ExpenseDate(props) {
  const year = props.date.toLocaleString('en-IN', { year: 'numeric' });
  const date = props.date.toLocaleString('en-IN', { day: '2-digit' });
  const month = props.date.toLocaleString('en-IN', { month: 'long' });

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__date">{date}</div>
      <div className="expense-date__month">{month}</div>
    </div>
  );
}

export default ExpenseDate;
