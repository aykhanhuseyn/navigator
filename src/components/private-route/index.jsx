import React, { useContext } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import UserContext from "../../contexts/user-context";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  return <Route {...rest}
      render={(props) => {
        if (user) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { redirect: history.location.pathname },
              }}
            />
          );
        }
      }}
    />
};
