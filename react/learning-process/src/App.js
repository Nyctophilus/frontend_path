import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  // special Component.property called state
  // what's special about it... if changes it will invoke react to update the dom
  state = {
    people: [
      { name: "Muhammed", age: 25 },
      { name: "lana", age: 19 },
      { name: "yoori", age: 367 },
    ],
  };

  switchNameHandler = (newName) => {
    // DONT DO THIS this.state.people[2].name = "Fayad";

    this.setState({
      people: [
        { name: newName, age: 25 },
        { name: "lana", age: 19 },
        { name: "Fayad", age: 1443 },
      ],
    });
  };

  switchChangeHandler = (event) => {
    this.setState({
      people: [
        { name: "Muhammed", age: 25 },
        { name: event.target.value, age: 19 },
        { name: "Fayad", age: 1443 },
      ],
    });
  };

  render() {
    const btnStyling = {
      backgroundColor: "red",
      border: "1px solid crimson",
      padding: "7px 8px",
      font: "inherit",
      cursor: "pointer",
      color: "white",
      borderRadius: "10px",
    };

    return (
      <div className="App">
        <h1>Hellllllllo REACT!!!</h1>
        <button
          style={btnStyling}
          onClick={this.switchNameHandler.bind(
            this,
            "Muhammed!!"
          )}
        >
          Switch Names
        </button>

        <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age}
        >
          Hobby: Boxing
        </Person>

        <Person
          name={this.state.people[1].name}
          age={this.state.people[1].age}
          click={
            // can be less performanet, depends on the app size

            () =>
              this.switchNameHandler(
                "Muhammed ? less professiont"
              )
          }
          change={this.switchChangeHandler}
        />
        <Person
          name={this.state.people[2].name}
          age={this.state.people[2].age}
        />
      </div>
    );
  }
}

export default App;
