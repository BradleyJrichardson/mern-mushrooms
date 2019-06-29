import React from "react";
import "./App.css";
import Landing from "../pages/Landing";
require("dotenv").config();

const App = () => {
  return (
    <div className="wrapper">
      <Landing />
      <div>
        hello in this div there's an image
        <img
          src="https://res.cloudinary.com/djx4kaofm/image/upload/v1561802225/mushrooms/Agaricus_subrufescens_1_q5nc0u.jpg"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/djx4kaofm/image/upload/v1561802208/mushrooms/Agaricus_subrufescens_2_eopsp1.jpg"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/djx4kaofm/image/upload/v1561802199/mushrooms/Agaricus_subrufescens_3_tsin5g.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default App;
