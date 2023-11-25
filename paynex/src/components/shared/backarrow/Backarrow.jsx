import React from "react";
import back from "../../../assets/images/back.png";
import { useNavigate } from "react-router-dom";

function Backarrow() {
  const navigate = useNavigate();
  //add modification for when used in order page
  var bbtn = (
    <img
      src={back}
      alt=""
      style={{ width: "2.4375rem", height: "2.4375rem" }}
      onClick={() => navigate(-1)}
    />
  );

  return bbtn;
}

export default Backarrow;
