import React, { useContext } from "react";
import Gcontext from "../../context/Gcontext";
import style from "./Signin.module.css";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import signimg from "../../assets/images/sigin.svg";

function Signin() {
  const { login } = useContext(Gcontext);
  const navigate = useNavigate();
  const signin = () => {
    login();
    navigate("/dashboard");
  };
  var bucket
  
  let location = useLocation();
  if (location.pathname === "/signin") {
bucket = (
  <>
    <img src={signimg} alt="" />
    <h6>Welcome</h6>
    <p>Enter your details to log in to your account.</p>
    <form action="">
      <input type="email" name="" id="" placeholder="Enter your email" />
      <input type="password" name="" id="" placeholder="Password" />
      <button onClick={signin}>Sign in</button>
    </form>
    <a href="http://" target="_blank" rel="noopener noreferrer">
      forgot your password
    </a>
  </>
);
    
  } else {
    bucket = <Outlet/>
    
  }
  

  return (
    <div className={style.Sign}>
      <div className={style.Signincard}>
        {bucket}
      </div>
    </div>
  );
}

export default Signin;
