import ExpenseItem from "../ExpenseItem/ExpenseItem";
import classes from "./ExpensesList.module.css";
import Card from "../../UI/Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

const ExpensesList = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear()
  );

  const SelectYearHandler = (year) => setSelectedYear(year);

  return (
    <Card className={classes.expenses}>
      <ExpensesFilter
        selected={selectedYear}
        onSelectYear={SelectYearHandler}
      />

      {expenses.map((exp) => (
        <ExpenseItem key={exp.id} {...exp} />
      ))}
    </Card>
  );
};

export default ExpensesList;
