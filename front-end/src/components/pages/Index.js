import React, { Component } from "react";
import IndexCard from "../utils/IndexCard";
import Header from "../utils/Header";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mushrooms: []
    };
  }

  componentDidMount() {
    this.loadMushrooms();
  }

  loadMushrooms = () => {
    const url = "http://localhost:5000/mushroom";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          mushrooms: data
        });
      });
  };

  mushroomIndex = () => {
    return (
      <React.Fragment>
        <div className="wrapper">
          {this.state.mushrooms.map((mushroom, index) => (
            <IndexCard key={index} mushroom={mushroom} />
          ))}
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.mushroomIndex()}
      </React.Fragment>
    );
  }
}

export default Index;
