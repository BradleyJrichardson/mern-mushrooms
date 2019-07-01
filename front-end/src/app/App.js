import React from "react";
import "./App.css";
import Routes from "./routes/Routes";
import axios from "axios";

class App extends React.Component {
  state = { mushrooms: null, auth: false };
  // get countries list data
  login = async userCredentials => {
    // console.log(userCredentials)
    // check the credentials
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        userCredentials
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      this.setState({
        auth: true
      });
    } catch (err) {
      this.setState({
        auth: false,
        error: err
      });
    }
  };

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:5000/mushroom");
      const token = localStorage.getItem("token");
      const auth = await axios.get("http://localhost:5000/user/current-user", {
        headers: { token: token }
      });
      this.setState({
        mushrooms: response.data,
        auth: true,
        currentUser: auth.data
      });
    } catch (err) {
      console.log(err);
      const response = await axios.get("http://localhost:5000/mushroom");
      this.setState({
        mushrooms: response.data,
        auth: false
      });
    }
  }

  render() {
    const { mushrooms, auth } = this.state;
    if (!countriesList) {
      return null;
    } else {
      return (
        // pass that data to routes
        <Routes mushrooms={mushrooms} auth={auth} login={this.login} />
      );
    }
  }
}

export default App;
