import React from "react";
import Image from "./Image";

const IndexCard = props => {
  let {
    common_name,
    binomial_name,
    division,
    mush_class,
    family,
    order,
    description,
    mycology,
    images
  } = props.mushroom;

  let {
    cap_type,
    hymenium_shape_type,
    hymenium_spore_type,
    stipe_type,
    edibility_type
  } = mycology;

  const commonNames = common_name.map((name, index) => (
    <div key={index}>{name}</div>
  ));

  // const mushImages = images.map((image, index) => {
  //   <div key={index}>
  //     <img src={image} alt="" />
  //   </div>;
  // });

  return (
    <React.Fragment>
      <div className="card">
        <h3>{binomial_name}</h3>
        <div>{commonNames}</div>
        <div className="italic project-about">{description} </div>
        <div className="project-text">{division}</div>
        <div className="project-text"> {mush_class}</div>
        <div className="project-text"> {family}</div>
        <div className="project-text"> {order}</div>
        <h1>Mycology</h1>
        <div className="project-text"> {cap_type}</div>
        <div className="project-text"> {hymenium_shape_type}</div>
        <div className="project-text"> {hymenium_spore_type}</div>
        <div className="project-text"> {stipe_type}</div>
        <div className="project-text"> {edibility_type}</div>
        {/* <div>{mushImages}</div> */}
      </div>
    </React.Fragment>
  );
};

export default IndexCard;
