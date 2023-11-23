import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Gcontext from "../context/Gcontext";
import Dashnav from "./shared/Dashnav";
import Headnav from "./shared/Headnav";
import style from "./Nav.module.css";
import Signinbtn from "./shared/signinbtn/Signinbtn";

function Homenav({ children }) {
  const { useractive } = useContext(Gcontext);
  let location = useLocation();
  var dump;

  if (useractive === true && location.pathname === "/dashboard") {
    dump = (
      <>
        <p>Dashboard {location.pathname}</p>
        <Dashnav />
        {children}
      </>
    );
  } else if (
    useractive === false &&
    (location.pathname === "/" || "/services" || "/about" || "/signin")
  ) {
    dump = (
      <>
        <nav>
          <Link to="/">Landing</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Signinbtn />
      </>
    );
  } else {
    dump = <Link to="/signin">Signin</Link>;
  }

  return (
    <div className={style.Nav}>
      <Headnav />
      {dump}
    </div>
  );
}

export default Homenav;
