import React, { Component } from "react";
import classes from "./App.module.css";
import { StyleRoot } from "radium";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import AuthContext from "../context/auth-context";

// -HL Container Component which manipulate the state, manage the state
class App extends Component {
  // TODO 1st Lifecycle hook in class-component
  constructor(props) {
    super(props);
    console.log(`[App.js] constructor`);
  }

  // special Component.property called state
  // what's special about it... if changes it will invoke react to update the dom
  state = {
    people: [
      { id: "dasd2c", name: "Muhammed", age: 25 },
      { id: "xcvkii3", name: "lana", age: 19 },
      { id: "vxc7mlvn", name: "yoori", age: 367 },
    ],
    show: false,
    changeCounter: 0,
    auth: false,
  };

  // TODO 2nd Lifecycle hook in class-component
  static getDerivedStateFromProps(props, state) {
    console.log(`[App.js] getDerivedStateFromProps`, props);
    return state;
  }

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

  nameChangeHandler = (event, id) => {
    const targetPersonIndex = this.state.people.findIndex(
      (p) => p.id === id
    );

    const personsCopy = [...this.state.people];
    personsCopy[targetPersonIndex].name =
      event.target.value;

    // console.log(personsCopy);

    // this.setState({ people: personsCopy });

    // -HL when depends on previous state, you should update the state with func

    this.setState((prevState, props) => {
      return {
        people: personsCopy,
        changeCounter: prevState.changeCounter + 1,
      };
    });
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

  loginAuth = () => {
    this.setState({ auth: true });
  };

  // -HL contextType
  static contextType = AuthContext;

  //   componentWillMount() {
  //     // Deprecated just before the final Lifecycle hook in class-component
  //     console.log(`[App.js] componentWillMount`);
  //   }

  // FIXDONE Component update lifecycle for (state changes)
  componentDidMount() {
    // TODO final Lifecycle hook in class-component
    console.log(`[App.js] componentDidMount`);
    // typically fetching data from a server here

    // from contextType allows to access the context
    console.log(this.context.authenticated);
  }
  shouldComponentUpdate(nextProps, nextState) {
    // react checks if it has to update the virtual dom not the real dom
    console.log(`[App.js] shouldComponentUpdate`);
    // to improve preformance

    return true;
  }
  componentDidUpdate() {
    console.log(`[App.js] componentDidUpdate`);
    // typically fetching data from a server here
  }

  componentWillUnmount() {
    console.log(`[App.js] componentWillUnmount`);

    //TODO clean-up code
  }

  // TODO 3th Lifecycle hook in class-component
  render() {
    // FIXME!!! everytime anything changes in the app.js render() recalled and excuted the whole tree below
    // render compare the old virtual dom with the re-rendered one and detect the differences, only then it update the real dom ONLY IN parts where differences detected // no differences => doesnt touch the real dom
    console.log(`[App.js] render`);
    // cleaner way to containal content
    let persons = null;
    if (this.state.show) {
      persons = (
        <Persons
          people={this.state.people}
          changed={this.nameChangeHandler}
          deleted={this.deletePerson}
          show={this.state.show}
        />
      );
    }

    // TODO 4th Lifecycle hook then all the render children componenets will render
    return (
      <StyleRoot>
        <div className={classes.App}>
          <AuthContext.Provider
            value={{
              authenticated: this.state.auth,
              login: this.loginAuth,
            }}
          >
            <Cockpit
              peopleLen={this.state.people.length}
              toggler={this.toggler}
              show={this.state.show}
              title={this.props.title}
            />

            {persons}
          </AuthContext.Provider>
        </div>
      </StyleRoot>
    );

    // react behind the senses
    // return React.createElement('element',{className:''},React.createElement(...))
  }
}

export default App;
