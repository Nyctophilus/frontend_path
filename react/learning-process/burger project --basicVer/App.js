import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Aux from "./hoc/AUXE";

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <p>Test!!</p>
        </Layout>
      </Aux>
    );
  }
}

export default App;
