import React from "react";
import back from "../../../assets/images/arrow-back.svg";
import "./Cashhandle.module.css";

function Cashhandle() {
  return (
    <div className="Cashhandle">
      <div>
        <img src={back} alt="" />
        <p>Enter the amount you wish to deposit</p>
      </div>
      <div>
        <h3></h3>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
}

export default Cashhandle;
