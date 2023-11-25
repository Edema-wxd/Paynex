import React from "react";
import emailicon from "../../assets/images/emailsignup.svg";
import lock from "../../assets/images/lock-closed.svg";
import pinfo from "../../assets/images/pinfo.svg";

function Signup() {
  const shiftone = () => {};
  var box;
  var one = (
    <div>
      <img src={emailicon} alt="" />
      <h6>Email</h6>
      <p>
        Make sure you enter your personal email, it is important so you can
        recover your account.
      </p>
      <form action="">
        <input type="email" name="" id="" placeholder="Enter Email" />
        <input type="email" name="" id="" placeholder="Enter Email Again" />
        <button>Next</button>
      </form>
    </div>
  );
  var two = (
    <div>
      <img src={pinfo} alt="" />
      <h6>Personal data</h6>
      <p>We need your personal data to continue with the registration.</p>
      <form action="">
        <input type="text" name="" id="" placeholder="First Name" />
        <input type="text" name="" id="" placeholder="Last Name" />
        <select name="" id="">
          <option value="male">Male </option>
          <option value="female">Female </option>
          <option value="other">Other </option>
        </select>
        <button>Next</button>
      </form>
    </div>
  );
  var three = (
    <div>
      <img src={pinfo} alt="" />
      <h6>Personal data</h6>
      <p>We need your personal data to continue with the registration.</p>
      <form action="">
        <input type="phone" name="" id="" placeholder="Phone Number" />
        <input type="text" name="" id="" placeholder="Last Name" />
        <input type="date" name="" id="" />
        <button>Next</button>
      </form>
    </div>
  );
  var four = (
    <div>
      <img src={emailicon} alt="" />
      <h6>Check your mail!</h6>
      <p>
        We send you an email to validate and continue with the registration.
      </p>
      <form action="">
        <input type="email" name="" id="" placeholder="User Email" />
        <p>Edit Email</p>
        <button>Resend e-mail</button>
      </form>
    </div>
  );
  var five = (
    <div>
      <img src={lock} alt="" />
      <h6>Create your password</h6>
      <p>Last step! Create your password to complete registration</p>
      <form action="">
        <input type="email" name="" id="" placeholder="User Email" />
        <input type="password" name="" id="" placeholder="Password" />
        <div>
          <p>1 Number</p>
          <p>1 Capital letter</p>
          <p>8 Characters</p>
        </div>
        <button>Register</button>
      </form>
    </div>
  );

  return <>{five}</>;
}

export default Signup;
