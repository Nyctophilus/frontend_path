import React from "react";
import Aux from "../../hoc/AUXE";

const layout = (props) => (
  <Aux>
    <div>Toolbar, sideDrawer, Backdrop</div>

    <main>{props.children}</main>
  </Aux>
);

export default layout;
