import React from "react";
import style from "./Maindash.module.css";
import Minicomp from "./Minicomp";
import Money from "../shared/money/Money";
function Maindash() {
  return (
    <div className={style.Maindash}>
      <Money />
      <Minicomp />
    </div>
  );
}

export default Maindash;
