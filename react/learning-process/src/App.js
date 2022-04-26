import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  // special Component.property called state
  // what's special about it... if changes it will invoke react to update the dom
  state = {
    people: [
      { id: "dasd2c", name: "Muhammed", age: 25 },
      { id: "xcvkii3", name: "lana", age: 19 },
      { id: "vxc7mlvn", name: "yoori", age: 367 },
    ],
    show: false,
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

  //   switchChangeHandler = (event) => {
  //     this.setState({
  //       people: [
  //         { name: "Muhammed", age: 25 },
  //         { name: event.target.value, age: 19 },
  //         { name: "Fayad", age: 1443 },
  //       ],
  //     });
  //   };

  nameChangeHandler = (event, id) => {
    const targetPersonIndex = this.state.people.findIndex(
      (p) => p.id === id
    );
    // console.log(targetPersonIndex);

    const personsCopy = [...this.state.people];
    personsCopy[targetPersonIndex].name =
      event.target.value;

    this.setState({ people: personsCopy });
  };

  toggler = () => {
    this.setState({ show: !this.state.show });
  };

  deletePerson = (personIndex) => {
    // create a copy from the array to avoid unstable behaivors
    // u should update states in immutable way

    // const newPersons = this.state.people.slice();
    const newPersons = [...this.state.people];
    newPersons.splice(personIndex, 1);

    this.setState({ people: newPersons });
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

    // -HL cleaner way to containal content
    let persons = null;
    if (this.state.show) {
      persons = (
        <div>
          {this.state.people.map((person, index) => (
            <Person
              name={person.name}
              age={person.age}
              // key to allow react keep track of individual elements to find out changes
              key={person.id}
              change={(event) =>
                this.nameChangeHandler(event, person.id)
              }
              delete={this.deletePerson.bind(this, index)}
            >
              Hobby: Boxing X_X
            </Person>
          ))}

          {/* <Person
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
          /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hellllllllo REACT!!!</h1>
        <button style={btnStyling} onClick={this.toggler}>
          Toggle Names
        </button>

        {
          persons

          /* {this.state.show ? (
          <div>
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
        ) : null} */
        }
      </div>
    );
  }
}

export default App;
