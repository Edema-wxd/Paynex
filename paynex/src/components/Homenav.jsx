import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Gcontext from "../context/Gcontext";
import Dashnav from "./shared/Dashnav";

function Homenav() {
  const { useractive } = useContext(Gcontext);
  let location = useLocation();

  if (useractive === true && location.pathname === "/dashboard") {
    return (
      <p>
        {" "}
        Dashboard {location.pathname} <Dashnav />
      </p>
    );
  } else if (
    useractive === true &&
    (location.pathname === "/" || "/services" || "/about" || "/signin")
  ) {
    return (
      <nav>
        <p>{location.pathname}</p>
        <Link to="/">Landing</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/signin">signin</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    );
  } else {
    return <Link to="/signin">Signin</Link>;
  }
}

export default Homenav;
