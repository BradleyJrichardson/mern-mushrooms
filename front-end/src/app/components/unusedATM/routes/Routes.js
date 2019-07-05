import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import List from "../components/pages/List";
import Login from "../components/pages/Login";
import Landing from "../components/pages/Landing";
import Register from "../components/pages/Register";
import { ThemeConsumer } from "../contexts/AuthContext";

class Routes extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {({ authed }) => (
          <BrowserRouter>
            <Switch>
              {authed && <Route exact path="/list" component={List} />}
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/" component={Landing} />
              <Route
                path="*"
                component={() => <h1>44 Wallaby Way Sydney 🐠</h1>}
              />
            </Switch>
          </BrowserRouter>
        )}
      </ThemeConsumer>
    );
  }
}

export default Routes;
