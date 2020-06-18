import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../contexts/user-context";
import LoginForm from "./login";
import "./style.css";
import { log_in } from "../../util";

export default function Login() {
  const history = useHistory();
  const { user, initUser } = useContext(UserContext);

  const enter = async (values) => {
    let result = await log_in({
      email: values.email,
      password: values.password,
    });
    if (result.message) {
      console.log(result.message);
    } else {
      localStorage.setItem(
        "session_user_info",
        JSON.stringify(result.access_token)
      );
      initUser(result);
    }
  };

  useEffect(() => {
    if (user) {
      history.push(
        history.location.state && history.location.state.redirect
          ? history.location.state.redirect
          : "/"
      );
    }
  }, [user, history]);

  useEffect(() => {
    if (localStorage.getItem("session_user_info")) {
      initUser(JSON.parse(localStorage.getItem("session_user_info")));
      console.log("user is here");
    } else {
      // user i login ele gine, sora da contextu update ele initUser
      //   API.Login();
    }
  }, [initUser]);

  return (
    <div className="login-wrapper">
      <LoginForm submit={enter} />
    </div>
  );
}
