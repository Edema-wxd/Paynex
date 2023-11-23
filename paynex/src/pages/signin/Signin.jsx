import React, { useContext } from "react";
import Gcontext from "../../context/Gcontext";
import style from "./Signin.module.css";
import { useNavigate } from "react-router-dom";

function Signin() {
  const { login, logout } = useContext(Gcontext);
  const navigate = useNavigate();
  const signin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div className={style.Sign}>
      <div className={style.Signincard}>
        <button onClick={signin}>Sign in</button>
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
}

export default Signin;
