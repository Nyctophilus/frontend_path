import React from "react";

// Other way to create HOC
// -HL use for mostly the need of js code adding logic such handling errors

export default withClass =
  (WrappedComponent, className) => (props) => {
    <div>
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    </div>;
  };

// FIXME!!!  Usage
// wrap the whole app with it passing the argu

/*
  	export default withClass(App, classes.App)
*/
