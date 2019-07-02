import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../utils/ProtectedRoute";
import List from "../components/pages/List";
import Login from "../components/pages/Login";
import Landing from "../components/pages/Landing";
import Register from "../components/pages/Register";

class Routes extends React.Component {
  render() {
    // const { mushrooms, auth } = this.props;
    // console.log(this.props);
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/list" component={List} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
