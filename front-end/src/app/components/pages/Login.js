import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {};

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  render() {
    if (this.props.auth) {
      return <Redirect to="/list" />;
    } else {
      return (
        <form>
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={this.handleInput}
          />
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={this.handleInput}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handleInput}
          />
          <input type="submit" value="Submit" onClick={this.handleLogin} />
        </form>
      );
    }
  }
}

export default Login;
