import React from "react";
import "./App.css";
import Routes from "./routes/Routes";
import axios from "axios";

class App extends React.Component {
  state = { mushrooms: null };

  login = async userCredentials => {
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
      const response = await axios.get("http://localhost:5000/mush/index");
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
      const response = await axios.get("http://localhost:5000/mush/index");
      this.setState({
        mushrooms: response.data,
        auth: false
      });
    }
  }

  render() {
    const { mushrooms } = this.state;
    return <Routes mushrooms={mushrooms} />;
  }
}

export default App;
