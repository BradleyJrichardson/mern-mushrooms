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
    stage: 1,
    CapType: null,
    HymeniumSporeType: null,
    HymeniumShapeType: null,
    StipeType: null,
    SporePrint: null,
    Ecology: null
  };

  async componentDidMount() {
    if (this.state.mushrooms === null) {
      try {
        const response = await axios.get("http://localhost:5000/mush/index");
        this.setState({
          mushrooms: response.data
        });
      } catch (err) {
        console.log(err);
      }
    }
    console.log("mounting");
  }

  setOption = (type, option) => {
    this.setState({ type, option });
  };

  handleClick = (e, type, char) => {
    console.log(type);
    console.log(char);
    this.setState({ [type]: char, stage: this.state.stage + 1 });
  };

  render() {
    console.log(this.state);
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
          <h2
            value="CapType"
            className="id-button"
            onClick={() => this.handleClick(null, "CapType", "Umbonate")}
          >
            Umbonate
          </h2>
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
    if (stage === 7) {
      return (
        <React.Fragment>{/* <Result results={results} /> */}</React.Fragment>
      );
    }
  }
}

export default App;
