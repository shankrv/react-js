import React, { useState } from 'react';

import Card from '../Interface/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title); // useState() returns [value, updateFx]

  const clickHandler = () => {
    setTitle('Updated'); // updates and re-renders the component
    console.log('clicked', title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h3> {title} </h3>
        <div className="expense-item__price"> ₹ {props.price} </div>
        <button onClick={clickHandler}>Click</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
