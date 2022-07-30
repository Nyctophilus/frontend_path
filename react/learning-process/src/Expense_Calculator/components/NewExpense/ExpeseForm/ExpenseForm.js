import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveData }) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: 0,
    date: "2022-11-22",
  });

  const inputsHandler = (e) => {
    setExpense((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: expense.title,
      amount: expense.amount,
      date: expense.date,
    };

    onSaveData(expenseData);
    setExpense({
      title: "",
      amount: 0,
      date: "2022-11-22",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={expense.title}
            onChange={inputsHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            value={expense.amount}
            onChange={inputsHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2022-01-01"
            max="2025-11-22"
            value={expense.date}
            onChange={inputsHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
