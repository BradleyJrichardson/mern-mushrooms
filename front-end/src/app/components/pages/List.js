import React from "react";
import IndexCard from "../utils/IndexCard";
import { Redirect } from "react-router-dom";

const List = props => {
  const { mushrooms, auth } = props;
  console.log(props);

  if (auth) {
    return (
      <React.Fragment>
        <div className="wrapper">
          {mushrooms.map((mushroom, index) => (
            <IndexCard key={index} mushroom={mushroom} />
          ))}
        </div>
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default List;
