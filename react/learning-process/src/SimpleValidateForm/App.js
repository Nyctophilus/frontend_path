import classes from "./App.module.css";
import InputForm from "./components/InputForm/InputForm";

const App = () => {
  return (
    <div className={classes.SimpleValidate}>
      <InputForm />
    </div>
  );
};

export default App;
