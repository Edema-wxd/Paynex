import React from "react";
import style from "./Update.module.css";
import update3 from "../../../assets/images/update3.svg";

function Update() {
  return (
    <div className={style.Update}>
      <div>
        <h5>Update</h5>
        <p>Now you can modify your data from your profile!</p>
      </div>
      <img src={update3} alt="" />
    </div>
  );
}

export default Update;
