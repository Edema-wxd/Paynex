import React from "react";
import style from "./Siginbtn.module.css";
import { Link } from "react-router-dom";

function Signinbtn() {
  return (
    <div className={style.Sign}>
      <Link to="/signin">
        <button className={style.Signinbtn}>Sign in</button>
      </Link>
      <Link to="/signin/signup">
        <button className={style.Signupbtn}>Sign up</button>
      </Link>
    </div>
  );
}

export default Signinbtn;
