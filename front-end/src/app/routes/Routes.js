import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import List from "../components/pages/List";
import Login from "../components/pages/Login";
import Intro from "../components/pages/Intro";
import Register from "../components/pages/Register";

class Routes extends React.Component {
  render() {
    const { mushrooms, auth } = this.props;
    console.log(this.props);
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/list"
            render={() => {
              return <List mushrooms={mushrooms} auth={auth} />;
            }}
          />
          <Route
            path="/login"
            render={() => {
              return <Login login={this.props.login} auth={auth} />;
            }}
          />

          <Route
            path="/register"
            render={() => {
              return <Register register={this.props.register} auth={auth} />;
            }}
          />

          <Route path exact="/" render={Intro} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
