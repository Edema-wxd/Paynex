import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Gcontext from "../../context/Gcontext";

function Dashnav() {
  const { logout } = useContext(Gcontext);
  const navigate = useNavigate();
  const exitleft = () => {
    logout();
    navigate("/");
  };
  return (
    <div>
      DashNAv <button onClick={exitleft}>logout</button>
    </div>
  );
}

export default Dashnav;
