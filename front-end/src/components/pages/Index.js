import React, { Component } from "react";

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
      <div className="book-list">
        {this.state.mushrooms.map((mushroom, index) => (
          <div key={index} className="book">
            {console.log(mushroom)}
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
