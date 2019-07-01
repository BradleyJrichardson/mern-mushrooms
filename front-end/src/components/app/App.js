import React from "react";
import "./App.css";
import axios from "axios";

import Index from "../pages/Index";
import Intro from "../pages/Intro";

export default class App extends React.Component {
  state = {
    mushrooms: [],
    authed: true
  };

  async componentDidMount() {
    try {
      const getMushrooms = axios.get('http://localhost:5000/mushroom"');
      const mushrooms = await getMushrooms;
      this.setState({
        mushrooms: mushrooms
      });
    } catch (err) {
      console.log("There was an error getting 🍄" + err);
    }
  }

  render() {
    if (this.state.authed) {
      return <Index mushrooms={this.state.mushrooms} />;
    } else {
      return <Intro />;
    }
  }
}
