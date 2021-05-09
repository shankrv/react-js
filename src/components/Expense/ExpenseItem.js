import Card from '../Interface/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h3> {props.title} </h3>
        <div className="expense-item__price"> ₹ {props.price} </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
