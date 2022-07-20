import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={styles.mt}>{children}</main>
    </>
  );
};

export default Layout;
