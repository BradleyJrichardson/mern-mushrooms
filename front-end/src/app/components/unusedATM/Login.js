import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {};

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  authenticate = async () => {
    let credentials = this.state;
    console.log(this.state);
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        credentials
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log(token);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    console.log(this.state);
  }
  render() {
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
          <input type="submit" value="Submit" onClick={this.authenticate} />
        </form>
      </div>
    );
  }
}

export default Login;
