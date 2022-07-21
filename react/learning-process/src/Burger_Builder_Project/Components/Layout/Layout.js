import React, { Component } from "react";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Siderdrawer from "../Navigation/SideDrawer/Siderdrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  siderdrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <>
        <Toolbar
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <Siderdrawer
          open={this.state.showSideDrawer}
          closed={this.siderdrawerClosedHandler}
        />
        <main className={styles.mt}>
          {this.props.children}
        </main>
      </>
    );
  }
}

export default Layout;
