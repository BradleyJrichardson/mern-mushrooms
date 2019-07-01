import React, { Component } from "react";
import IndexCard from "../utils/IndexCard";
import Header from "../utils/Header";
import Sidebar from "../utils/Sidebar";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mushrooms: []
    };
  }

  mushroomIndex = () => {
    console.log(this.props);
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
        <Sidebar />
        {this.mushroomIndex()}
      </React.Fragment>
    );
  }
}

export default Index;
