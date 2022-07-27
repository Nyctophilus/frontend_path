import React from "react";
import Setup from "./tutorial/12-memo-useMemo-useCallback/setup";
import Project from "./YT-tut-projects/Cocktails";
import WDS from "./WDS-30m-learn/";

import Blog from "./Blog -axios/containers/Blog/Blog";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router
    // basename ="my-app"
    >
      <div className="App">
        <Blog />
      </div>
    </Router>
  );
}

export default App;
