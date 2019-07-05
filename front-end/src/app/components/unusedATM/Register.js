import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Register extends React.Component {
  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  confirmPassword = (password, confirmation) => {
    return password === confirmation ? true : false;
  };

  // register = async () => {
  //   console.log("@@@@@@@@@@      @@@@@");
  //   let credentials = this.state;
  //   console.log("@@@@@@@@@@@@@@@");
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/auth/register",
  //       credentials
  //     );
  //     console.log("@@@@@@@@ ", response, "   @@@@@@");
  //     const token = response.data.token;
  //     localStorage.setItem("token", token);
  //     this.setState({ localAuth: true });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  register = () => {
    console.log("@@@@@@@@@@      @@@@@");
    let credentials = this.state;
    console.log("@@@@@@@@@@@@@@@");

    axios.post("http://localhost:5000/auth/register", credentials).then(res => {
      console.log(res);
      this.setState({ localAuth: true });
      const token = res.data.token;
      localStorage.setItem("token", token);
    });
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
            <input type="submit" value="Submit" onClick={this.register} />
          </form>
        </>
      );
    }
  }
}

export default Register;
