import React from "react";
import style from "./Maindash.module.css";
import Cslider from "../shared/cardslider/Cslider";
import Update from "../shared/update/Update";

function Minicomp() {
  return (
    <div className={style.Minicomp}>
      <Cslider />
      <Update />
    </div>
  );
}

export default Minicomp;
