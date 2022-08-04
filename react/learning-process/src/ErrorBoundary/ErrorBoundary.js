import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error) {
    console.log(error);

    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError)
      return <h2>Something went wrong!</h2>;

    return this.props.children;
  }
}

export default ErrorBoundary;
