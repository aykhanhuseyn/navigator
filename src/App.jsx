import React from "react";
import Main from "./pages/main";
import "antd/dist/antd.css";
import "./index.css";
import UserProvider from "./components/user-provider";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import { PrivateRoute } from "./components/private-route";

const App = () => {
  return (
    <UserProvider>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/" component={Main} />
      </Switch>
    </UserProvider>
  );
};

export default App;
