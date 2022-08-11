import { Fragment } from "react";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#6e6d6d",
        paddingBottom: "10rem",
      }}
    >
      <MainHeader />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
