import classes from "./App.module.css";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className={classes.App}>
      <h1>Learn React</h1>
      <Greeting />
    </div>
  );
}

export default App;
