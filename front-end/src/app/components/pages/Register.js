import React from "react";
import { Redirect } from "react-router-dom";

class Register extends React.Component {
  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  confirmPassword = (password, confirmation) => {
    return password === confirmation ? true : false;
  };

  handleRegister = e => {
    e.preventDefault();
    if (
      this.confirmPassword(this.state.password, this.state.confirmation) ===
      true
    ) {
      this.props.register(this.state);
    } else {
      alert("Passwords do not match!");
      return null;
    }
  };

  render() {
    if (this.props.authentication) {
      return <Redirect to="/list" />;
    } else {
      return (
        <>
          <h1>Register</h1>
          <form>
            <label>email</label>
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
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmation"
              id="confirmation"
              onChange={this.handleInput}
            />
            <input type="submit" value="Submit" onClick={this.handleRegister} />
          </form>
        </>
      );
    }
  }
}

export default Register;
