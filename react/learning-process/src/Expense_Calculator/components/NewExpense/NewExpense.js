import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpeseForm/ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const saveDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: new Date().getMilliseconds() * Math.random(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={saveDataHandler} />
    </div>
  );
};

export default NewExpense;
