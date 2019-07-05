import React from "react";
import "./App.css";
import axios from "axios";
import Landing from "./components/Landing";
import Identification from "./components/pages/Identification";

class App extends React.Component {
  state = {
    mushrooms: null,
    stage: 0
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
    console.log(this.state.mushrooms);
  }

  handleClick = () => {
    this.setState({ stage: this.state.stage + 1 });
  };

  render() {
    let { stage } = this.state;
    let { mushrooms } = this.state;
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
      return <Identification mushrooms={mushrooms} />;
    }
  }
}

export default App;
