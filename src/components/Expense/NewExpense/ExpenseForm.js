import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  // single-state
  // const [userInput, setUserInput] = useState({ title: '', amount: '', date: '' });

  // multiple-states
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // handlers
  const titleHandler = (event) => {
    setTitle(event.target.value);
    // update for single-state
    // setUserInput({ ...userInput, title: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
    // update for single-state
    // setUserInput({ ...userInput, amount: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, amount: event.target.value };
    // });
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
    // update for single-state
    // setUserInput({ ...userInput, date: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, date: event.target.value };
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // const expenseData = { ...userInput }; // for single-state
    const expenseData = { title, amount, date };
    console.log(expenseData);
    // reset-state to clear form
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={amount} onChange={amountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-01-01" max="2021-12-31" value={date} onChange={dateHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
