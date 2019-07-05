import React from "react";
import SporePrint from "../SporePrint";
import CapType from "../CapType";
import Ecology from "../Ecology";
import HymeniumShapeType from "../HymeniumShapeType";
import StipeType from "../StipeType";
import HymeniumSporeType from "../HymeniumSporeType";

class Identification extends React.Component {
  state = {
    stage: 1,
    CapType: null,
    HymeniumSporeType: null,
    HymeniumShapeType: null,
    StipeType: null,
    SporePrint: null,
    Ecology: null,
    results: null
  };

  filteringFunc = filters => {
    this.setState({ stage: this.state.stage + 1 });
    let { mushrooms } = this.props;
    let {
      CapType,
      HymeniumSporeType,
      HymeniumShapeType,
      StipeType,
      SporePrint,
      Ecology
    } = filters;

    let results = [];
    mushrooms.map(mushroom => {
      if (
        mushroom.mycology.cap_type.includes(CapType) &&
        mushroom.mycology.hymenium_spore_type.includes(HymeniumSporeType) &&
        mushroom.mycology.hymenium_shape_type.includes(HymeniumShapeType) &&
        mushroom.mycology.stipe_type.includes(StipeType) &&
        mushroom.mycology.spore_print.includes(SporePrint) &&
        mushroom.mycology.ecology.includes(Ecology)
      ) {
        results.push(mushroom);
      }
    });
    console.log(results);
    return results;
  };

  async componentDidUpdate() {
    let { stage } = this.state;
    if (stage === 7) {
      const results = this.filteringFunc(this.state);
      this.setState({ results: results });
    }
  }

  setOption = (type, option) => {
    this.setState({ type, option });
  };

  handleClick = (e, type, char) => {
    this.setState({ [type]: char, stage: this.state.stage + 1 });
  };

  render() {
    let { stage } = this.state;
    if (stage === 1) {
      return (
        <React.Fragment>
          <CapType />
          <h2
            value="CapType"
            className="id-button"
            onClick={() => this.handleClick(null, "CapType", "umbonate")}
          >
            Umbonate
          </h2>
          <h2
            value="CapType"
            className="id-button"
            onClick={() => this.handleClick(null, "CapType", "convex")}
          >
            Convex
          </h2>
          <h2
            value="CapType"
            className="id-button"
            onClick={() => this.handleClick(null, "CapType", "flat")}
          >
            Flat
          </h2>
          <h2
            value="CapType"
            className="id-button"
            onClick={() => this.handleClick(null, "CapType", "conical")}
          >
            Conical
          </h2>
          <h2
            value="CapType"
            className="id-button"
            onClick={() => this.handleClick(null, "CapType", "depressed")}
          >
            Depressed
          </h2>
          <h2
            value="CapType"
            className="id-button"
            onClick={() => this.handleClick(null, "CapType", "capanulate")}
          >
            Capanulate
          </h2>
          <h2
            value="CapType"
            className="id-button"
            onClick={() => this.handleClick(null, "CapType", "infundibuliform")}
          >
            Infundibuliform
          </h2>
        </React.Fragment>
      );
    }
    if (stage === 2) {
      return (
        <React.Fragment>
          <HymeniumSporeType />
          <h2
            value="HymeniumSporeType"
            className="id-button"
            onClick={() => this.handleClick(null, "HymeniumSporeType", "gills")}
          >
            Gills
          </h2>
          <h2
            value="HymeniumSporeType"
            className="id-button"
            onClick={() => this.handleClick(null, "HymeniumSporeType", "teeth")}
          >
            Teeth
          </h2>
          <h2
            value="HymeniumSporeType"
            className="id-button"
            onClick={() => this.handleClick(null, "HymeniumSporeType", "pores")}
          >
            Pores
          </h2>
          <h2
            value="HymeniumSporeType"
            className="id-button"
            onClick={() =>
              this.handleClick(null, "HymeniumSporeType", "ridges")
            }
          >
            Ridges
          </h2>
        </React.Fragment>
      );
    }
    if (stage === 3) {
      return (
        <React.Fragment>
          <HymeniumShapeType />
          <h2
            value="HymeniumShapeType"
            className="id-button"
            onClick={() => this.handleClick(null, "HymeniumShapeType", "free")}
          >
            Free
          </h2>
          <h2
            value="HymeniumShapeType"
            className="id-button"
            onClick={() =>
              this.handleClick(null, "HymeniumShapeType", "adnate")
            }
          >
            Adnate
          </h2>
          <h2
            value="HymeniumShapeType"
            className="id-button"
            onClick={() =>
              this.handleClick(null, "HymeniumShapeType", "decurrent")
            }
          >
            Decurrent
          </h2>
          <h2
            value="HymeniumShapeType"
            className="id-button"
            onClick={() =>
              this.handleClick(null, "HymeniumShapeType", "adnexed")
            }
          >
            Adnexed
          </h2>
          <h2
            value="HymeniumShapeType"
            className="id-button"
            onClick={() =>
              this.handleClick(null, "HymeniumShapeType", "sinuate")
            }
          >
            Sinuate
          </h2>
        </React.Fragment>
      );
    }
    if (stage === 4) {
      return (
        <React.Fragment>
          <StipeType />
          <h2
            value="StipeType"
            className="id-button"
            onClick={() => this.handleClick(null, "StipeType", "bare")}
          >
            Bare
          </h2>
          <h2
            value="StipeType"
            className="id-button"
            onClick={() => this.handleClick(null, "StipeType", "ring")}
          >
            Ring
          </h2>
          <h2
            value="StipeType"
            className="id-button"
            onClick={() => this.handleClick(null, "StipeType", "volva")}
          >
            Volva
          </h2>
        </React.Fragment>
      );
    }
    if (stage === 5) {
      return (
        <React.Fragment>
          <SporePrint />
          <h2
            value="SporePrint"
            className="id-button"
            onClick={() => this.handleClick(null, "SporePrint", "white")}
          >
            White
          </h2>
          <h2
            value="SporePrint"
            className="id-button"
            onClick={() => this.handleClick(null, "SporePrint", "yellow")}
          >
            Yellow
          </h2>
          <h2
            value="SporePrint"
            className="id-button"
            onClick={() => this.handleClick(null, "SporePrint", "olive")}
          >
            Olive
          </h2>
          <h2
            value="SporePrint"
            className="id-button"
            onClick={() => this.handleClick(null, "SporePrint", "tan")}
          >
            Tan
          </h2>
          <h2
            value="SporePrint"
            className="id-button"
            onClick={() => this.handleClick(null, "SporePrint", "cream")}
          >
            Cream
          </h2>
          <h2
            value="SporePrint"
            className="id-button"
            onClick={() => this.handleClick(null, "SporePrint", "brown")}
          >
            Brown
          </h2>
          <h2
            value="SporePrint"
            className="id-button"
            onClick={() => this.handleClick(null, "SporePrint", "pink")}
          >
            Pink
          </h2>
          <h2
            value="SporePrint"
            className="id-button"
            onClick={() => this.handleClick(null, "SporePrint", "purple")}
          >
            Purple
          </h2>
          <h2
            value="SporePrint"
            className="id-button"
            onClick={() => this.handleClick(null, "SporePrint", "black")}
          >
            Black
          </h2>
        </React.Fragment>
      );
    }
    if (stage === 6) {
      return (
        <React.Fragment>
          <Ecology />
          <h2
            value="Ecology"
            className="id-button"
            onClick={() => this.handleClick(null, "Ecology", "mycorrhizal")}
          >
            Mycorrhizal
          </h2>
          <h2
            value="Ecology"
            className="id-button"
            onClick={() => this.handleClick(null, "Ecology", "saprotrophic")}
          >
            Saprotrophic
          </h2>
        </React.Fragment>
      );
    }
    if (stage > 6) {
      return <h1>results</h1>;
    }
  }
}

export default Identification;
