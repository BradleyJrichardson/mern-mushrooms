import React from "react";
import { Route, Switch } from "react-router-dom";

class Routes extends React.Component {
  render() {
    const { countriesList, authentication } = this.props;
    return (
      <Switch>
        <Route
          path="/list"
          render={() => {
            return (
              <List
                countriesList={countriesList}
                authentication={authentication}
              />
            );
          }}
        />
        <Route path="/country/:name" component={GetCountryData} />
        <Route
          path="/login"
          render={() => {
            return (
              <Login login={this.props.login} authentication={authentication} />
            );
          }}
        />
        <Route path="/search" />
      </Switch>
    );
  }
}

export default Routes;
