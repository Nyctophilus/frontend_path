import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = () => {
  const authCtx = useContext(AuthContext);

  if (authCtx.isLoggedIn)
    return (
      <Card className={classes.home}>
        <h1>Welcome back!</h1>
      </Card>
    );
};

export default Home;
