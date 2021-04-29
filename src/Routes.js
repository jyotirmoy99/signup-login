import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostForm from "./components/PostForm";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ForgetPass from "./components/ForgetPass";
import NewPassword from "./components/NewPassword";
// import EnterOTP from "./components/EnterOTP";

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact={true}
            path="/"
            render={(e, props) => <PostForm {...e} data={props} />}
          />
          <Route
            exact={true}
            path="/login"
            render={(e, props) => <Login {...e} data={props} />}
          />
          <Route
            exact={true}
            path="/profile"
            render={(e, props) => <Profile {...e} data={props} />}
          />
          <Route
            exact={true}
            path="/forgot"
            render={(e, props) => <ForgetPass {...e} data={props} />}
          />
          <Route
            exact={true}
            path="/reset"
            render={(e, props) => <NewPassword {...e} data={props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
