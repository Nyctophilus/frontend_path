import ExpenseItem from "../ExpenseItem/ExpenseItem";
import classes from "./ExpensesList.module.css";
import Card from "../../UI/Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "../ExpensesChart";

const ExpensesList = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear()
  );

  const SelectYearHandler = (year) => setSelectedYear(year);

  const filteredExpenses = expenses.filter(
    (exp) =>
      exp.date.getFullYear().toString() === selectedYear
  );

  let expensesContent = (
    <h2 className={classes.expensesList__fallback}>
      No Expenses Found!
    </h2>
  );

  if (filteredExpenses.length > 0)
    expensesContent = filteredExpenses.map((exp) => {
      return <ExpenseItem key={exp.id} {...exp} />;
    });

  return (
    <Card className={classes.expenses}>
      <ExpensesFilter
        selected={selectedYear}
        onSelectYear={SelectYearHandler}
      />

      <ExpensesChart expenses={filteredExpenses} />

      <ul className={classes.expensesList}>
        {expensesContent}
      </ul>
    </Card>
  );
};

export default ExpensesList;
