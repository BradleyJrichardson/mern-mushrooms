import React from "react";
import "./App.css";
import axios from "axios";
import Landing from "./components/Landing";
import SporePrint from "./components/SporePrint";
import CapType from "./components/CapType";
import Ecology from "./components/Ecology";
import HymeniumShapeType from "./components/HymeniumShapeType";
import StipeType from "./components/StipeType";
import HymeniumSporeType from "./components/HymeniumSporeType";

class App extends React.Component {
  state = {
    mushrooms: null,
    stage: 0
  };

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:5000/mush/index");
      this.setState({
        mushrooms: response.data
      });
    } catch (err) {
      console.log(err);
    }
  }

  handleClick = () => {
    this.setState({ stage: this.state.stage + 1 });
  };

  render() {
    console.log(this.state.mushrooms);
    let { stage } = this.state;
    console.log(stage);
    if (stage === 0) {
      return (
        <React.Fragment>
          <Landing />
          <button className="mush-index" onClick={this.handleClick}>
            <h3>Identify a Mushroom</h3>
          </button>
          <button className="mush-index" onClick={this.handleClick}>
            <h3>Guide</h3>
          </button>
          <button className="mush-index" onClick={this.handleClick}>
            <h3>Index of Mushrooms</h3>
          </button>
          <button className="mush-index" onClick={this.handleClick}>
            <h3>More on mushrooms</h3>
          </button>
        </React.Fragment>
      );
    }

    if (stage === 1) {
      return (
        <React.Fragment>
          <CapType />
          <button onClick={this.handleClick}>next option</button>
        </React.Fragment>
      );
    }
    if (stage === 2) {
      return (
        <React.Fragment>
          <HymeniumSporeType />
          <button onClick={this.handleClick}>next option</button>
        </React.Fragment>
      );
    }
    if (stage === 3) {
      return (
        <React.Fragment>
          <HymeniumShapeType />
          <button onClick={this.handleClick}>next option</button>
        </React.Fragment>
      );
    }
    if (stage === 4) {
      return (
        <React.Fragment>
          <StipeType />
          <button onClick={this.handleClick}>next option</button>
        </React.Fragment>
      );
    }
    if (stage === 5) {
      return (
        <React.Fragment>
          <SporePrint />
          <button onClick={this.handleClick}>next option</button>
        </React.Fragment>
      );
    }
    if (stage === 6) {
      return (
        <React.Fragment>
          <Ecology />
          <button onClick={this.handleClick}>next option</button>
        </React.Fragment>
      );
    }
  }
}

export default App;
