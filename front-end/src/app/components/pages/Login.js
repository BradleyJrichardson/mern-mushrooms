import React from "react";
import { Redirect } from "react-router-dom";
import { Authorizer } from "../../routes/Routes";

class Login extends React.Component {
  state = {
    redirect: false
  };

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  login = e => {
    let credentials = this.state;
    e.preventDefault();
    Authorizer.authenticate(credentials, () => {
      this.setState(() => ({
        redirect: true
      }));
    });
  };

  render() {
    const { redirect } = this.state;

    if (redirect === true) {
      return <Redirect to="/list" />;
    }

    return (
      <div>
        <p>You must log in to view the page</p>
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
          <input type="submit" value="Submit" onClick={this.login} />
        </form>
      </div>
    );
  }
}

export default Login;
