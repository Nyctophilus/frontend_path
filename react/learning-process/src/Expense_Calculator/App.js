import classes from "./App.module.css";
import ExpensesList from "./components/Expenses/ExpensesList/ExpensesList";

const App = () => {
  return (
    <div className={classes.Expense}>
      <h1>Hello React!</h1>

      <ExpensesList />
    </div>
  );
};

export default App;
