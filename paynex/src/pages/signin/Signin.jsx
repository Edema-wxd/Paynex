import React, { useContext } from "react";
import Gcontext from "../../context/Gcontext";

function Signin() {
  const { login, logout } = useContext(Gcontext);
  return (
    <div>
      <button onClick={login}>Sign in</button>
      <button onClick={logout}>Log out</button>
    </div>
  );
}

export default Signin;
