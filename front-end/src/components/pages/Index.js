import React, { Component } from "react";
import IndexCard from "../utils/IndexCard";

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
      <div>
        {this.state.mushrooms.map((mushroom, index) => (
          <div key={index}>
            <IndexCard mushroom={mushroom} />
          </div>
        ))}
      </div>
    );
  };

  render() {
    return <div>{this.mushroomIndex()}</div>;
  }
}

export default Index;
