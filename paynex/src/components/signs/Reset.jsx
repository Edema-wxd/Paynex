import React from "react";
import emailicon from "../../assets/images/emailsignup.svg";
import lock from "../../assets/images/lock-closed.svg";
import pinfo from "../../assets/images/pinfo.svg";
import { useNavigate } from "react-router-dom";

import celebrate from "../../assets/images/celebrate.svg";

function Reset() {
  var navigate = useNavigate();
  const loginpage = () => {
    navigate("/signin");
  };
  var box;
  var one = (
    <div>
      <img src={lock} alt="" />
      <h6>Reset Password</h6>
      <p>Make sure you enter the email you used in registering this account.</p>
      <form action="">
        <input type="email" name="" id="" placeholder="Enter Email" />
        <button>Reset Password</button>
      </form>
    </div>
  );
  var two = (
    <div>
      <img src={emailicon} alt="" />
      <h6> Ready! Check your email</h6>
      <p>A password recovery link has been sent to your email</p>
      <img src={celebrate} alt="" />
    </div>
  );
  var three = (
    <div>
      <img src={lock} alt="" />
      <h6>Reset your Password</h6>
      <p>Create your new password </p>
      <form action="">
        <input type="password" name="" id="" placeholder="Password" />
        <input type="password" name="" id="" placeholder="Re-Enter Password" />
        <div>
          <p>1 Number</p>
          <p>1 Capital letter</p>
          <p>8 Characters</p>
        </div>
        <button>Create</button>
      </form>
    </div>
  );
  var four = (
    <div>
      <img src={lock} alt="" />
      <h6> Ready! Password Reset</h6>
      <p>Your password has been reset successfully </p>
      <img src={celebrate} alt="" />

      <button onClick={loginpage}>Back to Login</button>
    </div>
  );
  return <div>{one}</div>;
}

export default Reset;
