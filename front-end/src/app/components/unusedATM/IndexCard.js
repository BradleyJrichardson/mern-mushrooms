import React from "react";

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
    spore_print,
    ecology,
    edibility_type
  } = mycology;

  const commonNames = common_name.map((name, index) => (
    <div key={index}>{name}</div>
  ));

  // const mushImages = images.map((name, index) => (
  //   <div key={index}>
  //     <Image src={name} width={330} height={280} mode="fit" />
  //   </div>
  // ));

  return (
    <React.Fragment>
      <div className="card">
        <h2 className="italic mush-heading">{binomial_name}</h2>
        <div className="mush-names">{commonNames}</div>
        <div className="italic mush-about">{description} </div>
        <img src={images[0]} alt="" className="index-image" />
        <div className="mush-text">{division}</div>

        <div className="mush-text"> {mush_class}</div>
        <div className="mush-text"> {family}</div>
        <div className="mush-text"> {order}</div>
        <h3 className="mush-subheading">Mycology</h3>

        <div className="mush-text">
          <span className="bold">Cap Type: </span>
          {cap_type}
        </div>
        <div className="mush-text">
          <span className="bold">Hymenium Shape: </span>
          {hymenium_shape_type}
        </div>
        <div className="mush-text">
          <span className="bold">Hymenium Spore Type: </span>
          {hymenium_spore_type}
        </div>
        <div className="mush-text">
          <span className="bold">Spore Print: </span>
          {spore_print}
        </div>
        <div className="mush-text">
          <span className="bold">Stipe:</span> {stipe_type}
        </div>
        <div className="mush-text">
          <span className="bold">Ecology:</span> {ecology}
        </div>
        <div className="mush-text">
          <span className="bold">{edibility_type}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IndexCard;
