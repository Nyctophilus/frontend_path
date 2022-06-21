import React, { PureComponent } from "react";
import Person from "./Person/Person";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

// PureComponent is just a Component that excutes the componentDidUpdate with the complete props checks
class Persons extends PureComponent {
  // TODO Component update lifecycle for (props changes)
  //   static getDerivedStateFromProps(props, state) {
  //     console.log(`[Persons.js] getDerivedStateFromProps`);
  //   }

  /*
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`[Persons.js] shouldComponentUpdate`);

    //shallow comparsion it compares pointers and it's working here only coz of i changed the 'people'array copy
    if (nextProps.people !== this.props.people) {
      // if they're different UPDATE, else Don't
      return true;
    } else return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`[Persons.js] getSnapshotBeforeUpdate`);

    return { msg: "Snapshot!" };
  }
*/

  //   componentDidUpdate(prevProps, prevState, Snapshot) {
  //     console.log(`[Persons.js] componentDidUpdate`);

  //     console.log(snapshot);
  //   }

  render() {
    // console.log(`[Persons.js] rendering...`);

    return this.props.people.map((person, index) => (
      <ErrorBoundary
        // FIXME has to be in the outer component it's the element we reduplicate
        // key to allow react keep track of individual elements to find out changes
        key={person.id}
      >
        <Person
          name={person.name}
          age={person.age}
          change={(event) =>
            this.props.changed(event, person.id)
          }
          delete={() => this.props.deleted(index)}
          alt={this.props.show}
        >
          Hobby: Boxing X_X
        </Person>
      </ErrorBoundary>
    ));
  }
}

export default Persons;
