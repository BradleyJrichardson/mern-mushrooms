import React from "react";
import Auth from "../../utils/Auth";

export default function Landing(props) {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>
          Welcome to the Mushroom App
          <span className="wave" role="img">
            🍄
          </span>
          <hr />
          <button
            onClick={() => {
              Auth.login(() => {
                props.history.push("/list");
              });
            }}
          >
            Login
          </button>
        </h1>
      </div>
    </div>
  );
}
