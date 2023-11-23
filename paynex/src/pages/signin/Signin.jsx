import React, { useContext } from "react";
import Gcontext from "../../context/Gcontext";
import style from "./Signin.module.css";

function Signin() {
  const { login, logout } = useContext(Gcontext);
  return (
    <div className={style.Sign}>
      <div className={style.Signincard}>
        <button onClick={login}>Sign in</button>
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
}

export default Signin;
