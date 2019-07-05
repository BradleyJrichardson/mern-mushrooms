import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import List from "../components/pages/List";
import Login from "../components/pages/Login";
import Landing from "../components/pages/Landing";
import Register from "../components/pages/Register";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
