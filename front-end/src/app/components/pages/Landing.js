import React from "react";
import { Link } from "react-router-dom";
import { Authorizer } from "../../routes/Routes";

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
          <div>
            <button>
              <Link to="/login">Login</Link>
            </button>
          </div>
        </h1>
      </div>
    </div>
  );
}
