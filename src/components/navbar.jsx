import React from "react";
import { useHistory } from "react-router-dom";

let Navbar = () => {
  let history = useHistory();
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span
            className="navbar-brand mb-0 h1"
            onClick={() => {
              history.push("./home");
            }}
          >
            Resume Builder
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
