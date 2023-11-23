import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Gcontext from "../context/Gcontext";
import Headnav from "./shared/Headnav";
import style from "./Nav.module.css";
import Signinbtn from "./shared/signinbtn/Signinbtn";
import bell from "../assets/images/bell.svg";

function Homenav({ children }) {
  const { useractive } = useContext(Gcontext);
  let location = useLocation();
  var dump;

  if (
    useractive === true &&
    (location.pathname === "/dashboard" || /dashboard/.test(location.pathname))
  ) {
    dump = (
      <>
        <Link to="/dashboard/activity">
          <img src={bell} alt="" />
        </Link>
      </>
    );
  } else if (
    location.pathname === "/" ||
    "/services" ||
    "/about" ||
    "/signin"
  ) {
    dump = (
      <>
        <nav>
          <AnchorLink href="#services">Services</AnchorLink>
          <AnchorLink href="#about">About</AnchorLink>
          <AnchorLink href="#contact">Contact</AnchorLink>
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
