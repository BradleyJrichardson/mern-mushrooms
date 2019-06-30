import React from "react";
import Index from "./Index";
import Intro from "./Intro";

export default class Landing extends React.Component {
  state = {
    authed: true
  };

  render() {
    if (this.state.authed) {
      return <Index />;
    } else {
      return <Intro />;
    }
  }
}
