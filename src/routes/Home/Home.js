import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Link from "../../components/Link/Link";

const Home = () => {
  const preventDefault = (e) => e.preventDefault();
  return (
    <AppBar>
      <Toolbar>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/history">History</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Home;
