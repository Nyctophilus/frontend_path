import React, { Component } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";
import userEvent from "@testing-library/user-event";

class assignment2 extends Component {
  state = {
    userInput: "",
  };

  count = (e) => {
    this.setState({ userInput: e.target.value });
  };

  delete = (e, index) => {
    const textCopy = [...this.state.userInput];

    textCopy.splice(index, 1);

    const updatedText = textCopy.join("");

    this.setState({ userInput: updatedText });
  };

  render() {
    let para = null;
    if (this.state.userInput)
      para = <p>{this.state.userInput}</p>;

    let boxes = null;
    if (this.state.userInput)
      boxes = (
        <div>
          {Array.from(this.state.userInput).map(
            (char, index) =>
              (boxes = (
                <CharComponent
                  value={char}
                  key={index}
                  click={(event) =>
                    this.delete(event, index)
                  }
                />
              ))
          )}
        </div>
      );

    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <ol>
          <li>
            Create an input field (in App component) with a
            change listener which outputs the length of the
            entered text below it (e.g. in a paragraph).
          </li>
          <li>
            Create a new component (= ValidationComponent)
            which receives the text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output
            "Text too short" or "Text long enough" depending
            on the text length (e.g. take 5 as a minimum
            length)
          </li>
          <li>
            Create another component (= CharComponent) and
            style it as an inline box (= display:
            inline-block, padding: 16px, text-align: center,
            margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each
            CharComponent receives a different letter of the
            entered text (in the initial input field) as a
            prop.
          </li>
          <li>
            When you click a CharComponent, it should be
            removed from the entered text.
          </li>
        </ol>
        <p>
          Hint: Keep in mind that JavaScript strings are
          basically arrays!
        </p>
        <hr />

        <div className="Assignment">
          <input
            type="text"
            onChange={this.count}
            value={this.state.userInput}
          />
          {para}

          <ValidationComponent
            len={this.state.userInput.length}
          />
          {boxes}
        </div>
      </div>
    );
  }
}

export default assignment2;
