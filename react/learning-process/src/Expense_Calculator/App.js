import { useState } from "react";
import classes from "./App.module.css";
import ExpensesList from "./components/Expenses/ExpensesList/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [myExpenses, setMyExpenses] =
    useState(DUMMY_EXPENSES);

  const AddExpenseHandler = (expenseData) => {
    setMyExpenses((prev) => [expenseData, ...prev]);
  };

  return (
    <div className={classes.Expense}>
      <NewExpense onAddExpense={AddExpenseHandler} />

      <ExpensesList expenses={myExpenses} />
    </div>
  );
};

export default App;
