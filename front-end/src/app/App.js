import React from "react";
import "./App.css";
import Routes from "./routes/Routes";
import axios from "axios";

class App extends React.Component {
  state = { mushrooms: null };

  async componentDidMount() {
    const token = localStorage.getItem("token");

    console.log(token);
    try {
      const response = await axios.get("http://localhost:5000/mush/index");
      this.setState({
        mushrooms: response.data
      });
    } catch (err) {
      console.log(err);
    }
    console.log(this.state);
  }

  render() {
    const { mushrooms } = this.state;
    return <Routes mushrooms={mushrooms} />;
  }
}

export default App;
