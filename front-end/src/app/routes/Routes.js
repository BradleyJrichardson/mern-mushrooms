import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import List from "../components/pages/List";
import Login from "../components/pages/Login";
import Landing from "../components/pages/Landing";
import Register from "../components/pages/Register";
import axios from "axios";

export const Authorizer = {
  isAuthenticated: false,
  async authenticate(credentials, cb) {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        credentials
      );

      const token = response.data.token;
      console.log(token);
      localStorage.setItem("token", token);
      this.isAuthenticated = true;
      cb();
    } catch (err) {
      console.log(err);
    }
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Authorizer.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/list" component={List} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
