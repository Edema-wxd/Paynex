import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function Headnav() {
  return (
    <>
      <div>
        <Link to="/">
          <img src={logo} alt="Home Page" />
        </Link>
      </div>
    </>
  );
}

export default Headnav;
