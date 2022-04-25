import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [peopleState, setPeopleState] = useState({
    people: [
      { name: "Muhammed", age: 25 },
      { name: "lana", age: 19 },
      { name: "yoori", age: 367 },
    ],
  });

  // untouched state
  const [otherState, setOtherState] = useState({
    otherData: "some other data",
  });

  const switchNameHandler = () => {
    // this DONT merge the state like class-state, it's replacing it
    // althrough u can have multiple hooks (states), unlike the class-state
    setPeopleState({
      people: [
        { name: "Muhammed", age: 22 },
        { name: "lana", age: 19 },
        { name: "Fayad", age: 1443 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hellllllllo REACT!!!</h1>
      <button onClick={switchNameHandler}>
        Switch Names
      </button>

      <Person
        name={peopleState.people[0].name}
        age={peopleState.people[0].age}
      >
        Hobby: Boxing
      </Person>

      <Person
        name={peopleState.people[1].name}
        age={peopleState.people[1].age}
      />
      <Person
        name={peopleState.people[2].name}
        age={peopleState.people[2].age}
      />
    </div>
  );
};

export default App;
