import React, { Component } from "react";

// -HL Only wraps codes that might fails not all the whole app

// It's called higher order component
// simply it wraps others components that might throw an error to handler these errors
export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMsg: "",
  };

  conponentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMsg: error,
    });
  };

  render() {
    if (this.state.hasError)
      return <h1>{this.state.errorMsg}</h1>;
    else return this.props.children;
  }
}
