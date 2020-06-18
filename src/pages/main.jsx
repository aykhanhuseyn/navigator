import React from "react";
import Sceleton from "./sceleton";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import Users from "./users";

const Main = () => {
  return (
    <Router>
      <Sceleton>
        <Switch>
          <Route path="/about">
            <div>About</div>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Sceleton>
    </Router>
  );
};

export default Main;
