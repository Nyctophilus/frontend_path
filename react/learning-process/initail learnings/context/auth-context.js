import React from "react";

// react.context to pass props between layers which inBetween layers doesnt care about them to avoid that context API

// u dedice where the context value available

const authContext = React.createContext({
  authenticated: false,
  login: () => {},
});

export default authContext;

// it should wraps the parts u want access to this values

{
  /* <authContext.Provider>
  <wrappedComponent />
</authContext.Provider>; */
}

{
  /* <authContext.Consumer>
  {(context)=> (jsx)}
</authContext.Consumer>; */
}
